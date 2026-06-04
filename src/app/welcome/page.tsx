import Link from "next/link";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="max-w-3xl w-full mx-auto px-6 py-6 flex items-center justify-between">
        <Logo />
        <Link href="/" className="text-xs text-muted hover:text-foreground">
          Sign out
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="text-center max-w-xl mx-auto">
          {/* Animated bolt with sat icons */}
          <div className="relative h-32 w-32 mx-auto mb-2">
            <span className="absolute inset-0 rounded-full bg-accent-soft animate-pilot-pulse" />
            <span className="absolute inset-3 rounded-full bg-accent-soft" />
            <span className="absolute inset-6 rounded-full bg-accent flex items-center justify-center shadow-[0_0_60px_-5px_var(--color-accent-glow)]">
              <Logo size="lg" showWordmark={false} href={null} />
            </span>
            <span className="absolute -top-1 -right-2 h-9 w-9 rounded-full bg-[#1c3e2c] border border-[#22c55e]/30 flex items-center justify-center">
              <WhatsAppIcon size={18} />
            </span>
            <span className="absolute top-12 -left-3 h-8 w-8 rounded-full bg-surface-2 border border-border flex items-center justify-center">
              <MessageCircle size={14} className="text-muted" />
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-6">
            Welcome to <span className="text-accent">PilotIA</span>
          </h1>
          <p className="text-muted mt-3 max-w-md mx-auto">
            Let&apos;s connect your WhatsApp and train your AI assistant to handle
            customer inquiries automatically.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-xs text-accent">
            <Clock size={12} /> Setup takes less than 3 minutes
          </div>

          <ol className="mt-8 rounded-2xl border border-border bg-surface/60 divide-y divide-border text-left max-w-md mx-auto">
            {[
              "Connect your WhatsApp number",
              "Train your AI with voice or text",
              "Review what the AI learned",
            ].map((step, i) => (
              <li key={step} className="flex items-center gap-4 px-5 py-4">
                <span className="text-xs font-mono text-muted-2 w-6">
                  0{i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>

          <ButtonLink
            href="/onboarding/whatsapp"
            size="lg"
            className="mt-8"
            rightIcon={<ArrowRight size={18} />}
          >
            Start Setup
          </ButtonLink>
          <p className="text-xs text-muted-2 mt-4">
            No credit card required to get started
          </p>
        </div>
      </main>
    </div>
  );
}
