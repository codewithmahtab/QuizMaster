const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.shopItem.updateMany({
    where: { type: "avatar" },
    data: { isActive: true },
  });
  console.log(`Re-activated ${result.count} avatars in the shop!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
