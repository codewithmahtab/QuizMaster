import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { levelFromXP } from "@/lib/levelSystem";
import { GENERAL_QUESTIONS } from "@/lib/generalQuestions";

const CATEGORIES = ["world", "science", "computer", "pharmacy", "mixed"];

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    // Fetch all general progress records for the user
    const records = await prisma.generalProgress.findMany({
      where: { userId },
    });

    // Construct full response mapping all 5 categories
    const progressMap: Record<string, number> = {};
    for (const cat of CATEGORIES) {
      const match = records.find((r) => r.category === cat);
      progressMap[cat] = match ? match.unlockedLevel : 1;
    }

    return NextResponse.json({ success: true, progress: progressMap });
  } catch (error: any) {
    console.error("Error fetching general progress:", error);
    return NextResponse.json({ error: "Failed to fetch progress" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const { category, level } = await req.json();

    if (!category || typeof level !== "number") {
      return NextResponse.json({ error: "Missing category or level" }, { status: 400 });
    }

    if (!CATEGORIES.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    const questionList = GENERAL_QUESTIONS[category];
    if (!questionList || level < 1 || level > questionList.length) {
      return NextResponse.json({ error: "Level out of bounds" }, { status: 400 });
    }

    // Fetch user progress
    const progressRecord = await prisma.generalProgress.findUnique({
      where: {
        userId_category: { userId, category },
      },
    });

    const currentUnlocked = progressRecord ? progressRecord.unlockedLevel : 1;

    // Check if this completes their highest unlocked level
    const isNewPass = level === currentUnlocked;

    let coinsGained = 0;
    let xpGained = 0;
    let newUnlockedLevel = currentUnlocked;

    if (isNewPass) {
      // Award base coins + XP for completing a level first time
      coinsGained = 10;
      xpGained = 15;
      newUnlockedLevel = level + 1;

      // Upsert GeneralProgress in DB
      await prisma.generalProgress.upsert({
        where: {
          userId_category: { userId, category },
        },
        create: {
          userId,
          category,
          unlockedLevel: newUnlockedLevel,
        },
        update: {
          unlockedLevel: newUnlockedLevel,
        },
      });

      // Update user coins, XP, and Level
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { coins: true, xp: true },
      });

      if (user) {
        const nextXP = user.xp + xpGained;
        const nextLevel = levelFromXP(nextXP);

        await prisma.user.update({
          where: { id: userId },
          data: {
            coins: { increment: coinsGained },
            xp: nextXP,
            level: nextLevel,
          },
        });
      }

      // Add a clean, informative notification
      const friendlyCatName = category.charAt(0).toUpperCase() + category.slice(1);
      await prisma.notification.create({
        data: {
          userId,
          title: "General Level Passed! 🏆",
          message: `Congratulations! You cleared Level ${level} of the ${friendlyCatName} trivia category. Earned +${coinsGained} coins & +${xpGained} XP! Level ${newUnlockedLevel} is now unlocked.`,
          type: "rewards",
        },
      });
    }

    return NextResponse.json({
      success: true,
      isNewPass,
      coinsGained,
      xpGained,
      unlockedLevel: newUnlockedLevel,
    });
  } catch (error: any) {
    console.error("Error updating general progress:", error);
    return NextResponse.json({ error: "Failed to update progress" }, { status: 500 });
  }
}
