import { auth } from "@/lib/auth";
import LeaderboardClient from "./_components/LeaderboardClient";

export default async function LeaderboardPage() {
  const session = await auth();
  // Guests can view the leaderboard — currentUserId will be null for highlighting
  const currentUserId = session?.user?.id ?? null;

  return <LeaderboardClient currentUserId={currentUserId} />;
}
