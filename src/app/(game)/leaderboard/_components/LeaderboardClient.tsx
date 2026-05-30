"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn, getAvatarUrl, formatCoins } from "@/lib/utils";
import { getRankFromPoints } from "@/lib/rankSystem";
import { Loader2 } from "lucide-react";

interface LeaderboardEntry {
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

type TabType = "global" | "weekly" | "monthly";

const TABS: { key: TabType; label: string; emoji: string }[] = [
  { key: "global", label: "GLOBAL", emoji: "🌍" },
  { key: "weekly", label: "WEEKLY", emoji: "📅" },
  { key: "monthly", label: "MONTHLY", emoji: "🗓️" },
];

const MEDAL = ["🥇", "🥈", "🥉"];

export default function LeaderboardClient({ currentUserId }: { currentUserId: string | null }) {
  const [tab, setTab] = useState<TabType>("global");
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`/api/leaderboard?type=${tab}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setEntries(data);
      })
      .catch((e) => setError(e.message || "Failed to load"))
      .finally(() => setLoading(false));
  }, [tab]);

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);
  const myEntry = entries.find((e) => e.userId === currentUserId);
  const myRank = myEntry?.rank ?? null;

  return (
    <div className="flex flex-col min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] w-full max-w-7xl mx-auto gap-8 sm:gap-10">

      {/* Header & Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-3 sm:gap-4 pt-2">
        <div className="flex justify-start">
          <h1 className="text-xl sm:text-3xl font-black font-[family-name:var(--font-syne)] text-white tracking-wide z-10">
            Leaderboard
          </h1>
        </div>

        {/* Small Compact Tabs */}
        <div className="flex justify-start md:justify-center w-full">
          <div className="flex gap-1 p-1 bg-slate-950/50 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/5 shadow-xl w-full sm:w-auto">
            {TABS.map(({ key, label, emoji }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={cn(
                  "flex-1 sm:flex-none flex items-center justify-center px-2 sm:px-6 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-bold transition-all duration-300 cursor-pointer",
                  tab === key
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.4)] scale-[1.02] border border-white/20"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                )}
              >
                <span className="tracking-wider">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:block" />
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-[var(--brand-cyan)]" />
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground animate-pulse">Loading rankings...</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center py-12">
          <p className="text-[var(--brand-danger)] font-bold">{error}</p>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && entries.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <span className="text-6xl block opacity-50">🏜️</span>
          <p className="text-muted-foreground text-lg font-bold uppercase tracking-widest">No data yet</p>
          <p className="text-sm text-muted-foreground">Play ranked matches to appear here!</p>
        </div>
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        {!loading && !error && entries.length > 0 && (
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* ── TOP 3 PODIUM ── */}
            {top3.length > 0 && (
              <div className="flex items-end justify-center gap-2 sm:gap-4 pt-6 pb-8 border-b border-white/5">
                {/* 2nd — left */}
                {top3[1] && (
                  <PodiumCard entry={top3[1]} medal="🥈" height="h-28 sm:h-36" isMe={top3[1].userId === currentUserId} delay={0.1} />
                )}
                {/* 1st — center (tallest) */}
                {top3[0] && (
                  <PodiumCard entry={top3[0]} medal="🥇" height="h-36 sm:h-48" isMe={top3[0].userId === currentUserId} delay={0} crown />
                )}
                {/* 3rd — right */}
                {top3[2] && (
                  <PodiumCard entry={top3[2]} medal="🥉" height="h-20 sm:h-28" isMe={top3[2].userId === currentUserId} delay={0.2} />
                )}
              </div>
            )}

            {/* ── RANK LIST (4–100) ── */}
            {rest.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-4 ml-4">
                  Global Rankings
                </h3>
                <div className="grid gap-3">
                  {rest.map((entry, i) => (
                    <motion.div
                      key={entry.userId}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <RankRow entry={entry} isMe={entry.userId === currentUserId} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── MY RANK PINNED (if not in top 100 or just highlight) ── */}
            {myEntry && myRank && myRank > 3 && (
              <div className="fixed sm:sticky bottom-20 sm:bottom-6 left-0 right-0 px-4 sm:px-0 z-50 pt-2 pb-6 sm:pb-0 pointer-events-none">
                <div className="relative max-w-4xl mx-auto pointer-events-auto">
                  <div className="absolute inset-0 bg-background/90 blur-xl rounded-3xl" />
                  <div className="relative border border-[var(--brand-cyan)]/40 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    <RankRow entry={myEntry} isMe />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// ─────────────────────────────────────────
// PODIUM CARD
// ─────────────────────────────────────────

function PodiumCard({
  entry, medal, height, isMe, delay, crown
}: {
  entry: LeaderboardEntry;
  medal: string;
  height: string;
  isMe: boolean;
  delay: number;
  crown?: boolean;
}) {
  const rank = getRankFromPoints(entry.rankedPoints);
  const avatar = entry.avatarUrl || getAvatarUrl(entry.username);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "flex flex-col items-center gap-2 sm:gap-3 flex-1 min-w-[70px] max-w-[100px] sm:max-w-[120px] relative group",
        isMe ? "scale-105 sm:scale-110 z-10" : "z-0"
      )}
    >
      <span className="text-xl sm:text-3xl drop-shadow-lg">{medal}</span>

      {/* Avatar */}
      <div className={cn(
        "w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 transition-all duration-300 shadow-xl",
        isMe ? "border-[var(--brand-cyan)] shadow-[0_0_20px_rgba(6,182,212,0.5)]" : "border-white/10 group-hover:border-white/30 group-hover:-translate-y-1"
      )} style={{ borderColor: isMe ? undefined : rank.color + "90" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar} alt={entry.username} className="w-full h-full object-cover" />
      </div>

      <div className="text-center w-full">
        <p className={cn(
          "text-[10px] sm:text-sm font-bold truncate px-1 tracking-wide",
          isMe ? "text-[var(--brand-cyan)]" : "text-foreground"
        )}>
          {isMe ? "You" : entry.username}
        </p>
        <p className="text-[9px] sm:text-[10px] font-mono font-bold text-muted-foreground mt-0.5">
          {formatCoins(entry.rankedPoints)} pts
        </p>
      </div>

      {/* Podium base */}
      <div className={cn(
        "w-full rounded-t-xl sm:rounded-t-2xl relative overflow-hidden",
        height,
        "flex flex-col items-center justify-start pt-2 sm:pt-4 transition-all duration-500"
      )}
        style={{
          background: medal === "🥇"
            ? "linear-gradient(180deg, rgba(234, 179, 8, 0.25), rgba(234, 179, 8, 0.02))"
            : medal === "🥈"
              ? "linear-gradient(180deg, rgba(168, 162, 158, 0.25), rgba(168, 162, 158, 0.02))"
              : "linear-gradient(180deg, rgba(180, 83, 9, 0.25), rgba(180, 83, 9, 0.02))",
          border: `1px solid ${medal === "🥇" ? "rgba(234, 179, 8, 0.3)" : medal === "🥈" ? "rgba(168, 162, 158, 0.3)" : "rgba(180, 83, 9, 0.3)"}`,
          borderBottom: "none",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] sm:h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
        <span className="text-lg sm:text-2xl font-black font-[family-name:var(--font-syne)] text-white/90 drop-shadow-md">#{entry.rank}</span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────
// RANK ROW
// ─────────────────────────────────────────

function RankRow({ entry, isMe }: { entry: LeaderboardEntry; isMe: boolean }) {
  const rank = getRankFromPoints(entry.rankedPoints);
  const avatar = entry.avatarUrl || getAvatarUrl(entry.username);

  return (
    <div className={cn(
      "flex items-center gap-2 sm:gap-4 px-2.5 sm:px-5 py-2 sm:py-3 rounded-2xl border transition-all duration-300 relative overflow-hidden group hover:scale-[1.01]",
      isMe
        ? "border-[var(--brand-cyan)]/50 bg-gradient-to-r from-[var(--brand-cyan)]/10 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        : "border-white/5 bg-slate-950/40 hover:bg-slate-900/60 hover:border-white/10"
    )}>

      {/* Rank number */}
      <div className="w-6 sm:w-10 text-center shrink-0">
        <span className={cn(
          "text-xs sm:text-base font-black font-[family-name:var(--font-syne)] transition-colors",
          isMe ? "text-[var(--brand-cyan)]" : "text-muted-foreground group-hover:text-white"
        )}>
          #{entry.rank}
        </span>
      </div>

      {/* Avatar */}
      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-white/10 shrink-0 shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar} alt={entry.username} className="w-full h-full object-cover" />
      </div>

      {/* Name + rank tier */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <p className={cn(
            "text-sm sm:text-base font-bold truncate tracking-wide",
            isMe ? "text-[var(--brand-cyan)]" : "text-foreground group-hover:text-white transition-colors"
          )}>
            {isMe ? `${entry.username} (You)` : entry.username}
          </p>
          <span className="text-xs shrink-0 drop-shadow-md" title={rank.label}>{rank.icon}</span>
        </div>
        <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
          LVL {entry.level} <span className="opacity-50 mx-1">|</span> {entry.winRate}% WR
        </p>
      </div>

      {/* Points */}
      <div className="text-right shrink-0 bg-black/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/5">
        <p className="text-sm sm:text-base font-black font-mono leading-none drop-shadow-md" style={{ color: rank.color }}>
          {formatCoins(entry.rankedPoints)}
        </p>
        <p className="text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-widest font-bold mt-0.5">Pts</p>
      </div>
    </div>
  );
}
