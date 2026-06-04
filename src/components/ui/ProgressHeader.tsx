import { Logo } from "./Logo";

export function ProgressHeader({
  step,
  total = 4,
}: {
  step: number;
  total?: number;
}) {
  const pct = (step / total) * 100;
  return (
    <header className="border-b border-border bg-background/70 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Logo size="md" />
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="hidden sm:inline">
            Paso {step} de {total}
          </span>
          <div className="w-32 sm:w-40 h-1.5 bg-surface-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
