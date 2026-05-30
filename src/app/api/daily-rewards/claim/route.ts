import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DAILY_REWARDS_LIST } from "../route";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { loginStreak: true, lastLoginDate: true, coins: true, xp: true },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const today = new Date();
  let claimedToday = false;
  let nextStreak = user.loginStreak;

  if (user.lastLoginDate) {
    const lastClaim = new Date(user.lastLoginDate);
    const todayStr = today.toISOString().split("T")[0];
    const lastClaimStr = lastClaim.toISOString().split("T")[0];

    if (todayStr === lastClaimStr) {
      claimedToday = true;
    }

    const diffHours = (today.getTime() - lastClaim.getTime()) / (1000 * 60 * 60);
    if (diffHours >= 48) {
      // Missed a day -> reset streak to 0
      nextStreak = 0;
    }
  } else {
    // Brand new user streak
    nextStreak = 0;
  }

  if (claimedToday) {
    return NextResponse.json({ error: "Already claimed today's reward" }, { status: 400 });
  }

  // Increment streak
  nextStreak = nextStreak + 1;
  
  // Calculate reward index (1-7)
  const rewardDay = ((nextStreak - 1) % 7) + 1;
  const reward = DAILY_REWARDS_LIST.find((r) => r.day === rewardDay) || DAILY_REWARDS_LIST[0];

  // Update user database atomically
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      coins: { increment: reward.coins },
      xp: { increment: reward.xp },
      loginStreak: nextStreak,
      lastLoginDate: today,
    },
  });

  // Create in-app notification
  await prisma.notification.create({
    data: {
      userId,
      title: `Day ${rewardDay} Loot Claimed! 🎁`,
      message: `You successfully claimed your Day ${rewardDay} check-in bonus! Earned +${reward.coins} coins and +${reward.xp} XP. Current streak: ${nextStreak} days!`,
      type: "rewards",
    },
  });

  return NextResponse.json({
    success: true,
    coinsAwarded: reward.coins,
    xpAwarded: reward.xp,
    newStreak: nextStreak,
    totalCoins: updatedUser.coins,
  });
}
