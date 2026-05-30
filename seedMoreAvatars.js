const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const avatars = [
    // Adventurers
    { name: "Fire Mage", description: "Master of elements", type: "avatar", cost: 500, rarity: "rare", imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Fire" },
    { name: "Ice Knight", description: "Cold as ice", type: "avatar", cost: 500, rarity: "rare", imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ice" },
    { name: "Forest Ranger", description: "Nature's friend", type: "avatar", cost: 400, rarity: "common", imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Forest" },
    { name: "Dark Rogue", description: "Shadow assassin", type: "avatar", cost: 800, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Dark" },
    
    // Bots
    { name: "Mecha Prime", description: "Ultimate bot", type: "avatar", cost: 1000, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Prime" },
    { name: "Scrap Drone", description: "Rusty but trusty", type: "avatar", cost: 300, rarity: "common", imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Scrap" },
    { name: "Neon Bot", description: "Cyberpunk ready", type: "avatar", cost: 700, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Neon" },
    { name: "Quantum AI", description: "Calculates everything", type: "avatar", cost: 900, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Quantum" },

    // Pixel Art
    { name: "8-Bit Hero", description: "Classic retro style", type: "avatar", cost: 600, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Hero" },
    { name: "Slime Blob", description: "Squishy monster", type: "avatar", cost: 300, rarity: "common", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Slime" },
    { name: "Skeleton King", description: "Spooky royalty", type: "avatar", cost: 850, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Skeleton" },
    
    // Lorelei
    { name: "Star Child", description: "Born from cosmos", type: "avatar", cost: 700, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=Star" },
    { name: "Void Walker", description: "Beyond the stars", type: "avatar", cost: 900, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=Void" },
    { name: "Ocean Spirit", description: "Deep blue sea", type: "avatar", cost: 500, rarity: "rare", imageUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=Ocean" },
    
    // Avataaars
    { name: "Agent X", description: "Secret spy", type: "avatar", cost: 650, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Agent" },
    { name: "Mad Scientist", description: "Crazy genius", type: "avatar", cost: 600, rarity: "rare", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Science" },
    
    // Micah
    { name: "Cool Cat", description: "Too cool for school", type: "avatar", cost: 450, rarity: "rare", imageUrl: "https://api.dicebear.com/7.x/micah/svg?seed=Cool" },
    { name: "Tech Guru", description: "Knows it all", type: "avatar", cost: 750, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/micah/svg?seed=Guru" },
    
    // Fun Emoji
    { name: "Angry Devil", description: "Furious and red", type: "avatar", cost: 400, rarity: "common", imageUrl: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Devil" },
    { name: "Alien Life", description: "We are not alone", type: "avatar", cost: 800, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Alien" },
    
    // Shapes
    { name: "Geometry Dash", description: "Simple but clean", type: "avatar", cost: 200, rarity: "common", imageUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=Dash" },
  ];

  for (const item of avatars) {
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
