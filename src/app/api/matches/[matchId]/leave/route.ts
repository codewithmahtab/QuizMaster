import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { MATCH_REWARDS } from "@/lib/rankSystem";

// POST — Surrender/Leave the match active battle
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ matchId: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { matchId } = await params;
  const userId = session.user.id;

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
      player1Finished: true,
      player2Finished: true,
      coinStake: true,
    },
  });

  if (!match) return NextResponse.json({ error: "Match not found" }, { status: 404 });
  if (match.status === "completed") {
    return NextResponse.json({ error: "Match already completed" }, { status: 400 });
  }

  const isPlayer1 = match.player1Id === userId;
  const isPlayer2 = match.player2Id === userId;
  if (!isPlayer1 && !isPlayer2) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Define winner: since this user is leaving/surrendering, the opponent is declared the winner!
  const opponentId = isPlayer1 ? match.player2Id : match.player1Id;
  const winnerId = opponentId ?? null;

  // Calculate rewards for this surrendering user (DEFEAT)
  const rewards = match.type === "ranked" ? MATCH_REWARDS.ranked : MATCH_REWARDS.casual;
  const myScore = isPlayer1 ? match.player1Score : match.player2Score;

  const coinsEarned = match.coinStake > 0
    ? -match.coinStake
    : rewards.loseCoins;
  const xpEarned = rewards.loseXP;
  const rankPointsChange = rewards.losePoints;

  // Cookie checking to prevent duplicate reward calls
  const cookieName = `match_rewarded_${matchId}`;
  const alreadyRewarded = req.cookies.get(cookieName)?.value === "true";

  if (!alreadyRewarded) {
    const transactions: any[] = [
      // Deduct/update standard user progression metrics
      prisma.user.update({
        where: { id: userId },
        data: {
          coins: { increment: coinsEarned },
          xp: { increment: Math.max(0, xpEarned) },
          rankedPoints: { increment: rankPointsChange },
          totalMatches: { increment: 1 },
        },
      }),
      // Set Match as fully completed immediately
      prisma.match.update({
        where: { id: matchId },
        data: {
          status: "completed",
          winnerId,
          completedAt: new Date(),
          player1Finished: true,
          player2Finished: true,
        },
      }),
    ];

    await prisma.$transaction(transactions);

    // Create defeat notification
    await prisma.notification.create({
      data: {
        userId,
        title: "Battle Surrendered 🏳️",
        message: `You surrendered the battle. Match recorded as a defeat. -${Math.abs(coinsEarned)} coins.`,
        type: "battle",
      },
    });
  }

  const response = NextResponse.json({
    status: "completed",
    isWaitingForOpponent: false,
    isWin: false,
    isDraw: false,
    winnerId,
    coinsEarned,
    xpEarned,
    rankPointsChange,
    finalScore: { player1: match.player1Score, player2: match.player2Score },
  });

  response.cookies.set({
    name: cookieName,
    value: "true",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
