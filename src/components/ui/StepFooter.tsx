import type { ReactNode } from "react";

export function StepFooter({ children }: { children: ReactNode }) {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 border-t border-border bg-background/85 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
        {children}
      </div>
    </div>
  );
}
