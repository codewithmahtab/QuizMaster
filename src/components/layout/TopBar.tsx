"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Coins, Zap, Bell, LogIn, UserPlus } from "lucide-react";
import { cn, formatCoins, getAvatarUrl } from "@/lib/utils";
import { NotificationCenter } from "@/components/game/NotificationCenter";
import { useUserStats } from "@/context/UserStatsContext";

interface UserData {
  username: string;
  avatarUrl?: string | null;
  coins: number;
  xp: number;
  level: number;
}

interface TopBarProps {
  user: UserData | null;
  frameId?: string | null;
  frameUrl?: string | null;
  frameName?: string | null;
}

export function TopBar({ user, frameId, frameUrl, frameName }: TopBarProps) {
  const pathname = usePathname();
  const { user: clerkUser, isLoaded } = useUser();
  // Read coins/level from global context (stays in sync across all components)
  let statsCtx: ReturnType<typeof useUserStats> | null = null;
  try { statsCtx = useUserStats(); } catch {}

  const isAuthenticated = !!user || (isLoaded && !!clerkUser);
  const displayUsername = user ? user.username : (clerkUser?.username || clerkUser?.firstName || "Player");
  const displayAvatar = user 
    ? (user.avatarUrl || getAvatarUrl(user.username)) 
    : (clerkUser?.imageUrl || getAvatarUrl(displayUsername));
  // Prefer live context value (updated on purchase/reward) over stale server prop
  const displayCoins = statsCtx ? statsCtx.coins : (user ? user.coins : 100);
  const displayLevel = statsCtx ? statsCtx.level : (user ? user.level : 1);

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Check unread count on load (only when logged in)
  useEffect(() => {
    if (!isAuthenticated) return;
    async function checkCount() {
      try {
        const res = await fetch("/api/notifications");
        const data = await res.json();
        if (data.unreadCount !== undefined) {
          setUnreadCount(data.unreadCount);
        }
      } catch (e) {
        console.error(e);
      }
    }
    checkCount();
  }, [isAuthenticated]);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/30 w-full">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto w-full">

        {/* Logo & Desktop Nav */}
        <div className="flex items-center gap-6">
          <Link href="/home" className="flex items-center gap-2 shrink-0 md:hidden">
            <div className="w-7 h-7 rounded-lg bg-[var(--brand-violet)] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="hidden sm:flex font-bold text-base gradient-text font-[family-name:var(--font-syne)]">
              QuizMaster
            </span>
          </Link>

          {/* Desktop Breadcrumbs */}
          <div className="hidden md:flex items-center gap-2 select-none">
            <span className="text-xs font-black tracking-wider uppercase text-[var(--brand-violet)] bg-[var(--brand-violet)]/10 px-2 py-0.5 rounded-md border border-[var(--brand-violet)]/15">
              SYSTEM
            </span>
            <span className="text-muted-foreground/45 text-sm">/</span>
            <span className="text-xs font-bold text-muted-foreground capitalize">
              {pathname.split("/").filter(Boolean)[0] || "dashboard"}
            </span>
            {pathname.split("/").filter(Boolean)[1] && (
              <>
                <span className="text-muted-foreground/30 text-xs">/</span>
                <span className="text-xs font-semibold text-muted-foreground/70 truncate max-w-[120px] capitalize">
                  {pathname.split("/").filter(Boolean)[1].replace("-", " ")}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Right side */}
        {isAuthenticated ? (
          /* Authenticated: coins + level + notifications + avatar */
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="coin-chip">
                <Coins className="w-3 h-3" />
                {formatCoins(displayCoins)}
              </div>
              <div className="xp-chip">
                <span className="text-[9px]">LVL</span>
                {displayLevel}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setNotificationsOpen(true)}
                className="relative w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--brand-cyan)] rounded-full border border-background shadow-[0_0_8px_var(--brand-cyan)] animate-pulse" />
                )}
              </button>
              <Link href="/profile">
                <div className="relative">
                  <div className="relative w-8 h-8 drop-shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={displayAvatar!}
                      alt={displayUsername}
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          /* Guest: Login + Register buttons */
          <div className="flex items-center gap-2">
            <Link
              href="?auth=sign-in"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",
                "bg-[var(--brand-violet)]/10 text-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/20 border border-[var(--brand-violet)]/25"
              )}
            >
              <LogIn className="w-3.5 h-3.5" />
              Sign In
            </Link>
            <Link
              href="?auth=sign-up"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
                "bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 border border-white/10"
              )}
            >
              <UserPlus className="w-3.5 h-3.5" />
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Floating Notification Center Drawer */}
      {isAuthenticated && (
        <NotificationCenter
          isOpen={notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
          onUnreadChange={setUnreadCount}
        />
      )}
    </header>
  );
}
