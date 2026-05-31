import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { ClerkAuthModal } from "@/components/game/ClerkAuthModal";
import { UserStatsProvider } from "@/context/UserStatsContext";
import { levelFromXP } from "@/lib/levelSystem";

export const dynamic = "force-dynamic";

export default async function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Fetch user data only when logged in — guests get null
  let user = null as null | {
    username: string;
    avatarUrl: string | null;
    coins: number;
    xp: number;
    level: number;
    loginStreak: number;
    rankedPoints: number;
  };
  let equippedFrame = null as null | { id: string; name: string; imageUrl: string | null };

  if (session?.user?.id) {
    const dbUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        username: true,
        avatarUrl: true,
        coins: true,
        xp: true,
        level: true,
        avatarFrameId: true,
        loginStreak: true,
        rankedPoints: true,
      },
    });

    if (dbUser) {
      // Recalculate and correct level desyncs dynamically
      const correctLevel = levelFromXP(dbUser.xp);
      if (dbUser.level !== correctLevel) {
        dbUser.level = correctLevel;
        // Asynchronously correct desync in DB
        prisma.user.update({
          where: { id: session.user.id },
          data: { level: correctLevel },
        }).catch(err => console.error("Failed to sync level in layout:", err));
      }

      // Strip avatarFrameId before passing to nav components
      const { avatarFrameId, ...rest } = dbUser;
      user = rest;

      if (avatarFrameId) {
        equippedFrame = await prisma.shopItem.findUnique({
          where: { id: avatarFrameId },
          select: { id: true, name: true, imageUrl: true },
        });
      }
    }
  }

  return (
    <UserStatsProvider
      initialCoins={user?.coins ?? 0}
      initialXp={user?.xp ?? 0}
      initialLevel={user?.level ?? 1}
    >
      <div className="min-h-screen bg-background flex md:flex-row flex-col mesh-bg">
        <Sidebar
          user={user}
          frameId={equippedFrame?.id}
          frameUrl={equippedFrame?.imageUrl}
          frameName={equippedFrame?.name}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar
            user={user}
            frameId={equippedFrame?.id}
            frameUrl={equippedFrame?.imageUrl}
            frameName={equippedFrame?.name}
          />
          <main className="flex-1 pb-safe md:pb-8 max-w-[1600px] w-full px-4 sm:px-8 py-6 mx-auto">
            {children}
          </main>
        </div>
        <BottomNav />
        <ClerkAuthModal />
      </div>
    </UserStatsProvider>
  );
}

