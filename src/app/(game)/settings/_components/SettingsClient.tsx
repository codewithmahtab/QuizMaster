"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, User, Coins, Check, Volume2, Sparkles, HelpCircle, Lock, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatCoins } from "@/lib/utils";

const PRESET_AVATARS = [
  // Tech / Bot themes
  { id: "robo", url: "https://api.dicebear.com/7.x/bottts/svg?seed=Robo", label: "Robo Cyber" },
  { id: "kitty", url: "https://api.dicebear.com/7.x/bottts/svg?seed=Kitty", label: "Neon Kitty" },
  { id: "space", url: "https://api.dicebear.com/7.x/bottts/svg?seed=Space", label: "Star Explorer" },
  { id: "vapor", url: "https://api.dicebear.com/7.x/bottts/svg?seed=Vapor", label: "Vaporwave" },
  { id: "retro", url: "https://api.dicebear.com/7.x/bottts/svg?seed=Retro", label: "Retro Game" },
  { id: "matrix", url: "https://api.dicebear.com/7.x/bottts/svg?seed=Matrix", label: "Matrix Glitch" },
  
  // Diverse & Cool themes (Premium)
  { id: "pixel", url: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Knight", label: "Pixel Hero", premium: true },
  { id: "mage", url: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mage", label: "Wild Mage", premium: true },
  { id: "cyber", url: "https://api.dicebear.com/7.x/lorelei/svg?seed=Cyber", label: "Cyberpunk", premium: true },
  { id: "micah", url: "https://api.dicebear.com/7.x/micah/svg?seed=Pro", label: "Pro Gamer", premium: true },
  { id: "ninja", url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja", label: "Ninja Mode", premium: true },
  { id: "ghost", url: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Ghost", label: "Ghost Face", premium: true },
];

interface SettingsClientProps {
  initialUser: {
    username: string;
    avatarUrl: string;
    coins: number;
    bio: string | null;
  };
}

export default function SettingsClient({ initialUser }: SettingsClientProps) {
  const router = useRouter();

  // Local settings states
  const [username, setUsername] = useState(initialUser.username);
  const [bio, setBio] = useState(initialUser.bio || "");
  const [selectedAvatar, setSelectedAvatar] = useState(initialUser.avatarUrl);
  const [coins, setCoins] = useState(initialUser.coins);

  // Local Persisted Sound effects settings
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Load sound configuration on mount
  useEffect(() => {
    const s = localStorage.getItem("quiz_sounds_enabled");
    const h = localStorage.getItem("quiz_haptics_enabled");
    if (s !== null) setSoundsEnabled(s === "true");
    if (h !== null) setHapticEnabled(h === "true");
  }, []);

  function toggleSounds() {
    const val = !soundsEnabled;
    setSoundsEnabled(val);
    localStorage.setItem("quiz_sounds_enabled", String(val));
  }

  function toggleHaptics() {
    const val = !hapticEnabled;
    setHapticEnabled(val);
    localStorage.setItem("quiz_haptics_enabled", String(val));
  }

  async function handleSave() {
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/users/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username !== initialUser.username ? username : undefined,
          avatarUrl: selectedAvatar !== initialUser.avatarUrl ? selectedAvatar : undefined,
          bio,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setSuccessMsg(data.message);
        if (data.user) {
          setCoins(data.user.coins);
          setSelectedAvatar(data.user.avatarUrl);
        }
        // Force refresh active session parameters
        router.refresh();
      } else {
        setErrorMsg(data.error || "Failed to update profile settings.");
      }
    } catch {
      setErrorMsg("Connection error. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] w-full max-w-5xl mx-auto gap-6 sm:gap-8">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-start gap-4 relative">
        <h1 className="text-2xl sm:text-3xl font-black font-[family-name:var(--font-syne)] text-foreground tracking-wide ">
          Settings
        </h1>
      </div>

      {/* Visual profile preview card */}
      <div className="glass-card p-6 sm:p-8  relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 rounded-3xl border border-white/5 shadow-2xl mt-2">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-violet)]/10 to-[var(--brand-cyan)]/5 pointer-events-none" />
        
        <div className="relative shrink-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 relative drop-shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedAvatar}
              alt="Avatar Preview"
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 text-center sm:text-left flex flex-col justify-center h-full">
          <h2 className="text-xl sm:text-2xl font-black text-foreground truncate tracking-wide">{username}</h2>
          <p className="text-sm text-muted-foreground mt-1 truncate">
            {bio || "No status bio set."}
          </p>
        </div>

      </div>

      {/* ── PROFILE SETTINGS ── */}
      <div className="glass-card p-6 sm:p-8 space-y-6 rounded-3xl border border-white/5 shadow-xl">
        <h3 className="text-sm font-black text-muted-foreground uppercase tracking-widest border-b border-white/10 pb-3 flex items-center gap-2">
          <User className="w-4 h-4" /> Edit Profile
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Username form */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-bold text-foreground">Username</label>
              <span className="text-[10px] sm:text-xs text-[var(--brand-gold)] font-bold bg-[var(--brand-gold)]/10 px-2 py-0.5 rounded-full border border-[var(--brand-gold)]/20">
                Cost: 200 🪙
              </span>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-sm font-semibold text-foreground focus:outline-none focus:border-[var(--brand-violet)] focus:ring-1 focus:ring-[var(--brand-violet)]/50 transition-all shadow-inner"
            />
          </div>

          {/* Bio form */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground block">
              Status Bio
            </label>
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={100}
              placeholder="Type a neat gamer status..."
              className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-sm font-semibold text-foreground focus:outline-none focus:border-[var(--brand-violet)] focus:ring-1 focus:ring-[var(--brand-violet)]/50 transition-all shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* ── PREMIUM PRESET AVATARS ── */}
      <div className="glass-card p-6 sm:p-8 space-y-5 rounded-3xl border border-white/5 shadow-xl">
        <h3 className="text-sm font-black text-muted-foreground uppercase tracking-widest border-b border-white/10 pb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Select Avatar
        </h3>
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {PRESET_AVATARS.map((avatar) => {
            const isSelected = selectedAvatar === avatar.url;
            return (
              <div
                key={avatar.id}
                onClick={() => !avatar.premium && setSelectedAvatar(avatar.url)}
                className={cn(
                  "p-3 rounded-2xl border text-center flex flex-col items-center gap-3 transition-all duration-300 relative",
                  avatar.premium ? "opacity-50 cursor-not-allowed grayscale" : "cursor-pointer",
                  isSelected
                    ? "border-[var(--brand-violet)] bg-gradient-to-b from-[var(--brand-violet)]/20 to-[var(--brand-violet)]/5 scale-105"
                    : "border-white/5 bg-black/20 hover:bg-white/5 hover:border-white/10"
                )}
              >
                {/* Premium Icon Overlay */}
                {avatar.premium && (
                  <div className="absolute top-1 right-1 w-5 h-5 bg-[var(--brand-gold)] rounded-full flex items-center justify-center shadow-md z-10">
                    <Lock className="w-3 h-3 text-background" />
                  </div>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={avatar.url} alt={avatar.label} className={cn("w-12 h-12 sm:w-16 sm:h-16 rounded-xl border transition-all", isSelected ? "border-[var(--brand-violet)]" : "border-white/5")} />
                <span className={cn("text-[10px] sm:text-xs font-bold truncate max-w-full uppercase tracking-wider", isSelected ? "text-white" : "text-muted-foreground")}>
                  {avatar.label}
                </span>
              </div>
            );
          })}
        </div>
        
        <Link href="/shop" className="block mt-6">
          <Button variant="outline" className="w-full h-12 border-[var(--brand-gold)]/30 hover:bg-[var(--brand-gold)]/10 hover:border-[var(--brand-gold)]/50 text-[var(--brand-gold)] font-bold rounded-xl transition-all flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Unlock Premium Avatars in Shop
          </Button>
        </Link>
      </div>

      {/* ── GAME SYSTEM CONFIG ── */}
      <div className="glass-card p-6 sm:p-8 space-y-6 rounded-3xl border border-white/5 shadow-xl">
        <h3 className="text-sm font-black text-muted-foreground uppercase tracking-widest border-b border-white/10 pb-3 flex items-center gap-2">
          <Volume2 className="w-4 h-4" /> Gameplay Config
        </h3>

        {/* Sound toggle */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
          <div className="space-y-1">
            <p className="text-base font-bold text-foreground">Sound Effects</p>
            <p className="text-xs text-muted-foreground">Enable sounds on correct/wrong answers</p>
          </div>
          <button
            onClick={toggleSounds}
            className={cn(
              "w-14 h-7 sm:w-16 sm:h-8 rounded-full relative transition-colors duration-300 border border-white/10 shrink-0",
              soundsEnabled ? "bg-[var(--brand-success)]" : "bg-muted"
            )}
          >
            <motion.div
              layout
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white absolute top-1 sm:top-[3px]"
              animate={{ left: soundsEnabled ? "calc(100% - 24px - 4px)" : "4px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>

        {/* Haptics toggle */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
          <div className="space-y-1">
            <p className="text-base font-bold text-foreground">Haptic Vibrations</p>
            <p className="text-xs text-muted-foreground">Micro-vibration feedback during battle rounds</p>
          </div>
          <button
            onClick={toggleHaptics}
            className={cn(
              "w-14 h-7 sm:w-16 sm:h-8 rounded-full relative transition-colors duration-300 border border-white/10 shrink-0",
              hapticEnabled ? "bg-[var(--brand-violet)]" : "bg-muted"
            )}
          >
            <motion.div
              layout
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white absolute top-1 sm:top-[3px]"
              animate={{ left: hapticEnabled ? "calc(100% - 24px - 4px)" : "4px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>
      </div>

      {/* Error/Success Feedbacks */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 bg-[var(--brand-danger)]/10 border border-[var(--brand-danger)]/20 text-[var(--brand-danger)] text-sm font-bold rounded-2xl text-center shadow-lg"
          >
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Save Button */}
      <div className="pt-4 pb-8 sm:pb-0">
        <Button
          onClick={handleSave}
          disabled={loading}
          className="w-full h-14 bg-primary hover:opacity-90 text-white font-black text-lg tracking-wide rounded-2xl transition-all uppercase"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Saving Changes...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Check className="w-6 h-6" /> Save Settings
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
