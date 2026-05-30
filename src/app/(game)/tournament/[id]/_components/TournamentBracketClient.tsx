"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Trophy, ArrowLeft, Play, Shield, HelpCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, getAvatarUrl } from "@/lib/utils";

interface Player {
  id: string;
  username: string;
  avatarUrl: string | null;
}

interface MatchNode {
  id: string;
  matchId: string | null;
  p1: Player | null;
  p2: Player | null;
  p1Score: number | null;
  p2Score: number | null;
  winnerId: string | null;
  status: "pending" | "playing" | "completed";
}

interface Round {
  roundNumber: number;
  name: string;
  matches: MatchNode[];
}

interface BracketData {
  rounds: Round[];
}

interface Tournament {
  id: string;
  name: string;
  description: string | null;
  prizePool: number;
  status: string;
  winnerId: string | null;
  bracket: BracketData | null;
}

interface TournamentBracketClientProps {
  initialTournament: Tournament;
  userId: string;
}

export default function TournamentBracketClient({
  initialTournament,
  userId,
}: TournamentBracketClientProps) {
  const router = useRouter();
  const [tournament, setTournament] = useState<Tournament>(initialTournament);
  const [loadingMatch, setLoadingMatch] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function getTournamentDetails() {
    try {
      const res = await fetch(`/api/tournaments/${tournament.id}`);
      const data = await res.json();
      if (data.tournament) {
        setTournament(data.tournament);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Refresh manually
  async function handleRefresh() {
    setRefreshing(true);
    await getTournamentDetails();
    setRefreshing(false);
  }

  // Poll state every 6s while active so the user can easily see advancements
  useEffect(() => {
    if (tournament.status !== "active") return;
    const interval = setInterval(getTournamentDetails, 6000);
    return () => clearInterval(interval);
  }, [tournament.status]);

  async function playMatch(bracketMatchId: string) {
    setLoadingMatch(bracketMatchId);
    try {
      const res = await fetch(`/api/tournaments/${tournament.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bracketMatchId }),
      });
      const data = await res.json();

      if (data.matchId) {
        router.push(`/battle/${data.matchId}`);
      } else {
        alert(data.error || "Failed to create match");
      }
    } catch {
      alert("Error creating match");
    } finally {
      setLoadingMatch(null);
    }
  }

  const rounds = tournament.bracket?.rounds || [];
  
  // Calculate if the user has been eliminated
  const isEliminated = () => {
    if (tournament.status === "completed" && tournament.winnerId !== userId) return true;
    
    // Find user's last match and see if they lost
    if (rounds.length > 0) {
      for (const round of rounds) {
        for (const match of round.matches) {
          const isUserMatch = match.p1?.id === userId || match.p2?.id === userId;
          if (isUserMatch && match.status === "completed" && match.winnerId !== userId) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return (
    <div className="px-4 py-5 space-y-6 max-w-lg mx-auto min-h-[90vh]">
      
      {/* ── TOP NAV ── */}
      <div className="flex items-center justify-between">
        <Link href="/tournament">
          <Button variant="ghost" className="h-9 px-3 border border-border/30 rounded-xl flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Championships</span>
          </Button>
        </Link>

        <Button
          onClick={handleRefresh}
          variant="outline"
          className={cn("h-9 w-9 p-0 rounded-xl border-border/30", refreshing && "animate-spin")}
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      {/* ── HEADER DETAILS ── */}
      <div className="glass-card p-5 relative overflow-hidden flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-black font-[family-name:var(--font-syne)] text-foreground">
            {tournament.name}
          </h1>
          <span className={cn(
            "text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full border",
            tournament.status === "active"
              ? "bg-[var(--brand-success)]/10 text-[var(--brand-success)] border-[var(--brand-success)]/20"
              : "bg-amber-500/10 text-amber-400 border-amber-500/20 glow-gold"
          )}>
            {tournament.status}
          </span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {tournament.description || "The ultimate single-elimination tournament to test your brain limits!"}
        </p>

        <div className="flex items-center gap-4 pt-3 border-t border-white/5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1 text-amber-400 font-bold">
            <Trophy className="w-4 h-4" />
            {tournament.prizePool} coins Prize Pool
          </span>
        </div>
      </div>

      {/* ── STATUS UPDATES ── */}
      {tournament.status === "completed" && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-5 border-[var(--brand-gold)]/20 bg-[var(--brand-gold)]/5 text-center space-y-3"
        >
          <div className="text-4xl">🏆</div>
          <div>
            <h3 className="text-sm font-black text-amber-400">Tournament Concluded!</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Congratulations to the tournament champion!
            </p>
          </div>
        </motion.div>
      )}

      {isEliminated() && tournament.status === "active" && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-4 border-[var(--brand-danger)]/20 bg-[var(--brand-danger)]/5 text-center"
        >
          <p className="text-xs font-bold text-[var(--brand-danger)]">
            💀 You have been eliminated from the tournament. Spectate to see the final winner!
          </p>
        </motion.div>
      )}

      {/* ── THE BRACKET TREE ── */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Championship Bracket
        </h2>

        <div className="space-y-8 pb-8">
          {rounds.map((round) => (
            <div key={round.roundNumber} className="space-y-3">
              {/* Round title */}
              <div className="flex items-center justify-between border-b border-white/5 pb-1">
                <span className="text-xs font-black text-[var(--brand-cyan)]">
                  {round.name}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  Round {round.roundNumber}
                </span>
              </div>

              {/* Match list in round */}
              <div className="grid grid-cols-1 gap-3">
                {round.matches.map((match) => {
                  const isUserPlayer = match.p1?.id === userId || match.p2?.id === userId;
                  const isPlayable = isUserPlayer && (match.status === "pending" || match.status === "playing");
                  
                  return (
                    <div
                      key={match.id}
                      className={cn(
                        "glass-card p-3 flex flex-col gap-2 relative overflow-hidden transition-all duration-300",
                        isPlayable && "border-[var(--brand-violet)]/40 shadow-[0_0_15px_rgba(124,58,237,0.15)] glow-violet"
                      )}
                    >
                      {/* Top Player Row */}
                      <div className={cn(
                        "flex items-center justify-between p-2 rounded-xl transition-colors",
                        match.winnerId && match.winnerId === match.p1?.id
                          ? "bg-[var(--brand-success)]/10 text-white font-bold"
                          : "bg-transparent text-muted-foreground"
                      )}>
                        <div className="flex items-center gap-2 min-w-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={match.p1?.avatarUrl || getAvatarUrl(match.p1?.username || "TBD")}
                            alt={match.p1?.username || "TBD"}
                            className="w-6 h-6 rounded-full shrink-0 border border-white/10"
                          />
                          <span className={cn(
                            "text-xs truncate",
                            match.p1?.id === userId && "text-[var(--brand-cyan)] font-extrabold"
                          )}>
                            {match.p1?.username || "TBD"}
                          </span>
                        </div>
                        <span className="text-sm font-black font-[family-name:var(--font-mono)] px-2">
                          {match.p1Score !== null ? match.p1Score : "—"}
                        </span>
                      </div>

                      {/* Bottom Player Row */}
                      <div className={cn(
                        "flex items-center justify-between p-2 rounded-xl transition-colors",
                        match.winnerId && match.winnerId === match.p2?.id
                          ? "bg-[var(--brand-success)]/10 text-white font-bold"
                          : "bg-transparent text-muted-foreground"
                      )}>
                        <div className="flex items-center gap-2 min-w-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={match.p2?.avatarUrl || getAvatarUrl(match.p2?.username || "TBD")}
                            alt={match.p2?.username || "TBD"}
                            className="w-6 h-6 rounded-full shrink-0 border border-white/10"
                          />
                          <span className={cn(
                            "text-xs truncate",
                            match.p2?.id === userId && "text-[var(--brand-cyan)] font-extrabold"
                          )}>
                            {match.p2?.username || "TBD"}
                          </span>
                        </div>
                        <span className="text-sm font-black font-[family-name:var(--font-mono)] px-2">
                          {match.p2Score !== null ? match.p2Score : "—"}
                        </span>
                      </div>

                      {/* Play Button Trigger overlay */}
                      {isPlayable && (
                        <div className="pt-1.5 border-t border-white/5">
                          <Button
                            onClick={() => playMatch(match.id)}
                            disabled={loadingMatch !== null}
                            className="w-full h-8.5 rounded-xl font-bold bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white flex items-center justify-center gap-1.5 active:scale-[0.98] animate-pulse"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>{loadingMatch === match.id ? "Launching..." : "Play Round Match!"}</span>
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
