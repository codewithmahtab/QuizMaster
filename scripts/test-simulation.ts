import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();

async function main() {
  // Test B: equals: null
  const testB = await p.match.findMany({
    where: {
      status: "abandoned",
      player2Id: { equals: null }
    }
  });
  console.log("equals: null count:", testB.length);

  // Test C: isSet: false
  const testC = await p.match.findMany({
    where: {
      status: "abandoned",
      player2Id: { isSet: false }
    }
  });
  console.log("isSet: false count:", testC.length);

  // Test D: unset or null
  const testD = await p.match.findMany({
    where: {
      status: "abandoned",
      OR: [
        { player2Id: { equals: null } },
        { player2Id: { isSet: false } }
      ]
    }
  });
  console.log("OR [equals: null, isSet: false] count:", testD.length);

  await p.$disconnect();
}
main();
