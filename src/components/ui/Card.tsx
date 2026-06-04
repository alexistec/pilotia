import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-6",
        glow && "shadow-[0_0_60px_-30px_var(--color-accent-glow)]",
        className
      )}
    >
      {children}
    </div>
  );
}
