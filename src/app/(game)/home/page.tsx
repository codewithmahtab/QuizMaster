import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getRankFromPoints } from "@/lib/rankSystem";
import { xpProgressInLevel } from "@/lib/levelSystem";
import { todayUTC, winRate } from "@/lib/utils";
import HomeClient from "./_components/HomeClient";

export default async function HomePage() {
  const session = await auth();

  // Guest support — load user data only if logged in
  if (!session?.user?.id) {
    return (
      <Suspense fallback={null}>
        <HomeClient user={null} dailyCompleted={false} dailyScore={null} />
      </Suspense>
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      username: true,
      avatarUrl: true,
      coins: true,
      xp: true,
      level: true,
      rankedPoints: true,
      totalWins: true,
      totalMatches: true,
      loginStreak: true,
    },
  });

  if (!user) {
    return (
      <Suspense fallback={null}>
        <HomeClient user={null} dailyCompleted={false} dailyScore={null} />
      </Suspense>
    );
  }

  // Check if daily quiz completed today
  const today = todayUTC();
  const dailyCompletion = await prisma.dailyQuizCompletion.findUnique({
    where: { userId_date: { userId: user.id, date: today } },
    select: { score: true },
  });

  const rank = getRankFromPoints(user.rankedPoints);
  const xpProgress = xpProgressInLevel(user.xp);

  return (
    <Suspense fallback={null}>
      <HomeClient
        user={{
          ...user,
          winRate: winRate(user.totalWins, user.totalMatches),
          rank,
          xpProgress,
        }}
        dailyCompleted={!!dailyCompletion}
        dailyScore={dailyCompletion?.score ?? null}
      />
    </Suspense>
  );
}
