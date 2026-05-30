import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const SHOP_ITEMS = [
  {
    name: "Neon Violet",
    description: "Vibrant neon purple glow for your avatar",
    type: "frame",
    cost: 150,
    rarity: "common",
    imageUrl: "#A855F7", // We can store the color hex/CSS in imageUrl
  },
  {
    name: "Aqua Cyber",
    description: "Sleek cybernetic glowing cyan border",
    type: "frame",
    cost: 250,
    rarity: "common",
    imageUrl: "#06B6D4",
  },
  {
    name: "Golden Crown",
    description: "Elite golden border with royal championship energy",
    type: "frame",
    cost: 500,
    rarity: "rare",
    imageUrl: "#F59E0B",
  },
  {
    name: "Emerald Glitch",
    description: "Cyberpunk glowing green matrix style",
    type: "frame",
    cost: 650,
    rarity: "rare",
    imageUrl: "#10B981",
  },
  {
    name: "Rage Red",
    description: "Fiery crimson border for true warriors",
    type: "frame",
    cost: 1000,
    rarity: "epic",
    imageUrl: "#EF4444",
  },
  {
    name: "Cosmic Void",
    description: "Ultimate legendary color-shifting cosmic border",
    type: "frame",
    cost: 2000,
    rarity: "legendary",
    imageUrl: "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6)",
  },
];

async function main() {
  console.log("🌱 Seeding Shop Items...");
  
  // Clear existing items
  await prisma.shopItem.deleteMany({});
  
  // Insert new items
  for (const item of SHOP_ITEMS) {
    const created = await prisma.shopItem.create({
      data: {
        name: item.name,
        description: item.description,
        type: item.type,
        cost: item.cost,
        rarity: item.rarity,
        imageUrl: item.imageUrl,
        isActive: true,
      },
    });
    console.log(`✅ Seeded ${created.rarity.toUpperCase()} item: ${created.name}`);
  }
  
  console.log("🎉 Shop seeding completed successfully!");
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
