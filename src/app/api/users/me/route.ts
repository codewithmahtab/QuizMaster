import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { levelFromXP } from "@/lib/levelSystem";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { coins: true, xp: true, level: true },
  });

  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Automatically heal level desyncs based on actual XP
  const correctLevel = levelFromXP(user.xp);
  if (user.level !== correctLevel) {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { level: correctLevel },
    });
    user.level = correctLevel;
  }

  return NextResponse.json(user);
}
