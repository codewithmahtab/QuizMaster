"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  Home,
  Swords,
  BarChart3,
  User,
  ShoppingBag,
  Settings,
  LogOut,
  Zap,
  Coins,
  LogIn,
  UserPlus,
} from "lucide-react";
import { cn, formatCoins } from "@/lib/utils";

interface UserData {
  username: string;
  avatarUrl?: string | null;
  coins: number;
  xp: number;
  level: number;
  loginStreak: number;
  rankedPoints: number;
}

interface SidebarProps {
  user: UserData | null;
  frameId?: string | null;
  frameUrl?: string | null;
  frameName?: string | null;
}

const menuItems = [
  { href: "/home",        label: "Dashboard",   icon: Home },
  { href: "/battle",      label: "1v1 Battle",  icon: Swords,     badge: "HOT" },
  { href: "/leaderboard", label: "Leaderboard", icon: BarChart3 },
  { href: "/shop",        label: "Shop",         icon: ShoppingBag },
  { href: "/profile",     label: "My Profile",  icon: User },
  { href: "/settings",    label: "Settings",     icon: Settings },
];

export function Sidebar({ user, frameId, frameUrl, frameName }: SidebarProps) {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const { user: clerkUser, isLoaded } = useUser();

  const isAuthenticated = !!user || (isLoaded && !!clerkUser);
  const displayCoins = user ? user.coins : 100; // default 100 welcome bonus if DB is syncing

  return (
    <aside className="hidden md:flex flex-col w-56 h-screen sticky top-0 glass-sidebar py-6 px-4 shrink-0 overflow-y-auto">
      {/* Logo */}
      <div className="px-3 mb-8">
        <Link href="/home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-primary to-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-primary leading-none">
              QuizMaster
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--brand-cyan)] mt-0.5">
              PRO EDITION
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 flex flex-col gap-1 px-1">
        {menuItems.map(({ href, label, icon: Icon, badge }) => {
          const isActive = pathname === href || (href !== "/home" && pathname.startsWith(href + "/"));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "sidebar-link flex items-center justify-between px-3.5 py-3 rounded-none text-xs font-semibold text-muted-foreground hover:text-foreground transition-all duration-200",
                isActive ? "sidebar-link-active text-foreground" : "hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-[var(--brand-violet)]" : "text-muted-foreground")} />
                <span>{label}</span>
              </div>
              {badge && (
                <span className="text-[9px] font-black bg-[var(--brand-violet)]/20 text-[var(--brand-violet)] px-2 py-0.5 rounded-full tracking-wider border border-[var(--brand-violet)]/30 animate-pulse">
                  {badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer — authenticated */}
      {isAuthenticated ? (
        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
          <div className="flex items-center justify-between px-3 py-2 bg-amber-500/8 rounded-xl border border-amber-500/10">
            <span className="text-[10px] font-bold text-amber-500 flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5" />
              BALANCE
            </span>
            <span className="font-mono text-xs font-bold text-amber-400">
              {formatCoins(displayCoins)} 🪙
            </span>
          </div>

          <button
            onClick={() => signOut({ redirectUrl: "/home" })}
            className="flex items-center gap-3 px-3.5 py-3 text-xs font-semibold text-muted-foreground hover:text-red-400 rounded-xl hover:bg-red-500/5 transition-all duration-200 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      ) : (
        /* Footer — guest */
        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-2">
          <p className="text-[10px] text-muted-foreground/50 font-semibold uppercase tracking-widest px-3 mb-1">
            Get Started
          </p>
          <Link
            href="?auth=sign-in"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-[var(--brand-violet)]/10 text-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/20 border border-[var(--brand-violet)]/20 transition-all duration-200"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </Link>
          <Link
            href="?auth=sign-up"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 border border-white/8 transition-all duration-200"
          >
            <UserPlus className="w-4 h-4" />
            Create Account
          </Link>
        </div>
      )}
    </aside>
  );
}
