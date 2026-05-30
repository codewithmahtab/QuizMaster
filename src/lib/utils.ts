import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a coin amount with commas
 */
export function formatCoins(amount: number): string {
  return amount.toLocaleString("en-US");
}

/**
 * Format a large number (e.g. 12500 → "12.5K")
 */
export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

/**
 * Get DiceBear avatar URL for a given seed (username)
 */
export function getAvatarUrl(seed: string, style: string = "adventurer"): string {
  return `https://api.dicebear.com/9.x/${style}/svg?seed=${encodeURIComponent(seed)}&backgroundColor=0f0f1a`;
}

/**
 * Win rate percentage rounded to 1 decimal
 */
export function winRate(wins: number, totalMatches: number): number {
  if (totalMatches === 0) return 0;
  return Math.round((wins / totalMatches) * 1000) / 10;
}

/**
 * Get today's date string in "YYYY-MM-DD" format (UTC)
 */
export function todayUTC(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Get current week's Monday date string in "YYYY-MM-DD" format
 */
export function currentWeekStart(): string {
  const now = new Date();
  const day = now.getUTCDay(); // 0=Sun, 1=Mon ...
  const diff = (day === 0 ? -6 : 1 - day); // adjust to Monday
  const monday = new Date(now);
  monday.setUTCDate(now.getUTCDate() + diff);
  return monday.toISOString().slice(0, 10);
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Shuffle an array (Fisher-Yates)
 */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Delay (Promise-based sleep)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
