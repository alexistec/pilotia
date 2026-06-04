import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Tone = "accent" | "success" | "warning" | "neutral" | "whatsapp";

const tones: Record<Tone, string> = {
  accent: "bg-accent-soft text-accent",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  neutral: "bg-surface-2 text-muted",
  whatsapp: "bg-[rgba(37,211,102,0.12)] text-whatsapp",
};

export function IconBadge({
  icon,
  tone = "accent",
  size = "md",
}: {
  icon: ReactNode;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: "h-8 w-8 rounded-lg",
    md: "h-10 w-10 rounded-xl",
    lg: "h-14 w-14 rounded-2xl",
  }[size];
  return (
    <span className={cn("inline-flex items-center justify-center", dims, tones[tone])}>
      {icon}
    </span>
  );
}
