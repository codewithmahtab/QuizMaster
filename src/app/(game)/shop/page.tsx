import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import ShopClient from "./_components/ShopClient";

export default async function ShopPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

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
    // 3. Fetch user's coins, username, and equipped info
    prisma.user.findUnique({
      where: { id: userId },
      select: { coins: true, username: true, avatarFrameId: true, avatarUrl: true },
    }),
  ]);

  if (!user) redirect("/login");

  const purchasedIds = new Set(userPurchases.map((p) => p.itemId));

  const itemsWithStatus = items.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    type: item.type,
    cost: item.cost,
    rarity: item.rarity,
    imageUrl: item.imageUrl || "",
    isPurchased: purchasedIds.has(item.id),
    isEquipped: item.type === "avatar" ? user.avatarUrl === item.imageUrl : user.avatarFrameId === item.id,
  }));

  return (
    <ShopClient
      initialItems={itemsWithStatus}
      initialCoins={user.coins}
      username={user.username}
    />
  );
}
