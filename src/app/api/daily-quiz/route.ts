import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { todayUTC } from "@/lib/utils";
import { shuffle } from "@/lib/utils";

// ── GET: Fetch today's 10 questions ──────────────────────────────
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const today = todayUTC();
  const userId = session.user.id;

  // Check if already completed today
  const existing = await prisma.dailyQuizCompletion.findUnique({
    where: { userId_date: { userId, date: today } },
  });

  if (existing) {
    return NextResponse.json({
      alreadyCompleted: true,
      score: existing.score,
      coinsEarned: existing.coinsEarned,
      xpEarned: existing.xpEarned,
    });
  }

  // Get all active questions
  const allQuestions = await prisma.question.findMany({
    where: { isActive: true },
    select: { id: true, text: true, options: true, category: true, difficulty: true },
  });

  if (allQuestions.length < 10) {
    return NextResponse.json(
      { error: "Not enough questions in database. Please seed the questions first." },
      { status: 503 }
    );
  }

  // Deterministic daily selection: use date as seed for consistent ordering
  // Same 10 questions for everyone on a given day
  const dateSeed = parseInt(today.replace(/-/g, ""), 10);
  const seeded = [...allQuestions].sort((a, b) => {
    const hashA = (dateSeed * a.id.charCodeAt(0) * 31) % 1000;
    const hashB = (dateSeed * b.id.charCodeAt(0) * 31) % 1000;
    return hashA - hashB;
  });
  const dailyQuestions = seeded.slice(0, 10);

  // Return questions WITHOUT the answer index (security)
  return NextResponse.json({
    alreadyCompleted: false,
    date: today,
    questions: dailyQuestions.map((q) => ({
      id: q.id,
      text: q.text,
      options: q.options,
      category: q.category,
      difficulty: q.difficulty,
    })),
  });
}

// ── POST: Submit quiz completion ─────────────────────────────────
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const today = todayUTC();

  // Prevent double-submit
  const existing = await prisma.dailyQuizCompletion.findUnique({
    where: { userId_date: { userId, date: today } },
  });
  if (existing) {
    return NextResponse.json({ error: "Already completed today" }, { status: 409 });
  }

  const body = await req.json();
  const { answers } = body as { answers: { questionId: string; selectedIndex: number }[] };

  if (!answers || answers.length !== 10) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Fetch the actual questions with answers
  const questionIds = answers.map((a) => a.questionId);
  const questions = await prisma.question.findMany({
    where: { id: { in: questionIds } },
    select: { id: true, answerIndex: true },
  });

  const answerMap = new Map(questions.map((q) => [q.id, q.answerIndex]));

  // Score the answers
  let score = 0;
  const results = answers.map((a) => {
    const correct = answerMap.get(a.questionId);
    const isCorrect = correct === a.selectedIndex;
    if (isCorrect) score++;
    return { questionId: a.questionId, selectedIndex: a.selectedIndex, correct, isCorrect };
  });

  // Calculate rewards
  const scorePct = score / 10;
  const baseCoins = 50;
  const baseXP = 100;
  const perfectBonus = score === 10 ? 50 : 0;
  const coinsEarned = Math.round(baseCoins * scorePct) + perfectBonus;
  const xpEarned = Math.round(baseXP * scorePct) + (score === 10 ? 100 : 0);

  // Save completion & update user in a transaction
  const [completion, updatedUser] = await prisma.$transaction([
    prisma.dailyQuizCompletion.create({
      data: { userId, date: today, score, totalQ: 10, coinsEarned, xpEarned },
    }),
    prisma.user.update({
      where: { id: userId },
      data: {
        coins: { increment: coinsEarned },
        xp: { increment: xpEarned },
      },
      select: { coins: true, xp: true, level: true },
    }),
  ]);

  return NextResponse.json({
    score,
    totalQ: 10,
    coinsEarned,
    xpEarned,
    perfect: score === 10,
    results,
    user: updatedUser,
  });
}
