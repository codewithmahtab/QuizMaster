const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("🗑️  Deleting all data...");

  // Delete in dependency order (children before parents)
  const r1 = await prisma.purchase.deleteMany({});
  console.log(`  Deleted ${r1.count} purchases`);

  const r2 = await prisma.matchAnswer.deleteMany({});
  console.log(`  Deleted ${r2.count} matchAnswers`);

  const r3 = await prisma.match.deleteMany({});
  console.log(`  Deleted ${r3.count} matches`);

  const r4 = await prisma.shopItem.deleteMany({});
  console.log(`  Deleted ${r4.count} shopItems`);

  const r5 = await prisma.notification.deleteMany({});
  console.log(`  Deleted ${r5.count} notifications`);

  const r6 = await prisma.generalProgress.deleteMany({});
  console.log(`  Deleted ${r6.count} generalProgress records`);

  const r7 = await prisma.dailyQuizAttempt.deleteMany({});
  console.log(`  Deleted ${r7.count} dailyQuizAttempts`);

  const r8 = await prisma.user.deleteMany({});
  console.log(`  Deleted ${r8.count} users`);

  console.log("\n✅ Database completely reset!");
}

main().catch((e) => {
  console.error("Error:", e);
  process.exit(1);
}).finally(() => prisma.$disconnect());
