import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// POST — Purchase an item from the shop
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  const { itemId } = await req.json();

  if (!itemId) return NextResponse.json({ error: "Item ID required" }, { status: 400 });

  // 1. Fetch item details
  const item = await prisma.shopItem.findUnique({ where: { id: itemId } });
  if (!item || !item.isActive) {
    return NextResponse.json({ error: "Item not found or unavailable" }, { status: 404 });
  }

  // 2. Check if user already owns this item
  const existing = await prisma.purchase.findFirst({
    where: { userId, itemId },
  });
  if (existing) {
    return NextResponse.json({ error: "Item already purchased" }, { status: 400 });
  }

  // 3. Fetch user's current coins
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { coins: true },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  if (user.coins < item.cost) {
    return NextResponse.json({ error: "Insufficient coins" }, { status: 400 });
  }

  // 4. Perform atomic purchase transaction (deduct coins and create purchase record)
  const [purchase, updatedUser] = await prisma.$transaction([
    prisma.purchase.create({
      data: {
        userId,
        itemId,
      },
    }),
    prisma.user.update({
      where: { id: userId },
      data: {
        coins: { decrement: item.cost },
      },
    }),
  ]);

  return NextResponse.json({
    success: true,
    message: `Purchased ${item.name}!`,
    coins: updatedUser.coins,
  });
}
