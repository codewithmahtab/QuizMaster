import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// POST — Equip or unequip an avatar frame
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  const { itemId, action } = await req.json(); // action can be "equip" or "unequip"

  if (action === "unequip") {
    if (!itemId) return NextResponse.json({ error: "Item ID required" }, { status: 400 });
    const item = await prisma.shopItem.findUnique({ where: { id: itemId } });
    
    let dataToUpdate: any = { avatarFrameId: null };
    if (item?.type === "avatar") {
      const dbUser = await prisma.user.findUnique({ where: { id: userId }, select: { username: true } });
      const username = dbUser?.username || "player";
      dataToUpdate = { avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${username}` };
    }

    await prisma.user.update({
      where: { id: userId },
      data: dataToUpdate,
      select: { avatarFrameId: true },
    });
    return NextResponse.json({ success: true, equippedFrameId: null });
  }

  if (!itemId) return NextResponse.json({ error: "Item ID required" }, { status: 400 });

  // 1. Verify user purchased/owns this item
  const owned = await prisma.purchase.findFirst({
    where: { userId, itemId },
  });
  if (!owned) {
    return NextResponse.json({ error: "Item not owned" }, { status: 400 });
  }

  // 2. Fetch the item to ensure it is valid
  const item = await prisma.shopItem.findUnique({ where: { id: itemId } });
  if (!item || (item.type !== "frame" && item.type !== "avatar")) {
    return NextResponse.json({ error: "Invalid item or not equippable" }, { status: 400 });
  }

  // 3. Equip the item
  let dataToUpdate = {};
  if (item.type === "frame") {
    dataToUpdate = { avatarFrameId: itemId };
  } else if (item.type === "avatar") {
    dataToUpdate = { avatarUrl: item.imageUrl };
  }

  const updated = await prisma.user.update({
    where: { id: userId },
    data: dataToUpdate,
    select: { avatarFrameId: true, avatarUrl: true },
  });

  return NextResponse.json({
    success: true,
    message: `Equipped ${item.name}!`,
    equippedFrameId: updated.avatarFrameId,
    avatarUrl: updated.avatarUrl,
  });
}
