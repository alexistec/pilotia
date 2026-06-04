import { ArrowRight, Play, CheckCircle2, Circle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="max-w-6xl w-full mx-auto px-6 py-6 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <ButtonLink href="/signup" variant="ghost" size="sm">
            Sign in
          </ButtonLink>
          <ButtonLink href="/signup" size="sm" rightIcon={<ArrowRight size={16} />}>
            Get started
          </ButtonLink>
        </div>
      </nav>

      <section className="max-w-6xl w-full mx-auto px-6 pt-12 sm:pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 mb-6 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pilot-pulse" />
          Live on WhatsApp Business
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
          Turn conversations
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-fuchsia-400 to-accent">
            into qualified customers
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto">
          Train an AI assistant that answers repetitive questions and only notifies you
          when a customer is ready to buy.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <ButtonLink href="/signup" size="lg" rightIcon={<ArrowRight size={18} />}>
            Start Free
          </ButtonLink>
          <ButtonLink href="#demo" size="lg" variant="secondary" leftIcon={<Play size={16} />}>
            Watch Demo
          </ButtonLink>
        </div>
        <p className="mt-4 text-xs text-muted-2">No credit card · 14-day Pro trial</p>
      </section>

      <section id="demo" className="max-w-6xl w-full mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-4 rounded-3xl border border-border bg-surface/60 p-4 sm:p-6 backdrop-blur-sm">
          <ChatPreview />
          <AssistantStatsPreview />
        </div>
      </section>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-5">
      <div className="flex items-center gap-3 pb-4 border-b border-border">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
        <div className="flex-1">
          <p className="font-medium text-sm">Maria Rodriguez</p>
          <p className="text-xs text-success flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> online
          </p>
        </div>
      </div>
      <div className="space-y-3 pt-4">
        <Bubble side="left">Hi, is the 2BR apartment still available?</Bubble>
        <Bubble side="right">
          Yes! It&apos;s available. Move-in is next week. Want me to share photos and
          pricing?
        </Bubble>
        <Bubble side="left">Yes please. And can I schedule a visit?</Bubble>
        <div className="flex justify-center">
          <span className="text-[10px] uppercase tracking-widest text-accent bg-accent-soft px-2.5 py-1 rounded-full">
            High intent detected
          </span>
        </div>
        <Bubble side="right">
          I&apos;ll let Alexis know right away — they&apos;ll confirm a time with you
          in minutes.
        </Bubble>
      </div>
    </div>
  );
}

function Bubble({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "left" | "right";
}) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] text-sm px-3.5 py-2.5 rounded-2xl ${
          side === "right"
            ? "bg-accent text-white rounded-br-md"
            : "bg-surface-2 text-foreground rounded-bl-md border border-border"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function AssistantStatsPreview() {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-5">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Logo size="md" showWordmark={false} href={null} />
          <div>
            <p className="font-medium text-sm">Your AI Assistant</p>
            <p className="text-xs text-muted">Trained · Real Estate</p>
          </div>
        </div>
        <span className="text-xs text-success flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pilot-pulse" />
          Active
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-5">
        {[
          { v: "127", l: "handled" },
          { v: "5", l: "qualified", accent: true },
          { v: "3.2h", l: "saved" },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded-xl border border-border bg-surface-2 p-3 text-center"
          >
            <p
              className={`text-2xl font-semibold ${
                s.accent ? "text-accent" : "text-foreground"
              }`}
            >
              {s.v}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-2 mt-1">
              {s.l}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-[10px] uppercase tracking-widest text-muted-2 text-center mb-3">
          Notify you when
        </p>
        <ul className="space-y-2">
          {[
            "Customer wants a visit",
            "Customer wants to buy",
            "Asks for financing",
          ].map((t) => (
            <li key={t} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 size={16} className="text-success" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 pt-3 border-t border-border text-xs text-muted-2 flex items-center gap-1.5">
        <Circle size={10} className="fill-success text-success" />
        Average response: 1.2s
      </p>
    </div>
  );
}
