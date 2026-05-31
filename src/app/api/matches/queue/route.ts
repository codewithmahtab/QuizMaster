import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { shuffle } from "@/lib/utils";
import { GENERAL_QUESTIONS } from "@/lib/generalQuestions";

// ── Pick 10 random questions for a match ─────────────────────────
async function pickQuestions(): Promise<string[]> {
  try {
    const count = await prisma.question.count();
    if (count < 10) {
      try {
        const questionsToSeed = [];
        for (const [category, qs] of Object.entries(GENERAL_QUESTIONS)) {
          for (const q of qs) {
            questionsToSeed.push({
              text: q.q,
              options: q.o,
              answerIndex: q.a,
              category: category,
              difficulty: "medium",
              explanation: "Classic level question!",
              isActive: true,
            });
          }
        }
        if (questionsToSeed.length > 0) {
          await prisma.question.deleteMany({});
          await prisma.question.createMany({ data: questionsToSeed });
        }
      } catch (seedErr) {
        console.error("Non-blocking question seeding error:", seedErr);
      }
    }

    const all = await prisma.question.findMany({
      where: { isActive: true },
      select: { id: true },
    });
    if (all.length < 10) return all.map((q) => q.id);
    return shuffle(all).slice(0, 10).map((q) => q.id);
  } catch (err) {
    console.error("Failed to pick questions, using fallback empty array:", err);
    return [];
  }
}

// ── Find the oldest open lobby (not ours) ────────────────────────
async function findOpenLobby(userId: string, type: string, coinStake: number) {
  return prisma.match.findFirst({
    where: {
      type,
      status: "pending",
      player2Id: { isSet: false },
      player1Id: { not: userId },
      coinStake,
      createdAt: { gte: new Date(Date.now() - 30_000) },
    },
    orderBy: { createdAt: "asc" },
  });
}

// ─────────────────────────────────────────────────────────────────
// POST — Join queue or create pending lobby
// ─────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const userId = session.user.id;
    const body = await req.json();
    const type: string = body.type || "casual";
    const coinStake: number = Number(body.coinStake) || 0;

    // Validate coins
    if (coinStake > 0) {
      const user = await prisma.user.findUnique({ where: { id: userId }, select: { coins: true } });
      if (!user || user.coins < coinStake)
        return NextResponse.json({ error: "Insufficient coins" }, { status: 400 });
    }

    // Clean up any stale pending matches in the background
    prisma.match.updateMany({
      where: {
        player1Id: userId,
        status: "pending",
        createdAt: { lt: new Date(Date.now() - 30_000) },
      },
      data: { status: "abandoned" },
    }).catch((err) => console.error("Background matchmaking cleanup error:", err));

    // If user already has an ACTIVE match, return it
    const activeMatch = await prisma.match.findFirst({
      where: {
        OR: [{ player1Id: userId }, { player2Id: userId }],
        status: "active",
      },
    });
    if (activeMatch) {
      return NextResponse.json({ matchId: activeMatch.id, joined: true });
    }

    // Phase 1 — instant join if lobby exists
    const openMatch = await findOpenLobby(userId, type, coinStake);
    if (openMatch) {
      const match = await prisma.match.update({
        where: { id: openMatch.id },
        data: { player2Id: userId, status: "active", startedAt: new Date() },
      });
      return NextResponse.json({ matchId: match.id, joined: true });
    }

    // Phase 2 — create own pending lobby
    const selected = await pickQuestions();
    const newMatch = await prisma.match.create({
      data: { type, status: "pending", player1Id: userId, coinStake, questionIds: selected },
    });

    // Phase 3 — race-condition retry
    const raceMatch = await findOpenLobby(userId, type, coinStake);
    if (raceMatch) {
      const [joined] = await prisma.$transaction([
        prisma.match.update({
          where: { id: raceMatch.id },
          data: { player2Id: userId, status: "active", startedAt: new Date() },
        }),
        prisma.match.update({ where: { id: newMatch.id }, data: { status: "abandoned" } }),
      ]);
      return NextResponse.json({ matchId: joined.id, joined: true });
    }

    return NextResponse.json({ matchId: newMatch.id, joined: false });
  } catch (error: any) {
    console.error("Matchmaking POST error:", error);
    return NextResponse.json({ error: error.message || "Failed to join queue" }, { status: 500 });
  }
}

// ─────────────────────────────────────────────────────────────────
// GET — Poll match status
// ─────────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const userId = session.user.id;
    const matchId = req.nextUrl.searchParams.get("matchId");
    if (!matchId)
      return NextResponse.json({ error: "matchId required" }, { status: 400 });

    const match = await prisma.match.findUnique({ where: { id: matchId } });
    if (!match) return NextResponse.json({ error: "Match not found" }, { status: 404 });

    if (match.status === "active")
      return NextResponse.json({ status: "active", matchId });
    if (match.status !== "pending")
      return NextResponse.json({ status: match.status, matchId });

    if (Date.now() - match.createdAt.getTime() > 30_000) {
      await prisma.match.update({ where: { id: matchId }, data: { status: "abandoned" } });
      return NextResponse.json({ status: "timeout" });
    }

    const otherMatch = await prisma.match.findFirst({
      where: {
        type: match.type,
        status: "pending",
        player2Id: { isSet: false },
        player1Id: { not: userId },
        id: { not: matchId },
        coinStake: match.coinStake,
        createdAt: { gte: new Date(Date.now() - 30_000) },
      },
      orderBy: { createdAt: "asc" },
    });

    if (otherMatch) {
      const [activated] = await prisma.$transaction([
        prisma.match.update({
          where: { id: otherMatch.id },
          data: { player2Id: userId, status: "active", startedAt: new Date() },
        }),
        prisma.match.update({ where: { id: matchId }, data: { status: "abandoned" } }),
      ]);
      return NextResponse.json({ status: "active", matchId: otherMatch.id });
    }

    return NextResponse.json({ status: "pending", matchId });
  } catch (error: any) {
    console.error("Matchmaking GET error:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch matchmaking status" }, { status: 500 });
  }
}

// ─────────────────────────────────────────────────────────────────
// DELETE — Cancel a pending lobby
// ─────────────────────────────────────────────────────────────────
export async function DELETE(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const matchId = req.nextUrl.searchParams.get("matchId");
    if (!matchId) return NextResponse.json({ ok: true });

    await prisma.match.updateMany({
      where: { id: matchId, player1Id: session.user.id, status: "pending" },
      data: { status: "abandoned" },
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Matchmaking DELETE error:", error);
    return NextResponse.json({ error: error.message || "Failed to cancel queue" }, { status: 500 });
  }
}
