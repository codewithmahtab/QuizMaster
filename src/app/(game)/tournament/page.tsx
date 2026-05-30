import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import TournamentClient from "./_components/TournamentClient";

export default async function TournamentPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

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

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { coins: true },
  });

  if (!user) redirect("/login");

  // Check which tournaments the current user has joined
  const joinedTournaments = await prisma.tournamentEntry.findMany({
    where: { userId },
    select: { tournamentId: true },
  });
  const joinedIds = new Set(joinedTournaments.map((t) => t.tournamentId));

  const decorated = tournaments.map((t) => ({
    id: t.id,
    name: t.name,
    description: t.description,
    entryFee: t.entryFee,
    prizePool: t.prizePool,
    maxPlayers: t.maxPlayers,
    status: t.status,
    winnerId: t.winnerId,
    playerCount: t.entries.length,
    hasJoined: joinedIds.has(t.id),
  }));

  return (
    <TournamentClient
      initialTournaments={decorated}
      userCoins={user.coins}
    />
  );
}
