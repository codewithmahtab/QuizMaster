import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getRankFromPoints, getRankProgress, getPointsToNextRank } from "@/lib/rankSystem";
import { xpProgressInLevel } from "@/lib/levelSystem";
import { winRate, getAvatarUrl } from "@/lib/utils";
import ProfileClient from "./_components/ProfileClient";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

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
      longestStreak: true,
      loginStreak: true,
      avatarFrameId: true,
      createdAt: true,
    },
  });

  if (!user) redirect("/login");

  let equippedFrame = null;
  if (user.avatarFrameId) {
    equippedFrame = await prisma.shopItem.findUnique({
      where: { id: user.avatarFrameId },
      select: { id: true, name: true, imageUrl: true },
    });
  }

  // Recent matches (last 10)
  const recentMatches = await prisma.match.findMany({
    where: {
      OR: [{ player1Id: user.id }, { player2Id: user.id }],
      status: "completed",
    },
    orderBy: { completedAt: "desc" },
    take: 10,
    select: {
      id: true,
      type: true,
      player1Id: true,
      player2Id: true,
      winnerId: true,
      player1Score: true,
      player2Score: true,
      coinStake: true,
      completedAt: true,
      player1: { select: { username: true, avatarUrl: true } },
      player2: { select: { username: true, avatarUrl: true } },
    },
  });

  const rank = getRankFromPoints(user.rankedPoints);
  const rankProgress = getRankProgress(user.rankedPoints);
  const pointsToNext = getPointsToNextRank(user.rankedPoints);
  const xpProgress = xpProgressInLevel(user.xp);
  const wr = winRate(user.totalWins, user.totalMatches);
  const avatar = user.avatarUrl || getAvatarUrl(user.username);

  return (
    <ProfileClient
      user={{
        ...user,
        avatarUrl: avatar,
        winRate: wr,
        frameId: equippedFrame?.id,
        frameUrl: equippedFrame?.imageUrl,
        frameName: equippedFrame?.name,
      }}
      rank={rank}
      rankProgress={rankProgress}
      pointsToNext={pointsToNext}
      xpProgress={xpProgress}
      recentMatches={recentMatches.map((m) => ({
        ...m,
        isWin: m.winnerId === user.id,
        isDraw: m.winnerId === null,
        opponent:
          m.player1Id === user.id
            ? m.player2
            : m.player1,
        myScore: m.player1Id === user.id ? m.player1Score : m.player2Score,
        opponentScore: m.player1Id === user.id ? m.player2Score : m.player1Score,
      }))}
    />
  );
}
