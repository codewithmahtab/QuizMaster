import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();

async function main() {
  const matches = await p.match.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
    include: {
      player1: { select: { username: true } },
      player2: { select: { username: true } },
    }
  });
  console.log("MATCHES:", JSON.stringify(matches, null, 2));
  await p.$disconnect();
}
main();
