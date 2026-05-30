"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Swords, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

const DOTS = [".", "..", "..."];
const TIPS = [
  "Answer faster for bonus XP! ⚡",
  "Consecutive correct answers give a streak bonus 🔥",
  "Win 10 questions to earn maximum coins 💰",
  "Ranked matches affect your tier permanently 🏆",
  "Use your coins to buy power-ups in the Shop 🛍️",
];

// ── Inner component that uses useSearchParams ─────────────────────
// Must be wrapped in <Suspense> per Next.js App Router rules
function MatchmakingInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const alreadyJoined = searchParams.get("joined") === "true";

  const [dots, setDots] = useState(".");
  const [tipIndex, setTipIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [timedOut, setTimedOut] = useState(false);
  
  // Shuffle opponent avatars rapidly to simulate searching
  const OPPONENTS = [
    { style: "adventurer", seed: "Alex" },
    { style: "bottts", seed: "RobotX" },
    { style: "avataaars", seed: "Sarah" },
    { style: "fun-emoji", seed: "Smile" },
    { style: "micah", seed: "Mike" },
    { style: "notionists", seed: "Emma" },
    { style: "bottts", seed: "Cyber99" },
    { style: "adventurer", seed: "Lucy" },
    { style: "avataaars", seed: "Chris" },
    { style: "bottts", seed: "MechWarrior" },
    { style: "micah", seed: "Mia" },
    { style: "notionists", seed: "Leo" },
    { style: "adventurer", seed: "Sam" },
    { style: "fun-emoji", seed: "Ghost" },
    { style: "bottts", seed: "NinjaBot" },
    { style: "avataaars", seed: "Zoe" },
    { style: "micah", seed: "Max" },
    { style: "notionists", seed: "Ruby" },
    { style: "adventurer", seed: "Oscar" },
    { style: "bottts", seed: "Android" },
    { style: "fun-emoji", seed: "Star" },
    { style: "avataaars", seed: "Jack" },
    { style: "micah", seed: "Chloe" },
    { style: "bottts", seed: "Terminator" }
  ];
  
  const [shuffledAvatar, setShuffledAvatar] = useState(OPPONENTS[0].seed);

  // Animate dots
  useEffect(() => {
    const t = setInterval(() => setDots((d) => DOTS[(DOTS.indexOf(d) + 1) % DOTS.length]), 600);
    return () => clearInterval(t);
  }, []);

  // Rotate tips
  useEffect(() => {
    const t = setInterval(() => setTipIndex((i) => (i + 1) % TIPS.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Elapsed counter
  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % OPPONENTS.length;
      setShuffledAvatar(OPPONENTS[i].seed);
    }, 150); // Fast shuffle
    return () => clearInterval(t);
  }, []);

  // If we already joined (player2), navigate directly to match
  useEffect(() => {
    if (alreadyJoined && matchId) {
      setTimeout(() => router.push(`/battle/${matchId}`), 400);
    }
  }, [alreadyJoined, matchId, router]);

  // Poll for match status every 2s
  useEffect(() => {
    if (!matchId || alreadyJoined) return;

    const poll = setInterval(async () => {
      try {
        const res = await fetch(`/api/matches/queue?matchId=${matchId}`);
        const data = await res.json();

        if (data.status === "active") {
          clearInterval(poll);
          // Use data.matchId — may differ if we were matched to another lobby
          router.push(`/battle/${data.matchId}`);
        } else if (data.status === "timeout" || data.status === "abandoned") {
          clearInterval(poll);
          setTimedOut(true);
        }
      } catch {
        // ignore transient network errors
      }
    }, 2000);

    return () => clearInterval(poll);
  }, [matchId, alreadyJoined, router]);

  async function handleCancel() {
    if (matchId) {
      await fetch(`/api/matches/queue?matchId=${matchId}`, { method: "DELETE" }).catch(() => {});
    }
    router.push("/battle");
  }

  // ── TIMED OUT ──
  if (timedOut) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center gap-6">
        <span className="text-5xl">😔</span>
        <div>
          <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-foreground">
            No opponent found
          </h2>
          <p className="text-base text-muted-foreground mt-1">Nobody was available right now.</p>
        </div>
        <Button
          onClick={() => router.push("/battle")}
          className="bg-[var(--brand-violet)] text-white font-bold rounded-2xl px-8 h-14"
        >
          Try Again
        </Button>
      </div>
    );
  }

  // ── MATCHING ──
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center gap-2">

      {/* VS Animation Layout */}
      <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16 relative">
        {/* You */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-24 h-24 sm:w-60 sm:h-60 rounded-3xl border-4 border-[var(--brand-cyan)] bg-slate-900 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <img src={`https://api.dicebear.com/9.x/adventurer/svg?seed=You&backgroundColor=0f0f1a`} alt="You" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold font-[family-name:var(--font-syne)] text-lg text-white">YOU</span>
        </motion.div>

        {/* VS Badge */}
        <div className="relative z-10 flex items-center justify-center">
          {/* Outer rotating dashed ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute w-20 h-20 sm:w-32 sm:h-32 rounded-full border-[3px] border-dashed border-[var(--brand-violet)]/40"
          />
          {/* Inner pulsing glow ring */}
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[var(--brand-violet)] blur-xl"
          />
          {/* The actual badge */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-14 h-14 sm:w-24 sm:h-24 rounded-full bg-slate-950 border-4 border-t-[var(--brand-violet)] border-r-cyan-400 border-b-[var(--brand-violet)] border-l-cyan-400 shadow-[0_0_40px_rgba(124,58,237,0.6)] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-violet)]/20 to-cyan-400/20" />
            <span className="font-black text-xl sm:text-3xl italic bg-gradient-to-br from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent mt-0.5 z-10 drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]">VS</span>
          </motion.div>
        </div>

        {/* Searching Opponent */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative w-24 h-24 sm:w-60 sm:h-60 rounded-3xl border-4 border-dashed border-red-500/50 bg-slate-900 overflow-hidden">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 bg-red-500/10 z-20 pointer-events-none"
            />
            {/* Preload and crossfade SVG images to prevent network flickering */}
            {OPPONENTS.map((opp) => (
              <motion.img
                key={opp.seed}
                src={`https://api.dicebear.com/9.x/${opp.style}/svg?seed=${opp.seed}&backgroundColor=0f0f1a`}
                alt="Searching..."
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                animate={{ opacity: shuffledAvatar === opp.seed ? 0.9 : 0 }}
                transition={{ duration: 0.15 }}
              />
            ))}
          </div>
          <span className="font-bold font-[family-name:var(--font-syne)] text-lg text-red-400 animate-pulse">SEARCHING</span>
        </motion.div>
      </div>

      {/* Cancel */}
      <button
        onClick={handleCancel}
        className="flex items-center gap-2 px-6 py-3 rounded-full hover:bg-white/5 text-sm font-bold text-muted-foreground hover:text-destructive transition-all cursor-pointer mt-4"
      >
        <X className="w-5 h-5" />
        Cancel Matchmaking
      </button>
    </div>
  );
}

// ── Exported page — wraps inner in Suspense (required for useSearchParams) ──
export default function MatchmakingPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[var(--brand-violet)]/30 border-t-[var(--brand-violet)] animate-spin" />
        <p className="text-sm text-muted-foreground">Connecting...</p>
      </div>
    }>
      <MatchmakingInner />
    </Suspense>
  );
}
