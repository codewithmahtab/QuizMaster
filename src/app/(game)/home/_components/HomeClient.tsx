"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Coins,
  Flame,
  Lock,
  Gift,
  ArrowUpRight,
  Play,
  CheckCircle2,
  Trophy,
  Award,
  Zap,
  Target,
  ChevronRightSquare,
  HelpCircle,
  LogIn,
  UserPlus
} from "lucide-react";
import { cn, formatCoins, getAvatarUrl } from "@/lib/utils";
import type { RankInfo } from "@/types/user";
import { DailyRewardsModal } from "@/components/game/DailyRewardsModal";
import oneVsOneIcon from "@/assets/vs.png";
import rankIcon from "@/assets/rank1.png";
import generalIcon from "@/assets/general.png";
import spinIcon from "@/assets/spin.png";

interface XpProgress {
  current: number;
  needed: number;
  percentage: number;
  level: number;
}

interface HomeClientProps {
  user: {
    id: string;
    username: string;
    avatarUrl: string | null;
    coins: number;
    xp: number;
    level: number;
    rankedPoints: number;
    totalWins: number;
    totalMatches: number;
    loginStreak: number;
    winRate: number;
    rank: RankInfo;
    xpProgress: XpProgress;
  } | null;
  dailyCompleted: boolean;
  dailyScore: number | null;
}

const stagger = {
  show: { transition: { staggerChildren: 0.05 } },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 15 } },
};

export default function HomeClient({ user, dailyCompleted, dailyScore }: HomeClientProps) {
  const [localCoins, setLocalCoins] = useState(user?.coins ?? 0);
  const [rewardsOpen, setRewardsOpen] = useState(false);
  const [claimedToday, setClaimedToday] = useState(true);
  const [streak, setStreak] = useState(user?.loginStreak ?? 0);

  const avatar = user ? (user.avatarUrl || getAvatarUrl(user.username)) : null;

  // Auto check daily rewards claim status on mount
  useEffect(() => {
    if (!user) return;
    async function checkDaily() {
      try {
        const res = await fetch("/api/daily-rewards");
        const d = await res.json();
        if (!d.error) {
          setClaimedToday(d.claimedToday);
          setStreak(d.loginStreak);
          // Auto trigger rewards calendar modal if NOT claimed today!
          if (!d.claimedToday) {
            setRewardsOpen(true);
          }
        }
      } catch (e) {
        console.error("Failed checking daily rewards:", e);
      }
    }
    checkDaily();
  }, []);

  function handleClaimSuccess(coinsAwarded: number, newCoinsTotal: number) {
    setLocalCoins(newCoinsTotal);
    setClaimedToday(true);
    setStreak((s) => s + 1);
  }

  // SVG Circular progress radius for Win Rate indicator
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - ((user?.winRate ?? 0) / 100) * circumference;

  return (
    <div className="space-y-8 px-0 sm:px-2">

      {/* ── HEADER BANNER ── */}
      <div className="hidden sm:flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl md:text-3xl font-extrabold font-[family-name:var(--font-syne)] tracking-tight leading-tight flex items-center gap-2.5">
            Brain Arena
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
            Battle rivals, complete challenges, and claim your victory rewards!
          </p>
        </div>
      </div>

      {/* ── MAIN DASHBOARD GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT COLUMN: HERO CARD, GAME MODES, & OPEN TOURNAMENTS (8 Columns) */}
        <div className="lg:col-span-8 space-y-4 sm:space-y-8">

          {user ? (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card relative overflow-hidden rounded-3xl p-4 sm:p-6 lg:p-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 sm:gap-6 relative z-10">
                <div className="flex flex-row items-center text-left gap-5 sm:gap-5 lg:gap-8 w-full md:max-w-md">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 relative drop-shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={avatar!} alt={user.username} className="w-full h-full object-contain" />
                    </div>
                    {streak > 0 && (
                      <div className="absolute -top-2 -right-2 sm:-top-2.5 sm:-right-2.5 flex items-center gap-0.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[9px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-full shadow-md animate-bounce-slow z-20">
                        <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white/20" />
                        {streak}D
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-1 w-full">
                    <div className="flex flex-row items-center gap-1.5 sm:gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-foreground font-[family-name:var(--font-syne)] tracking-tight truncate max-w-[180px] sm:max-w-[200px] md:max-w-none">
                        {user.username}
                      </h3>
                      <div className="flex items-center gap-1 bg-white/5 border border-white/8 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[10px] sm:text-xs text-muted-foreground select-none shrink-0">
                        <span className="text-xs sm:text-sm" title={user.rank.label}>{user.rank.icon}</span>
                        <span className="font-bold text-[8px] sm:text-[10px] tracking-wider uppercase">{user.rank.label}</span>
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                      Rank Points: <span className="font-mono font-bold text-[var(--brand-cyan)]">{user.rankedPoints} pts</span>
                    </p>
                    <div className="pt-2 w-full max-w-[240px] sm:max-w-sm mx-auto sm:mx-0">
                      <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-muted-foreground mb-1">
                        <span className="font-bold text-[var(--brand-gold)]">LEVEL {user.xpProgress.level}</span>
                        <span className="font-mono font-semibold">{user.xpProgress.current} / {user.xpProgress.needed} XP</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden border border-white/5 shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${user.xpProgress.percentage}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                          className="h-full rounded-full bg-[var(--brand-gold)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-4 sm:gap-6 shrink-0 bg-white/3 border border-white/6 px-5 py-4 rounded-2xl w-full sm:w-auto justify-around">
                  <div className="text-center px-1 sm:px-2">
                    <p className="text-xl sm:text-2xl font-black text-foreground font-[family-name:var(--font-mono)] leading-none">{user.totalMatches}</p>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold mt-1.5">Matches</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/8 shrink-0" />
                  <div className="text-center px-1 sm:px-2">
                    <p className="text-xl sm:text-2xl font-black text-[var(--brand-success)] font-[family-name:var(--font-mono)] leading-none">{user.totalWins}</p>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold mt-1.5">Wins</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/8 shrink-0" />
                  <div className="flex flex-col items-center px-1 sm:px-2">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r={radius} className="stroke-white/5" strokeWidth="3" fill="transparent" />
                        <circle cx="24" cy="24" r={radius} className="stroke-[var(--brand-cyan)] transition-all duration-1000 ease-out" strokeWidth="3.5" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-[10px] font-black font-[family-name:var(--font-mono)] text-foreground leading-none">{user.winRate}%</span>
                    </div>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold mt-1">Win Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card relative overflow-hidden rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--brand-violet)]/10 border border-[var(--brand-violet)]/20 flex items-center justify-center shrink-0">
                <Zap className="w-8 h-8 text-[var(--brand-violet)]" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-black text-foreground font-[family-name:var(--font-syne)]">Welcome to QuizMaster Pro</h2>
                <p className="text-sm text-muted-foreground mt-1">Sign in to track your stats, earn coins, and compete with rivals.</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link href="?auth=sign-in" className="px-4 py-2 rounded-xl bg-[var(--brand-violet)] text-white font-bold text-sm hover:bg-[var(--brand-violet)]/90 transition-colors flex items-center gap-1.5">
                  <LogIn className="w-4 h-4" /> Sign In
                </Link>
                <Link href="?auth=sign-up" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-foreground font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-1.5">
                  <UserPlus className="w-4 h-4" /> Register
                </Link>
              </div>
            </motion.div>
          )}



          {/* ── 2. REDESIGNED GAME MODES GRID ── */}
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground/80 flex items-center gap-2">
                <Target className="w-4 h-4 text-[var(--brand-violet)]" /> Game Arenas
              </h3>
              <span className="text-[10px] text-muted-foreground select-none font-bold">5 Modes Available</span>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6"
            >
              {GAME_MODES.map((mode) => (
                <motion.div key={mode.href} variants={fadeUp}>
                  <Link href={mode.locked ? "#" : mode.href} className={cn(mode.locked && "pointer-events-none")}>
                    <div className={cn(
                      "card-cyber group p-6 rounded-md sm:rounded-2xl h-35 sm:h-44 flex flex-row items-center gap-5 relative overflow-hidden",
                      `bg-gradient-to-br ${mode.gradient}`,
                      mode.locked && "opacity-55"
                    )}>
                      {/* Highlight card hover overlay */}
                      <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Absolute Locked Indicator in the corner */}
                      {mode.locked && (
                        <div className="absolute top-3 right-3 z-20 bg-background/40 border border-white/5 p-1 rounded-md">
                          <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                      )}

                      {/* Left: Icon container */}
                      <div className="shrink-0 flex items-center justify-center">
                        {typeof mode.icon === "string" ? (
                          <span className="text-5xl filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] select-none">{mode.icon}</span>
                        ) : (
                          mode.icon
                        )}
                      </div>

                      {/* Right: Text Details */}
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        {/* Title & Description */}
                        <div className="space-y-1">
                          <p className="font-black text-xl sm:text-2xl text-foreground font-[family-name:var(--font-syne)] flex items-center gap-1">
                            {mode.label} <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </p>
                          <p className="text-sm sm:text-base text-muted-foreground/80 font-semibold leading-relaxed line-clamp-2">{mode.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>



        </div>

        {/* RIGHT COLUMN: DAILY CHECK-IN & MISSIONS (4 Columns) */}
        {user ? (
          <div className="lg:col-span-4 space-y-8">

            {/* ── 1. GAMIFIED STREAK CALENDAR & CHECK-IN PANEL ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="card-cyber relative overflow-hidden rounded-md sm:rounded-3xl p-5 sm:p-6"
            >
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black uppercase tracking-wider font-[family-name:var(--font-syne)] text-foreground">
                    Daily Check-in
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-[var(--brand-violet)] bg-[var(--brand-violet)]/10 px-2 py-0.5 rounded-full border border-[var(--brand-violet)]/25">
                  Streak: {streak} days
                </span>
              </div>

              {/* Streak Grid Visualizer */}
              <div className="grid grid-cols-7 gap-1.5 py-3 relative">
                {Array.from({ length: 7 }).map((_, i) => {
                  const dayNum = i + 1;
                  const isClaimed = dayNum <= streak;
                  const isTodayActive = dayNum === streak + 1 && !claimedToday;

                  return (
                    <div key={dayNum} className="flex flex-col items-center gap-1.5">
                      <div className={cn(
                        "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 relative border",
                        isClaimed
                          ? "bg-[var(--brand-violet)] text-white border-transparent shadow-[0_0_10px_rgba(79,70,229,0.2)]"
                          : isTodayActive
                            ? "bg-[var(--brand-violet)]/20 text-[var(--brand-violet)] border-[var(--brand-violet)]/50 animate-pulse scale-105"
                            : "bg-white/3 text-muted-foreground/60 border-white/5"
                      )}>
                        {dayNum}
                      </div>
                      <span className="text-[8px] uppercase tracking-wider font-extrabold text-muted-foreground/60">
                        Day {dayNum}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom claims CTA action */}
              <div className="mt-4 pt-2">
                {claimedToday ? (
                  <div className="flex items-center gap-2 justify-center py-2.5 px-4 bg-white/4 border border-white/6 rounded-md sm:rounded-3xl text-xs text-muted-foreground font-bold select-none text-center">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-success)] shrink-0" />
                    Checked-in for today! Come back tomorrow.
                  </div>
                ) : (
                  <button
                    onClick={() => setRewardsOpen(true)}
                    className="w-full flex items-center cursor-pointer justify-center gap-2 py-3 px-5 rounded-2xl bg-primary text-white  font-extrabold text-xs active:scale-[0.98] transition-all hover:scale-[1.01]"
                  >
                    CLAIM DAILY REWARD
                  </button>
                )}
              </div>
            </motion.div>

            {/* ── 2. GAMIFIED ACTIVE MISSIONS BOARD ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="card-cyber rounded-md sm:rounded-3xl p-5 sm:p-6"
            >
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black uppercase tracking-wider font-[family-name:var(--font-syne)] text-foreground">
                    Daily Operations
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground font-[family-name:var(--font-mono)]">
                  {dailyCompleted ? "1/3" : "0/3"} COMPLETED
                </span>
              </div>

              {/* Missions Checklist */}
              <div className="space-y-3.5">
                {[
                  {
                    id: "daily",
                    title: "Resolve Daily Quiz",
                    reward: <><span className="text-amber-400 font-mono">+50 🪙</span> · <span className="text-[var(--brand-violet)] font-mono">+100 XP</span></>,
                    href: "/daily-quiz",
                    btnText: "GO",
                    btnColor: "var(--brand-gold)",
                    completed: dailyCompleted,
                  },
                  {
                    id: "spin",
                    title: "Spin Wheel of Luck",
                    reward: <span className="text-[var(--brand-violet)] font-mono">+25 XP</span>,
                    href: "/spin",
                    btnText: "SPIN",
                    btnColor: "var(--brand-violet)",
                    completed: false, // Update logic when spin stats are available
                  },
                  {
                    id: "battle",
                    title: "Participate 1v1 Battle",
                    reward: <><span className="text-amber-400 font-mono">+15 🪙</span> · <span className="text-[var(--brand-violet)] font-mono">+50 XP</span></>,
                    href: "/battle",
                    btnText: "RIVAL",
                    btnColor: "var(--brand-cyan)",
                    completed: false, // Update logic when battle stats are available
                  }
                ]
                  .sort((a, b) => Number(a.completed) - Number(b.completed))
                  .map((mission) => (
                    <div
                      key={mission.id}
                      className={cn(
                        "flex items-center gap-3.5 p-3 rounded-xl bg-white/2 border border-white/4 transition-all",
                        mission.completed && "opacity-50 pointer-events-none"
                      )}
                    >
                      <div className="shrink-0">
                        {mission.completed ? (
                          <div className="w-6 h-6 rounded-full bg-[var(--brand-success)]/10 border border-[var(--brand-success)]/30 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[var(--brand-success)]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-white/4 border border-white/6 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-foreground">
                          {mission.title}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1 font-semibold">
                          Reward: {mission.reward}
                        </p>
                      </div>
                      {!mission.completed && (
                        <Link
                          href={mission.href}
                          className="shrink-0 py-1.5 px-3 border hover:bg-white/5 font-bold text-[10px] rounded-xl flex items-center gap-1 active:scale-95 transition-all"
                          style={{
                            color: mission.btnColor,
                            borderColor: `color-mix(in srgb, ${mission.btnColor} 20%, transparent)`,
                            backgroundColor: `color-mix(in srgb, ${mission.btnColor} 10%, transparent)`
                          }}
                        >
                          <Play className="w-2.5 h-2.5 fill-current" /> {mission.btnText}
                        </Link>
                      )}
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* ── 3. COMPACT PROFILE TROPHIES WIDGET ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="card-cyber rounded-3xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Award className="w-4 h-4 text-[var(--brand-gold)]" />
                <h4 className="text-xs font-black uppercase tracking-wider font-[family-name:var(--font-syne)] text-foreground">
                  Current Standing
                </h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Earn ranked points by entering <span className="text-foreground font-bold">1v1 Battles</span> and <span className="text-foreground font-bold">Daily Trivia Challenges</span>. Climbing points unlocks legendary avatar frames in the Shop!
              </p>
              <div className="mt-4 flex items-center justify-between bg-white/3 border border-white/5 px-3.5 py-2.5 rounded-2xl select-none">
                <span className="text-[11px] font-bold text-muted-foreground flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" /> Next tier reward:
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-[var(--brand-gold)] animate-pulse">
                  Silver Frame
                </span>
              </div>
            </motion.div>

          </div>
        ) : (
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="card-cyber rounded-3xl p-6 flex flex-col items-center text-center gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-[var(--brand-gold)]" />
              </div>
              <div>
                <h3 className="font-black text-sm text-foreground font-[family-name:var(--font-syne)] uppercase tracking-wider">Unlock All Features</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Daily rewards, missions, streaks and personal stats are waiting for you.
                </p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <Link
                  href="?auth=sign-in"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[var(--brand-violet)] text-white font-bold text-xs hover:bg-[var(--brand-violet)]/90 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  Sign In
                </Link>
                <Link
                  href="?auth=sign-up"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 border border-white/8 text-muted-foreground font-semibold text-xs hover:bg-white/10 transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  Create Account
                </Link>
              </div>
            </motion.div>
          </div>
        )}

      </div>


      {/* REUSABLE CHECK-IN CALENDAR MODAL */}
      {user && (
        <DailyRewardsModal
          isOpen={rewardsOpen}
          onClose={() => setRewardsOpen(false)}
          onClaimSuccess={handleClaimSuccess}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// GAME MODES CONFIGURATION
// ─────────────────────────────────────────

interface GameMode {
  href: string;
  icon: string | React.ReactNode;
  label: string;
  description: string;
  gradient: string;
  badge?: string;
  locked?: boolean;
}

const GAME_MODES: GameMode[] = [
  {
    href: "/spin",
    icon: (
      <div className="size-16 sm:size-28 relative flex items-center justify-center select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spinIcon.src} alt="Spin Wheel" className="w-full h-full object-contain" />
      </div>
    ),
    label: "Spin Wheel",
    description: "Spin to claim massive luck rewards",
    gradient: "from-[#F59E0B]/20 to-[#10B981]/10",
    badge: "DAILY SPIN",
  }, 
  {
    href: "/battle",
    icon: (
      <div className="size-16 sm:size-28 relative flex items-center justify-center select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={oneVsOneIcon.src} alt="1v1" className="w-full h-full object-contain" />
      </div>
    ),
    label: "1v1 Quick Battle",
    description: "Challenge online live players",
    gradient: "from-[#7C3AED]/20 to-[#06B6D4]/10",
    badge: "POPULAR",
  },
  {
    href: "/ranked",
    icon: (
      <div className="size-16 sm:size-28 relative flex items-center justify-center select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={rankIcon.src} alt="Ranked Arena" className="w-full h-full object-contain" />
      </div>
    ),
    label: "Ranked Arena",
    description: "Compete and climb the tier ranks",
    gradient: "from-[#F59E0B]/20 to-[#EF4444]/10",
    badge: "SEASON 1",
  },
  {
    href: "/general",
    icon: (
      <div className="size-16 sm:size-28 relative flex items-center justify-center select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={generalIcon.src} alt="General Trivia" className="w-full h-full object-contain" />
      </div>
    ),
    label: "Classic",
    description: "Answer and unlock learning paths",
    gradient: "from-[#EC4899]/20 to-[#F59E0B]/10",
    badge: "NEW",
  },
  {
    href: "/shop",
    icon: "🛍️",
    label: "Premium Shop",
    description: "Redeem unique frames & boosters",
    gradient: "from-[#A855F7]/20 to-[#EC4899]/10",
  },
];


