"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Swords, BarChart3, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home",        icon: Home,     label: "Home" },
  { href: "/battle",      icon: Swords,   label: "Battle" },
  { href: "/leaderboard", icon: BarChart3, label: "Ranks" },
  { href: "/profile",     icon: User,     label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-card)] border-t border-border/50 backdrop-blur-xl bg-opacity-90">
      <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 no-tap",
                "min-w-[60px]",
                isActive
                  ? ""
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "relative flex items-center justify-center",
                isActive && "after:absolute after:inset-0 after:rounded-xl after:bg-[var(--brand-violet)]/15 after:-z-10 after:scale-125"
              )}>
                <Icon
                  className={cn(
                    "w-5 h-5 transition-all duration-200",
                    isActive && "drop-shadow-[0_0_8px_var(--brand-violet)]"
                  )}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
              </div>
              <span className={cn(
                "text-[10px] font-medium transition-all duration-200",
                isActive ? "font-bold" : ""
              )}>
                {label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--brand-violet)]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
