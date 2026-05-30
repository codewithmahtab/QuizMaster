import { Metadata } from "next";
import SpinClient from "./_components/SpinClient";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "🎡 Spin Wheel & Earn Coins | QuizMaster Pro",
  description: "Test your luck in the QuizMaster Pro daily spin wheel. Win coins, jackpots, and bonuses daily!",
};

export default async function SpinPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { coins: true, lastSpinDate: true },
  });

  if (!user) redirect("/sign-in");

  // Determine if free spin is available today
  let isFreeAvailable = true;
  if (user.lastSpinDate) {
    const today = new Date().toISOString().split("T")[0];
    const lastSpin = new Date(user.lastSpinDate).toISOString().split("T")[0];
    if (today === lastSpin) {
      isFreeAvailable = false;
    }
  }

  return <SpinClient initialCoins={user.coins} initialFreeAvailable={isFreeAvailable} />;
}
