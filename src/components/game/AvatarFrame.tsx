import React from "react";
import { cn } from "@/lib/utils";

interface AvatarFrameProps {
  frameId?: string | null;
  frameUrl?: string | null; // Stores color or gradient
  frameName?: string | null;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function AvatarFrame({
  frameId,
  frameUrl,
  frameName,
  children,
  className,
  size = "md",
}: AvatarFrameProps) {
  // If no frame is equipped, just return children
  if (!frameId && !frameUrl) {
    return <div className={cn("relative shrink-0", className)}>{children}</div>;
  }

  // Set default frame properties based on frameName / frameUrl
  const color = frameUrl || "#7C3AED";
  
  // Custom styles for specific rare/legendary frames
  const isCosmic = frameName?.toLowerCase().includes("cosmic") || color.includes("gradient");
  const isGlitch = frameName?.toLowerCase().includes("glitch");
  const isGolden = frameName?.toLowerCase().includes("gold");

  const sizeClasses = {
    sm: "p-[1.5px] rounded-full",
    md: "p-[2.5px] rounded-[18px]",
    lg: "p-[3px] rounded-2xl",
    xl: "p-[4px] rounded-3xl",
  };

  const glowStyles: React.CSSProperties = isCosmic
    ? {}
    : { boxShadow: `0 0 10px ${color}50, inset 0 0 4px ${color}30` };

  return (
    <div
      className={cn(
        "relative shrink-0 flex items-center justify-center transition-all duration-300",
        sizeClasses[size],
        isCosmic && "bg-gradient-to-tr from-[#8B5CF6] via-[#EC4899] to-[#3B82F6] animate-pulse glow-cosmic",
        isGlitch && "animate-pulse shadow-[0_0_12px_#10B981]",
        isGolden && "shadow-[0_0_12px_rgba(245,158,11,0.5)]",
        !isCosmic && "border-none",
        className
      )}
      style={{
        background: isCosmic ? undefined : color,
        ...glowStyles,
      }}
    >
      {/* Inner container to hold the actual avatar */}
      <div className="w-full h-full rounded-[inherit] overflow-hidden bg-background p-[1.5px] flex items-center justify-center">
        <div className="w-full h-full rounded-[inherit] overflow-hidden">
          {children}
        </div>
      </div>

      {/* Decorative Crown for Golden Crown Frame */}
      {isGolden && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[15px] drop-shadow-md select-none pointer-events-none animate-bounce">
          👑
        </span>
      )}
    </div>
  );
}
