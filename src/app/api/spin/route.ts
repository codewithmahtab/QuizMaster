import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export interface SpinSlice {
  id: number;
  label: string;
  coins: number;
  xp: number;
  weight: number;
}

export const SPIN_SLICES: SpinSlice[] = [
  { id: 0, label: "10 Coins 🪙", coins: 10, xp: 0, weight: 30 },
  { id: 1, label: "20 Coins 🪙", coins: 20, xp: 0, weight: 25 },
  { id: 2, label: "50 Coins Jackpot! 🏆", coins: 50, xp: 0, weight: 8 },
  { id: 3, label: "Try Again! 🍀", coins: 0, xp: 0, weight: 15 },
  { id: 4, label: "30 Coins 🪙", coins: 30, xp: 0, weight: 12 },
  { id: 5, label: "5 Coins 🪙", coins: 5, xp: 0, weight: 10 },
];

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { lastSpinDate: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const today = new Date();
    let isFreeAvailable = true;

    if (user.lastSpinDate) {
      const diffTime = Math.abs(today.getTime() - new Date(user.lastSpinDate).getTime());
      const diffHours = diffTime / (1000 * 60 * 60);
      isFreeAvailable = diffHours >= 24;
    }

    return NextResponse.json({
      success: true,
      lastSpinDate: user.lastSpinDate,
      isFreeAvailable,
    });
  } catch (error) {
    console.error("Error getting spin status:", error);
    return NextResponse.json({ error: "Failed to get spin status" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const { type } = await req.json(); // "free" | "coins" | "ad"

    if (!type || !["free", "coins", "ad"].includes(type)) {
      return NextResponse.json({ error: "Invalid spin type" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { coins: true, lastSpinDate: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const today = new Date();

    // Check Eligibility
    if (type === "free") {
      if (user.lastSpinDate) {
        const diffTime = Math.abs(today.getTime() - new Date(user.lastSpinDate).getTime());
        const diffHours = diffTime / (1000 * 60 * 60);
        if (diffHours < 24) {
          return NextResponse.json({ error: "Daily free spin already claimed today" }, { status: 400 });
        }
      }
    } else if (type === "coins") {
      if (user.coins < 50) {
        return NextResponse.json({ error: "Insufficient coins! Spin costs 50 coins." }, { status: 400 });
      }
    }

    // Secure probability selection based on weights
    const totalWeight = SPIN_SLICES.reduce((sum, slice) => sum + slice.weight, 0);
    let randomNum = Math.random() * totalWeight;
    let selectedSlice = SPIN_SLICES[0];

    for (const slice of SPIN_SLICES) {
      if (randomNum < slice.weight) {
        selectedSlice = slice;
        break;
      }
      randomNum -= slice.weight;
    }

    // Calculate DB balance mutations
    let coinMutation = selectedSlice.coins;
    let cost = 0;

    if (type === "coins") {
      cost = 50;
      coinMutation -= cost;
    }

    // Update User atomic state
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        coins: { increment: coinMutation },
        ...(type === "free" ? { lastSpinDate: today } : {}),
      },
    });

    // Log Notification if they won coins
    if (selectedSlice.coins > 0) {
      await prisma.notification.create({
        data: {
          userId,
          title: "Wheel Spin Reward! 🎡",
          message: `You spun the wheel using ${type === "free" ? "your Free Daily Spin" : type === "ad" ? "a video ad" : "50 coins"} and won +${selectedSlice.coins} coins! Current balance: ${updatedUser.coins} coins.`,
          type: "rewards",
        },
      });
    }

    return NextResponse.json({
      success: true,
      sliceId: selectedSlice.id,
      label: selectedSlice.label,
      coinsGained: selectedSlice.coins,
      totalCoins: updatedUser.coins,
      isFreeAvailable: false,
    });
  } catch (error) {
    console.error("Error processing spin:", error);
    return NextResponse.json({ error: "Failed to process spin" }, { status: 500 });
  }
}
