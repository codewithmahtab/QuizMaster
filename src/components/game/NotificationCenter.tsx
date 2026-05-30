"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Gift, Swords, Trophy, Star, X, Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: string;
}

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
  onUnreadChange?: (count: number) => void;
}

export function NotificationCenter({ isOpen, onClose, onUnreadChange }: NotificationCenterProps) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchNotifications() {
    try {
      const res = await fetch("/api/notifications");
      const data = await res.json();
      if (data.notifications) {
        setNotifications(data.notifications);
        if (onUnreadChange) {
          onUnreadChange(data.unreadCount);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (isOpen) {
      fetchNotifications();
    }
  }, [isOpen]);

  async function handleMarkAllAsRead() {
    setLoading(true);
    try {
      const res = await fetch("/api/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "read" }),
      });
      const data = await res.json();
      if (data.success) {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
        if (onUnreadChange) {
          onUnreadChange(0);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function getIcon(type: string) {
    switch (type) {
      case "rewards":
        return <Gift className="w-4 h-4 text-amber-400" />;
      case "rank":
        return <Trophy className="w-4 h-4 text-orange-400 font-bold" />;
      case "tournament":
        return <Star className="w-4 h-4 text-[var(--brand-gold)]" />;
      default:
        return <Swords className="w-4 h-4 text-[var(--brand-cyan)]" />;
    }
  }

  if (!isOpen) return null;

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col items-center pointer-events-none">
        {/* Transparent Backdrop to detect clicks outside */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-transparent pointer-events-auto"
        />

        {/* Alignment Wrapper matching TopBar */}
        <div className="w-full max-w-6xl mx-auto px-4 relative mt-14 pointer-events-none">
          {/* Solid Floating Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10, transformOrigin: "top right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-0 right-4 sm:right-4 md:right-[60px] w-80 sm:w-96 bg-[#0B1020] border border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] pointer-events-auto"
          >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[var(--brand-violet)]/10 border border-[var(--brand-violet)]/20 flex items-center justify-center text-[var(--brand-violet)]">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-black font-[family-name:var(--font-syne)] text-foreground">
                  Game Alerts
                </h3>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {unreadCount} unread system notifications
                </p>
              </div>
            </div>

            {unreadCount > 0 && (
              <Button
                onClick={handleMarkAllAsRead}
                disabled={loading}
                variant="ghost"
                className="h-8.5 px-3 rounded-xl border border-white/5 text-[10px] font-bold text-[var(--brand-cyan)] hover:bg-white/5"
              >
                <Check className="w-3.5 h-3.5 mr-1" />
                Mark all read
              </Button>
            )}
          </div>

          {/* Notification List Scroll Area */}
          <div className="max-h-[280px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {notifications.length === 0 ? (
              <div className="text-center py-8 text-xs text-muted-foreground">
                ✨ No notification alerts found.
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={cn(
                    "p-3 rounded-2xl border transition-all duration-300 relative flex gap-3 overflow-hidden",
                    n.read
                      ? "border-white/5 bg-muted/5 opacity-70"
                      : "border-[var(--brand-cyan)]/25 bg-[var(--brand-cyan)]/5 shadow-[0_0_12px_rgba(6,182,212,0.05)]"
                  )}
                >
                  {/* Indicator Dot */}
                  {!n.read && (
                    <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)] animate-pulse" />
                  )}

                  {/* Icon Card background */}
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    {getIcon(n.type)}
                  </div>

                  <div className="flex-1 min-w-0 space-y-0.5">
                    <p className={cn(
                      "text-[11px] font-black text-foreground leading-tight",
                      !n.read && "text-[var(--brand-cyan)] font-extrabold"
                    )}>
                      {n.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">
                      {n.message}
                    </p>
                    <p className="text-[8px] text-muted-foreground/55 font-mono pt-1">
                      {new Date(n.createdAt).toLocaleDateString()} at {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Action button */}
          <Button
            onClick={onClose}
            className="w-full h-10 rounded-2xl bg-[var(--brand-violet)] text-white font-bold text-xs"
          >
            Acknowledge Alerts
          </Button>

        </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
