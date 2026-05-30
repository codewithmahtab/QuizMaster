import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
async function main() {
  const r = await p.match.updateMany({
    where: { status: { in: ["pending", "abandoned"] } },
    data: { status: "abandoned" },
  });
  console.log("🧹 Cleaned up", r.count, "stale matches");
  await p.$disconnect();
}
main();
