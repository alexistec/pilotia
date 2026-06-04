import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { StepFooter } from "@/components/ui/StepFooter";

const READY_ITEMS = [
  "WhatsApp Connected",
  "Business Profile Learned",
  "FAQs Learned",
  "Lead Detection Enabled",
  "Automatic Responses Enabled",
];

export default function ActivatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-16 pb-32">
        <div className="text-center max-w-md">
          <div className="relative h-24 w-24 mx-auto">
            <span className="absolute inset-0 rounded-full bg-accent-soft animate-pilot-pulse" />
            <span className="absolute inset-3 rounded-full bg-accent flex items-center justify-center shadow-[0_0_70px_-5px_var(--color-accent-glow)]">
              <Logo size="lg" showWordmark={false} href={null} />
            </span>
          </div>

          <h1 className="mt-8 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            Your AI Assistant
            <br />
            Is Ready
          </h1>
          <p className="text-muted mt-3">
            Your virtual employee is now monitoring WhatsApp and will only notify you
            when it matters.
          </p>

          <ul className="mt-6 rounded-2xl border border-border bg-surface/60 divide-y divide-border text-left">
            {READY_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2.5 px-5 py-3 text-sm">
                <CheckCircle2 size={16} className="text-success shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { v: "24/7", l: "AI monitoring" },
              { v: "< 3s", l: "Response time" },
              { v: "100%", l: "Coverage" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-border bg-surface-2 p-3 text-center"
              >
                <p className="text-xl font-semibold text-accent">{s.v}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-2 mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>

      <StepFooter>
        <ButtonLink
          href="/dashboard"
          size="lg"
          fullWidth
          rightIcon={<ArrowRight size={18} />}
        >
          Go To Dashboard
        </ButtonLink>
      </StepFooter>
    </div>
  );
}
