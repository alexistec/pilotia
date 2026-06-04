import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MessageSquareMore,
  CheckSquare,
  BellRing,
  Target,
  Pencil,
  Sparkles,
} from "lucide-react";
import { ProgressHeader } from "@/components/ui/ProgressHeader";
import { ButtonLink } from "@/components/ui/Button";
import { StepFooter } from "@/components/ui/StepFooter";

const ROWS = [
  {
    icon: <Building2 size={18} />,
    title: "Business Type",
    detail: "Real Estate Agency",
    tone: "neutral" as const,
  },
  {
    icon: <MessageSquareMore size={18} />,
    title: "FAQs Learned",
    detail: "6 questions",
    tone: "neutral" as const,
  },
  {
    icon: <CheckSquare size={18} />,
    title: "Questions I Can Answer",
    detail: "Price, Availability, Location, Process",
    tone: "success" as const,
  },
  {
    icon: <BellRing size={18} />,
    title: "When To Notify You",
    detail: "3 trigger conditions",
    tone: "warning" as const,
  },
  {
    icon: <Target size={18} />,
    title: "Qualified Lead Signals",
    detail: "Visit request, Financing inquiry, Offer intent",
    tone: "accent" as const,
  },
];

const toneClasses = {
  neutral: "bg-surface-2 text-muted",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  accent: "bg-accent-soft text-accent",
};

export default function ReviewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProgressHeader step={4} />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-10 pb-32">
        <p className="text-xs uppercase tracking-widest text-muted-2 mb-2">
          Step 4 of 4
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Here&apos;s what I learned
        </h1>
        <p className="text-muted mt-3 max-w-xl">
          Review what your AI assistant understood from your training. You can edit
          anything before activating.
        </p>

        <div className="mt-8 rounded-2xl border border-accent/40 bg-accent-soft/30 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-accent-soft border border-accent/30 flex items-center justify-center text-accent">
              <Sparkles size={18} />
            </span>
            <div>
              <p className="font-medium">Understanding quality: Excellent</p>
              <p className="text-xs text-muted">
                AI confidence is high based on your training
              </p>
            </div>
          </div>
          <p className="text-2xl font-semibold text-accent">96%</p>
        </div>

        <ul className="mt-4 space-y-3">
          {ROWS.map((row) => (
            <li
              key={row.title}
              className="rounded-2xl border border-border bg-surface/60 p-4 flex items-center gap-4 hover:border-border-strong transition-colors"
            >
              <span
                className={`h-10 w-10 rounded-xl flex items-center justify-center ${toneClasses[row.tone]}`}
              >
                {row.icon}
              </span>
              <div className="flex-1">
                <p className="font-medium text-sm">{row.title}</p>
                <p className="text-xs text-muted mt-0.5">{row.detail}</p>
              </div>
              <Pencil size={14} className="text-muted-2" />
            </li>
          ))}
        </ul>

      </main>

      <StepFooter>
        <Link
          href="/onboarding/voice"
          className="h-12 px-5 inline-flex items-center justify-center rounded-xl border border-border-strong text-sm hover:border-accent transition-colors min-w-[120px]"
        >
          <Pencil size={14} className="mr-2" /> Edit
        </Link>
        <ButtonLink
          href="/activate"
          size="lg"
          className="flex-1"
          rightIcon={<ArrowRight size={18} />}
        >
          Confirm &amp; Activate
        </ButtonLink>
      </StepFooter>
    </div>
  );
}
