"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GENERAL_QUESTIONS, GeneralQuestion } from "@/lib/generalQuestions";

interface CategoryMeta {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  desc: string;
}

const CATEGORY_METAS: CategoryMeta[] = [
  {
    id: "world",
    name: "World GK",
    icon: "🌍",
    gradient: "from-[#3B82F6] to-[#10B981]",
    desc: "Explore capitals, oceans, and global wonders.",
  },
  {
    id: "science",
    name: "Science",
    icon: "🧪",
    gradient: "from-[#10B981] to-[#F59E0B]",
    desc: "Test your knowledge of physics, chemistry, and biology.",
  },
  {
    id: "computer",
    name: "Computer Science",
    icon: "💻",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
    desc: "Master keyboard shortcuts, operating systems, and coding.",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    icon: "💊",
    gradient: "from-[#EF4444] to-[#3B82F6]",
    desc: "Dive deep into medical terms, vitamins, and drug actions.",
  },
  {
    id: "mixed",
    name: "Mixed Trivia",
    icon: "🔮",
    gradient: "from-[#F59E0B] to-[#8B5CF6]",
    desc: "A combined challenge spanning all standard categories.",
  },
];

export default function GeneralClient() {
  const router = useRouter();

  // Screens: "categories" | "levels" | "quiz"
  const [activeScreen, setActiveScreen] = useState<"categories" | "levels" | "quiz">("categories");
  const [selectedCategory, setSelectedCategory] = useState<string>("world");
  
  // Levels progress loaded from API
  const [progress, setProgress] = useState<Record<string, number>>({
    world: 1,
    science: 1,
    computer: 1,
    pharmacy: 1,
    mixed: 1,
  });
  const [loading, setLoading] = useState(true);

  // Gameplay state
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(15);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const [coinsReward, setCoinsReward] = useState<number>(0);
  const [xpReward, setXpReward] = useState<number>(0);

  // Pagination for levels grid (e.g. 20 levels per tab to keep grid clean)
  const [levelTab, setLevelTab] = useState<number>(0); // 0 = Lvl 1-20, 1 = Lvl 21-40, etc.

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Audio sounds play helpers
  const playSound = (type: "correct" | "wrong" | "click") => {
    if (typeof window === "undefined") return;
    const soundEnabled = localStorage.getItem("soundEnabled") !== "false";
    if (!soundEnabled) return;

    try {
      const frequencies = {
        correct: [523.25, 659.25, 783.99], // C Major Chord
        wrong: [220.0, 196.0], // Gloomy minor
        click: [800], // Short tick
      };

      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const now = ctx.currentTime;

      frequencies[type].forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0.15, now + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.35);
      });
    } catch (e) {
      console.warn("Audio Context beep blocked by browser policy.", e);
    }
  };

  // Fetch progress from DB on mount
  useEffect(() => {
    async function loadProgress() {
      try {
        const res = await fetch("/api/general");
        const data = await res.json();
        if (data.success && data.progress) {
          setProgress(data.progress);
        }
      } catch (err) {
        console.error("Error loading progress:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProgress();
  }, []);

  // Timer Countdown Effect
  useEffect(() => {
    if (activeScreen === "quiz" && !isAnswered) {
      setTimeRemaining(15);
      setIsTimeUp(false);

      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsTimeUp(true);
            setIsAnswered(true);
            playSound("wrong");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeScreen, currentLevel, isAnswered]);

  // Handle category selection
  const selectCategory = (catId: string) => {
    playSound("click");
    setSelectedCategory(catId);
    setLevelTab(0);
    setActiveScreen("levels");
  };

  // Start level
  const handleStartLevel = (lvlNum: number) => {
    playSound("click");
    setCurrentLevel(lvlNum);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeRemaining(15);
    setIsTimeUp(false);
    setCoinsReward(0);
    setXpReward(0);
    setActiveScreen("quiz");
  };

  // Check answer click
  const handleAnswerClick = async (optionIndex: number, correctIndex: number) => {
    if (isAnswered) return;

    if (timerRef.current) clearInterval(timerRef.current);
    setSelectedAnswer(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === correctIndex;

    if (isCorrect) {
      playSound("correct");
      try {
        const res = await fetch("/api/general", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ category: selectedCategory, level: currentLevel }),
        });
        const data = await res.json();

        if (data.success) {
          setCoinsReward(data.coinsGained);
          setXpReward(data.xpGained);

          // Update local state unlocked level for category dynamically
          setProgress((prev) => ({
            ...prev,
            [selectedCategory]: data.unlockedLevel,
          }));
        }
      } catch (err) {
        console.error("Error saving progress:", err);
      }
    } else {
      playSound("wrong");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[75vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p className="mt-4 text-muted-foreground font-medium animate-pulse">Loading trivia data...</p>
      </div>
    );
  }

  const activeQuestions = GENERAL_QUESTIONS[selectedCategory] || [];
  const currentQuestion: GeneralQuestion | undefined = activeQuestions[currentLevel - 1];

  return (
    <div className="flex flex-col min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] w-full max-w-7xl mx-auto gap-6 sm:gap-10">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 relative z-10">
        <div>
          <h1 className="text-xl sm:text-3xl font-black font-[family-name:var(--font-syne)] text-foreground tracking-wide">
            Categories
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-semibold">
            Conquer subject-based levels, collect coins, and raise your IQ!
          </p>
        </div>
      </div>

      {/* SCREEN 1: CATEGORY SELECTION */}
      {activeScreen === "categories" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {CATEGORY_METAS.map((cat) => {
            const unlocked = progress[cat.id] || 1;
            const total = GENERAL_QUESTIONS[cat.id]?.length || 0;
            const percentage = Math.min(100, Math.round(((unlocked - 1) / total) * 100));

            return (
              <div
                key={cat.id}
                onClick={() => selectCategory(cat.id)}
                className="glass-card p-6 cursor-pointer flex flex-col justify-between group relative overflow-hidden h-36"
              >
                {/* Simple hover highlight overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-xl font-black font-[family-name:var(--font-syne)] text-foreground">
                    {cat.name}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 relative z-10">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-black mb-2 text-muted-foreground/80">
                    <span>PROGRESS</span>
                    <span>Level {unlocked} / {total}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${cat.gradient}`}
                      style={{ width: `${Math.max(4, percentage)}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* SCREEN 2: LEVELS GRID */}
      {activeScreen === "levels" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <button
              onClick={() => {
                playSound("click");
                setActiveScreen("categories");
              }}
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-white transition-colors"
            >
              <span>←</span> Back to Categories
            </button>
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-2xl font-bold">
                  {CATEGORY_METAS.find((c) => c.id === selectedCategory)?.name} levels
                </h2>
                <p className="text-xs text-muted-foreground">
                  Highest unlocked level: <strong className="text-primary">Level {progress[selectedCategory]}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Grid of Levels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {activeQuestions.map((_, index) => {
                const levelNumber = index + 1;
                const unlocked = progress[selectedCategory] || 1;
                const isLocked = levelNumber > unlocked;
                const isPassed = levelNumber < unlocked;
                const isActive = levelNumber === unlocked;

                return (
                  <button
                    key={levelNumber}
                    disabled={isLocked}
                    onClick={() => handleStartLevel(levelNumber)}
                    className={`relative min-h-[110px] rounded-2xl border transition-all flex flex-col items-center justify-center p-4 ${
                      isLocked
                        ? "bg-slate-900/20 border-white/5 opacity-50 cursor-not-allowed"
                        : isPassed
                        ? "bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5"
                        : "bg-slate-900/60 border-primary/40 hover:border-primary shadow-lg shadow-primary/5 hover:scale-105 animate-pulse"
                    }`}
                  >
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                      Level
                    </span>
                    <span className="text-3xl font-extrabold">
                      {levelNumber}
                    </span>

                    {/* Badge indicator */}
                    {isPassed && (
                      <span className="absolute top-2 right-2 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-extrabold">
                        ✓ Passed
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute top-2 right-2 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full font-extrabold">
                        ★ Playing
                      </span>
                    )}
                    {isLocked && (
                      <span className="absolute top-2 right-2 text-xs text-muted-foreground">
                        🔒 Locked
                      </span>
                    )}
                  </button>
                );
              })}
          </div>
        </div>
      )}

      {/* SCREEN 3: GAMEPLAY ARENA */}
      {activeScreen === "quiz" && currentQuestion && (
        <div className="max-w-4xl w-full mx-auto animate-in fade-in zoom-in-95 duration-200">
          {/* Quiz Top Metadata */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {
                playSound("click");
                setActiveScreen("levels");
              }}
              className="text-sm font-semibold text-muted-foreground hover:text-white transition-colors"
            >
              ← Back
            </button>
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-xl bg-white/5 border border-white/10 tracking-widest text-muted-foreground">
                Level {currentLevel}
              </span>
              <span className="text-xs font-bold text-primary">
                {CATEGORY_METAS.find((c) => c.id === selectedCategory)?.name}
              </span>
            </div>
          </div>

          {/* Time Limit Progress bar */}
          <div className="mb-6 bg-white/5 h-2 w-full rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                timeRemaining <= 5 ? "bg-red-500 animate-pulse" : "bg-primary"
              }`}
              style={{ width: `${(timeRemaining / 15) * 100}%` }}
            />
          </div>

          {/* Question Text Box */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center relative overflow-hidden mb-6 shadow-2xl">
            <div className="absolute top-4 left-4 text-xs font-bold text-muted-foreground uppercase flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-ping"></span>
              Question Arena
            </div>
            
            {/* Timer Counter */}
            <div className={`absolute top-4 right-4 text-sm font-extrabold ${timeRemaining <= 5 ? 'text-red-500 scale-110 font-black animate-bounce' : 'text-muted-foreground'}`}>
              ⏱ {timeRemaining}s
            </div>

            <h2 className="text-xl md:text-2xl font-black font-[family-name:var(--font-syne)] pt-4 text-white">
              {currentQuestion.q}
            </h2>
          </div>

          {/* Options List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-6">
            {currentQuestion.o.map((option, idx) => {
              const isCorrect = idx === currentQuestion.a;
              const isUserChoice = idx === selectedAnswer;
              let cls = "";
              let iconCls = "bg-muted/50 text-muted-foreground";

              if (isAnswered) {
                if (isCorrect) {
                  cls = "answer-correct !bg-[var(--brand-success)]/20 !border-[var(--brand-success)]";
                  iconCls = "bg-[var(--brand-success)] text-white";
                } else if (isUserChoice) {
                  cls = "answer-wrong !bg-[var(--brand-danger)]/20 !border-[var(--brand-danger)]";
                  iconCls = "bg-[var(--brand-danger)] text-white";
                } else {
                  cls = "opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleAnswerClick(idx, currentQuestion.a)}
                  className={`w-full py-4 sm:py-5 px-4 sm:px-6 rounded-2xl sm:rounded-3xl border-2 text-left transition-all duration-200 flex items-center gap-4 no-tap cursor-pointer bg-card/40 border-border/50 hover:border-[var(--brand-violet)]/80 hover:bg-white/5 disabled:cursor-default ${cls}`}
                >
                  <span className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-black shrink-0 transition-colors ${iconCls}`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm sm:text-lg font-bold text-white leading-snug">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeout Modal */}
          {isTimeUp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
              <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 text-center w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-300">
                <span className="text-5xl block mb-4">⏰</span>
                <h3 className="text-2xl font-black font-[family-name:var(--font-syne)] text-red-500 mb-2">Time's Up!</h3>
                <p className="text-sm text-muted-foreground mb-8">
                  You ran out of time to submit your response.
                </p>
                <button
                  onClick={() => handleStartLevel(currentLevel)}
                  className="w-full h-14 rounded-2xl bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white font-black text-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all"
                >
                  Retry Level
                </button>
              </div>
            </div>
          )}

          {/* Feedback & Actions container (Only if NOT timeout) */}
          {isAnswered && !isTimeUp && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300 w-full flex flex-col items-center">
              {selectedAnswer === currentQuestion.a ? (
                <div className="w-full flex flex-col items-center gap-4">
                  {(coinsReward > 0 || xpReward > 0) && (
                    <div className="flex items-center gap-4 text-sm font-black bg-white/5 border border-white/10 px-6 py-2.5 rounded-full">
                      {coinsReward > 0 && <span className="text-amber-400">🪙 +{coinsReward} Coins</span>}
                      {xpReward > 0 && <span className="text-cyan-400">🔥 +{xpReward} XP</span>}
                    </div>
                  )}
                  <div className="flex w-full items-center justify-center gap-4 mt-2">
                    <button
                      onClick={() => {
                        playSound("click");
                        setActiveScreen("levels");
                      }}
                      className="flex-1 max-w-[200px] h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 font-bold transition-all text-sm"
                    >
                      Levels Grid
                    </button>
                    {currentLevel < activeQuestions.length && (
                      <button
                        onClick={() => handleStartLevel(currentLevel + 1)}
                        className="flex-1 max-w-[200px] h-12 rounded-2xl bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white font-black text-sm shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
                      >
                        Next Level
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex w-full items-center justify-center gap-4 mt-4">
                  <button
                    onClick={() => {
                      playSound("click");
                      setActiveScreen("levels");
                    }}
                    className="flex-1 max-w-[200px] h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 font-bold transition-all text-sm"
                  >
                    Levels Grid
                  </button>
                  <button
                    onClick={() => handleStartLevel(currentLevel)}
                    className="flex-1 max-w-[200px] h-12 rounded-2xl bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white font-black text-sm shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
                  >
                    Retry Level
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
