// ─────────────────────────────────────────
// Shop & Tournament Types
// ─────────────────────────────────────────

export type ShopItemType = "avatar" | "frame" | "theme" | "xp_boost" | "coin_doubler";
export type Rarity = "common" | "rare" | "epic" | "legendary";

export interface ShopItem {
  id: string;
  name: string;
  description: string | null;
  type: ShopItemType;
  imageUrl: string | null;
  cost: number;
  rarity: Rarity;
  isActive: boolean;
}

export type TournamentStatus = "open" | "active" | "completed";

export interface Tournament {
  id: string;
  name: string;
  description: string | null;
  entryFee: number;
  prizePool: number;
  maxPlayers: number;
  status: TournamentStatus;
  currentPlayers: number;
  createdAt: Date;
  startedAt: Date | null;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatarUrl: string | null;
  rankedPoints: number;
  totalWins: number;
  totalMatches: number;
  winRate: number;
  level: number;
}
