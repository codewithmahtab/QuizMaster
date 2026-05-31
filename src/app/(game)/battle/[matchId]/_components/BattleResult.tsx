"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Coins, Zap, Home, RotateCcw, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatCoins, getAvatarUrl } from "@/lib/utils";

const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

interface BattleResultProps {
  result: {
    isWaitingForOpponent?: boolean;
    isWin: boolean;
    isDraw: boolean;
    winnerId: string | null;
    coinsEarned: number;
    xpEarned: number;
    rankPointsChange: number;
    finalScore: { player1: number; player2: number };
  };
  match: {
    id: string;
    type: string;
    player1: { id: string; username: string; avatarUrl: string | null } | null;
    player2: { id: string; username: string; avatarUrl: string | null } | null;
    player1Score: number;
    player2Score: number;
    coinStake: number;
  };
  myRole: "player1" | "player2";
  questions: { id: string }[];
}

export default function BattleResult({ result, match, myRole }: BattleResultProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(result.isWin && !result.isWaitingForOpponent);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    if (result.isWin && !result.isWaitingForOpponent) {
      setShowConfetti(true);
      const t = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(t);
    } else {
      setShowConfetti(false);
    }
  }, [result.isWin, result.isWaitingForOpponent]);

  const me = myRole === "player1" ? match.player1 : match.player2;
  const opponent = myRole === "player1" ? match.player2 : match.player1;
  const myScore = result.finalScore
    ? (myRole === "player1" ? result.finalScore.player1 : result.finalScore.player2)
    : (myRole === "player1" ? match.player1Score : match.player2Score);
  const oppScore = result.finalScore
    ? (myRole === "player1" ? result.finalScore.player2 : result.finalScore.player1)
    : (myRole === "player1" ? match.player2Score : match.player1Score);
  const meAvatar = me?.avatarUrl || getAvatarUrl(me?.username || "");
  const oppAvatar = opponent?.avatarUrl || getAvatarUrl(opponent?.username || "Bot");

  const statusConfig = result.isWaitingForOpponent
    ? { emoji: "⏳", label: "PLAYING...", color: "text-[var(--brand-cyan)] animate-pulse", bg: "from-[var(--brand-cyan)]/20 to-transparent" }
    : result.isDraw
      ? { emoji: "🤝", label: "DRAW!", color: "text-[var(--brand-gold)]", bg: "from-[var(--brand-gold)]/20 to-transparent" }
      : result.isWin
        ? { emoji: "🏆", label: "VICTORY!", color: "text-[var(--brand-success)]", bg: "from-[var(--brand-success)]/20 to-transparent" }
        : { emoji: "💀", label: "DEFEAT", color: "text-[var(--brand-danger)]", bg: "from-[var(--brand-danger)]/20 to-transparent" };

  return (
    <div className="px-4 py-5 space-y-5 max-w-3xl mx-auto">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={180}
          colors={["#7C3AED", "#06B6D4", "#F59E0B", "#10B981"]}
        />
      )}

      {/* Result header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className={cn(
          "relative overflow-hidden rounded-2xl p-6 text-center",
          `bg-gradient-to-b ${statusConfig.bg}`,
          "border border-white/10"
        )}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
          className="text-6xl mb-2"
        >
          {statusConfig.emoji}
        </motion.div>
        <h1 className={cn("text-3xl font-black font-[family-name:var(--font-syne)]", statusConfig.color)}>
          {statusConfig.label}
        </h1>
      </motion.div>

      {/* Score comparison */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-5"
      >
        <div className="flex items-center justify-between">
          {/* Me */}
          <div className="flex flex-col items-center gap-2">
            <div className={cn(
              "w-14 h-14 rounded-2xl overflow-hidden border-2",
              result.isWaitingForOpponent ? "border-[var(--brand-cyan)] glow-cyan" : result.isWin ? "border-[var(--brand-success)] glow-cyan" : "border-border/50"
            )}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={meAvatar} alt="You" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs font-bold text-[var(--brand-cyan)]">You</p>
          </div>

          {/* Scores */}
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className={cn(
                "text-5xl font-black font-[family-name:var(--font-mono)]",
                result.isWaitingForOpponent ? "text-[var(--brand-cyan)]" : result.isWin ? "text-[var(--brand-success)]" : "text-foreground"
              )}
            >
              {myScore}
            </motion.span>
            <span className="text-2xl text-muted-foreground font-bold">—</span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className={cn(
                "text-5xl font-black font-[family-name:var(--font-mono)]",
                result.isWaitingForOpponent ? "text-[var(--brand-danger)] animate-pulse" : !result.isWin && !result.isDraw ? "text-[var(--brand-danger)]" : "text-foreground"
              )}
            >
              {oppScore}
            </motion.span>
          </div>

          {/* Opponent */}
          <div className="flex flex-col items-center gap-2">
            <div className={cn(
              "w-14 h-14 rounded-2xl overflow-hidden border-2",
              result.isWaitingForOpponent ? "border-dashed border-[var(--brand-danger)]/60 animate-pulse" : !result.isWin && !result.isDraw ? "border-[var(--brand-danger)] " : "border-border/50"
            )}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={oppAvatar} alt={opponent?.username || "Bot"} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs font-bold text-[var(--brand-danger)] truncate max-w-[70px]">
              {opponent?.username || "Bot"}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Rewards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="w-full"
      >
        {result.isWaitingForOpponent ? (
          <div className="rounded-2xl p-5 border border-dashed border-white/10 bg-slate-900/60 text-center flex flex-col items-center gap-3 relative overflow-hidden shadow-xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--brand-cyan)]/5 blur-[50px] pointer-events-none rounded-full" />
            <div className="w-6 h-6 rounded-full border-2 border-t-[var(--brand-cyan)] border-white/10 animate-spin shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-black text-white tracking-wide uppercase">Calculating match rewards...</p>
              <p className="text-[11px] text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Your coins, XP, and rank points will be updated and awarded automatically as soon as your opponent finishes their quiz.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                icon: <Coins className="w-4 h-4" />,
                label: "Coins",
                value: result.coinsEarned >= 0 ? `+${formatCoins(result.coinsEarned)}` : `${result.coinsEarned}`,
                color: result.coinsEarned >= 0 ? "text-[var(--brand-gold)]" : "text-[var(--brand-danger)]",
                bg: result.coinsEarned >= 0 ? "bg-[var(--brand-gold)]/10" : "bg-[var(--brand-danger)]/10",
              },
              {
                icon: <Zap className="w-4 h-4" />,
                label: "XP",
                value: `+${result.xpEarned}`,
                color: "text-[var(--brand-violet)]",
                bg: "bg-[var(--brand-violet)]/10",
              },
              {
                icon: result.rankPointsChange >= 0
                  ? <TrendingUp className="w-4 h-4" />
                  : <TrendingDown className="w-4 h-4" />,
                label: "Rank Pts",
                value: result.rankPointsChange >= 0 ? `+${result.rankPointsChange}` : `${result.rankPointsChange}`,
                color: result.rankPointsChange >= 0 ? "text-[var(--brand-success)]" : "text-[var(--brand-danger)]",
                bg: result.rankPointsChange >= 0 ? "bg-[var(--brand-success)]/10" : "bg-[var(--brand-danger)]/10",
              },
            ].map(({ icon, label, value, color, bg }) => (
              <div key={label} className={cn("rounded-2xl p-3 text-center border border-white/8", bg)}>
                <div className={cn("flex justify-center mb-1", color)}>{icon}</div>
                <p className={cn("text-base font-black font-[family-name:var(--font-mono)]", color)}>{value}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {result.isWaitingForOpponent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-3 bg-[var(--brand-cyan)]/10 border border-[var(--brand-cyan)]/20 py-3 px-4 rounded-2xl"
        >
          <div className="w-4.5 h-4.5 rounded-full border-2 border-t-[var(--brand-cyan)] border-white/10 animate-spin shrink-0" />
          <span className="text-xs font-bold text-[var(--brand-cyan)] tracking-wide animate-pulse">
            Waiting for {opponent?.username || "opponent"} to finish. Results update automatically!
          </span>
        </motion.div>
      )}

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 gap-3 pb-4"
      >
        <Link href="/battle">
          <Button variant="outline" className="w-full h-11 rounded-2xl font-bold border-border/50 hover:border-[var(--brand-violet)]">
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
        </Link>
        <Link href="/home">
          <Button className="w-full h-11 rounded-2xl font-bold bg-[var(--brand-violet)] text-white hover:bg-[var(--brand-violet)]/90">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
