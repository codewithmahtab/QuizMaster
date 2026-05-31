"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SpinSlice {
  id: number;
  label: string;
  coins: number;
  xp: number;
  weight: number;
}

const SPIN_SLICES: SpinSlice[] = [
  { id: 0, label: "10 Coins 🪙", coins: 10, xp: 0, weight: 30 },
  { id: 1, label: "20 Coins 🪙", coins: 20, xp: 0, weight: 25 },
  { id: 2, label: "50 Coins Jackpot! 🏆", coins: 50, xp: 0, weight: 8 },
  { id: 3, label: "Try Again! 🍀", coins: 0, xp: 0, weight: 15 },
  { id: 4, label: "30 Coins 🪙", coins: 30, xp: 0, weight: 12 },
  { id: 5, label: "5 Coins 🪙", coins: 5, xp: 0, weight: 10 },
];

export default function SpinClient({ 
  initialCoins = 0, 
  initialFreeAvailable = false 
}: { 
  initialCoins?: number; 
  initialFreeAvailable?: boolean; 
}) {
  const [totalCoins, setTotalCoins] = useState<number>(initialCoins);
  const [isFreeAvailable, setIsFreeAvailable] = useState<boolean>(initialFreeAvailable);
  const [lastSpinDate, setLastSpinDate] = useState<string | null>(null);

  // Audio state
  const [soundOn, setSoundOn] = useState<boolean>(true);

  // Simulated ad modal states
  const [isWatchingAd, setIsWatchingAd] = useState<boolean>(false);
  const [adCountdown, setAdCountdown] = useState<number>(5);

  // Wheel states
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [wheelRotation, setWheelRotation] = useState<number>(0);
  const [spinResult, setSpinResult] = useState<{ label: string; coins: number } | null>(null);

  // Particle systems
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particles = useRef<any[]>([]);

  // Ticking sound helper during spin
  const tickIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const playSound = (type: "tick" | "win" | "sad" | "ad" | "click") => {
    if (typeof window === "undefined" || !soundOn) return;

    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const now = ctx.currentTime;

      if (type === "tick") {
        // Short high-pitch block tick
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === "win") {
        // Exciting ascending chords
        const freqs = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(f, now + idx * 0.08);
          gain.gain.setValueAtTime(0.12, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.35);
        });
      } else if (type === "sad") {
        // Flat down glissando
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220.0, now);
        osc.frequency.linearRampToValueAtTime(110.0, now + 0.5);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.55);
      } else if (type === "ad") {
        // Synth alert
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === "click") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(300, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      }
    } catch (e) {
      console.warn("Audio Context beep blocked.", e);
    }
  };

  // Server provides initial status so we don't need a mount fetch hook here.

  // Sync canvas dimensions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Simulated Ad Countdown effect
  useEffect(() => {
    if (isWatchingAd) {
      setAdCountdown(5);
      const adInterval = setInterval(() => {
        setAdCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(adInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(adInterval);
    }
  }, [isWatchingAd]);

  // Trigger spin when ad finishes
  useEffect(() => {
    if (isWatchingAd && adCountdown === 0) {
      setIsWatchingAd(false);
      playSound("ad");
      // Ad completed! Instantly trigger spin for free!
      executeSpin("ad");
    }
  }, [adCountdown, isWatchingAd]);

  // Particle System Update Loop
  const createConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particles.current = [];
    const colors = ["#FFD700", "#FF4500", "#1E90FF", "#32CD32", "#FF69B4", "#8A2BE2"];

    for (let i = 0; i < 80; i++) {
      particles.current.push({
        x: canvas.width / 2,
        y: canvas.height / 3 + 100, // Wheel center
        radius: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.7) * 15 - 5,
        gravity: 0.35,
        alpha: 1.0,
        decay: Math.random() * 0.015 + 0.01,
      });
    }

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

    const updateLoop = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, idx) => {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.current.splice(idx, 1);
          return;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      });

      if (particles.current.length > 0) {
        animationFrameRef.current = requestAnimationFrame(updateLoop);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    updateLoop();
  };

  // Perform secure spin
  const executeSpin = async (spinType: "free" | "coins" | "ad") => {
    if (isSpinning) return;

    playSound("click");
    setIsSpinning(true);
    setSpinResult(null);

    try {
      const res = await fetch("/api/spin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: spinType }),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to process spin");
        setIsSpinning(false);
        return;
      }

      // data contains: { success: true, sliceId: number, coinsGained: number, totalCoins: number }
      const targetSliceId = data.sliceId;

      // Calculate rotation angle to align slice correctly under the pointer
      // Slices:
      // Slice 0: 10 Coins, Slice 1: 20 Coins, Slice 2: 50 Coins, Slice 3: Try Again, Slice 4: 30 Coins, Slice 5: 5 Coins
      // Conic sectors are arranged clockwise on the wheel:
      // Slice 0 = 0 to 60 deg, Slice 1 = 60 to 120, etc.
      // To align target slice index `I` at the very top (0 degrees):
      // The wheel needs to rotate such that the slice sector lies at the top.
      // Standard target rotation angle:
      // We spin the wheel multiple full circles (e.g. 5 rotations = 1800 deg) plus the offset to the slice's center.
      // Offset from start to center of slice I: `I * 60 + 30` degrees.
      // Since the wheel rotates clockwise and the top pointer is at 270 degrees (SVG top),
      // we need the target slice center to land exactly at 270 degrees.
      const offset = targetSliceId * 60 + 30;
      const targetSliceRotation = (270 - offset + 360) % 360;

      // Complete 6 full spins + target rotation
      const fullSpins = 3600;
      const finalRotation = wheelRotation + fullSpins + targetSliceRotation - (wheelRotation % 360);

      setWheelRotation(finalRotation);

      // Sound ticking engine
      let start = Date.now();
      const duration = 4000; // 4 seconds duration

      if (tickIntervalRef.current) clearInterval(tickIntervalRef.current);

      // Simulate realistic ticks by matching velocity curve
      const playTickBeeps = () => {
        const elapsed = Date.now() - start;
        if (elapsed >= duration) return;

        playSound("tick");

        // Decelerate interval time linearly (slowing down ticks)
        const progress = elapsed / duration;
        const nextTickDelay = 50 + progress * 400; // starts at 50ms, slows down to 450ms

        tickIntervalRef.current = setTimeout(playTickBeeps, nextTickDelay);
      };

      setTimeout(playTickBeeps, 100);

      // Decelerate transition completion trigger
      setTimeout(() => {
        if (tickIntervalRef.current) clearTimeout(tickIntervalRef.current);

        setIsSpinning(false);
        setTotalCoins(data.totalCoins);
        setIsFreeAvailable(data.isFreeAvailable);

        const resultLabel = SPIN_SLICES.find((s) => s.id === targetSliceId)?.label || "Try Again!";
        const coinsGained = data.coinsGained;

        setSpinResult({
          label: resultLabel,
          coins: coinsGained,
        });

        if (coinsGained > 0) {
          playSound("win");
          createConfetti();
        } else {
          playSound("sad");
        }
      }, 4100);

    } catch (err) {
      console.error("Spin error:", err);
      setIsSpinning(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-2 relative">
      {/* Background Confetti Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      />

      {/* HEADER HUD */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-white/5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r text-white bg-clip-text text-transparent">
            Daily Spin Wheel
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            Spin the wheel once daily for free, or test your luck using coins!
          </p>
        </div>
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
          {/* Dynamic rolling coin indicator */}
          <div className="px-3 sm:px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 font-extrabold flex items-center gap-2 shadow-lg shadow-amber-400/5 text-sm sm:text-base">
            🪙 {totalCoins}
          </div>

          <button
            onClick={() => {
              playSound("click");
              setSoundOn(!soundOn);
            }}
            className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-base sm:text-lg"
            title={soundOn ? "Mute sounds" : "Unmute sounds"}
          >
            {soundOn ? "🔊" : "🔇"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mt-2 sm:mt-6">
        {/* WHEEL DISPLAY CONTAINER */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative p-4 sm:p-6 rounded-full bg-slate-950/40 border border-white/5 shadow-2xl">
            {/* Pointer Pin at top */}
            <div className="absolute top-0 sm:top-2 left-1/2 -translate-x-1/2 z-30 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] text-2xl sm:text-3xl font-black text-red-500 animate-bounce">
              ▼
            </div>

            {/* Inner Wheel Wrapper */}
            <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-8 border-slate-900 shadow-2xl relative bg-slate-950">
              <div
                className="w-full h-full rounded-full transition-transform duration-[4000ms] cubic-bezier(0.2, 0.8, 0.2, 1.0)"
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                }}
              >
                {/* Stunning Custom SVG Wheel */}
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <defs>
                    {/* Shaded slice gradients */}
                    <linearGradient id="grad0" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#B45309" />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6B7280" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>
                    <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#BE185D" />
                    </linearGradient>
                    <linearGradient id="grad5" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#6D28D9" />
                    </linearGradient>
                    {/* Outer rim neon glow */}
                    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Draw Sectors */}
                  <path d="M 150 150 L 290 150 A 140 140 0 0 1 220 271.24 Z" fill="url(#grad0)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <path d="M 150 150 L 220 271.24 A 140 140 0 0 1 80 271.24 Z" fill="url(#grad1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <path d="M 150 150 L 80 271.24 A 140 140 0 0 1 10 150 Z" fill="url(#grad2)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <path d="M 150 150 L 10 150 A 140 140 0 0 1 80 28.76 Z" fill="url(#grad3)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <path d="M 150 150 L 80 28.76 A 140 140 0 0 1 220 28.76 Z" fill="url(#grad4)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <path d="M 150 150 L 220 28.76 A 140 140 0 0 1 290 150 Z" fill="url(#grad5)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

                  {/* Draw Text Labels rotated at the center of each sector */}
                  <text x="235" y="157" transform="rotate(30, 150, 150)" fill="white" fontWeight="900" fontSize="22" letterSpacing="1" textAnchor="middle">10 🪙</text>
                  <text x="235" y="157" transform="rotate(90, 150, 150)" fill="white" fontWeight="900" fontSize="22" letterSpacing="1" textAnchor="middle">20 🪙</text>
                  <text x="215" y="155" transform="rotate(150, 150, 150)" fill="#FEF08A" fontWeight="900" fontSize="15" letterSpacing="0.5" textAnchor="middle" filter="url(#neonGlow)">👑 JACKPOT</text>
                  <text transform="rotate(210, 150, 150)" fill="rgba(255,255,255,0.9)" fontWeight="900" fontSize="13" letterSpacing="1" textAnchor="middle">
                    <tspan x="215" y="148">TRY</tspan>
                    <tspan x="215" y="162">AGAIN</tspan>
                  </text>
                  <text x="235" y="157" transform="rotate(270, 150, 150)" fill="white" fontWeight="900" fontSize="22" letterSpacing="1" textAnchor="middle">30 🪙</text>
                  <text x="235" y="157" transform="rotate(330, 150, 150)" fill="white" fontWeight="900" fontSize="22" letterSpacing="1" textAnchor="middle">5 🪙</text>

                  {/* Outer Rim Pegs */}
                  <circle cx="290" cy="150" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="271.24" cy="220" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="220" cy="271.24" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="150" cy="290" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="80" cy="271.24" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="28.76" cy="220" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="10" cy="150" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="28.76" cy="80" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="80" cy="28.76" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="150" cy="10" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="220" cy="28.76" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                  <circle cx="271.24" cy="80" r="3.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1" />
                </svg>
              </div>

              {/* Glowing center hub overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-slate-950 border-4 border-amber-400 shadow-2xl flex items-center justify-center z-20">
                <span className="text-xl animate-pulse">🎡</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS & REWARDS GRID PANEL */}
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/60 p-5 sm:p-6 shadow-xl relative overflow-hidden">
            <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              Available Spin
            </h2>

            {/* Spin options action column */}
            <div className="flex flex-col gap-4">
              {/* Option 1: Free Daily Spin */}
              <button
                disabled={!isFreeAvailable || isSpinning}
                onClick={() => executeSpin("free")}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-2xl border font-bold transition-all text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 ${isFreeAvailable && !isSpinning
                  ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border-emerald-500/40 hover:border-emerald-400 hover:scale-[1.01] shadow-lg shadow-emerald-500/5 text-white"
                  : "bg-slate-900/40 border-white/5 opacity-50 cursor-not-allowed text-muted-foreground"
                  }`}
              >
                <div>
                  <div className="font-extrabold text-[11px] sm:text-sm uppercase tracking-wider text-emerald-400">
                    Daily Free Spin
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold mt-0.5 sm:mt-1">
                    {isFreeAvailable ? "Claim your free daily prize!" : "Available once every 24 hours"}
                  </div>
                </div>
              </button>

              {/* Option 2: Pay 50 Coins */}
              <button
                disabled={totalCoins < 50 || isSpinning}
                onClick={() => executeSpin("coins")}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-2xl border font-bold transition-all text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-0 ${totalCoins >= 50 && !isSpinning
                  ? "bg-gradient-to-r from-amber-500/20 to-orange-500/10 border-amber-500/40 hover:border-amber-400 hover:scale-[1.01] shadow-lg shadow-amber-500/5 text-white"
                  : "bg-slate-900/40 border-white/5 opacity-50 cursor-not-allowed text-muted-foreground"
                  }`}
              >
                <div>
                  <div className="font-extrabold text-[11px] sm:text-sm uppercase tracking-wider text-amber-400">
                    Spin for 50 Coins
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold mt-0.5 sm:mt-1">
                    Charge 50 coins to test your luck immediately!
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-black bg-amber-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-amber-500/40 text-amber-400">
                  🪙 50
                </span>
              </button>

              {/* Option 3: Watch Video Ad */}
              <button
                disabled={isSpinning}
                onClick={() => {
                  playSound("click");
                  setIsWatchingAd(true);
                }}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-2xl border font-bold transition-all text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-0 ${!isSpinning
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/10 border-purple-500/40 hover:border-purple-400 hover:scale-[1.01] shadow-lg shadow-purple-500/5 text-white"
                  : "bg-slate-900/40 border-white/5 opacity-50 cursor-not-allowed text-muted-foreground"
                  }`}
              >
                <div>
                  <div className="font-extrabold text-[11px] sm:text-sm uppercase tracking-wider text-purple-400">
                    Watch Ad to Spin
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold mt-0.5 sm:mt-1">
                    Watch a quick 5s sponsor ad and get a Free Spin!
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs text-center font-black bg-purple-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-purple-500/40 text-purple-400">
                  FREE AD
                </span>
              </button>
            </div>
          </div>

          {/* SPIN RESULT MODAL */}
          {spinResult && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-background/85 backdrop-blur-md animate-in fade-in duration-200"
                onClick={() => setSpinResult(null)}
              />

              {/* Modal Content */}
              <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-slate-950 p-8 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <button
                  onClick={() => setSpinResult(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                {spinResult.coins > 0 ? (
                  <div>
                    <span className="text-5xl block mb-4 animate-bounce-slow">🎁</span>
                    <h3 className="text-2xl font-extrabold text-amber-400 mb-2">CONGRATULATIONS!</h3>
                    <p className="text-base text-white mb-4 leading-relaxed">
                      You landed on <strong className="text-amber-400">{spinResult.label}</strong>!
                    </p>
                    <div className="bg-amber-400/10 border border-amber-400/20 p-3 rounded-2xl mb-4">
                      <p className="text-sm text-amber-400 font-bold">
                        +{spinResult.coins} coins have been added to your balance!
                      </p>
                    </div>
                    <button 
                      onClick={() => setSpinResult(null)}
                      className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-2xl transition-colors glow-gold"
                    >
                      Awesome!
                    </button>
                  </div>
                ) : (
                  <div>
                    <span className="text-5xl block mb-4 opacity-80">🍀</span>
                    <h3 className="text-2xl font-extrabold text-gray-400 mb-2">SO CLOSE!</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                      You landed on <strong className="text-white">Try Again!</strong><br/>
                      Don't give up — spin again to hit the Jackpot!
                    </p>
                    <button 
                      onClick={() => setSpinResult(null)}
                      className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FULL SCREEN SIMULATED VIDEO AD MODAL */}
      {isWatchingAd && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-200">
          <div className="max-w-md w-full p-8 rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl relative overflow-hidden">
            {/* Visual background scanner */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />

            <div className="relative">
              <span className="text-6xl block mb-4 animate-bounce">🎮</span>
              <h3 className="text-2xl font-black mb-2 tracking-tight">QuizMaster Pro Sponsor Ad</h3>

              <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
                <h4 className="text-sm font-extrabold text-primary mb-1">✨ UPCOMING EVENT</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join the Weekly Grand Arena Tournament starting Monday! Register now inside the Tournament lobby to play against top masters and win 1,000+ coins!
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: `${(adCountdown / 5) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Ad finishing in <strong className="text-primary font-black">{adCountdown}s</strong>...
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
