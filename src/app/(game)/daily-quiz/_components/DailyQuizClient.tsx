"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import QuizResult from "@/app/(game)/daily-quiz/_components/QuizResult";

interface Question {
  id: string;
  text: string;
  options: string[];
  category: string;
  difficulty: string;
}

interface Answer {
  questionId: string;
  selectedIndex: number;
}

interface ResultData {
  score: number;
  coinsEarned: number;
  xpEarned: number;
  perfect: boolean;
  results: { questionId: string; selectedIndex: number; correct: number; isCorrect: boolean }[];
}

const QUESTION_TIME = 15; // seconds per question
const OPTION_LABELS = ["A", "B", "C", "D"];

interface DailyQuizClientProps {
  username: string;
}

export default function DailyQuizClient({ username }: DailyQuizClientProps) {
  const [phase, setPhase] = useState<"loading" | "countdown" | "quiz" | "submitting" | "result">("loading");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [showFeedback, setShowFeedback] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Fetch questions
  useEffect(() => {
    fetch("/api/daily-quiz")
      .then((r) => r.json())
      .then((data) => {
        if (data.error) { setError(data.error); return; }
        if (data.alreadyCompleted) { window.location.reload(); return; }
        setQuestions(data.questions);
        setPhase("countdown");
      })
      .catch(() => setError("Failed to load quiz. Please try again."));
  }, []);

  // Countdown 3-2-1 before quiz starts
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdown <= 0) { setPhase("quiz"); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  // Question timer
  const handleTimeUp = useCallback(() => {
    if (selectedAnswer !== null || showFeedback) return;
    // Auto-submit with -1 (no answer)
    setSelectedAnswer(-1);
    setShowFeedback(true);
    setAnswers((prev) => [...prev, { questionId: questions[currentIndex].id, selectedIndex: -1 }]);
  }, [selectedAnswer, showFeedback, questions, currentIndex]);

  useEffect(() => {
    if (phase !== "quiz" || showFeedback) return;
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
  }, [phase, currentIndex, showFeedback, handleTimeUp]);

  function handleAnswer(index: number) {
    if (selectedAnswer !== null || showFeedback) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedAnswer(index);
    setShowFeedback(true);
    setAnswers((prev) => [...prev, { questionId: questions[currentIndex].id, selectedIndex: index }]);
  }

  function handleNext() {
    if (currentIndex >= questions.length - 1) {
      submitQuiz();
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }

  async function submitQuiz() {
    setPhase("submitting");
    try {
      const res = await fetch("/api/daily-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data);
      setPhase("result");
    } catch {
      setError("Failed to submit. Please try again.");
      setPhase("quiz");
    }
  }

  const q = questions[currentIndex];
  const progress = ((currentIndex + (showFeedback ? 1 : 0)) / questions.length) * 100;
  const timerPct = (timeLeft / QUESTION_TIME) * 100;
  const timerColor = timeLeft <= 5 ? "var(--brand-danger)" : timeLeft <= 10 ? "var(--brand-gold)" : "var(--brand-cyan)";

  // ── ERROR ──
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center gap-4">
        <span className="text-5xl">❌</span>
        <p className="text-foreground font-bold">{error}</p>
        <button onClick={() => window.location.reload()} className="text-[var(--brand-violet)] underline text-sm">
          Try again
        </button>
      </div>
    );
  }

  // ── LOADING ──
  if (phase === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[var(--brand-violet)]/30 border-t-[var(--brand-violet)] animate-spin" />
        <p className="text-muted-foreground text-sm">Loading today's quiz...</p>
      </div>
    );
  }

  // ── COUNTDOWN ──
  if (phase === "countdown") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="text-5xl">📅</div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-syne)] gradient-text">
            Daily Quiz
          </h1>
          <p className="text-muted-foreground text-sm">10 questions · 15 seconds each</p>
        </motion.div>

        <motion.div
          key={countdown}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="w-24 h-24 rounded-full border-4 border-[var(--brand-violet)] flex items-center justify-center glow-violet"
        >
          <span className="text-4xl font-black font-[family-name:var(--font-mono)] text-[var(--brand-violet)]">
            {countdown === 0 ? "GO!" : countdown}
          </span>
        </motion.div>

        <div className="text-sm text-muted-foreground">
          Good luck, <span className="text-[var(--brand-cyan)] font-semibold">{username}</span>! 🎯
        </div>
      </div>
    );
  }

  // ── RESULT ──
  if (phase === "result" && result) {
    return <QuizResult {...result} questions={questions} answers={answers} />;
  }

  // ── SUBMITTING ──
  if (phase === "submitting") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[var(--brand-gold)]/30 border-t-[var(--brand-gold)] animate-spin" />
        <p className="text-muted-foreground text-sm">Calculating your score...</p>
      </div>
    );
  }

  // ── QUIZ ──
  return (
    <div className="flex flex-col px-4 py-4 min-h-[calc(100vh-8rem)] gap-4">

      {/* Top bar: progress + timer */}
      <div className="space-y-3">
        {/* Question counter + timer */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-muted-foreground font-[family-name:var(--font-mono)]">
            {currentIndex + 1} / {questions.length}
          </span>
          <div className={cn(
            "flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold font-[family-name:var(--font-mono)] transition-all",
            timeLeft <= 5 && "animate-timer-pulse"
          )} style={{ color: timerColor, background: `${timerColor}18`, border: `1px solid ${timerColor}40` }}>
            <Clock className="w-3.5 h-3.5" />
            {timeLeft}s
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, var(--brand-violet), var(--brand-cyan))" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Timer bar */}
        <div className="h-1 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${timerPct}%`, background: timerColor }}
          />
        </div>
      </div>

      {/* Category chip */}
      <div>
        <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground px-2 py-0.5 rounded-full border border-border/50">
          {q?.category}
        </span>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-1 flex flex-col gap-4"
        >
          {/* Question text */}
          <div className="glass-card p-5 min-h-[100px] flex items-center">
            <p className="text-base font-semibold text-foreground leading-relaxed">
              {q?.text}
            </p>
          </div>

          {/* Answer options */}
          <div className="grid grid-cols-1 gap-3">
            {q?.options.map((option, idx) => {
              let stateClass = "";
              if (showFeedback) {
                // We don't know the answer client-side (security) — show selected in violet
                // Correct answers revealed after submit on result screen
                if (idx === selectedAnswer) {
                  stateClass = "answer-selected";
                }
              }

              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleAnswer(idx)}
                  disabled={showFeedback}
                  className={cn(
                    "w-full p-4 rounded-2xl border text-left transition-all duration-200",
                    "flex items-center gap-3 no-tap",
                    "bg-card/60 border-border/50 hover:border-[var(--brand-violet)]/60 hover:bg-[var(--brand-violet)]/5",
                    "disabled:cursor-default",
                    "active:scale-[0.98]",
                    stateClass
                  )}
                >
                  <span className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors",
                    showFeedback && idx === selectedAnswer
                      ? "bg-[var(--brand-violet)] text-white"
                      : "bg-muted text-muted-foreground"
                  )}>
                    {OPTION_LABELS[idx]}
                  </span>
                  <span className="text-sm font-medium text-foreground leading-snug">
                    {option}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Next button (shown after answering) */}
          <AnimatePresence>
            {showFeedback && (
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={handleNext}
                className={cn(
                  "w-full h-12 rounded-2xl font-bold text-sm text-white",
                  "flex items-center justify-center gap-2",
                  "transition-all duration-200 active:scale-[0.98]",
                  currentIndex >= questions.length - 1
                    ? "bg-[var(--brand-success)] glow-cyan"
                    : "bg-[var(--brand-violet)] glow-violet"
                )}
              >
                {currentIndex >= questions.length - 1 ? "See Results 🎉" : (
                  <>Next <ChevronRight className="w-4 h-4" /></>
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
