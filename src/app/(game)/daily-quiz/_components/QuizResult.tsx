"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Coins, Zap, Home, ChevronDown, ChevronUp, CheckCircle2, XCircle } from "lucide-react";
import { cn, formatCoins } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Dynamically import confetti (client-only, heavy)
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

interface QuizResultProps {
  score: number;
  coinsEarned: number;
  xpEarned: number;
  perfect: boolean;
  results: { questionId: string; selectedIndex: number; correct: number; isCorrect: boolean }[];
  questions: { id: string; text: string; options: string[]; category: string }[];
  answers: { questionId: string; selectedIndex: number }[];
}

export default function QuizResult({
  score, coinsEarned, xpEarned, perfect, results, questions,
}: QuizResultProps) {
  const [showConfetti, setShowConfetti] = useState(score >= 7);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    if (score >= 7) {
      const t = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(t);
    }
  }, [score]);

  const stars = score === 10 ? 3 : score >= 7 ? 2 : score >= 4 ? 1 : 0;
  const resultMap = new Map(results.map((r) => [r.questionId, r]));

  const getMessage = () => {
    if (score === 10) return { text: "PERFECT! 🔥", sub: "You're a genius!" };
    if (score >= 8) return { text: "Excellent! 🎉", sub: "Nearly flawless!" };
    if (score >= 6) return { text: "Good job! 👍", sub: "Well done!" };
    if (score >= 4) return { text: "Not bad! 💪", sub: "Keep practicing!" };
    return { text: "Keep going! 📚", sub: "You'll do better tomorrow!" };
  };

  const { text, sub } = getMessage();

  return (
    <div className="px-4 py-5 space-y-5 max-w-lg mx-auto">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          colors={["#7C3AED", "#06B6D4", "#F59E0B", "#10B981", "#ffffff"]}
        />
      )}

      {/* Score header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        {/* Stars */}
        <div className="flex justify-center gap-3 text-4xl">
          {[1, 2, 3].map((s) => (
            <motion.span
              key={s}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: s <= stars ? 1 : 0.5, rotate: 0, opacity: s <= stars ? 1 : 0.25 }}
              transition={{ delay: 0.3 + s * 0.15, type: "spring", stiffness: 200 }}
            >
              ⭐
            </motion.span>
          ))}
        </div>

        <div>
          <h1 className="text-2xl font-black font-[family-name:var(--font-syne)] gradient-text">
            {text}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{sub}</p>
        </div>

        {/* Big score */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex flex-col items-center glass-card px-8 py-4"
        >
          <span className="text-6xl font-black font-[family-name:var(--font-mono)] gradient-text">
            {score}
            <span className="text-3xl text-muted-foreground">/10</span>
          </span>
          <p className="text-xs text-muted-foreground mt-1">Correct answers</p>
        </motion.div>
      </motion.div>

      {/* Rewards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 gap-3"
      >
        <div className="glass-card p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--brand-gold)]/20 flex items-center justify-center">
            <Coins className="w-5 h-5 text-[var(--brand-gold)]" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Coins</p>
            <p className="text-lg font-black text-[var(--brand-gold)] font-[family-name:var(--font-mono)]">
              +{formatCoins(coinsEarned)}
            </p>
          </div>
        </div>
        <div className="glass-card p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--brand-violet)]/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-[var(--brand-violet)]" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">XP</p>
            <p className="text-lg font-black text-[var(--brand-violet)] font-[family-name:var(--font-mono)]">
              +{xpEarned}
            </p>
          </div>
        </div>
      </motion.div>

      {perfect && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 p-4 rounded-2xl border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/10"
        >
          <span className="text-2xl animate-coin-bounce">🏆</span>
          <div>
            <p className="font-bold text-sm text-[var(--brand-gold)]">Perfect Score Bonus!</p>
            <p className="text-xs text-muted-foreground">+50 coins & +100 XP for getting all 10 right</p>
          </div>
        </motion.div>
      )}

      {/* Answer breakdown toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="w-full flex items-center justify-between p-4 glass-card text-sm font-semibold text-foreground transition-colors hover:border-[var(--brand-violet)]/40"
        >
          <span>Review Answers</span>
          {showBreakdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <AnimatePresence>
          {showBreakdown && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-2 mt-2">
                {questions.map((q, idx) => {
                  const r = resultMap.get(q.id);
                  if (!r) return null;
                  return (
                    <div
                      key={q.id}
                      className={cn(
                        "p-3 rounded-xl border text-sm",
                        r.isCorrect
                          ? "border-[var(--brand-success)]/30 bg-[var(--brand-success)]/5"
                          : "border-[var(--brand-danger)]/30 bg-[var(--brand-danger)]/5"
                      )}
                    >
                      <div className="flex items-start gap-2">
                        {r.isCorrect
                          ? <CheckCircle2 className="w-4 h-4 text-[var(--brand-success)] shrink-0 mt-0.5" />
                          : <XCircle className="w-4 h-4 text-[var(--brand-danger)] shrink-0 mt-0.5" />
                        }
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-xs leading-snug">
                            Q{idx + 1}: {q.text}
                          </p>
                          <p className={cn(
                            "text-xs mt-1",
                            r.isCorrect ? "text-[var(--brand-success)]" : "text-[var(--brand-danger)]"
                          )}>
                            {r.selectedIndex === -1 ? "⏰ Time's up!" : `Your answer: ${q.options[r.selectedIndex]}`}
                          </p>
                          {!r.isCorrect && r.selectedIndex !== -1 && (
                            <p className="text-xs text-[var(--brand-success)] mt-0.5">
                              ✓ Correct: {q.options[r.correct]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="pb-4"
      >
        <Link href="/home">
          <Button className="w-full h-12 bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white font-bold rounded-2xl text-sm">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
