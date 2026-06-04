import { Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  size = "md",
  href = "/",
  showWordmark = true,
}: {
  size?: "sm" | "md" | "lg";
  href?: string | null;
  showWordmark?: boolean;
}) {
  const dims = {
    sm: "h-7 w-7 rounded-lg",
    md: "h-9 w-9 rounded-xl",
    lg: "h-12 w-12 rounded-2xl",
  }[size];
  const iconSize = { sm: 14, md: 18, lg: 24 }[size];
  const text = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size];

  const content = (
    <span className="inline-flex items-center gap-2">
      <span
        className={cn(
          dims,
          "inline-flex items-center justify-center bg-accent shadow-[0_0_30px_-5px_var(--color-accent-glow)]"
        )}
      >
        <Zap size={iconSize} className="text-white" strokeWidth={2.5} fill="white" />
      </span>
      {showWordmark && (
        <span className={cn(text, "font-semibold tracking-tight text-foreground")}>
          Pilot<span className="text-accent">IA</span>
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return <Link href={href}>{content}</Link>;
}
