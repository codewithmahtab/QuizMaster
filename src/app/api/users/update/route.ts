import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  const { username, avatarUrl, bio } = await req.json();

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updateData: any = {};

  // ── 1. USERNAME UPDATE (COIN COST) ──
  if (username && username !== user.username) {
    const cleanUsername = username.trim();
    
    // Validation
    if (cleanUsername.length < 3 || cleanUsername.length > 15) {
      return NextResponse.json({ error: "Username must be 3-15 characters long" }, { status: 400 });
    }
    if (!/^[a-zA-Z0-9_]+$/.test(cleanUsername)) {
      return NextResponse.json({ error: "Username can only contain alphanumeric characters & underscores" }, { status: 400 });
    }

    // Check availability
    const exists = await prisma.user.findUnique({
      where: { username: cleanUsername },
    });
    if (exists) {
      return NextResponse.json({ error: "Username is already taken" }, { status: 400 });
    }

    // Check name change cost (200 coins fee)
    const nameChangeFee = 200;
    if (user.coins < nameChangeFee) {
      return NextResponse.json({ error: `Changing username costs ${nameChangeFee} coins. Earn more coins first!` }, { status: 400 });
    }

    updateData.username = cleanUsername;
    updateData.coins = { decrement: nameChangeFee };
  }

  // ── 2. AVATAR SELECTION ──
  if (avatarUrl) {
    updateData.avatarUrl = avatarUrl;
  }

  // ── 3. BIO UPDATE ──
  if (typeof bio === "string") {
    updateData.bio = bio.substring(0, 100); // Max 100 characters
  }

  // If no updates requested, return early
  if (Object.keys(updateData).length === 0) {
    return NextResponse.json({ success: true, message: "No changes detected" });
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: updateData,
  });

  return NextResponse.json({
    success: true,
    message: "Profile updated successfully!",
    user: {
      username: updatedUser.username,
      avatarUrl: updatedUser.avatarUrl,
      coins: updatedUser.coins,
      bio: updatedUser.bio,
    },
  });
}
