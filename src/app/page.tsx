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
            Iniciar sesión
          </ButtonLink>
          <ButtonLink href="/signup" size="sm" rightIcon={<ArrowRight size={16} />}>
            Empezar
          </ButtonLink>
        </div>
      </nav>

      <section className="max-w-6xl w-full mx-auto px-6 pt-12 sm:pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 mb-6 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pilot-pulse" />
          En vivo en WhatsApp Business
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
          Convertí conversaciones
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-fuchsia-400 to-accent">
            en clientes calificados
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto">
          Entrená un asistente IA que responde preguntas repetitivas y solo te avisa
          cuando un cliente está listo para comprar.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <ButtonLink href="/signup" size="lg" rightIcon={<ArrowRight size={18} />}>
            Empezar gratis
          </ButtonLink>
          <ButtonLink href="#demo" size="lg" variant="secondary" leftIcon={<Play size={16} />}>
            Ver demo
          </ButtonLink>
        </div>
        <p className="mt-4 text-xs text-muted-2">Sin tarjeta de crédito · 14 días Pro gratis</p>
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
          <p className="font-medium text-sm">María Rodríguez</p>
          <p className="text-xs text-success flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> en línea
          </p>
        </div>
      </div>
      <div className="space-y-3 pt-4">
        <Bubble side="left">Hola, ¿el departamento de 2 ambientes sigue disponible?</Bubble>
        <Bubble side="right">
          ¡Sí! Está disponible. La mudanza es la próxima semana. ¿Querés que te mande
          fotos y precios?
        </Bubble>
        <Bubble side="left">Sí, por favor. ¿Puedo agendar una visita?</Bubble>
        <div className="flex justify-center">
          <span className="text-[10px] uppercase tracking-widest text-accent bg-accent-soft px-2.5 py-1 rounded-full">
            Alta intención detectada
          </span>
        </div>
        <Bubble side="right">
          Le aviso a Alexis ya mismo — te va a confirmar un horario en minutos.
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
            <p className="font-medium text-sm">Tu asistente IA</p>
            <p className="text-xs text-muted">Entrenado · Inmobiliaria</p>
          </div>
        </div>
        <span className="text-xs text-success flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pilot-pulse" />
          Activo
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-5">
        {[
          { v: "127", l: "atendidos" },
          { v: "5", l: "calificados", accent: true },
          { v: "3.2h", l: "ahorradas" },
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
          Te avisa cuando
        </p>
        <ul className="space-y-2">
          {[
            "El cliente quiere una visita",
            "El cliente quiere comprar",
            "Pide financiación",
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
        Respuesta promedio: 1.2s
      </p>
    </div>
  );
}
