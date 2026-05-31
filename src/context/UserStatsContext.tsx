"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface UserStats {
  coins: number;
  xp: number;
  level: number;
}

interface UserStatsContextValue {
  coins: number;
  xp: number;
  level: number;
  setCoins: (coins: number) => void;
  setStats: (stats: Partial<UserStats>) => void;
  refreshFromServer: () => Promise<void>;
}

const UserStatsContext = createContext<UserStatsContextValue | null>(null);

export function UserStatsProvider({
  children,
  initialCoins = 0,
  initialXp = 0,
  initialLevel = 1,
}: {
  children: ReactNode;
  initialCoins?: number;
  initialXp?: number;
  initialLevel?: number;
}) {
  const [coins, setCoinsState] = useState(initialCoins);
  const [xp, setXpState] = useState(initialXp);
  const [level, setLevelState] = useState(initialLevel);

  const setCoins = useCallback((value: number) => {
    setCoinsState(value);
  }, []);

  const setStats = useCallback((stats: Partial<UserStats>) => {
    if (stats.coins !== undefined) setCoinsState(stats.coins);
    if (stats.xp !== undefined) setXpState(stats.xp);
    if (stats.level !== undefined) setLevelState(stats.level);
  }, []);

  // Fetch latest coin/level values from the server
  const refreshFromServer = useCallback(async () => {
    try {
      const res = await fetch("/api/users/me");
      if (res.ok) {
        const data = await res.json();
        if (data.coins !== undefined) setCoinsState(data.coins);
        if (data.xp !== undefined) setXpState(data.xp);
        if (data.level !== undefined) setLevelState(data.level);
      }
    } catch (e) {
      // Silently fail — UI is still functional
    }
  }, []);

  return (
    <UserStatsContext.Provider value={{ coins, xp, level, setCoins, setStats, refreshFromServer }}>
      {children}
    </UserStatsContext.Provider>
  );
}

export function useUserStats() {
  const ctx = useContext(UserStatsContext);
  if (!ctx) throw new Error("useUserStats must be used inside <UserStatsProvider>");
  return ctx;
}
