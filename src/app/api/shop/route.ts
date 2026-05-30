import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET — Fetch all active shop items + user's purchases & equipped items
export async function GET(_req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;

  const [items, userPurchases, user] = await Promise.all([
    // 1. Fetch active shop items
    prisma.shopItem.findMany({
      where: { isActive: true },
      orderBy: { cost: "asc" },
    }),
    // 2. Fetch user's purchased item IDs
    prisma.purchase.findMany({
      where: { userId },
      select: { itemId: true },
    }),
    // 3. Fetch user's coins and equipped frame
    prisma.user.findUnique({
      where: { id: userId },
      select: { coins: true, avatarFrameId: true, avatarUrl: true },
    }),
  ]);

  const purchasedIds = new Set(userPurchases.map((p) => p.itemId));

  const itemsWithStatus = items.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    type: item.type,
    cost: item.cost,
    rarity: item.rarity,
    imageUrl: item.imageUrl,
    isPurchased: purchasedIds.has(item.id),
    isEquipped: item.type === "avatar" ? user?.avatarUrl === item.imageUrl : user?.avatarFrameId === item.id,
  }));

  return NextResponse.json({
    items: itemsWithStatus,
    coins: user?.coins || 0,
    equippedFrameId: user?.avatarFrameId || null,
  });
}
