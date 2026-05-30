const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Deactivate all current shop items
  await prisma.shopItem.updateMany({
    data: { isActive: false },
  });
  console.log("Deactivated existing shop items.");

  const avatars = [
    // Micah (Stylish humans)
    { name: "The Protagonist", description: "Main character energy", type: "avatar", cost: 500, rarity: "rare", imageUrl: "https://api.dicebear.com/7.x/micah/svg?seed=Felix&backgroundColor=transparent" },
    { name: "Tech Lead", description: "Writes code, drinks coffee", type: "avatar", cost: 800, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/micah/svg?seed=Jude&backgroundColor=transparent" },
    { name: "Urban Ninja", description: "Streetwear fanatic", type: "avatar", cost: 1000, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/micah/svg?seed=Sam&backgroundColor=transparent" },
    
    // Avataaars (Classic humans)
    { name: "Secret Agent", description: "Shaken, not stirred", type: "avatar", cost: 600, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Agent&backgroundColor=transparent" },
    { name: "Business Pro", description: "Closing deals", type: "avatar", cost: 400, rarity: "common", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CEO&backgroundColor=transparent" },
    { name: "Hipster Gamer", description: "Plays indie games", type: "avatar", cost: 500, rarity: "rare", imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hipster&backgroundColor=transparent" },
    
    // Adventurer Neutral (Clean RPG humans)
    { name: "Fighter", description: "Ready for battle", type: "avatar", cost: 700, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Fighter&backgroundColor=transparent" },
    { name: "Ranger", description: "Eagle eyed", type: "avatar", cost: 700, rarity: "epic", imageUrl: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Ranger&backgroundColor=transparent" },
    
    // Notionists (Drawn style humans)
    { name: "The Thinker", description: "Deep in thought", type: "avatar", cost: 400, rarity: "common", imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Thinker&backgroundColor=transparent" },
    { name: "Creative Soul", description: "Artistic genius", type: "avatar", cost: 900, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Artist&backgroundColor=transparent" },
    
    // Miniavs (Cute simple humans)
    { name: "Chibi Hero", description: "Small but mighty", type: "avatar", cost: 300, rarity: "common", imageUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=Hero&backgroundColor=transparent" },
    { name: "Chibi Boss", description: "Runs the show", type: "avatar", cost: 850, rarity: "legendary", imageUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=Boss&backgroundColor=transparent" },
  ];

  for (const item of avatars) {
    const existing = await prisma.shopItem.findFirst({ where: { imageUrl: item.imageUrl } });
    if (!existing) {
      await prisma.shopItem.create({ data: { ...item, isActive: true } });
      console.log(`Created ${item.name}`);
    } else {
      await prisma.shopItem.update({
        where: { id: existing.id },
        data: { isActive: true },
      });
      console.log(`Re-activated ${item.name}`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
