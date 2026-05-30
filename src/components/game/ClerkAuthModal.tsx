"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SignIn, SignUp, useAuth } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";

export function ClerkAuthModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  const authMode = searchParams.get("auth"); // "sign-in" or "sign-up"
  const isOpen = authMode === "sign-in" || authMode === "sign-up";

  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth");
    const query = params.toString() ? `?${params.toString()}` : "";
    router.replace(`${pathname}${query}`);
  };

  // Automatically close modal and hard refresh layout when user successfully signs in/up.
  // We use window.location.href to guarantee the server receives the new session cookies 
  // and to avoid Next.js router hanging bugs during auth transitions.
  useEffect(() => {
    if (isSignedIn && isOpen) {
      window.location.href = pathname;
    }
  }, [isSignedIn, isOpen, pathname]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  const clerkAppearance = {
    elements: {
      card: "bg-[#131926] border border-white/10 shadow-2xl rounded-3xl p-6",
      headerTitle: "text-white font-black text-xl font-[family-name:var(--font-syne)]",
      headerSubtitle: "text-zinc-400 text-xs",
      socialButtonsBlockButton: "bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all cursor-pointer",
      socialButtonsBlockButtonText: "text-white font-semibold",
      dividerLine: "bg-white/10",
      dividerText: "text-zinc-400",
      formFieldLabel: "text-white font-semibold text-xs",
      formFieldInput: "bg-[#17233f] border border-white/10 text-white placeholder-zinc-500 rounded-xl focus:border-[#8b5cf6] transition-all",
      formButtonPrimary: "bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white font-bold py-2.5 rounded-xl border-none shadow-none text-sm transition-all cursor-pointer",
      footerActionText: "text-zinc-400",
      footerActionLink: "text-[#8b5cf6] hover:underline font-semibold",
      identityPreviewText: "text-white",
      identityPreviewEditButtonIcon: "text-[#8b5cf6]",
      formResendCodeLink: "text-[#8b5cf6] hover:underline",
      formFieldInputShowPasswordButton: "text-zinc-400 hover:text-white",
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal Container holding only the Clerk component */}
          <motion.div
            className="relative z-10 w-full max-w-fit flex justify-center"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          >
            {authMode === "sign-in" ? (
              <SignIn
                routing="hash"
                signUpUrl={`${pathname}?auth=sign-up`}
                fallbackRedirectUrl="/home"
                appearance={clerkAppearance}
              />
            ) : (
              <SignUp
                routing="hash"
                signInUrl={`${pathname}?auth=sign-in`}
                fallbackRedirectUrl="/home"
                appearance={clerkAppearance}
              />
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
