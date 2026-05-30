import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Helper to pick 10 random questions
async function pickQuestions(): Promise<string[]> {
  const all = await prisma.question.findMany({
    where: { isActive: true },
    select: { id: true },
  });
  if (all.length < 10) return all.map((q) => q.id);
  const shuffled = all.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10).map((q) => q.id);
}

// GET — Fetch tournament details + auto-sync bracket updates when matches finish
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id: tournamentId } = await params;
  const userId = session.user.id;

  const tournament = await prisma.tournament.findUnique({
    where: { id: tournamentId },
  });

  if (!tournament) return NextResponse.json({ error: "Tournament not found" }, { status: 404 });

  // If active, let's sync matching progress
  if (tournament.status === "active" && tournament.bracket) {
    let bracket = tournament.bracket as any;
    let bracketChanged = false;

    // Check each round
    for (let r = 0; r < bracket.rounds.length; r++) {
      const round = bracket.rounds[r];
      const matches = round.matches;

      // Check if matches in this round are completed
      let roundCompleted = true;

      for (let m = 0; m < matches.length; m++) {
        const match = matches[m];

        // Case A: The match in bracket has an active DB Match ID
        if (match.matchId && match.status !== "completed") {
          // Check DB match status
          const dbMatch = await prisma.match.findUnique({
            where: { id: match.matchId },
          });

          if (dbMatch && dbMatch.status === "completed") {
            // Update bracket match with final scores
            match.p1Score = dbMatch.player1Score;
            match.p2Score = dbMatch.player2Score;
            match.winnerId = dbMatch.winnerId;
            match.status = "completed";
            bracketChanged = true;

            // If user is eliminated, mark them in entries
            if (dbMatch.winnerId !== userId && (dbMatch.player1Id === userId || dbMatch.player2Id === userId)) {
              await prisma.tournamentEntry.updateMany({
                where: { tournamentId, userId },
                data: { eliminated: true },
              });
            }

            // Create real-time in-app notifications for tournament status changes
            if (dbMatch.winnerId === userId) {
              const nextRoundNum = r + 2;
              const nextRoundName = nextRoundNum === 2 ? "Semifinals" : "Finals";

              const existingNotif = await prisma.notification.findFirst({
                where: {
                  userId,
                  type: "tournament",
                  title: `${nextRoundName} Match Ready! 🎪`,
                },
              });

              if (!existingNotif) {
                await prisma.notification.create({
                  data: {
                    userId,
                    title: `${nextRoundName} Match Ready! 🎪`,
                    message: `Congratulations! You won your match and advanced to the ${nextRoundName} in the "${tournament.name}"! Open the bracket and play your next match!`,
                    type: "tournament",
                  },
                });
              }
            } else if (dbMatch.player1Id === userId || dbMatch.player2Id === userId) {
              const existingNotif = await prisma.notification.findFirst({
                where: {
                  userId,
                  type: "tournament",
                  title: "Tournament Eliminated 💀",
                },
              });

              if (!existingNotif) {
                await prisma.notification.create({
                  data: {
                    userId,
                    title: "Tournament Eliminated 💀",
                    message: `Nice try! You were eliminated from the "${tournament.name}". Keep practicing and win the next one!`,
                    type: "tournament",
                  },
                });
              }
            }
          }
        }

        // Case B: Bot vs Bot matches that need simulation
        // Simulate when other round matches are completed or if the user played theirs
        const isUserMatch = (match.p1?.id === userId || match.p2?.id === userId);
        if (!isUserMatch && match.status === "pending" && match.p1 && match.p2) {
          // Generate realistic bot scores (0-10)
          const p1Score = Math.floor(Math.random() * 6) + 4; // 4 to 9
          const p2Score = Math.floor(Math.random() * 6) + 4;
          const winnerId = p1Score >= p2Score ? match.p1.id : match.p2.id;

          match.p1Score = p1Score;
          match.p2Score = p2Score;
          match.winnerId = winnerId;
          match.status = "completed";
          bracketChanged = true;
        }

        if (match.status !== "completed") {
          roundCompleted = false;
        }
      }

      // If all matches in this round are complete, let's advance winners to next round!
      if (roundCompleted && r < bracket.rounds.length - 1) {
        const nextRound = bracket.rounds[r + 1];
        const winners = matches.map((m: any) => {
          if (m.winnerId === m.p1?.id) return m.p1;
          return m.p2;
        });

        // Map winners into next round slots
        let nextRoundChanged = false;
        for (let w = 0; w < winners.length; w++) {
          const nextMatchIdx = Math.floor(w / 2);
          const nextMatchSlot = w % 2 === 0 ? "p1" : "p2";
          const targetMatch = nextRound.matches[nextMatchIdx];

          if (targetMatch && !targetMatch[nextMatchSlot]) {
            targetMatch[nextMatchSlot] = winners[w];
            nextRoundChanged = true;
            bracketChanged = true;
          }
        }
      }

      // If Finals (Round 3) is completed, mark tournament as completed!
      if (roundCompleted && r === bracket.rounds.length - 1) {
        const finalsMatch = matches[0];
        if (finalsMatch && finalsMatch.winnerId && tournament.status !== "completed") {
          const winnerId = finalsMatch.winnerId;

          // Award Prize Pool!
          if (winnerId === userId) {
            await prisma.user.update({
              where: { id: userId },
              data: {
                coins: { increment: tournament.prizePool },
                xp: { increment: 300 },
              },
            });

            // Create grand champion notification
            await prisma.notification.create({
              data: {
                userId,
                title: "Grand Champion! 🏆",
                message: `Spectacular! You won the "${tournament.name}" tournament! The grand prize pool of ${tournament.prizePool} coins has been credited to your account!`,
                type: "tournament",
              },
            });
          } else {
            // bot or another player won, send them notifications
            await prisma.notification.create({
              data: {
                userId: winnerId,
                title: "Grand Champion! 🏆",
                message: `Spectacular! You won the "${tournament.name}" tournament! The grand prize pool of ${tournament.prizePool} coins has been credited to your account!`,
                type: "tournament",
              },
            });
          }

          // Complete tournament
          await prisma.tournament.update({
            where: { id: tournamentId },
            data: {
              status: "completed",
              winnerId,
              completedAt: new Date(),
            },
          });

          tournament.status = "completed";
          tournament.winnerId = winnerId;
        }
      }
    }

    if (bracketChanged) {
      const updated = await prisma.tournament.update({
        where: { id: tournamentId },
        data: { bracket },
      });
      tournament.bracket = updated.bracket;
    }
  }

  // Fetch updated entries
  const entries = await prisma.tournamentEntry.findMany({
    where: { tournamentId },
    include: {
      user: {
        select: { username: true, avatarUrl: true, level: true, rankedPoints: true },
      },
    },
  });

  return NextResponse.json({
    tournament,
    entries,
  });
}

// POST — Launch/Create a Match for the user's active tournament round
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id: tournamentId } = await params;
  const userId = session.user.id;
  const { bracketMatchId } = await req.json();

  if (!bracketMatchId) return NextResponse.json({ error: "Match ID required" }, { status: 400 });

  const tournament = await prisma.tournament.findUnique({
    where: { id: tournamentId },
  });

  if (!tournament || tournament.status !== "active") {
    return NextResponse.json({ error: "Tournament is not active" }, { status: 400 });
  }

  const bracket = tournament.bracket as any;
  let targetMatch: any = null;
  let roundNumber = 1;

  // Find the match in the bracket
  for (let r = 0; r < bracket.rounds.length; r++) {
    const round = bracket.rounds[r];
    const match = round.matches.find((m: any) => m.id === bracketMatchId);
    if (match) {
      targetMatch = match;
      roundNumber = r + 1;
      break;
    }
  }

  if (!targetMatch) return NextResponse.json({ error: "Bracket match not found" }, { status: 404 });
  if (targetMatch.status === "completed") {
    return NextResponse.json({ error: "Match already completed" }, { status: 400 });
  }

  // Create actual DB Match
  const opponentId = targetMatch.p1.id === userId ? targetMatch.p2.id : targetMatch.p1.id;
  const questionIds = await pickQuestions();

  const dbMatch = await prisma.match.create({
    data: {
      type: "tournament",
      status: "active",
      player1Id: userId,
      player2Id: opponentId,
      tournamentId,
      roundNumber,
      questionIds,
      startedAt: new Date(),
    },
  });

  // Update matchId in bracket JSON
  targetMatch.matchId = dbMatch.id;
  targetMatch.status = "playing";

  await prisma.tournament.update({
    where: { id: tournamentId },
    data: { bracket },
  });

  return NextResponse.json({
    matchId: dbMatch.id,
  });
}
