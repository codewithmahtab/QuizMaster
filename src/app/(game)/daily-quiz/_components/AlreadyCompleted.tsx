"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Coins, Zap, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCoins } from "@/lib/utils";

interface AlreadyCompletedProps {
  score: number;
  coinsEarned: number;
  xpEarned: number;
}

export default function AlreadyCompleted({ score, coinsEarned, xpEarned }: AlreadyCompletedProps) {
  const stars = score >= 9 ? 3 : score >= 6 ? 2 : 1;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="space-y-6 max-w-sm w-full"
      >
        {/* Stars */}
        <div className="flex justify-center gap-2 text-4xl">
          {[1, 2, 3].map((s) => (
            <motion.span
              key={s}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: s <= stars ? 1 : 0.6, rotate: 0, opacity: s <= stars ? 1 : 0.3 }}
              transition={{ delay: s * 0.1, type: "spring" }}
            >
              ⭐
            </motion.span>
          ))}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            Already done for today!
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">Come back tomorrow for a new set 📅</p>
        </div>

        {/* Score card */}
        <div className="glass-card p-5 space-y-4">
          <div className="text-center">
            <span className="text-5xl font-black font-[family-name:var(--font-mono)] gradient-text">
              {score}/10
            </span>
            <p className="text-sm text-muted-foreground mt-1">Today's score</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20 rounded-xl px-3 py-2">
              <Coins className="w-4 h-4 text-[var(--brand-gold)]" />
              <div>
                <p className="text-xs text-muted-foreground">Earned</p>
                <p className="font-bold text-sm text-[var(--brand-gold)]">{formatCoins(coinsEarned)} coins</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[var(--brand-violet)]/10 border border-[var(--brand-violet)]/20 rounded-xl px-3 py-2">
              <Zap className="w-4 h-4 text-[var(--brand-violet)]" />
              <div>
                <p className="text-xs text-muted-foreground">Earned</p>
                <p className="font-bold text-sm text-[var(--brand-violet)]">{xpEarned} XP</p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/home">
          <Button className="w-full bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white font-bold rounded-xl h-11">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
