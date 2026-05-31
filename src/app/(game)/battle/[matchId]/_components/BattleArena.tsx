"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn, getAvatarUrl } from "@/lib/utils";
import { getRankFromPoints } from "@/lib/rankSystem";
import { useUserStats } from "@/context/UserStatsContext";
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
  isWaitingForOpponent?: boolean;
  isWin: boolean;
  isDraw: boolean;
  winnerId: string | null;
  coinsEarned: number;
  xpEarned: number;
  rankPointsChange: number;
  finalScore: { player1: number; player2: number };
}

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
  const [showFeedback, setShowFeedback] = useState(false);
  const [myScore, setMyScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [result, setResult] = useState<ResultData | null>(null);
  const [totalTimeLeft, setTotalTimeLeft] = useState(90); // 90 seconds overall
  const [modal, setModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: "confirm" | "alert";
    onConfirm: () => void;
    onCancel?: () => void;
  }>({
    isOpen: false,
    title: "",
    message: "",
    type: "alert",
    onConfirm: () => {},
  });
  const [loading, setLoading] = useState(true);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const completePollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Synchronize global UserStats level & coins on battle finalization
  let statsCtx: any = null;
  try { statsCtx = useUserStats(); } catch {}

  useEffect(() => {
    // If result has finalized (completed results fully computed)
    if (result && !result.isWaitingForOpponent && statsCtx?.refreshFromServer) {
      statsCtx.refreshFromServer();
    }
  }, [result, statsCtx]);
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
        
        const alreadyFinished = data.myRole === "player1" ? data.match.player1Finished : data.match.player2Finished;

        // If match is already completed or I have finished, load results immediately
        if (data.match.status === "completed" || alreadyFinished) {
          try {
            const res = await fetch(`/api/matches/${matchId}/complete`, { method: "POST" });
            const resData = await res.json();
            setResult(resData);

            if (resData.isWaitingForOpponent) {
              completePollRef.current = setInterval(async () => {
                try {
                  const resPoll = await fetch(`/api/matches/${matchId}/complete`, { method: "POST" });
                  const dataPoll = await resPoll.json();
                  if (!dataPoll.isWaitingForOpponent) {
                    clearInterval(completePollRef.current!);
                    setResult(dataPoll);
                  } else {
                    const resMatch = await fetch(`/api/matches/${matchId}`);
                    const dataMatch = await resMatch.json();
                    if (dataMatch.match) {
                      setResult({
                        ...dataPoll,
                        finalScore: {
                          player1: dataMatch.match.player1Score,
                          player2: dataMatch.match.player2Score,
                        }
                      });
                    }
                  }
                } catch (err) {
                  console.error("Failed to poll final completion status:", err);
                }
              }, 2000);
            }
          } catch (err) {
            console.error("Error loading completed match:", err);
          }
        }
        setLoading(false);
      });

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      if (completePollRef.current) clearInterval(completePollRef.current);
    };
  }, [matchId]);

  // Poll opponent score every 700ms (ultra-responsive live update!)
  useEffect(() => {
    if (!match || result) return;
    pollRef.current = setInterval(async () => {
      const res = await fetch(`/api/matches/${matchId}`);
      const data = await res.json();
      if (data.match) {
        // If match was completed (e.g. opponent surrendered or disconnected)
        if (data.match.status === "completed" || data.match.status === "abandoned") {
          if (pollRef.current) clearInterval(pollRef.current);
          const resComp = await fetch(`/api/matches/${matchId}/complete`, { method: "POST" });
          const dataComp = await resComp.json();
          setResult(dataComp);
          return;
        }

        const oppScore = myRole === "player1" ? data.match.player2Score : data.match.player1Score;
        setOpponentScore(oppScore);
      }
    }, 700);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [match, matchId, myRole, result]);

  // Overall match countdown timer (90s limit)
  useEffect(() => {
    if (loading || result) return;
    const interval = setInterval(() => {
      setTotalTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          handleAutoForfeit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [loading, result]);

  // Prevent navigating away from active battle (Link clicks & Tab Close)
  useEffect(() => {
    if (loading || result) return;

    // 1. Intercept Browser Back/Close/Refresh
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Leaving this page will forfeit the match! Are you sure you want to surrender?";
      return e.returnValue;
    };

    // 2. Intercept Sidebar/Topbar Navigation Links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor) {
        const href = anchor.getAttribute("href");
        // Intercept local links going away from this active match
        if (href && !href.startsWith("#") && !href.startsWith("javascript:") && !href.includes(`/battle/${matchId}`)) {
          e.preventDefault();
          e.stopPropagation();
          
          setModal({
            isOpen: true,
            title: "⚠️ Warning: Leaving Battle",
            message: "Are you sure you want to navigate away? Leaving the screen will forfeit this battle and declare your opponent the winner!",
            type: "confirm",
            onConfirm: async () => {
              try {
                await performSurrender(true);
                router.push(href);
              } catch (err) {
                console.error(err);
                router.push(href);
              }
            },
          });
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("click", handleLinkClick, true); // Capture phase click intercept!

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("click", handleLinkClick, true);
    };
  }, [loading, result, matchId, router]);

  async function handleAutoForfeit() {
    setLoading(true);
    try {
      const res = await fetch(`/api/matches/${matchId}/leave`, { method: "POST" });
      const data = await res.json();
      setResult(data);
      setLoading(false);
      setModal({
        isOpen: true,
        title: "⏱️ Time's Up!",
        message: "Battle overall time has expired! You surrendered the match.",
        type: "alert",
        onConfirm: () => {},
      });
    } catch (err) {
      console.error("Auto forfeit failed:", err);
      setLoading(false);
    }
  }

  async function handleAnswer(idx: number) {
    if (showFeedback || selectedAnswer !== null) return;

    // 1. INSTANT UI FEEDBACK
    setSelectedAnswer(idx);
    const preloadedCorrect = questions[currentIndex].correctAnswer;
    
    if (preloadedCorrect !== undefined) {
      setCorrectIndex(preloadedCorrect);
    }
    
    // Always show feedback immediately so the "Next" button appears and game doesn't freeze
    setShowFeedback(true);
    answeredCount.current += 1;

    // Optimistically update score instantly without network delay
    const isCorrect = idx === preloadedCorrect;
    if (isCorrect) {
      setMyScore((s) => s + 1);
    }

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
      if (pollRef.current) clearInterval(pollRef.current);
      setLoading(true);

      try {
        const res = await fetch(`/api/matches/${matchId}/complete`, { method: "POST" });
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP ${res.status}`);
        }
        const data = await res.json();
        setResult(data);
        setLoading(false);
        
        if (data.isWaitingForOpponent) {
          // Poll complete status every 2 seconds to update live score and wait until finalized
          completePollRef.current = setInterval(async () => {
            try {
              const resPoll = await fetch(`/api/matches/${matchId}/complete`, { method: "POST" });
              if (!resPoll.ok) {
                const errData = await resPoll.json().catch(() => ({}));
                throw new Error(errData.error || `HTTP ${resPoll.status}`);
              }
              const dataPoll = await resPoll.json();
              if (!dataPoll.isWaitingForOpponent) {
                clearInterval(completePollRef.current!);
                setResult(dataPoll);
              } else {
                // Poll opponent's live score from single match GET endpoint and inject into result finalScore
                const resMatch = await fetch(`/api/matches/${matchId}`);
                const dataMatch = await resMatch.json();
                if (dataMatch.match) {
                  setResult({
                    ...dataPoll,
                    finalScore: {
                      player1: dataMatch.match.player1Score,
                      player2: dataMatch.match.player2Score,
                    }
                  });
                }
              }
            } catch (err) {
              console.error("Failed to poll final completion status:", err);
            }
          }, 2000);
        }
      } catch (err: any) {
        console.error("Failed to complete match:", err);
        setModal({
          isOpen: true,
          title: "Error",
          message: err.message || "Failed to complete the battle. Please try again.",
          type: "alert",
          onConfirm: () => {},
        });
        setLoading(false);
      }
      return;
    }

    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setCorrectIndex(null);
    setShowFeedback(false);
  }

  async function performSurrender(skipSetResult = false) {
    setLoading(true);
    try {
      const res = await fetch(`/api/matches/${matchId}/leave`, { method: "POST" });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      if (!skipSetResult) {
        setResult(data);
      }
      setLoading(false);
      return data;
    } catch (err: any) {
      console.error("Failed to surrender match:", err);
      setLoading(false);
      throw err;
    }
  }

  async function handleLeave() {
    setModal({
      isOpen: true,
      title: "🏳️ Surrender Battle",
      message: "Are you sure you want to surrender? You will forfeit the match and your opponent will win!",
      type: "confirm",
      onConfirm: async () => {
        await performSurrender(false).catch((err) => {
          setModal({
            isOpen: true,
            title: "Error",
            message: err.message || "Failed to surrender match. Please try again.",
            type: "alert",
            onConfirm: () => {},
          });
        });
      },
    });
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
  const timerPct = (totalTimeLeft / 90) * 100;
  const timerColor = totalTimeLeft <= 15 ? "var(--brand-danger)" : totalTimeLeft <= 40 ? "var(--brand-gold)" : "var(--brand-cyan)";

  const me = myRole === "player1" ? match.player1 : match.player2;
  const opponent = myRole === "player1" ? match.player2 : match.player1;
  const meAvatar = me?.avatarUrl || getAvatarUrl(me?.username || "");
  const oppAvatar = opponent?.avatarUrl || getAvatarUrl(opponent?.username || "Bot");

  return (
    <div className="flex flex-col min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] w-full max-w-4xl mx-auto gap-6 sm:gap-8">

      {/* Top Header Controls: Forfeit Button */}
      <div className="flex items-center justify-end -mb-2">
        <button
          onClick={handleLeave}
          className="text-[10px] sm:text-xs font-bold text-slate-400 hover:text-red-400 transition-all duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-red-500/10 border border-white/5 hover:border-red-500/20 active:scale-95 no-tap cursor-pointer"
        >
          🏳️ Surrender Battle
        </button>
      </div>

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

        {/* VS + Battle Timer */}
        <div className="flex flex-col items-center gap-2 shrink-0 px-2 sm:px-4 relative z-10">
          <div
            className="text-base sm:text-2xl font-black px-4 sm:px-6 py-1 sm:py-2 rounded-xl sm:rounded-2xl flex items-center justify-center min-w-[60px] sm:min-w-[100px] transition-colors animate-pulse"
            style={{ color: timerColor, background: `${timerColor}20`, border: `2px solid ${timerColor}40` }}
          >
            {totalTimeLeft}s
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
      {/* Premium Custom Modal Dialog */}
      <AnimatePresence>
        {modal.isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card w-full max-w-md p-6 border border-white/10 shadow-2xl relative flex flex-col gap-4 text-center rounded-3xl"
            >
              {/* Header Title */}
              <h3 className="text-xl font-black font-[family-name:var(--font-syne)] text-white tracking-wide">
                {modal.title}
              </h3>
              
              {/* Message */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {modal.message}
              </p>
              
              {/* Action Buttons */}
              <div className="flex gap-3 justify-center mt-2">
                {modal.type === "confirm" && (
                  <button
                    onClick={() => {
                      setModal((m) => ({ ...m, isOpen: false }));
                      if (modal.onCancel) modal.onCancel();
                    }}
                    className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                )}
                <button
                  onClick={() => {
                    setModal((m) => ({ ...m, isOpen: false }));
                    modal.onConfirm();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-amber-600 hover:opacity-90 text-white text-xs font-black transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)] cursor-pointer"
                >
                  {modal.type === "confirm" ? "Surrender" : "OK"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
