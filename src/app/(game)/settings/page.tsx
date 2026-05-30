import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import SettingsClient from "./_components/SettingsClient";

export default async function SettingsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const userId = session.user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      username: true,
      avatarUrl: true,
      coins: true,
      bio: true,
    },
  });

  if (!user) redirect("/login");

  const decorated = {
    username: user.username,
    avatarUrl: user.avatarUrl || "https://api.dicebear.com/7.x/bottts/svg?seed=Robo",
    coins: user.coins,
    bio: user.bio,
  };

  return <SettingsClient initialUser={decorated} />;
}
