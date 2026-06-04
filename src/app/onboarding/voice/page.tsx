"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Square, Mic } from "lucide-react";
import { ProgressHeader } from "@/components/ui/ProgressHeader";
import { Button } from "@/components/ui/Button";

const FAKE_TRANSCRIPT = `I own a real estate agency called Rivera Properties. We help clients buy, sell, and rent homes in the Miami metro area. Customers often ask about pricing for specific properties, neighborhood information, and the buying process. I want the assistant to answer questions about availability and pricing, and notify me when someone asks for a visit or talks about financing.`;

export default function VoiceTrainingPage() {
  const router = useRouter();
  const [recording, setRecording] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [recording]);

  // Type out transcript while "recording"
  useEffect(() => {
    if (!recording) return;
    if (transcript.length >= FAKE_TRANSCRIPT.length) return;
    const id = setTimeout(() => {
      setTranscript(FAKE_TRANSCRIPT.slice(0, transcript.length + 2));
    }, 60);
    return () => clearTimeout(id);
  }, [transcript, recording]);

  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressHeader step={3} />

      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-10">
        <p className="text-xs uppercase tracking-widest text-muted-2 mb-2">
          Step 3 of 4
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Voice Training
        </h1>

        <div className="mt-6 rounded-2xl border border-border bg-surface/60 p-5 flex items-start gap-3">
          <span className="h-9 w-9 rounded-full bg-accent-soft text-accent flex items-center justify-center text-xs font-semibold">
            AI
          </span>
          <div className="flex-1">
            <p className="text-sm">
              Tell me about your business. Describe what you do, what questions
              customers usually ask, and when you want me to notify you.
            </p>
            <p className="text-accent text-lg leading-none mt-2">···</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface/60 p-8 flex flex-col items-center">
          <Waveform active={recording} />
          <p className="mt-4 text-sm text-muted-2 font-mono">{mm}:{ss}</p>
          <button
            onClick={() => setRecording((r) => !r)}
            className="mt-4 h-14 w-14 rounded-full bg-danger hover:bg-danger/90 flex items-center justify-center text-white transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(239,68,68,0.6)]"
            aria-label={recording ? "Stop recording" : "Start recording"}
          >
            {recording ? <Square size={20} fill="white" /> : <Mic size={22} />}
          </button>
          <p className="mt-3 text-xs text-muted">
            {recording ? "Recording… tap to stop" : "Tap to resume"}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface/60 p-5">
          <p className="text-xs uppercase tracking-widest text-muted-2 mb-2">
            Live transcript
          </p>
          <p className="text-sm leading-relaxed">
            {transcript}
            {recording && <span className="text-accent animate-pulse">▍</span>}
          </p>
        </div>

        <Button
          size="lg"
          fullWidth
          className="mt-8"
          onClick={() => router.push("/onboarding/review")}
          rightIcon={<ArrowRight size={18} />}
        >
          Finish & Review
        </Button>
      </main>
    </div>
  );
}

function Waveform({ active }: { active: boolean }) {
  const bars = Array.from({ length: 28 });
  return (
    <div className="flex items-center justify-center gap-1 h-12 w-full max-w-xs">
      {bars.map((_, i) => {
        const h = 30 + (Math.sin(i * 0.7) + 1) * 35;
        return (
          <span
            key={i}
            className="bg-accent rounded-full"
            style={{
              width: 3,
              height: `${h}%`,
              animation: active
                ? `pilot-wave 1s ease-in-out ${i * 0.05}s infinite`
                : "none",
              opacity: active ? 1 : 0.5,
            }}
          />
        );
      })}
    </div>
  );
}
