import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Define the 7 days of rewards
export const DAILY_REWARDS_LIST = [
  { day: 1, coins: 20, xp: 50 },
  { day: 2, coins: 30, xp: 70 },
  { day: 3, coins: 45, xp: 100 },
  { day: 4, coins: 60, xp: 130 },
  { day: 5, coins: 80, xp: 160 },
  { day: 6, coins: 100, xp: 200 },
  { day: 7, coins: 200, xp: 350 },
];

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { loginStreak: true, lastLoginDate: true, coins: true },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Calculate if today's reward has already been claimed
  let claimedToday = false;
  let currentStreak = user.loginStreak;

  if (user.lastLoginDate) {
    const today = new Date();
    const lastClaim = new Date(user.lastLoginDate);

    // Reset streak if last claim was more than 48 hours ago
    const diffHours = (today.getTime() - lastClaim.getTime()) / (1000 * 60 * 60);

    if (diffHours >= 48) {
      currentStreak = 0; // reset streak if missed a day
    }

    // Check if claimed today (in local date comparison, or UTC)
    const todayStr = today.toISOString().split("T")[0];
    const lastClaimStr = lastClaim.toISOString().split("T")[0];

    if (todayStr === lastClaimStr) {
      claimedToday = true;
    }
  } else {
    // Never claimed before
    currentStreak = 0;
  }

  // Calculate day index (1-7) to display/claim
  // If today is claimed, they are on day `currentStreak` (value of 1-7).
  // If today is unclaimed, their next claim will be day `(currentStreak % 7) + 1`
  const currentDayIndex = claimedToday
    ? ((currentStreak - 1) % 7) + 1
    : (currentStreak % 7) + 1;

  return NextResponse.json({
    loginStreak: currentStreak,
    claimedToday,
    currentDayIndex,
    rewards: DAILY_REWARDS_LIST,
    userCoins: user.coins,
  });
}
