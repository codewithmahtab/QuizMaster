import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/battle(.*)",
  "/ranked(.*)",
  "/profile(.*)",
  "/shop(.*)",
  "/settings(.*)",
  "/spin(.*)",
  "/daily-quiz(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (isProtectedRoute(req) && !userId) {
    // Redirect to home with a query parameter to open the sign-in modal
    const url = new URL("/home", req.url);
    url.searchParams.set("auth", "sign-in");
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
