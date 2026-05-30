"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Trophy, Coins, Users, Zap, Shield, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatCoins } from "@/lib/utils";

interface Tournament {
  id: string;
  name: string;
  description: string | null;
  entryFee: number;
  prizePool: number;
  maxPlayers: number;
  status: string;
  winnerId: string | null;
  playerCount: number;
  hasJoined: boolean;
}

interface TournamentClientProps {
  initialTournaments: Tournament[];
  userCoins: number;
}

export default function TournamentClient({ initialTournaments, userCoins }: TournamentClientProps) {
  const [tournaments, setTournaments] = useState<Tournament[]>(initialTournaments);
  const [coins, setCoins] = useState(userCoins);
  const [loading, setLoading] = useState<string | null>(null);

  async function refreshTournaments() {
    try {
      const res = await fetch("/api/tournaments");
      const data = await res.json();
      if (data.tournaments) {
        setTournaments(data.tournaments);
      }
    } catch (e) {
      console.error("Failed to refresh tournaments", e);
    }
  }

  async function handleJoin(id: string, entryFee: number) {
    if (coins < entryFee) {
      alert("Insufficient coins to join!");
      return;
    }

    setLoading(id);

    try {
      const res = await fetch("/api/tournaments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tournamentId: id }),
      });
      const data = await res.json();

      if (data.success) {
        setCoins((c) => c - entryFee);
        await refreshTournaments();
      } else {
        alert(data.error || "Failed to join tournament");
      }
    } catch {
      alert("Error joining tournament");
    } finally {
      setLoading(null);
    }
  }

  const openTourneys = tournaments.filter((t) => t.status === "open");
  const activeTourneys = tournaments.filter((t) => t.status === "active");
  const completedTourneys = tournaments.filter((t) => t.status === "completed");

  return (
    <div className="px-4 py-5 space-y-6 w-full max-w-xl mx-auto min-h-[85vh]">
      
      {/* Title Header Card */}
      <div className="glass-card p-4 sm:p-5 relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-violet)]/10 to-transparent pointer-events-none" />
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-syne)] gradient-text flex items-center gap-2">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-gold)] shrink-0 animate-bounce-slow" />
            Arena Tournaments
          </h1>
          <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed max-w-xs sm:max-w-md">
            Join 8-player bracket championships & win massive prize pools!
          </p>
        </div>
        <div className="coin-chip py-1 sm:py-1.5 px-3 sm:px-3.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-2xl shrink-0 self-start sm:self-center">
          <Coins className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          {formatCoins(coins)}
        </div>
      </div>

      {/* ── ACTIVE TOURNAMENTS (Your Live Brackets) ── */}
      {activeTourneys.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-success)] animate-pulse" />
            Active Tournaments
          </h2>
          <div className="space-y-3">
            {activeTourneys.map((t) => {
              const joinedText = t.hasJoined ? "Playing" : "Spectating";
              return (
                <Link href={`/tournament/${t.id}`} key={t.id} className="block">
                  <div className="glass-card p-4 flex items-center justify-between border-l-4 border-l-[var(--brand-success)] hover:border-l-[var(--brand-violet)] transition-all active:scale-[0.99] group">
                    <div className="space-y-1">
                      <h3 className="text-sm font-black text-foreground group-hover:text-[var(--brand-violet)] transition-colors">
                        {t.name}
                      </h3>
                      <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {t.playerCount}/{t.maxPlayers} players
                        </span>
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <Coins className="w-3.5 h-3.5" />
                          {t.prizePool} pool
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className={cn(
                        "text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full border shrink-0",
                        t.hasJoined
                          ? "bg-[var(--brand-violet)]/10 text-[var(--brand-violet)] border-[var(--brand-violet)]/30"
                          : "bg-muted text-muted-foreground border-muted-foreground/30"
                      )}>
                        {joinedText}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* ── OPEN TOURNAMENTS (Registration) ── */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Open Tournaments
        </h2>

        {openTourneys.length > 0 ? (
          <div className="space-y-4">
            {openTourneys.map((t) => (
              <div key={t.id} className="glass-card p-5 flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[var(--brand-violet)] opacity-5 blur-2xl pointer-events-none" />

                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-foreground">{t.name}</h3>
                    <p className="text-xs text-muted-foreground leading-normal max-w-sm">
                      {t.description || "Compete for honor and massive rewards!"}
                    </p>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full shrink-0 animate-pulse">
                    Open
                  </span>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-3 gap-2 bg-muted/10 p-3 rounded-2xl border border-white/5">
                  <div className="text-center">
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold">Prize Pool</p>
                    <p className="text-sm font-black text-amber-400 flex items-center justify-center gap-0.5 mt-0.5">
                      <Coins className="w-3.5 h-3.5" />
                      {t.prizePool}
                    </p>
                  </div>
                  <div className="text-center border-x border-white/8">
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold">Entry Fee</p>
                    <p className="text-sm font-black text-foreground flex items-center justify-center gap-0.5 mt-0.5">
                      <Coins className="w-3.5 h-3.5 text-muted-foreground" />
                      {t.entryFee}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold">Slots Filled</p>
                    <p className="text-sm font-black text-foreground flex items-center justify-center gap-0.5 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-muted-foreground" />
                      {t.playerCount}/{t.maxPlayers}
                    </p>
                  </div>
                </div>

                {/* Join action */}
                <Button
                  onClick={() => handleJoin(t.id, t.entryFee)}
                  disabled={loading !== null || coins < t.entryFee}
                  className={cn(
                    "w-full h-11 rounded-2xl font-bold flex items-center justify-center gap-2",
                    coins >= t.entryFee
                      ? "bg-[var(--brand-violet)] hover:bg-[var(--brand-violet)]/90 text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted"
                  )}
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>{loading === t.id ? "Entering..." : "Register & Start Matchmaking"}</span>
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card p-8 text-center flex flex-col items-center gap-3">
            <span className="text-4xl">🎪</span>
            <p className="text-sm font-bold text-muted-foreground">All tournaments are currently active.</p>
          </div>
        )}
      </div>

      {/* ── COMPLETED TOURNAMENTS (Championship Hall) ── */}
      {completedTourneys.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Past Champions
          </h2>
          <div className="space-y-2.5">
            {completedTourneys.map((t) => (
              <div key={t.id} className="glass-card p-4 flex items-center justify-between opacity-85 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-foreground">{t.name}</h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      Championship concluded successfully
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground">Prize pool paid</p>
                  <p className="text-xs font-black text-amber-400 mt-0.5">{t.prizePool} Coins</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
