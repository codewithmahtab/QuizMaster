import type { RankTier, RankInfo } from "@/types/user";

// ─────────────────────────────────────────
// RANK TIERS CONFIGURATION
// ─────────────────────────────────────────

export const RANK_TIERS: RankInfo[] = [
  {
    tier: "bronze",
    label: "Bronze",
    icon: "🥉",
    minPoints: 0,
    maxPoints: 299,
    color: "#CD7F32",
    glowColor: "rgba(205, 127, 50, 0.4)",
  },
  {
    tier: "silver",
    label: "Silver",
    icon: "🥈",
    minPoints: 300,
    maxPoints: 699,
    color: "#C0C0C0",
    glowColor: "rgba(192, 192, 192, 0.4)",
  },
  {
    tier: "gold",
    label: "Gold",
    icon: "🥇",
    minPoints: 700,
    maxPoints: 1199,
    color: "#FFD700",
    glowColor: "rgba(255, 215, 0, 0.4)",
  },
  {
    tier: "platinum",
    label: "Platinum",
    icon: "💎",
    minPoints: 1200,
    maxPoints: 1999,
    color: "#00CED1",
    glowColor: "rgba(0, 206, 209, 0.4)",
  },
  {
    tier: "diamond",
    label: "Diamond",
    icon: "💠",
    minPoints: 2000,
    maxPoints: 2999,
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    tier: "blue_diamond",
    label: "Blue Diamond",
    icon: "🔷",
    minPoints: 3000,
    maxPoints: 3999,
    color: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    tier: "red_diamond",
    label: "Red Diamond",
    icon: "🔴",
    minPoints: 4000,
    maxPoints: 4999,
    color: "#EF4444",
    glowColor: "rgba(239, 68, 68, 0.4)",
  },
  {
    tier: "master",
    label: "Master",
    icon: "👑",
    minPoints: 5000,
    maxPoints: null,
    color: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.5)",
  },
];

// ─────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────

/**
 * Get rank info based on rankedPoints
 */
export function getRankFromPoints(points: number): RankInfo {
  for (let i = RANK_TIERS.length - 1; i >= 0; i--) {
    if (points >= RANK_TIERS[i].minPoints) {
      return RANK_TIERS[i];
    }
  }
  return RANK_TIERS[0]; // default bronze
}

/**
 * Get progress percentage within current rank tier
 */
export function getRankProgress(points: number): number {
  const rank = getRankFromPoints(points);
  if (rank.maxPoints === null) return 100; // master — capped
  const range = rank.maxPoints - rank.minPoints + 1;
  const progress = points - rank.minPoints;
  return Math.min(100, Math.round((progress / range) * 100));
}

/**
 * Points needed to reach next tier
 */
export function getPointsToNextRank(points: number): number | null {
  const rank = getRankFromPoints(points);
  if (rank.maxPoints === null) return null; // already master
  return rank.maxPoints + 1 - points;
}

// ─────────────────────────────────────────
// MATCH REWARDS
// ─────────────────────────────────────────

export const MATCH_REWARDS = {
  casual: {
    winCoins: 18,
    loseCoins: -10,
    winXP: 80,
    loseXP: 20,
    winPoints: 0,
    losePoints: 0,
  },
  ranked: {
    winCoins: 5,          // less coins in ranked, focus on points
    loseCoins: 0,
    winXP: 120,
    loseXP: 30,
    winPoints: 18,
    losePoints: -10,
  },
  daily: {
    completionCoins: 50,
    completionXP: 100,
    perfectCoins: 100,    // bonus for 10/10
    perfectXP: 200,
  },
} as const;
