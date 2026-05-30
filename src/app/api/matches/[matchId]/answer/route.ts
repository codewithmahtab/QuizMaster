import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// POST — Submit an answer for the current question
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ matchId: string }> },
) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { matchId } = await params;
  const userId = session.user.id;
  const body = await req.json();
  const { questionId, selectedIndex } = body as {
    questionId: string;
    selectedIndex: number;
  };

  const match = await prisma.match.findUnique({
    where: { id: matchId },
    select: {
      id: true,
      status: true,
      type: true,
      player1Id: true,
      player2Id: true,
      player1Score: true,
      player2Score: true,
      questionIds: true,
      coinStake: true,
    },
  });

  if (!match)
    return NextResponse.json({ error: "Match not found" }, { status: 404 });
  if (match.status !== "active")
    return NextResponse.json({ error: "Match not active" }, { status: 400 });

  const isPlayer1 = match.player1Id === userId;
  const isPlayer2 = match.player2Id === userId;
  if (!isPlayer1 && !isPlayer2)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  // Validate the question belongs to this match
  if (!match.questionIds.includes(questionId)) {
    return NextResponse.json({ error: "Invalid question" }, { status: 400 });
  }

  // Fetch correct answer
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    select: { answerIndex: true },
  });
  if (!question)
    return NextResponse.json({ error: "Question not found" }, { status: 404 });

  const isCorrect = selectedIndex === question.answerIndex;

  // Increment score if correct
  if (isCorrect) {
    await prisma.match.update({
      where: { id: matchId },
      data: {
        ...(isPlayer1
          ? { player1Score: { increment: 1 } }
          : { player2Score: { increment: 1 } }),
      },
    });
  }

  return NextResponse.json({
    correct: isCorrect,
    correctIndex: question.answerIndex,
    myScore: isCorrect
      ? isPlayer1
        ? match.player1Score + 1
        : match.player2Score + 1
      : isPlayer1
        ? match.player1Score
        : match.player2Score,
  });
}
