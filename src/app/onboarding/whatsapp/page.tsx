"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import { ProgressHeader } from "@/components/ui/ProgressHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { StepFooter } from "@/components/ui/StepFooter";

const QR_PAYLOAD = "https://wa.me/qr/PILOTIA-DEMO";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&bgcolor=141414&color=f5f5f5&data=${encodeURIComponent(QR_PAYLOAD)}`;

type Status = "idle" | "connecting" | "connected";

export default function ConnectWhatsAppPage() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState("+54 11 5012-3456");

  function handleClick() {
    if (status === "idle") {
      setStatus("connecting");
      // Simulated WhatsApp Business handshake
      setTimeout(() => setStatus("connected"), 2200);
      return;
    }
    if (status === "connected") {
      router.push("/onboarding/training");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressHeader step={1} />

      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-10 pb-32">
        <p className="text-xs uppercase tracking-widest text-muted-2 mb-2">
          Paso 1 de 4
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Conectá tu WhatsApp Business
        </h1>
        <p className="text-muted mt-3 max-w-xl">
          Tu asistente IA va a monitorear conversaciones e identificar clientes con
          intención real de compra — para que solo hables con gente lista para comprar.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-surface/60 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-xl bg-[rgba(37,211,102,0.12)] flex items-center justify-center">
                <WhatsAppIcon size={22} />
              </span>
              <div>
                <p className="font-medium">WhatsApp Business</p>
                <p className="text-xs text-muted-2">Conectá tu número</p>
              </div>
            </div>
            <StatusPill status={status} />
          </div>

          {status === "idle" && <IdleState qrUrl={QR_URL} phone={phone} setPhone={setPhone} />}
          {status === "connecting" && <ConnectingState />}
          {status === "connected" && <ConnectedState phone={phone} />}
        </div>

        <div className="mt-5 rounded-xl border border-border bg-surface/40 px-4 py-3 flex items-start gap-3 text-xs text-muted">
          <ShieldCheck size={16} className="text-muted-2 mt-0.5 shrink-0" />
          Tus mensajes de WhatsApp se procesan de forma segura. Nunca compartimos tus
          datos con terceros.
        </div>
      </main>

      <StepFooter>
        <Button
          size="lg"
          fullWidth
          onClick={handleClick}
          disabled={status === "connecting"}
          rightIcon={status !== "connecting" ? <ArrowRight size={18} /> : undefined}
          leftIcon={
            status === "idle" ? (
              <WhatsAppIcon size={18} className="text-white" />
            ) : status === "connecting" ? (
              <Loader2 size={18} className="text-white animate-spin" />
            ) : undefined
          }
        >
          {status === "idle" && "Conectar WhatsApp"}
          {status === "connecting" && "Conectando…"}
          {status === "connected" && "Continuar"}
        </Button>
      </StepFooter>
    </div>
  );
}

function StatusPill({ status }: { status: Status }) {
  if (status === "connecting") {
    return (
      <span className="text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent/30 bg-accent-soft text-accent">
        <Loader2 size={12} className="animate-spin" /> Conectando
      </span>
    );
  }
  if (status === "connected") {
    return (
      <span className="text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-success/30 bg-success-soft text-success">
        <span className="h-1.5 w-1.5 rounded-full bg-success" /> Conectado
      </span>
    );
  }
  return null;
}

function IdleState({
  qrUrl,
  phone,
  setPhone,
}: {
  qrUrl: string;
  phone: string;
  setPhone: (v: string) => void;
}) {
  return (
    <>
      <div className="rounded-xl border border-border bg-background/60 p-6 flex flex-col items-center">
        <div className="rounded-lg bg-surface p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrUrl}
            alt="Escaneá este código QR con WhatsApp"
            width={220}
            height={220}
            className="block"
          />
        </div>
        <p className="text-xs text-muted-2 mt-4 text-center leading-relaxed">
          Escaneá con WhatsApp
          <br />
          desde tu celular
        </p>
      </div>
      <div className="mt-5">
        <Input
          label="Tu número de WhatsApp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+54 11 0000-0000"
        />
      </div>
    </>
  );
}

function ConnectingState() {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent-soft/20 p-8 flex flex-col items-center text-center">
      <div className="relative h-20 w-20">
        <span className="absolute inset-0 rounded-full bg-accent-soft animate-pilot-pulse" />
        <span className="absolute inset-2 rounded-full bg-accent-soft" />
        <span className="absolute inset-4 rounded-full bg-accent flex items-center justify-center">
          <WhatsAppIcon size={26} className="text-white" />
        </span>
      </div>
      <p className="font-medium text-accent mt-5">Conectando con WhatsApp Business…</p>
      <ConnectingSteps />
    </div>
  );
}

function ConnectingSteps() {
  const steps = [
    "Validando número",
    "Negociando con WhatsApp Cloud API",
    "Configurando webhook seguro",
  ];
  return (
    <ul className="mt-4 space-y-2 text-xs text-muted text-left w-full max-w-[260px]">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <Loader2
            size={12}
            className="text-accent animate-spin"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
          {s}
        </li>
      ))}
    </ul>
  );
}

function ConnectedState({ phone }: { phone: string }) {
  return (
    <div className="rounded-xl border border-success/30 bg-success-soft/30 p-8 flex flex-col items-center animate-pilot-fade-in">
      <span className="h-14 w-14 rounded-full border-2 border-success flex items-center justify-center">
        <CheckCircle2 size={28} className="text-success" strokeWidth={2.5} />
      </span>
      <p className="font-medium text-success mt-3">WhatsApp conectado</p>
      <p className="text-sm text-muted mt-1">{phone}</p>
      <p className="text-xs text-muted-2 mt-3 text-center max-w-[260px]">
        Tu IA ya puede leer y responder mensajes automáticamente.
      </p>
    </div>
  );
}
