import Link from "next/link";
import {
  Home,
  Lightbulb,
  Brain,
  BookOpen,
  Settings,
  MessageSquare,
  Sparkles,
  Clock,
  Flame,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const KPIS = [
  {
    icon: <MessageSquare size={16} />,
    label: "Conversaciones hoy",
    value: "47",
    delta: "+12%",
    deltaTone: "success" as const,
  },
  {
    icon: <Sparkles size={16} />,
    label: "Auto-atendidas",
    value: "41",
    delta: "87%",
    deltaTone: "accent" as const,
  },
  {
    icon: <Clock size={16} />,
    label: "Esperándote",
    value: "3",
    delta: "Urgente",
    deltaTone: "warning" as const,
  },
];

const CUSTOMERS = [
  {
    name: "María Rodríguez",
    initials: "MR",
    bgClass: "from-pink-400 to-rose-500",
    ago: "hace 14 min",
    tag: "Compra",
    confidence: "Alta",
    bullets: [
      "Preguntó por métodos de pago",
      "Pidió visitar una propiedad",
      "Mencionó un plazo de 2 meses",
    ],
  },
  {
    name: "Carlos Méndez",
    initials: "CM",
    bgClass: "from-cyan-400 to-blue-500",
    ago: "hace 1 hora",
    tag: "Alquiler",
    confidence: "Media",
    bullets: [
      "Consultó por unidades de 2 ambientes",
      "Pidió disponibilidad inmediata",
      "Mencionó mudarse la próxima semana",
    ],
  },
];

const NAV = [
  { icon: <Home size={16} />, label: "Inicio", href: "/dashboard", active: true },
  { icon: <Lightbulb size={16} />, label: "Oportunidades", href: "#", badge: "3" },
  { icon: <Brain size={16} />, label: "Entrenar IA", href: "#" },
  { icon: <BookOpen size={16} />, label: "Aprendizajes", href: "#" },
  { icon: <Settings size={16} />, label: "Configuración", href: "#" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex">
      <aside className="hidden md:flex w-60 flex-col border-r border-border bg-surface/40 px-4 py-6">
        <Logo />
        <nav className="mt-8 space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                item.active
                  ? "bg-accent-soft text-foreground border border-accent/20"
                  : "text-muted hover:bg-surface-2 hover:text-foreground"
              }`}
            >
              {item.icon}
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-accent text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
        <div className="mt-auto rounded-xl border border-border bg-surface p-3 text-xs">
          <p className="text-success flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pilot-pulse" />
            IA activa
          </p>
          <p className="text-muted-2 mt-1">Monitoreando 24/7</p>
        </div>
      </aside>

      <main className="flex-1 px-6 lg:px-10 py-8 max-w-5xl">
        <header className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Buenas tardes, Alexis{" "}
              <span className="inline-block animate-pilot-pulse">👋</span>
            </h1>
            <p className="text-muted text-sm mt-1">
              Tu asistente IA está monitoreando tus conversaciones de WhatsApp y
              manejando consultas automáticamente.
            </p>
          </div>
        </header>

        <section className="mt-6 grid sm:grid-cols-3 gap-3">
          {KPIS.map((k) => (
            <div
              key={k.label}
              className="rounded-2xl border border-border bg-surface/60 p-5"
            >
              <div className="flex items-center justify-between text-muted-2">
                <span className="flex items-center gap-2 text-xs">
                  <span className="h-7 w-7 rounded-lg bg-surface-2 text-muted flex items-center justify-center">
                    {k.icon}
                  </span>
                </span>
                <DeltaTag tone={k.deltaTone}>{k.delta}</DeltaTag>
              </div>
              <p className="mt-4 text-3xl font-semibold">{k.value}</p>
              <p className="text-xs text-muted-2 mt-1">{k.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Flame size={18} className="text-orange-400" />
              Clientes que requieren atención
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-soft text-accent">
                3 nuevos
              </span>
            </h2>
            <Link
              href="#"
              className="text-xs text-muted hover:text-foreground flex items-center gap-1"
            >
              Ver todos <ChevronRight size={14} />
            </Link>
          </div>

          <div className="space-y-3">
            {CUSTOMERS.map((c) => (
              <article
                key={c.name}
                className="rounded-2xl border border-border bg-surface/60 p-5"
              >
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-11 w-11 rounded-full bg-gradient-to-br ${c.bgClass} flex items-center justify-center text-white text-sm font-semibold`}
                    >
                      {c.initials}
                    </div>
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs text-muted-2 mt-0.5">
                        {c.ago} ·{" "}
                        <span className="text-accent">{c.tag}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-warning/30 bg-warning-soft text-warning">
                    <TrendingUp size={12} />
                    Confianza IA: {c.confidence}
                  </span>
                </div>

                <ul className="mt-4 space-y-1.5 text-sm text-muted">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-muted-2" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-2 transition-colors text-white text-sm font-medium"
                >
                  <WhatsAppIcon size={16} className="text-white" /> Abrir WhatsApp
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function DeltaTag({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "success" | "accent" | "warning";
}) {
  const cls = {
    success: "bg-success-soft text-success",
    accent: "bg-accent-soft text-accent",
    warning: "bg-warning-soft text-warning",
  }[tone];
  return (
    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${cls}`}>
      {children}
    </span>
  );
}
