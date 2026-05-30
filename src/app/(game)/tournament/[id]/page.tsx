import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import TournamentBracketClient from "./_components/TournamentBracketClient";

export default async function TournamentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { id } = await params;
  const userId = session.user.id;

  const tournament = await prisma.tournament.findUnique({
    where: { id },
  });

  if (!tournament) redirect("/tournament");

  // Format tournament bracket data properly
  const decorated = {
    id: tournament.id,
    name: tournament.name,
    description: tournament.description,
    prizePool: tournament.prizePool,
    status: tournament.status,
    winnerId: tournament.winnerId,
    bracket: (tournament.bracket as any) || null,
  };

  return (
    <TournamentBracketClient
      initialTournament={decorated}
      userId={userId}
    />
  );
}
