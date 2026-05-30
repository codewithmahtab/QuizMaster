import { auth as clerkAuth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { getAvatarUrl } from "@/lib/utils";

export async function auth() {
  try {
    const { userId } = await clerkAuth();
    if (!userId) return null;

    // 1. Fast Path: Check if we have a locally mapped Account for this Clerk userId
    // This avoids slow outbound HTTP calls to Clerk's servers (api.clerk.com) on every page load
    const existingAccount = await prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider: "clerk",
          providerAccountId: userId,
        },
      },
      include: {
        user: true,
      },
    });

    if (existingAccount?.user) {
      return {
        user: {
          id: existingAccount.user.id,
          email: existingAccount.user.email,
          name: existingAccount.user.username,
          image: existingAccount.user.avatarUrl,
        },
      };
    }

    // 2. Slow Path: User is logging in for the first time, or account mapping does not exist yet
    // Fetch user details from Clerk to synchronize profile and create a local record
    let clerkUser = null;
    try {
      clerkUser = await currentUser();
    } catch (fetchError) {
      console.error("Clerk currentUser fetch failed, falling back gracefully:", fetchError);
    }

    if (!clerkUser) {
      // Fallback: If Clerk API is offline or network fails, try finding any user already synced
      return null;
    }

    const email = clerkUser.emailAddresses[0]?.emailAddress;
    if (!email) return null;

    // Try finding by email
    let dbUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!dbUser) {
      // Create user automatically
      const username = clerkUser.username || clerkUser.firstName || `user_${userId.slice(-6)}`;
      
      // Ensure unique username
      let finalUsername = username;
      const count = await prisma.user.count({ where: { username: finalUsername } });
      if (count > 0) {
        finalUsername = `${username}_${Math.floor(Math.random() * 1000)}`;
      }

      try {
        dbUser = await prisma.user.create({
          data: {
            username: finalUsername,
            email,
            avatarUrl: clerkUser.imageUrl || getAvatarUrl(finalUsername),
            coins: 100, // Welcome bonus
            xp: 0,
            level: 1,
          },
        });
      } catch (err: any) {
        // Handle race conditions where parallel Server Components (like Layout & Page) 
        // try to create the same user simultaneously.
        if (err.code === 'P2002') {
          const existing = await prisma.user.findUnique({ where: { email } });
          if (existing) {
            dbUser = existing;
          } else {
            throw err;
          }
        } else {
          throw err;
        }
      }
    }

    if (!dbUser) return null;

    // Create Account mapping so future requests hits the database-backed Fast Path
    await prisma.account.upsert({
      where: {
        provider_providerAccountId: {
          provider: "clerk",
          providerAccountId: userId,
        }
      },
      update: {},
      create: {
        userId: dbUser.id,
        type: "oauth",
        provider: "clerk",
        providerAccountId: userId,
      },
    }).catch((err) => {
      // Gracefully handle case where account mapping was created in a parallel thread
      console.warn("Could not create account mapping (might already exist):", err.message);
    });

    return {
      user: {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.username,
        image: dbUser.avatarUrl,
      },
    };
  } catch (error) {
    console.error("Error in auth session sync:", error);
    return null;
  }
}

export const signIn = async () => {};
export const signOut = async () => {};
export const handlers = {
  GET: () => new Response("Not found", { status: 404 }),
  POST: () => new Response("Not found", { status: 404 }),
};
