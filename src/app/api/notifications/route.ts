import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;

  let notifications = await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  // Seed default notifications if none exist to instantly wow the user
  if (notifications.length === 0) {
    await prisma.notification.createMany({
      data: [
        {
          userId,
          title: "Welcome Loot Ready! 🎁",
          message: "Welcome to QuizMaster Pro! Open the Daily Rewards Calendar on your dashboard to claim your initial coin prize!",
          type: "rewards",
          read: false,
        },
        {
          userId,
          title: "Launch Battle Arena ⚔️",
          message: "The 1v1 Battle Arena queue is currently open! Challenge other users or train with bot matchmaking now.",
          type: "battle",
          read: false,
        },
      ],
    });

    notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  const unreadCount = notifications.filter((n) => !n.read).length;

  return NextResponse.json({
    notifications,
    unreadCount,
  });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  const { action, title, message, type } = await req.json();

  if (action === "read") {
    // Mark all notifications as read
    await prisma.notification.updateMany({
      where: { userId, read: false },
      data: { read: true },
    });

    return NextResponse.json({ success: true, message: "All notifications marked as read." });
  }

  if (action === "create") {
    if (!title || !message) {
      return NextResponse.json({ error: "Title and message are required" }, { status: 400 });
    }

    const n = await prisma.notification.create({
      data: {
        userId,
        title,
        message,
        type: type || "battle",
        read: false,
      },
    });

    return NextResponse.json({ success: true, notification: n });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
