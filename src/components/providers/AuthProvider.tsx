"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#8b5cf6",
          colorBackground: "#0f0f12",
          colorInputBackground: "#1e1e24",
          colorText: "#ffffff",
          colorTextSecondary: "#a1a1aa",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}

