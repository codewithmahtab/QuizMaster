import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET — Fetch match state + questions (without answers)
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ matchId: string }> },
) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { matchId } = await params;
  const userId = session.user.id;

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    include: {
      player1: {
        select: {
          id: true,
          username: true,
          avatarUrl: true,
          level: true,
          rankedPoints: true,
        },
      },
      player2: {
        select: {
          id: true,
          username: true,
          avatarUrl: true,
          level: true,
          rankedPoints: true,
        },
      },
    },
  });

  if (!match)
    return NextResponse.json({ error: "Match not found" }, { status: 404 });

  // Only players in this match can view it
  if (match.player1Id !== userId && match.player2Id !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const myRole = match.player1Id === userId ? "player1" : "player2";

  // Fetch questions (including correctAnswer for instant client-side feedback)
  let questions: {
    id: string;
    text: string;
    options: string[];
    category: string;
    difficulty: string;
    correctAnswer: number;
  }[] = [];
  if (match.questionIds.length > 0) {
    const qs = await prisma.question.findMany({
      where: { id: { in: match.questionIds } },
      select: {
        id: true,
        text: true,
        options: true,
        category: true,
        difficulty: true,
        answerIndex: true,
      },
    });
    // Maintain order from questionIds
    const qMap = new Map(qs.map((q) => [q.id, { ...q, correctAnswer: q.answerIndex }]));
    questions = match.questionIds.map((id) => qMap.get(id)!).filter(Boolean);
  }

  return NextResponse.json({
    match: {
      id: match.id,
      type: match.type,
      status: match.status,
      player1: match.player1,
      player2: match.player2,
      player1Score: match.player1Score,
      player2Score: match.player2Score,
      winnerId: match.winnerId,
      coinStake: match.coinStake,
      completedAt: match.completedAt,
    },
    questions,
    myRole,
  });
}
