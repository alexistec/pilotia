"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ProgressHeader } from "@/components/ui/ProgressHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { StepFooter } from "@/components/ui/StepFooter";

export default function ConnectWhatsAppPage() {
  const router = useRouter();
  const [connected, setConnected] = useState(false);
  const [phone, setPhone] = useState("+54 11 5012-3456");

  function handleConnect() {
    if (!connected) {
      setConnected(true);
      return;
    }
    router.push("/onboarding/training");
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
            {connected && (
              <span className="text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-success/30 bg-success-soft text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Conectado
              </span>
            )}
          </div>

          {!connected ? (
            <>
              <div className="rounded-xl border border-border bg-background/60 p-6 flex flex-col items-center">
                <FakeQR />
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
          ) : (
            <div className="rounded-xl border border-success/30 bg-success-soft/30 p-8 flex flex-col items-center">
              <span className="h-14 w-14 rounded-full border-2 border-success flex items-center justify-center">
                <CheckCircle2 size={28} className="text-success" strokeWidth={2.5} />
              </span>
              <p className="font-medium text-success mt-3">WhatsApp conectado</p>
              <p className="text-sm text-muted mt-1">{phone}</p>
            </div>
          )}
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
          onClick={handleConnect}
          rightIcon={<ArrowRight size={18} />}
          leftIcon={!connected ? <WhatsAppIcon size={18} className="text-white" /> : undefined}
        >
          {connected ? "Continuar" : "Conectar WhatsApp"}
        </Button>
      </StepFooter>
    </div>
  );
}

function FakeQR() {
  const cells = Array.from({ length: 9 * 9 }, (_, i) => {
    const x = i % 9;
    const y = Math.floor(i / 9);
    const isCorner =
      (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5);
    const seed = (x * 7 + y * 13) % 5;
    return isCorner || seed < 2;
  });

  return (
    <div className="grid grid-cols-9 gap-0.5 w-44 h-44">
      {cells.map((on, i) => (
        <div
          key={i}
          className={on ? "bg-muted-2 rounded-[1px]" : "bg-transparent"}
        />
      ))}
    </div>
  );
}
