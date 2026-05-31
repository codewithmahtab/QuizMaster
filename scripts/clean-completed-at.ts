import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const res = await prisma.$runCommandRaw({
      find: "Match",
      filter: {}
    }) as any;

    const batch = res.cursor?.firstBatch || [];
    console.log(`🔍 Scanning ${batch.length} matches for type inconsistencies...`);

    let fixedCount = 0;
    for (const m of batch) {
      const matchId = m._id?.$oid || m._id;
      if (!matchId) continue;

      // Check if completedAt is a string
      if (m.completedAt && typeof m.completedAt === "string") {
        console.log(`⚠️ Match ${matchId} has string completedAt: ${m.completedAt}`);
        
        // Strip any wrapping literal quotes
        const cleanStr = m.completedAt.replace(/^["']|["']$/g, "").trim();
        const parsedDate = new Date(cleanStr);
        
        if (isNaN(parsedDate.getTime())) {
          console.log(`❌ Failed to parse date string: "${cleanStr}", falling back to now`);
          await prisma.$runCommandRaw({
            update: "Match",
            updates: [
              {
                q: { _id: m._id },
                u: { $set: { completedAt: { $date: new Date().toISOString() } } }
              }
            ]
          });
        } else {
          await prisma.$runCommandRaw({
            update: "Match",
            updates: [
              {
                q: { _id: m._id },
                u: { $set: { completedAt: { $date: parsedDate.toISOString() } } }
              }
            ]
          });
          console.log(`✅ Fixed match ${matchId} completedAt:`, parsedDate);
        }
        fixedCount++;
      }
    }
    console.log(`🎉 Cleanup complete! Fixed ${fixedCount} inconsistent records.`);
  } catch (error) {
    console.error("Error during match cleanup:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
