"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, LogIn, UserPlus, Zap, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AuthGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Optional context message, e.g. "play 1v1 Battle" */
  action?: string;
}

export function AuthGateModal({ isOpen, onClose, action }: AuthGateModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal card */}
          <motion.div
            className="relative z-10 w-full max-w-sm bg-[var(--card)] border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col gap-5"
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-violet)]/10 border border-[var(--brand-violet)]/20 mx-auto">
              <Lock className="w-7 h-7 text-[var(--brand-violet)]" />
            </div>

            {/* Text */}
            <div className="text-center space-y-1.5">
              <h2 className="font-black text-lg text-foreground font-[family-name:var(--font-syne)]">
                Login Required
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {action
                  ? `You need an account to ${action}.`
                  : "You need an account to access this feature."}
                {" "}Join QuizMaster Pro — it&apos;s free!
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-2">
              <Link
                href="?auth=sign-in"
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white font-bold text-sm py-2.5 rounded-xl transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>
              <Link
                href="?auth=sign-up"
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-semibold text-sm py-2.5 rounded-xl transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                Create Account
              </Link>
            </div>

            {/* Branding */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground/50 font-semibold tracking-widest uppercase">
              <Zap className="w-3 h-3" />
              QuizMaster Pro
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
