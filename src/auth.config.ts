// auth.config.ts — EDGE-SAFE config (no Prisma, no Node.js-only imports)
// Used by the proxy (middleware) which runs in Edge Runtime.
// The full auth config (with PrismaAdapter) lives in src/lib/auth.ts

import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
    error: "/login",
  },

  providers: [
    // Credentials provider must be listed here (even without the authorize fn)
    // so NextAuth knows it's a valid provider during middleware JWT checks.
    Credentials({}),
  ],

  callbacks: {
    // Edge-safe JWT callback — just passes the id through
    async jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      return token;
    },

    // Edge-safe session callback
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id as string;
      return session;
    },

    // Route authorization — runs in Edge, no DB access
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user?.id;
      const pathname = nextUrl.pathname;

      const authPaths = ["/login", "/register"];
      const isAuthPage = authPaths.includes(pathname);

      // Let auth pages through for everyone
      if (isAuthPage) {
        // Redirect logged-in users away from auth pages
        if (isLoggedIn) {
          return Response.redirect(new URL("/home", nextUrl));
        }
        return true;
      }

      // Pages guests can browse without logging in
      const publicBrowsePaths = ["/home", "/leaderboard"];
      const isPublic = publicBrowsePaths.some(
        (p) => pathname === p || pathname.startsWith(p + "/")
      );
      if (isPublic) return true;

      // Everything else (battle, ranked, profile, shop, settings, spin…)
      // requires login — redirect to login with callbackUrl
      if (!isLoggedIn) {
        const loginUrl = new URL("/login", nextUrl);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return Response.redirect(loginUrl);
      }

      return true;
    },
  },

  session: { strategy: "jwt" },
};
