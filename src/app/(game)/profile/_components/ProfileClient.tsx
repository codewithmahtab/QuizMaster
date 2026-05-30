"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Coins, Zap, Trophy, Target, Flame, Calendar,
  Swords, ChevronRight, LogOut, Settings
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { cn, formatCoins } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { RankInfo } from "@/types/user";

interface Match {
  id: string;
  type: string;
  isWin: boolean;
  isDraw: boolean;
  myScore: number;
  opponentScore: number;
  coinStake: number;
  completedAt: Date | null;
  opponent: { username: string; avatarUrl: string | null } | null;
}

interface ProfileClientProps {
  user: {
    id: string;
    username: string;
    avatarUrl: string;
    coins: number;
    xp: number;
    level: number;
    rankedPoints: number;
    totalWins: number;
    totalMatches: number;
    longestStreak: number;
    loginStreak: number;
    createdAt: Date;
    winRate: number;
    frameId?: string | null;
    frameUrl?: string | null;
    frameName?: string | null;
  };
  rank: RankInfo;
  rankProgress: number;
  pointsToNext: number | null;
  xpProgress: { current: number; needed: number; percentage: number; level: number };
  recentMatches: Match[];
}

const statItems = (user: ProfileClientProps["user"]) => [
  { icon: Trophy, label: "Total Wins", value: user.totalWins, color: "text-[var(--brand-gold)]", bg: "bg-[var(--brand-gold)]/10" },
  { icon: Swords, label: "Matches", value: user.totalMatches, color: "text-[var(--brand-cyan)]", bg: "bg-[var(--brand-cyan)]/10" },
  { icon: Target, label: "Win Rate", value: `${user.winRate}%`, color: "text-[var(--brand-success)]", bg: "bg-[var(--brand-success)]/10" },
  { icon: Flame, label: "Best Streak", value: user.longestStreak, color: "text-orange-400", bg: "bg-orange-400/10" },
];

export default function ProfileClient({
  user, rank, rankProgress, pointsToNext, xpProgress, recentMatches
}: ProfileClientProps) {
  const { signOut } = useClerk();

  return (
    <div className="flex flex-col min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] w-full max-w-6xl mx-auto gap-8 sm:gap-10 px-4">

      {/* ── PROFILE HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-3xl p-6 sm:p-10 shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >


        {/* Top row: avatar + actions */}
        <div className="flex flex-row items-start justify-between mb-6 sm:mb-8 relative z-10 gap-3 sm:gap-6">
          
          <div className="flex flex-row items-center sm:items-start gap-4 sm:gap-6 flex-1 min-w-0 text-left">
            {/* Avatar with Frame */}
            <div className="relative shrink-0">
              <div className="relative">
                <div className="w-14 h-14 sm:w-28 sm:h-28 relative drop-shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={user.avatarUrl} alt={user.username} className="w-full h-full object-contain" />
                </div>
              </div>
              {/* Level badge */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-br from-[var(--brand-violet)] to-[var(--brand-cyan)] text-white text-[9px] sm:text-sm font-black px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full border-2 sm:border-4 border-background z-10 shadow-lg leading-none">
                LVL {user.level}
              </div>
            </div>

            {/* Name + rank */}
            <div className="flex-1 min-w-0 mt-0">
              <h1 className="text-xl sm:text-4xl font-black text-foreground font-[family-name:var(--font-syne)] tracking-wide drop-shadow-md truncate">
                {user.username}
              </h1>
              <div className="flex items-center justify-start gap-1.5 sm:gap-2 mt-0.5 sm:mt-2">
                <span className="text-base sm:text-2xl drop-shadow-sm leading-none">{rank.icon}</span>
                <span className="text-xs sm:text-base font-bold tracking-wider uppercase drop-shadow-sm leading-none" style={{ color: rank.color }}>
                  {rank.label}
                </span>
              </div>
              <p className="text-[10px] sm:text-sm text-muted-foreground font-bold uppercase tracking-widest mt-1 sm:mt-2 truncate">
                {user.rankedPoints} Ranked Pts
              </p>
            </div>
          </div>

          {/* Settings + logout */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
            <Link href="/settings">
              <button className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-md">
                <Settings className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </Link>
            <button
              onClick={() => signOut({ redirectUrl: "/home" })}
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-[var(--brand-danger)]/10 border border-[var(--brand-danger)]/20 flex items-center justify-center text-[var(--brand-danger)] hover:bg-[var(--brand-danger)]/20 hover:border-[var(--brand-danger)]/40 transition-all shadow-md cursor-pointer"
            >
              <LogOut className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Progress Bars Container */}
        <div className="space-y-6 relative z-10 bg-black/20 p-5 sm:p-6 rounded-2xl border border-white/5">
          {/* Rank progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-end text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-widest">
              <span style={{ color: rank.color }} className="drop-shadow-sm">{rank.label}</span>
              <span className="text-[10px] sm:text-xs">{pointsToNext !== null ? `${pointsToNext} pts to next rank` : "👑 Max Rank"}</span>
            </div>
            <div className="h-2 sm:h-3 rounded-full bg-black/40 overflow-hidden border border-white/5 shadow-inner relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${rankProgress}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${rank.color}, ${rank.color}99)` }}
              />
            </div>
          </div>

          {/* XP progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-end text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-widest">
              <span className="text-[var(--brand-cyan)] drop-shadow-sm">XP — Level {xpProgress.level}</span>
              <span className="text-[10px] sm:text-xs">{xpProgress.current} / {xpProgress.needed} XP</span>
            </div>
            <div className="h-2 sm:h-3 rounded-full bg-black/40 overflow-hidden border border-white/5 shadow-inner relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress.percentage}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ background: "linear-gradient(90deg, var(--brand-violet), var(--brand-cyan))" }}
              />
            </div>
          </div>
        </div>

        {/* Coins + streak row */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-6 relative z-10">
          <div className="flex items-center gap-2 bg-gradient-to-r from-[var(--brand-gold)]/20 to-[var(--brand-gold)]/5 border border-[var(--brand-gold)]/30 rounded-full text-sm sm:text-base font-bold text-[var(--brand-gold)] py-2 px-5">
            <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
            {formatCoins(user.coins)} coins
          </div>
          {user.loginStreak > 0 && (
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-full text-sm sm:text-base font-bold text-orange-400 py-2 px-5">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              {user.loginStreak} day streak
            </div>
          )}
        </div>
      </motion.div>

      {/* ── STATS GRID ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-4"
      >
        <h2 className="text-sm font-black text-muted-foreground uppercase tracking-widest ml-2">
          Player Stats
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {statItems(user).map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:scale-[1.02] transition-transform duration-300">
              <div className={cn("w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg", bg)}>
                <Icon className={cn("w-6 h-6 sm:w-7 sm:h-7", color)} />
              </div>
              <div>
                <p className={cn("text-xl sm:text-2xl font-black font-[family-name:var(--font-mono)] drop-shadow-sm", color)}>
                  {value}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── QUICK ACTIONS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <Link href="/shop" className="group">
          <div className="glass-card p-5 sm:p-6 rounded-2xl flex items-center gap-4 border border-white/5 group-hover:border-[var(--brand-gold)]/40 group-hover:bg-white/5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🛍️</div>
            <div className="flex-1">
              <p className="text-base sm:text-lg font-black font-[family-name:var(--font-syne)] text-foreground tracking-wide">Visit Shop</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">Spend your hard-earned coins</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[var(--brand-gold)] transition-colors group-hover:translate-x-1" />
          </div>
        </Link>
        <Link href="/leaderboard" className="group">
          <div className="glass-card p-5 sm:p-6 rounded-2xl flex items-center gap-4 border border-white/5 group-hover:border-[var(--brand-violet)]/40 group-hover:bg-white/5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🏅</div>
            <div className="flex-1">
              <p className="text-base sm:text-lg font-black font-[family-name:var(--font-syne)] text-foreground tracking-wide">Leaderboard</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">Check your global ranking</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[var(--brand-violet)] transition-colors group-hover:translate-x-1" />
          </div>
        </Link>
      </motion.div>

      {/* ── RECENT MATCHES ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="space-y-4"
      >
        <h2 className="text-sm font-black text-muted-foreground uppercase tracking-widest ml-2">
          Recent Matches
        </h2>

        {recentMatches.length === 0 ? (
          <div className="glass-card p-10 text-center rounded-3xl border border-white/5">
            <span className="text-5xl block mb-4 opacity-50">⚔️</span>
            <p className="text-lg font-bold text-foreground font-[family-name:var(--font-syne)] tracking-wide">No matches yet</p>
            <p className="text-sm text-muted-foreground mt-1">Your combat history will appear here.</p>
            <Link href="/battle" className="inline-block mt-4 px-6 py-2 rounded-full bg-[var(--brand-violet)]/20 text-[var(--brand-violet)] font-bold text-sm hover:bg-[var(--brand-violet)]/30 transition-colors">
              Play your first battle →
            </Link>
          </div>
        ) : (
          <div className="grid gap-3">
            {recentMatches.map((match) => (
              <MatchRow key={match.id} match={match} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────
// MATCH ROW
// ─────────────────────────────────────────

function MatchRow({ match }: { match: Match }) {
  const typeLabel: Record<string, string> = {
    casual: "Casual",
    ranked: "Ranked",
    coin_bet: "Coin Bet",
    daily: "Daily",
    tournament: "Tournament",
  };

  return (
    <div className={cn(
      "flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border transition-all duration-300 group hover:scale-[1.01] relative overflow-hidden",
      match.isWin
        ? "border-[var(--brand-success)]/30 bg-gradient-to-r from-[var(--brand-success)]/10 to-transparent hover:border-[var(--brand-success)]/50"
        : match.isDraw
          ? "border-border/50 bg-card/40 hover:border-white/20"
          : "border-[var(--brand-danger)]/30 bg-gradient-to-r from-[var(--brand-danger)]/10 to-transparent hover:border-[var(--brand-danger)]/50"
    )}>
      {/* Result indicator */}
      <div className={cn(
        "w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shrink-0 font-[family-name:var(--font-syne)] shadow-md",
        match.isWin ? "bg-[var(--brand-success)]/20 text-[var(--brand-success)]"
          : match.isDraw ? "bg-white/10 text-muted-foreground"
            : "bg-[var(--brand-danger)]/20 text-[var(--brand-danger)]"
      )}>
        {match.isDraw ? "D" : match.isWin ? "W" : "L"}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="text-sm sm:text-xl font-black font-[family-name:var(--font-mono)] text-foreground drop-shadow-sm">
            {match.myScore} <span className="text-muted-foreground/50 mx-1">—</span> {match.opponentScore}
          </span>
          <span className="inline-flex text-[9px] sm:text-[10px] text-muted-foreground font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/5 border border-white/10 self-start sm:self-auto">
            {typeLabel[match.type] || match.type}
          </span>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-muted-foreground truncate mt-1 sm:mt-1.5 tracking-wide">
          vs <span className="text-foreground/80">{match.opponent?.username ?? "Unknown"}</span>
        </p>
      </div>

      {/* Coin stake */}
      {match.coinStake > 0 && (
        <div className={cn(
          "flex flex-col items-end shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border",
          match.isWin 
            ? "bg-[var(--brand-success)]/10 border-[var(--brand-success)]/20 text-[var(--brand-success)]" 
            : "bg-[var(--brand-danger)]/10 border-[var(--brand-danger)]/20 text-[var(--brand-danger)]"
        )}>
          <span className="text-sm sm:text-lg font-black font-mono leading-none drop-shadow-sm">
            {match.isWin ? "+" : "-"}{match.coinStake}
          </span>
          <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest mt-1 opacity-70">Coins</span>
        </div>
      )}
    </div>
  );
}
