// ─────────────────────────────────────────
// User Types
// ─────────────────────────────────────────

export type RankTier =
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "diamond"
  | "blue_diamond"
  | "red_diamond"
  | "master";

export interface RankInfo {
  tier: RankTier;
  label: string;
  icon: string;
  minPoints: number;
  maxPoints: number | null;
  color: string;
  glowColor: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatarUrl: string | null;
  avatarFrameId: string | null;
  level: number;
  xp: number;
  coins: number;
  rankedPoints: number;
  totalWins: number;
  totalMatches: number;
  longestStreak: number;
  loginStreak: number;
  createdAt: Date;
}

export interface PublicProfile extends Omit<UserProfile, "email"> {
  winRate: number;
  rank: RankInfo;
  nextLevelXp: number;
  currentLevelXp: number;
}
