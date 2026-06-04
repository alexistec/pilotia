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
    title: "Tipo de negocio",
    detail: "Inmobiliaria",
    tone: "neutral" as const,
  },
  {
    icon: <MessageSquareMore size={18} />,
    title: "Preguntas aprendidas",
    detail: "6 preguntas",
    tone: "neutral" as const,
  },
  {
    icon: <CheckSquare size={18} />,
    title: "Preguntas que puedo responder",
    detail: "Precio, Disponibilidad, Ubicación, Proceso",
    tone: "success" as const,
  },
  {
    icon: <BellRing size={18} />,
    title: "Cuándo avisarte",
    detail: "3 condiciones de aviso",
    tone: "warning" as const,
  },
  {
    icon: <Target size={18} />,
    title: "Señales de lead calificado",
    detail: "Pedido de visita, Consulta de financiación, Intención de oferta",
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
          Paso 4 de 4
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Esto es lo que aprendí
        </h1>
        <p className="text-muted mt-3 max-w-xl">
          Revisá lo que tu asistente IA entendió del entrenamiento. Podés editar todo
          antes de activarlo.
        </p>

        <div className="mt-8 rounded-2xl border border-accent/40 bg-accent-soft/30 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-accent-soft border border-accent/30 flex items-center justify-center text-accent">
              <Sparkles size={18} />
            </span>
            <div>
              <p className="font-medium">Calidad de comprensión: Excelente</p>
              <p className="text-xs text-muted">
                La confianza de la IA es alta según tu entrenamiento
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
          <Pencil size={14} className="mr-2" /> Editar
        </Link>
        <ButtonLink
          href="/activate"
          size="lg"
          className="flex-1"
          rightIcon={<ArrowRight size={18} />}
        >
          Confirmar y activar
        </ButtonLink>
      </StepFooter>
    </div>
  );
}
