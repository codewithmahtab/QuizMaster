import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import BattleHome from "./_components/BattleHome";

export default async function BattlePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  return <BattleHome />;
}
