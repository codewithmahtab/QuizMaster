import { Loader2 } from "lucide-react";

export default function GameLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing ring */}
        <div className="absolute w-16 h-16 rounded-full bg-[var(--brand-violet)]/20 blur-xl animate-pulse" />
        {/* Inner spinning loader */}
        <Loader2 className="w-10 h-10 text-[var(--brand-violet)] animate-spin relative z-10" />
      </div>
      <p className="text-sm font-bold font-[family-name:var(--font-syne)] tracking-widest uppercase text-muted-foreground animate-pulse">
        Loading...
      </p>
    </div>
  );
}
