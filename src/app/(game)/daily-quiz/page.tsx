import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { todayUTC } from "@/lib/utils";
import DailyQuizClient from "@/app/(game)/daily-quiz/_components/DailyQuizClient";
import AlreadyCompleted from "@/app/(game)/daily-quiz/_components/AlreadyCompleted";

export default async function DailyQuizPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const userId = session.user.id;
  const today = todayUTC();

  // Check completion
  const completion = await prisma.dailyQuizCompletion.findUnique({
    where: { userId_date: { userId, date: today } },
  });

  if (completion) {
    return <AlreadyCompleted score={completion.score} coinsEarned={completion.coinsEarned} xpEarned={completion.xpEarned} />;
  }

  // Fetch user info
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { username: true, coins: true },
  });

  if (!user) redirect("/login");

  return <DailyQuizClient username={user.username} />;
}
