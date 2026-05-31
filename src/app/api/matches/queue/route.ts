import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { shuffle } from "@/lib/utils";

// ── Pick 10 random questions for a match ─────────────────────────
async function pickQuestions(): Promise<string[]> {
  const all = await prisma.question.findMany({
    where: { isActive: true },
    select: { id: true },
  });
  if (all.length < 10) return all.map((q) => q.id);
  return shuffle(all).slice(0, 10).map((q) => q.id);
}

// ── Find the oldest open lobby (not ours) ────────────────────────
async function findOpenLobby(userId: string, type: string, coinStake: number) {
  return prisma.match.findFirst({
    where: {
      type,
      status: "pending",
      player2Id: { isSet: false },
      player1Id: { not: userId },
      coinStake,
      createdAt: { gte: new Date(Date.now() - 30_000) },
    },
    orderBy: { createdAt: "asc" },
  });
}

// ─────────────────────────────────────────────────────────────────
// POST — Join queue or create pending lobby
// ─────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  const body = await req.json();
  const type: string = body.type || "casual";
  const coinStake: number = Number(body.coinStake) || 0;

  // Validate coins
  if (coinStake > 0) {
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { coins: true } });
    if (!user || user.coins < coinStake)
      return NextResponse.json({ error: "Insufficient coins" }, { status: 400 });
  }

  // Clean up any stale pending matches in the background to avoid blocking critical matchmaking path
  prisma.match.updateMany({
    where: {
      player1Id: userId,
      status: "pending",
      createdAt: { lt: new Date(Date.now() - 30_000) }, // older than 30s
    },
    data: { status: "abandoned" },
  }).catch((err) => console.error("Background matchmaking cleanup error:", err));

  // If user already has an ACTIVE match (actually in progress), return it
  const activeMatch = await prisma.match.findFirst({
    where: {
      OR: [{ player1Id: userId }, { player2Id: userId }],
      status: "active",
    },
  });
  if (activeMatch) {
    return NextResponse.json({ matchId: activeMatch.id, joined: true });
  }

  // Phase 1 — instant join if a lobby already exists (questions already pre-selected by Player 1)
  const openMatch = await findOpenLobby(userId, type, coinStake);
  if (openMatch) {
    const match = await prisma.match.update({
      where: { id: openMatch.id },
      data: { player2Id: userId, status: "active", startedAt: new Date() },
    });
    return NextResponse.json({ matchId: match.id, joined: true });
  }

  // Phase 2 — create our own pending lobby with pre-selected questions (speeds up Player 2 join!)
  const selected = await pickQuestions();
  const newMatch = await prisma.match.create({
    data: { type, status: "pending", player1Id: userId, coinStake, questionIds: selected },
  });

  // Phase 3 — race-condition retry (another user may have just created a lobby)
  const raceMatch = await findOpenLobby(userId, type, coinStake);
  if (raceMatch) {
    const [joined] = await prisma.$transaction([
      prisma.match.update({
        where: { id: raceMatch.id },
        data: { player2Id: userId, status: "active", startedAt: new Date() },
      }),
      prisma.match.update({ where: { id: newMatch.id }, data: { status: "abandoned" } }),
    ]);
    return NextResponse.json({ matchId: joined.id, joined: true });
  }

  return NextResponse.json({ matchId: newMatch.id, joined: false });
}

// ─────────────────────────────────────────────────────────────────
// GET — Poll match status (AND actively matchmake while pending)
// ─────────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  const matchId = req.nextUrl.searchParams.get("matchId");
  if (!matchId)
    return NextResponse.json({ error: "matchId required" }, { status: 400 });

  const match = await prisma.match.findUnique({ where: { id: matchId } });
  if (!match) return NextResponse.json({ error: "Match not found" }, { status: 404 });

  // Already resolved
  if (match.status === "active")
    return NextResponse.json({ status: "active", matchId });
  if (match.status !== "pending")
    return NextResponse.json({ status: match.status, matchId });

  // 30s timeout
  if (Date.now() - match.createdAt.getTime() > 30_000) {
    await prisma.match.update({ where: { id: matchId }, data: { status: "abandoned" } });
    return NextResponse.json({ status: "timeout" });
  }

  // ── KEY FIX: Actively matchmake on every poll ─────────────────
  // Handles the race condition where both users created their own lobby.
  // On each poll we look for another pending lobby to join.
  const otherMatch = await prisma.match.findFirst({
    where: {
      type: match.type,
      status: "pending",
      player2Id: { isSet: false },
      player1Id: { not: userId }, // not ours
      id: { not: matchId },       // definitely a different match
      coinStake: match.coinStake,
      createdAt: { gte: new Date(Date.now() - 30_000) },
    },
    orderBy: { createdAt: "asc" }, // oldest lobby first (fairness)
  });

  if (otherMatch) {
    // We become player2 of the other lobby; abandon our own
    const [activated] = await prisma.$transaction([
      prisma.match.update({
        where: { id: otherMatch.id },
        data: { player2Id: userId, status: "active", startedAt: new Date() },
      }),
      prisma.match.update({ where: { id: matchId }, data: { status: "abandoned" } }),
    ]);
    // Send the OTHER match's ID — client navigates there
    return NextResponse.json({ status: "active", matchId: otherMatch.id });
  }

  return NextResponse.json({ status: "pending", matchId });
}

// ─────────────────────────────────────────────────────────────────
// DELETE — Cancel a pending lobby ("Cancel" button)
// ─────────────────────────────────────────────────────────────────
export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const matchId = req.nextUrl.searchParams.get("matchId");
  if (!matchId) return NextResponse.json({ ok: true });

  await prisma.match.updateMany({
    where: { id: matchId, player1Id: session.user.id, status: "pending" },
    data: { status: "abandoned" },
  });

  return NextResponse.json({ ok: true });
}
