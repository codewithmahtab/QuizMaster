import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { MATCH_REWARDS } from "@/lib/rankSystem";

// POST — Complete the match (called when a player finishes all questions)
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
      winnerId: true,
      coinStake: true,
    },
  });

  if (!match) return NextResponse.json({ error: "Match not found" }, { status: 404 });

  const isPlayer1 = match.player1Id === userId;
  if (!isPlayer1 && match.player2Id !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Deduplicate rewards using cookies (prevents double rewarding on refreshes/double-clicks)
  const cookieName = `match_rewarded_${matchId}`;
  const alreadyRewarded = req.cookies.get(cookieName)?.value === "true";

  // Calculate winner based on scores
  const p1Score = match.player1Score;
  const p2Score = match.player2Score;
  let winnerId = match.winnerId;

  // If match status is not completed, we are the first one completing it. Let's calculate and set the winner.
  if (match.status !== "completed") {
    if (p1Score > p2Score) winnerId = match.player1Id;
    else if (p2Score > p1Score) winnerId = match.player2Id ?? null;
    else winnerId = null; // draw
  }

  // Calculate rewards
  const rewards = match.type === "ranked" ? MATCH_REWARDS.ranked : MATCH_REWARDS.casual;
  const myScore = isPlayer1 ? p1Score : p2Score;
  const isWin = winnerId === userId;
  const isDraw = winnerId === null;

  let coinsEarned = 0;
  let xpEarned = 0;
  let rankPointsChange = 0;

  if (isWin) {
    coinsEarned = match.coinStake > 0
      ? Math.floor(match.coinStake * 1.8) // win 80% profit on coin bet
      : rewards.winCoins;
    xpEarned = rewards.winXP + myScore * 5; // bonus XP per correct answer
    rankPointsChange = rewards.winPoints;
  } else if (!isDraw) {
    coinsEarned = match.coinStake > 0
      ? -match.coinStake
      : rewards.loseCoins;
    xpEarned = rewards.loseXP;
    rankPointsChange = rewards.losePoints;
  } else {
    coinsEarned = 0;
    xpEarned = 30;
    rankPointsChange = 0;
  }

  // If the user hasn't been rewarded yet, update the database
  if (!alreadyRewarded) {
    const transactions: any[] = [
      // Update this user's progression and stats
      prisma.user.update({
        where: { id: userId },
        data: {
          coins: { increment: coinsEarned },
          xp: { increment: Math.max(0, xpEarned) },
          rankedPoints: { increment: rankPointsChange },
          totalMatches: { increment: 1 },
          totalWins: { increment: isWin ? 1 : 0 },
        },
      }),
    ];

    // If the match status is not completed yet, update the match status to completed
    if (match.status !== "completed") {
      transactions.push(
        prisma.match.update({
          where: { id: matchId },
          data: {
            status: "completed",
            winnerId,
            completedAt: new Date(),
          },
        })
      );
    }

    await prisma.$transaction(transactions);

    // Create in-app notification
    const opponentLabel = isPlayer1 ? "Player 2" : "Player 1";
    let titleStr = "Battle Completed ⚔️";
    let msgStr = `Good effort! You completed a ${match.type} match. Earned +${xpEarned} XP.`;

    if (isWin) {
      titleStr = "Battle Victory! ⚔️";
      msgStr = `Congratulations! You defeated your opponent in a ${match.type} match! Earned +${coinsEarned} coins and +${xpEarned} XP.`;
    } else if (isDraw) {
      titleStr = "Battle Draw ⚔️";
      msgStr = `It's a draw! Both players scored equally. You earned +${xpEarned} XP.`;
    }

    await prisma.notification.create({
      data: {
        userId,
        title: titleStr,
        message: msgStr,
        type: "battle",
      },
    });
  }

  // Create response
  const response = NextResponse.json({
    status: "completed",
    isWin,
    isDraw,
    winnerId,
    coinsEarned,
    xpEarned,
    rankPointsChange,
    finalScore: { player1: p1Score, player2: p2Score },
  });

  // Set the cookie so they can't get rewarded again
  response.cookies.set({
    name: cookieName,
    value: "true",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });

  return response;
}
