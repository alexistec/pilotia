import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

export function Input({
  label,
  hint,
  rightAdornment,
  className,
  id,
  ...rest
}: {
  label?: string;
  hint?: string;
  rightAdornment?: ReactNode;
} & ComponentProps<"input">) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-medium uppercase tracking-wider text-muted-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          className={cn(
            "w-full h-12 px-4 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-2",
            "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all",
            rightAdornment && "pr-12",
            className
          )}
          {...rest}
        />
        {rightAdornment && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-2">
            {rightAdornment}
          </div>
        )}
      </div>
      {hint && <p className="text-xs text-muted-2">{hint}</p>}
    </div>
  );
}
