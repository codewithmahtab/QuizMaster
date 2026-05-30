import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// List of pre-defined bot avatars and names for tournament simulation
const BOTS = [
  { username: "QuizWiz_Bot", avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=QuizWiz" },
  { username: "BrainyBot", avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Brainy" },
  { username: "Einstein_Bot", avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Einstein" },
  { username: "Neo_Bot", avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Neo" },
  { username: "Ada_Lovelace", avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ada" },
  { username: "Alan_Turing", avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Alan" },
  { username: "Curie_Bot", avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Curie" },
];

// Helper to get or create bot users in the database
async function getOrCreateBots(count: number) {
  const botsList = [];
  for (let i = 0; i < count; i++) {
    const botData = BOTS[i % BOTS.length];
    const username = `${botData.username}_${Math.floor(Math.random() * 1000)}`;
    const email = `${username.toLowerCase()}@bot.com`;

    let bot = await prisma.user.findFirst({
      where: { email },
    });

    if (!bot) {
      bot = await prisma.user.create({
        data: {
          username,
          email,
          avatarUrl: botData.avatarUrl,
          level: Math.floor(Math.random() * 8) + 1,
          xp: 100,
          coins: 500,
          rankedPoints: Math.floor(Math.random() * 400) + 100,
        },
      });
    }
    botsList.push(bot);
  }
  return botsList;
}

// GET — Fetch tournaments (open, active, completed)
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;

  // Auto-seed a tournament if none are "open"
  const openTournaments = await prisma.tournament.findMany({
    where: { status: "open" },
  });

  if (openTournaments.length === 0) {
    await prisma.tournament.create({
      data: {
        name: "Neon Championship",
        description: "Compete against elite players in this high stakes fast-paced quiz showdown!",
        entryFee: 100,
        prizePool: 720, // 8 * 100 * 0.9
        maxPlayers: 8,
        status: "open",
      },
    });
  }

  const tournaments = await prisma.tournament.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      entries: {
        select: {
          id: true,
          userId: true,
          user: {
            select: { username: true, avatarUrl: true },
          },
        },
      },
    },
  });

  // Check which tournaments the current user has joined
  const joinedTournaments = await prisma.tournamentEntry.findMany({
    where: { userId },
    select: { tournamentId: true },
  });
  const joinedIds = new Set(joinedTournaments.map((t) => t.tournamentId));

  const decorated = tournaments.map((t) => ({
    ...t,
    playerCount: t.entries.length,
    hasJoined: joinedIds.has(t.id),
  }));

  return NextResponse.json({ tournaments: decorated });
}

// POST — Join an open tournament
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  const { tournamentId } = await req.json();

  if (!tournamentId) return NextResponse.json({ error: "Tournament ID required" }, { status: 400 });

  // 1. Fetch tournament
  const tournament = await prisma.tournament.findUnique({
    where: { id: tournamentId },
    include: { entries: true },
  });

  if (!tournament || tournament.status !== "open") {
    return NextResponse.json({ error: "Tournament not found or not open" }, { status: 404 });
  }

  // Check if already joined
  const exists = tournament.entries.some((e) => e.userId === userId);
  if (exists) {
    return NextResponse.json({ error: "Already joined this tournament" }, { status: 400 });
  }

  // Check coins
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.coins < tournament.entryFee) {
    return NextResponse.json({ error: "Insufficient coins to join" }, { status: 400 });
  }

  // 2. Perform Join transaction
  await prisma.$transaction([
    prisma.tournamentEntry.create({
      data: {
        tournamentId,
        userId,
      },
    }),
    prisma.user.update({
      where: { id: userId },
      data: {
        coins: { decrement: tournament.entryFee },
      },
    }),
  ]);

  // Fetch updated entry list
  const currentEntries = await prisma.tournamentEntry.findMany({
    where: { tournamentId },
    include: { user: true },
  });

  // 3. Auto-start the tournament (Fill remaining slots with bots immediately!)
  const maxPlayers = tournament.maxPlayers; // e.g. 8 players
  const slotsRemaining = maxPlayers - currentEntries.length;

  if (slotsRemaining > 0) {
    const bots = await getOrCreateBots(slotsRemaining);
    
    // Add bot entries
    const botEntriesData = bots.map((bot) => ({
      tournamentId,
      userId: bot.id,
    }));
    await prisma.tournamentEntry.createMany({ data: botEntriesData });
  }

  // Refresh entry list containing all 8 participants
  const allEntries = await prisma.tournamentEntry.findMany({
    where: { tournamentId },
    include: { user: true },
  });

  // ── GENERATE BRACKET & LAUNCH TOURNAMENT ──
  // Shuffle entries to randomize seeds
  const participants = allEntries.map((e) => ({
    id: e.user.id,
    username: e.user.username,
    avatarUrl: e.user.avatarUrl,
  }));

  // Simple round-robin matching for Round 1
  const matchesRound1 = [];
  for (let i = 0; i < participants.length; i += 2) {
    const p1 = participants[i];
    const p2 = participants[i + 1];

    matchesRound1.push({
      id: `r1_m${Math.floor(i / 2) + 1}`,
      matchId: null, // Will create actual DB match when user plays
      p1,
      p2,
      p1Score: null,
      p2Score: null,
      winnerId: null,
      status: "pending",
    });
  }

  // Generate blank matches for Round 2 (Semifinals) and Round 3 (Finals)
  const matchesRound2 = [
    { id: "r2_m1", matchId: null, p1: null, p2: null, p1Score: null, p2Score: null, winnerId: null, status: "pending" },
    { id: "r2_m2", matchId: null, p1: null, p2: null, p1Score: null, p2Score: null, winnerId: null, status: "pending" },
  ];

  const matchesRound3 = [
    { id: "r3_m1", matchId: null, p1: null, p2: null, p1Score: null, p2Score: null, winnerId: null, status: "pending" },
  ];

  const bracket = {
    rounds: [
      { roundNumber: 1, name: "Quarterfinals", matches: matchesRound1 },
      { roundNumber: 2, name: "Semifinals", matches: matchesRound2 },
      { roundNumber: 3, name: "Finals", matches: matchesRound3 },
    ],
  };

  // Update Tournament state
  await prisma.tournament.update({
    where: { id: tournamentId },
    data: {
      status: "active",
      startedAt: new Date(),
      bracket,
    },
  });

  return NextResponse.json({
    success: true,
    message: "Successfully joined and started tournament!",
  });
}
