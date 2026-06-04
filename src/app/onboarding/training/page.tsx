import { ArrowRight, Mic, Pencil, Sparkles } from "lucide-react";
import { ProgressHeader } from "@/components/ui/ProgressHeader";
import { ButtonLink } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";

export default function TrainingMethodPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProgressHeader step={2} />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-10">
        <p className="text-xs uppercase tracking-widest text-muted-2 mb-2">
          Step 2 of 4
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          How would you like to train your AI assistant?
        </h1>
        <p className="text-muted mt-3 max-w-xl">
          Choose the method that feels most natural to you. Your AI learns from
          everything you share.
        </p>

        <div className="mt-8 space-y-4">
          {/* Voice */}
          <article className="rounded-2xl border border-accent/40 bg-surface/60 p-6 shadow-[0_0_60px_-30px_var(--color-accent-glow)] relative">
            <div className="absolute right-6 top-6">
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-white">
                <Sparkles size={12} /> Recommended
              </span>
            </div>

            <IconBadge tone="accent" size="md" icon={<Mic size={18} />} />
            <h2 className="text-xl font-semibold mt-4">Train with Voice</h2>
            <p className="text-sm text-muted mt-1 max-w-md">
              Record a voice message explaining your business. Your AI learns from how
              you naturally speak.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "What your business does",
                "Common customer questions",
                "Conversations that matter most",
                "When the AI should notify you",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/onboarding/voice"
              className="mt-6"
              leftIcon={<Mic size={16} />}
              rightIcon={<ArrowRight size={16} />}
            >
              Start Voice Training
            </ButtonLink>
          </article>

          {/* Text */}
          <article className="rounded-2xl border border-border bg-surface/60 p-6">
            <IconBadge tone="neutral" size="md" icon={<Pencil size={18} />} />
            <h2 className="text-xl font-semibold mt-4">Train with Text</h2>
            <p className="text-sm text-muted mt-1 max-w-md">
              Write instructions about your business in your own words. Perfect if you
              prefer writing.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Describe your business",
                "Add frequently asked questions",
                "Define what a qualified lead is",
                "Set escalation rules",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-2" />
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/onboarding/review"
              variant="secondary"
              className="mt-6"
              leftIcon={<Pencil size={16} />}
            >
              Start Writing
            </ButtonLink>
          </article>
        </div>
      </main>
    </div>
  );
}
