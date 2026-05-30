"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Coins, Gift, Check, Flame, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatCoins } from "@/lib/utils";
import { useRouter } from "next/navigation";
import giftImage from "@/assets/gift.png";

interface RewardDay {
  day: number;
  coins: number;
  xp: number;
}

interface DailyRewardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimSuccess: (coins: number, newCoinsTotal: number) => void;
}

export function DailyRewardsModal({ isOpen, onClose, onClaimSuccess }: DailyRewardsModalProps) {
  const router = useRouter();
  const [data, setData] = useState<{
    loginStreak: number;
    claimedToday: boolean;
    currentDayIndex: number;
    rewards: RewardDay[];
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const [claimedReward, setClaimedReward] = useState<{ coins: number; xp: number } | null>(null);

  async function fetchRewards() {
    try {
      const res = await fetch("/api/daily-rewards");
      const d = await res.json();
      if (!d.error) {
        setData(d);
      }
    } catch (e) {
      console.error("Failed to fetch daily rewards info", e);
    }
  }

  useEffect(() => {
    if (isOpen) {
      fetchRewards();
    }
  }, [isOpen]);

  async function handleClaim() {
    if (!data || data.claimedToday) return;
    setLoading(true);

    try {
      const res = await fetch("/api/daily-rewards/claim", {
        method: "POST",
      });
      const resData = await res.json();

      if (resData.success) {
        setClaimedReward({
          coins: resData.coinsAwarded,
          xp: resData.xpAwarded,
        });

        // Trigger parent callback to update coin counter in dashboard
        onClaimSuccess(resData.coinsAwarded, resData.totalCoins);

        // Refresh local stats
        await fetchRewards();
      } else {
        alert(resData.error || "Failed to claim reward.");
      }
    } catch {
      alert("Error claiming reward.");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen || !data) return null;

  const handleClose = () => {
    onClose();
    if (claimedReward) {
      setTimeout(() => {
        router.push("/spin");
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-background/85 backdrop-blur-md"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-sm glass-card p-6 flex flex-col gap-5 border border-white/10"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon Header */}
          <div className="text-center space-y-2 mt-2">
            <div className="mx-auto w-16 h-16 relative flex items-center justify-center animate-bounce-slow filter drop-shadow-[0_2px_12px_rgba(245,158,11,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={giftImage.src} alt="Daily Gift" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-black font-[family-name:var(--font-syne)] text-foreground">
                Daily Rewards Calendar
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Check in daily to build your streak & earn larger treasures!
              </p>
            </div>

            {data.loginStreak > 0 && (
              <div className="inline-flex items-center gap-1 text-xs font-bold text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                <Flame className="w-3.5 h-3.5 fill-orange-400" />
                <span>{data.loginStreak} Day Streak</span>
              </div>
            )}
          </div>

          {/* 7 Days Grid */}
          <div className="grid grid-cols-4 gap-2">
            {data.rewards.map((reward) => {
              const isToday = reward.day === data.currentDayIndex;
              const isClaimed = reward.day < data.currentDayIndex || (reward.day === data.currentDayIndex && data.claimedToday);
              const isUpcoming = reward.day > data.currentDayIndex;

              return (
                <div
                  key={reward.day}
                  className={cn(
                    "relative overflow-hidden rounded-xl sm:rounded-2xl p-2.5 flex flex-col items-center gap-1 border text-center transition-all duration-200",
                    reward.day === 7 && "col-span-2 flex-row justify-center gap-3", // Make day 7 larger
                    isToday && !isClaimed
                      ? "border-[var(--brand-gold)] bg-amber-500/10 shadow-[0_0_12px_rgba(245,158,11,0.2)] glow-gold"
                      : isClaimed
                        ? "border-[var(--brand-success)]/20 bg-[var(--brand-success)]/5 text-muted-foreground"
                        : "border-white/5 bg-muted/10 opacity-70"
                  )}
                >
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                    Day {reward.day}
                  </p>

                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm">
                    {isClaimed ? (
                      <Check className="w-4 h-4 text-[var(--brand-success)]" />
                    ) : reward.day === 7 ? (
                      "🎁"
                    ) : (
                      "🪙"
                    )}
                  </div>

                  <div className={cn(reward.day === 7 && "text-left")}>
                    <p className="text-xs font-black text-foreground">+{reward.coins}</p>
                    <p className="hidden sm:block text-[8px] text-muted-foreground">+{reward.xp} XP</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Claim Action / Status */}
          <div className="pt-2">
            {claimedReward ? (
              <div className="text-center py-2.5 rounded-2xl bg-[var(--brand-success)]/10 border border-[var(--brand-success)]/20 text-xs text-[var(--brand-success)] font-bold animate-in fade-in zoom-in duration-300">
                Claimed successfully! +{claimedReward.coins} 🪙 and +{claimedReward.xp} XP
              </div>
            ) : data.claimedToday ? (
              <div className="text-center py-2.5 rounded-2xl bg-muted/20 border border-white/5 text-xs text-muted-foreground font-bold">
                Today's reward claimed! Next reset at midnight.
              </div>
            ) : (
              <Button
                onClick={handleClaim}
                disabled={loading}
                className="w-full h-11 rounded-2xl font-bold bg-amber-500 hover:bg-amber-600 text-black flex items-center justify-center gap-2 glow-gold"
              >
                <Sparkles className="w-4 h-4 text-black animate-spin-slow" />
                <span>{loading ? "Claiming..." : "Claim Today's Reward!"}</span>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
