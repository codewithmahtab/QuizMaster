// ─────────────────────────────────────────
// XP & LEVEL SYSTEM
// ─────────────────────────────────────────

/**
 * XP required to reach a given level.
 * Curve: Level 1 = 0xp, each level needs progressively more.
 * Formula: XP needed for level n = 100 * n * (n - 1) / 2
 */
export function xpForLevel(level: number): number {
  if (level <= 1) return 0;
  return 100 * level * (level - 1);
}

/**
 * Calculate level from total XP.
 * Binary search for efficiency.
 */
export function levelFromXP(totalXP: number): number {
  let level = 1;
  while (xpForLevel(level + 1) <= totalXP) {
    level++;
    if (level >= 100) return 100; // cap at 100
  }
  return level;
}

/**
 * XP progress within current level (0 to xpNeeded)
 */
export function xpProgressInLevel(totalXP: number): {
  current: number;
  needed: number;
  percentage: number;
  level: number;
} {
  const level = levelFromXP(totalXP);
  const currentLevelXP = xpForLevel(level);
  const nextLevelXP = level >= 100 ? xpForLevel(100) : xpForLevel(level + 1);
  const needed = nextLevelXP - currentLevelXP;
  const current = totalXP - currentLevelXP;
  const percentage = level >= 100 ? 100 : Math.min(100, Math.round((current / needed) * 100));

  return { current, needed, percentage, level };
}

/**
 * XP reward multiplier based on answer speed.
 * Faster answers get small bonus XP.
 * timeMs: time taken to answer in milliseconds (max 15000)
 */
export function speedBonus(timeMs: number): number {
  if (timeMs <= 3000) return 1.5;   // under 3s → 50% bonus
  if (timeMs <= 6000) return 1.25;  // under 6s → 25% bonus
  if (timeMs <= 10000) return 1.1;  // under 10s → 10% bonus
  return 1.0;                        // slow → no bonus
}

// ─────────────────────────────────────────
// STREAK REWARDS
// ─────────────────────────────────────────

export const STREAK_REWARDS: Record<number, { coins: number; xp: number; label: string }> = {
  1: { coins: 10,  xp: 20,  label: "Day 1 — Welcome back!" },
  2: { coins: 20,  xp: 40,  label: "Day 2 — Keep it up!" },
  3: { coins: 30,  xp: 60,  label: "Day 3 — On fire! 🔥" },
  4: { coins: 40,  xp: 80,  label: "Day 4 — Unstoppable!" },
  5: { coins: 60,  xp: 120, label: "Day 5 — Quiz Legend!" },
  6: { coins: 80,  xp: 150, label: "Day 6 — Almost there!" },
  7: { coins: 200, xp: 300, label: "Day 7 — WEEKLY BONUS! 🎉" },
};

/**
 * Get streak day reward (cycles every 7 days)
 */
export function getStreakReward(loginStreak: number) {
  const day = ((loginStreak - 1) % 7) + 1;
  return STREAK_REWARDS[day];
}
