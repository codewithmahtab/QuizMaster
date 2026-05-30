const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const avatars = [
    { name: "Pixel Hero", description: "Premium retro pixel art avatar", type: "avatar", cost: 500, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Knight" },
    { name: "Wild Mage", description: "Premium RPG adventurer avatar", type: "avatar", cost: 500, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mage" },
    { name: "Cyberpunk", description: "Premium cyberpunk lorelei avatar", type: "avatar", cost: 750, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=Cyber" },
    { name: "Pro Gamer", description: "Clean Micah vector avatar", type: "avatar", cost: 750, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/micah/svg?seed=Pro" },
    { name: "Ninja Mode", description: "Classic ninja avatar", type: "avatar", cost: 500, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja" },
    { name: "Ghost Face", description: "Spooky fun emoji avatar", type: "avatar", cost: 1000, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Ghost" },
  ];

  for (const item of avatars) {
    // Check if it exists
    const existing = await prisma.shopItem.findFirst({ where: { imageUrl: item.imageUrl } });
    if (!existing) {
      await prisma.shopItem.create({ data: item });
      console.log(`Created ${item.name}`);
    } else {
      console.log(`Already exists ${item.name}`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
