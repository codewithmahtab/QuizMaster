"use client";

import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Swords, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import rankIcon from "@/assets/rank.png";

type BattleMode = { key: string; label: string; description: string; icon: ReactNode; gradient: string; coinStake: number; badge?: string };

const MODES: BattleMode[] = [
  {
    key: "casual",
    label: "Casual",
    description: "Play for fun, no coins at stake",
    icon: "⚔️",
    gradient: "from-[#7C3AED]/30 to-[#06B6D4]/20",
    coinStake: 0,
    badge: "FREE",
  },
  {
    key: "ranked",
    label: "Ranked",
    description: "Earn & lose Ranked Points",
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={rankIcon.src} alt="Ranked" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-md" />
    ),
    gradient: "from-[#F59E0B]/30 to-[#EF4444]/20",
    coinStake: 0,
    badge: "RATED",
  },
  {
    key: "coin_bet",
    label: "Coin Bet (10)",
    description: "Wager 10 coins. Winner gets 18",
    icon: "🪙",
    gradient: "from-[#10B981]/30 to-[#A855F7]/20",
    coinStake: 10,
    badge: "HOT",
  },
];

export default function BattleHome() {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<BattleMode>(MODES[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePlay() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/matches/queue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: selectedMode.key, coinStake: selectedMode.coinStake }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to find match");

      // Go to matchmaking screen with matchId
      router.push(`/battle/matchmaking?matchId=${data.matchId}&joined=${data.joined}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-7xl px-0 sm:px-2 mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-xl sm:text-3xl sm:text-4xl font-black font-[family-name:var(--font-syne)] text-white">
          1v1 Battle Arena
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">Challenge real players in real-time battles</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 sm:gap-10">
        {/* Left Column: Mode Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7 space-y-4"
        >
          <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest">Select Mode</p>
          <div className="space-y-3 sm:space-y-4">
            {MODES.map((mode, i) => (
              <motion.button
                key={mode.key}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelectedMode(mode)}
                className={cn(
                  "w-full flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border-2 transition-all duration-200 text-left cursor-pointer",
                  selectedMode.key === mode.key
                    ? "border-[var(--brand-violet)] shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                    : "border-border/40 hover:border-border"
                )}
                style={{
                  background: selectedMode.key === mode.key
                    ? "color-mix(in oklch, var(--brand-violet) 15%, transparent)"
                    : "var(--card)"
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/5 shrink-0">
                  {typeof mode.icon === 'string' ? (
                    <span className="text-2xl sm:text-3xl">{mode.icon}</span>
                  ) : (
                    mode.icon
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <p className="font-bold text-foreground text-base sm:text-lg font-[family-name:var(--font-syne)]">
                      {mode.label}
                    </p>
                    
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{mode.description}</p>
                </div>
                {selectedMode.key === mode.key && (
                  <div className="w-6 h-6 rounded-full bg-[var(--brand-violet)] flex items-center justify-center shrink-0 shadow-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Info & Action */}
        <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 pt-2 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 sm:p-8 space-y-4"
          >
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">How it works</p>
            <ul className="space-y-3 list-disc pl-5 text-sm sm:text-base text-muted-foreground font-medium marker:text-white/30">
              <li>We find you an opponent instantly</li>
              <li>10 questions, 15 seconds each</li>
              <li>Most correct answers wins</li>
              <li>{selectedMode.coinStake > 0 ? `Winner gets ${Math.floor(selectedMode.coinStake * 1.8)} coins (+${selectedMode.coinStake * 0.8} profit)` : "Earn XP and ranking points"}</li>
            </ul>
          </motion.div>

          {error && (
            <div className="flex items-center gap-3 text-destructive text-sm font-medium bg-destructive/10 border border-destructive/20 rounded-2xl px-5 py-4">
              <AlertCircle className="w-5 h-5 shrink-0" />
              {error}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Button
              onClick={handlePlay}
              disabled={loading}
              className="w-full h-16 sm:h-20 text-lg sm:text-xl font-black tracking-wide rounded-2xl sm:rounded-[2rem] bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white glow-violet transition-all cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center gap-3">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Finding match...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  <Swords className="w-6 h-6" />
                  PLAY NOW
                </span>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
