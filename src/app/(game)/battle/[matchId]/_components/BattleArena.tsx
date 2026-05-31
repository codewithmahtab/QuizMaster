"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn, getAvatarUrl } from "@/lib/utils";
import { getRankFromPoints } from "@/lib/rankSystem";
import BattleResult from "./BattleResult";

interface Player {
  id: string;
  username: string;
  avatarUrl: string | null;
  level: number;
  rankedPoints: number;
}

interface Question {
  id: string;
  text: string;
  options: string[];
  category: string;
  difficulty: string;
  correctAnswer: number;
}

interface MatchData {
  id: string;
  type: string;
  status: string;
  player1: Player;
  player2: Player | null;
  player1Score: number;
  player2Score: number;
  winnerId: string | null;
  coinStake: number;
}

interface ResultData {
  isWin: boolean;
  isDraw: boolean;
  winnerId: string | null;
  coinsEarned: number;
  xpEarned: number;
  rankPointsChange: number;
  finalScore: { player1: number; player2: number };
}

const QUESTION_TIME = 15;
const OPTION_LABELS = ["A", "B", "C", "D"];

interface BattleArenaProps {
  matchId: string;
  currentUserId: string;
}

export default function BattleArena({ matchId, currentUserId }: BattleArenaProps) {
  const router = useRouter();
  const [match, setMatch] = useState<MatchData | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [myRole, setMyRole] = useState<"player1" | "player2">("player1");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctIndex, setCorrectIndex] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [showFeedback, setShowFeedback] = useState(false);
  const [myScore, setMyScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const answeredCount = useRef(0);

  // Load match data once
  useEffect(() => {
    fetch(`/api/matches/${matchId}`)
      .then((r) => r.json())
      .then(async (data) => {
        setMatch(data.match);
        setQuestions(data.questions);
        setMyRole(data.myRole);
        setMyScore(data.myRole === "player1" ? data.match.player1Score : data.match.player2Score);
        setOpponentScore(data.myRole === "player1" ? data.match.player2Score : data.match.player1Score);
        
        // If match is already completed, load results immediately
        if (data.match.status === "completed") {
          try {
            const res = await fetch(`/api/matches/${matchId}/complete`, { method: "POST" });
            const resData = await res.json();
            setResult(resData);
          } catch (err) {
            console.error("Error loading completed match:", err);
          }
        }
        setLoading(false);
      });
  }, [matchId]);

  // Poll opponent score every 2s
  useEffect(() => {
    if (!match) return;
    pollRef.current = setInterval(async () => {
      const res = await fetch(`/api/matches/${matchId}`);
      const data = await res.json();
      if (data.match) {
        const oppScore = myRole === "player1" ? data.match.player2Score : data.match.player1Score;
        setOpponentScore(oppScore);
      }
    }, 2000);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [match, matchId, myRole]);

  const handleTimeUp = useCallback(() => {
    if (showFeedback) return;
    setSelectedAnswer(-1);
    setCorrectIndex(null);
    setShowFeedback(true);
  }, [showFeedback]);

  // Timer per question
  useEffect(() => {
    if (loading || showFeedback || result) return;
    setTimeLeft(QUESTION_TIME);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          handleTimeUp();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [loading, currentIndex, showFeedback, result, handleTimeUp]);

  async function handleAnswer(idx: number) {
    if (showFeedback || selectedAnswer !== null) return;
    if (timerRef.current) clearInterval(timerRef.current);

    // 1. INSTANT UI FEEDBACK
    setSelectedAnswer(idx);
    const preloadedCorrect = questions[currentIndex].correctAnswer;
    
    if (preloadedCorrect !== undefined) {
      setCorrectIndex(preloadedCorrect);
    }
    
    // Always show feedback immediately so the "Next" button appears and game doesn't freeze
    setShowFeedback(true);
    answeredCount.current += 1;

    // 2. BACKGROUND SERVER SYNC
    try {
      const res = await fetch(`/api/matches/${matchId}/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: questions[currentIndex].id, selectedIndex: idx }),
      });
      
      if (!res.ok) throw new Error("Fetch failed");
      
      const data = await res.json();

      // 3. FALLBACK & SCORE SYNC
      if (data.correctIndex !== undefined) {
        setCorrectIndex(data.correctIndex);
      }

      if (data.myScore !== undefined) {
        setMyScore(data.myScore);
      }
    } catch (err) {
      console.error("Failed to sync answer:", err);
      // Even on failure, the game won't stop because showFeedback is already true!
    }
  }

  async function handleNext() {
    const isLastQuestion = currentIndex >= questions.length - 1;

    if (isLastQuestion) {
      // Complete the match
      if (pollRef.current) clearInterval(pollRef.current);
      const res = await fetch(`/api/matches/${matchId}/complete`, { method: "POST" });
      const data = await res.json();
      setResult(data);
      return;
    }

    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setCorrectIndex(null);
    setShowFeedback(false);
  }

  if (loading || !match) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="w-10 h-10 rounded-full border-4 border-[var(--brand-violet)]/30 border-t-[var(--brand-violet)] animate-spin" />
      </div>
    );
  }

  if (result) {
    return (
      <BattleResult
        result={result}
        match={match}
        myRole={myRole}
        questions={questions}
      />
    );
  }

  const q = questions[currentIndex];
  const timerPct = (timeLeft / QUESTION_TIME) * 100;
  const timerColor = timeLeft <= 5 ? "var(--brand-danger)" : timeLeft <= 10 ? "var(--brand-gold)" : "var(--brand-cyan)";

  const me = myRole === "player1" ? match.player1 : match.player2;
  const opponent = myRole === "player1" ? match.player2 : match.player1;
  const meAvatar = me?.avatarUrl || getAvatarUrl(me?.username || "");
  const oppAvatar = opponent?.avatarUrl || getAvatarUrl(opponent?.username || "Bot");

  return (
    <div className="flex flex-col min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] w-full max-w-4xl mx-auto gap-6 sm:gap-8">

      {/* ── TOP: Player scores (Fighter HUD) ── */}
      <div className="sticky top-16 sm:top-20 z-40 flex items-center justify-between sm:gap-4 bg-slate-950/80 p-2 sm:p-6 rounded-sm border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Glow effect behind */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-r from-[var(--brand-cyan)]/10 via-transparent to-[var(--brand-danger)]/10 blur-xl pointer-events-none" />

        {/* Me */}
        <div className="flex items-center gap-3 sm:gap-5 flex-1 relative z-10">
          <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={meAvatar} alt="You" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[10px] sm:text-sm font-bold text-[var(--brand-cyan)] uppercase tracking-wider">You</p>
            <p className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-syne)] text-white leading-none mt-1">
              {myScore}
            </p>
          </div>
        </div>

        {/* VS + Timer */}
        <div className="flex flex-col items-center gap-2 shrink-0 px-2 sm:px-4 relative z-10">
          <div
            className="text-base sm:text-2xl font-black px-4 sm:px-6 py-1 sm:py-2 rounded-xl sm:rounded-2xl flex items-center justify-center min-w-[60px] sm:min-w-[100px] transition-colors"
            style={{ color: timerColor, background: `${timerColor}20`, border: `2px solid ${timerColor}40` }}
          >
            {timeLeft}s
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground font-black uppercase tracking-widest">
            Q {currentIndex + 1}/10
          </span>
        </div>

        {/* Opponent */}
        <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-end relative z-10">
          <div className="text-right">
            <p className="text-[10px] sm:text-sm font-bold text-[var(--brand-danger)] uppercase tracking-wider truncate max-w-[70px] sm:max-w-[150px]">
              {opponent?.username || "Waiting..."}
            </p>
            <p className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-syne)] text-white leading-none mt-1">
              {opponentScore}
            </p>
          </div>
          <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={oppAvatar} alt={opponent?.username || "Opponent"} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Progress bar inside HUD */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/10 overflow-hidden z-20">
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg, var(--brand-violet), var(--brand-cyan))" }}
            animate={{ width: `${((currentIndex) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Category */}
      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground font-bold px-2 border border-border/50 rounded-full self-start">
        {q?.category}
      </span>

      {/* Question + answers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-3 flex-1"
        >
          {/* Question */}
          <div className="glass-card p-6 sm:p-10 min-h-[100px] sm:min-h-[100px] flex items-center justify-center text-center shadow-xl">
            <p className="text-base sm:text-2xl font-black font-[family-name:var(--font-syne)] text-white leading-relaxed">{q?.text}</p>
          </div>

          {/* Answers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-2">
            {q?.options.map((option, idx) => {
              let cls = "";
              // Once server responds, show correct/wrong
              if (showFeedback) {
                if (idx === correctIndex) {
                  cls = "answer-correct !bg-[var(--brand-success)]/20 !border-[var(--brand-success)]";
                } else if (idx === selectedAnswer && idx !== correctIndex) {
                  cls = "answer-wrong !bg-[var(--brand-danger)]/20 !border-[var(--brand-danger)]";
                }
              } 
              // Optimistic instant visual feedback while waiting for server
              else if (idx === selectedAnswer) {
                cls = "!border-[var(--brand-violet)] !bg-[var(--brand-violet)]/20 shadow-[0_0_15px_rgba(124,58,237,0.3)] opacity-80 scale-[0.98]";
              }

              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleAnswer(idx)}
                  disabled={showFeedback || selectedAnswer !== null}
                  className={cn(
                    "w-full py-4 sm:py-5 px-4 sm:px-6 rounded-2xl sm:rounded-3xl border-2 text-left transition-all duration-200",
                    "flex items-center gap-4 no-tap cursor-pointer",
                    "bg-card/40 border-border/50 hover:border-[var(--brand-violet)]/80 hover:bg-white/5",
                    "disabled:cursor-default",
                    cls
                  )}
                >
                  <span className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-black shrink-0 transition-colors",
                    showFeedback && idx === correctIndex ? "bg-[var(--brand-success)] text-white"
                      : showFeedback && idx === selectedAnswer ? "bg-[var(--brand-danger)] text-white"
                        : !showFeedback && idx === selectedAnswer ? "bg-[var(--brand-violet)] text-white animate-pulse"
                          : "bg-muted/50 text-muted-foreground"
                  )}>
                    {OPTION_LABELS[idx]}
                  </span>
                  <span className="text-sm sm:text-lg font-bold text-white leading-snug">{option}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Next */}
          <AnimatePresence>
            {showFeedback && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className={cn(
                  "w-full h-14 sm:h-16 mt-4 rounded-2xl sm:rounded-[2rem] font-black text-sm sm:text-lg text-white cursor-pointer shadow-xl",
                  "flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:opacity-90",
                  currentIndex >= questions.length - 1
                    ? "bg-[var(--brand-success)]"
                    : "bg-[var(--brand-violet)]"
                )}
              >
                {currentIndex >= questions.length - 1 ? "FINISH BATTLE" : "NEXT QUESTION →"}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
