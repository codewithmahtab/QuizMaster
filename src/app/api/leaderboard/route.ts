import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") || "global"; // global | weekly | monthly

  try {
    if (type === "global") {
      const users = await prisma.user.findMany({
        orderBy: { rankedPoints: "desc" },
        take: 100,
        select: {
          id: true,
          username: true,
          avatarUrl: true,
          rankedPoints: true,
          totalWins: true,
          totalMatches: true,
          level: true,
        },
      });

      return NextResponse.json(
        users.map((u, i) => ({
          rank: i + 1,
          userId: u.id,
          username: u.username,
          avatarUrl: u.avatarUrl,
          rankedPoints: u.rankedPoints,
          totalWins: u.totalWins,
          totalMatches: u.totalMatches,
          winRate:
            u.totalMatches > 0
              ? Math.round((u.totalWins / u.totalMatches) * 1000) / 10
              : 0,
          level: u.level,
        }))
      );
    }

    if (type === "weekly") {
      // Current week start
      const now = new Date();
      const day = now.getUTCDay();
      const diff = day === 0 ? -6 : 1 - day;
      const monday = new Date(now);
      monday.setUTCDate(now.getUTCDate() + diff);
      monday.setUTCHours(0, 0, 0, 0);
      const weekStart = monday.toISOString().slice(0, 10);

      const stats = await prisma.weeklyStats.findMany({
        where: { weekStart },
        orderBy: { points: "desc" },
        take: 100,
        include: {
          user: {
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

      return NextResponse.json(
        stats.map((s, i) => ({
          rank: i + 1,
          userId: s.userId,
          username: s.user.username,
          avatarUrl: s.user.avatarUrl,
          rankedPoints: s.points,
          totalWins: s.wins,
          totalMatches: s.matches,
          winRate:
            s.matches > 0
              ? Math.round((s.wins / s.matches) * 1000) / 10
              : 0,
          level: s.user.level,
        }))
      );
    }

    if (type === "monthly") {
      // Start of current month
      const now = new Date();
      const monthStart = new Date(now.getUTCFullYear(), now.getUTCMonth(), 1)
        .toISOString()
        .slice(0, 10);

      // For monthly we aggregate weekly stats in this month
      const stats = await prisma.weeklyStats.groupBy({
        by: ["userId"],
        where: { weekStart: { gte: monthStart } },
        _sum: { wins: true, matches: true, points: true },
        orderBy: { _sum: { points: "desc" } },
        take: 100,
      });

      const userIds = stats.map((s) => s.userId);
      const users = await prisma.user.findMany({
        where: { id: { in: userIds } },
        select: { id: true, username: true, avatarUrl: true, level: true, rankedPoints: true },
      });
      const userMap = new Map(users.map((u) => [u.id, u]));

      return NextResponse.json(
        stats
          .map((s, i) => {
            const u = userMap.get(s.userId);
            if (!u) return null;
            const wins = s._sum.wins ?? 0;
            const matches = s._sum.matches ?? 0;
            return {
              rank: i + 1,
              userId: s.userId,
              username: u.username,
              avatarUrl: u.avatarUrl,
              rankedPoints: s._sum.points ?? 0,
              totalWins: wins,
              totalMatches: matches,
              winRate: matches > 0 ? Math.round((wins / matches) * 1000) / 10 : 0,
              level: u.level,
            };
          })
          .filter(Boolean)
      );
    }

    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  } catch (e) {
    console.error("[LEADERBOARD_ERROR]", e);
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }
}
