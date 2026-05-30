import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import BattleArena from "./_components/BattleArena";

export default async function MatchPage({ params }: { params: Promise<{ matchId: string }> }) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { matchId } = await params;

  return <BattleArena matchId={matchId} currentUserId={session.user.id} />;
}
