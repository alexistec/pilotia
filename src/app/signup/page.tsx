"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, MessageSquare, BellRing, Brain, Star } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SignUpPage() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/welcome");
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left column — benefits */}
      <aside className="hidden lg:flex flex-col justify-between px-12 py-10 border-r border-border">
        <Logo />
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-2 mb-6">
            What you get
          </p>
          <ul className="space-y-5 max-w-sm">
            {[
              {
                icon: <MessageSquare size={18} />,
                t: "AI monitors every conversation",
                d: "Your assistant reads and understands every WhatsApp message.",
              },
              {
                icon: <BellRing size={18} />,
                t: "Only alerts for real buyers",
                d: "Never miss a customer who is actually ready to purchase.",
              },
              {
                icon: <Brain size={18} />,
                t: "Learns your business instantly",
                d: "Train with your voice in under 3 minutes.",
              },
            ].map((b) => (
              <li key={b.t} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  {b.icon}
                </span>
                <div>
                  <p className="font-medium text-sm">{b.t}</p>
                  <p className="text-sm text-muted mt-0.5">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-5 max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                JL
              </div>
              <div>
                <p className="text-sm font-medium">Jorge Lima</p>
                <p className="text-xs text-muted-2">Real Estate Agent · São Paulo</p>
              </div>
            </div>
            <p className="text-sm text-muted italic">
              &ldquo;My AI assistant handles 80% of inquiries automatically. I only talk
              to serious buyers now.&rdquo;
            </p>
            <div className="flex gap-0.5 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-2">© 2026 PilotIA</p>
      </aside>

      {/* Right column — form */}
      <section className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Logo />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">Create Your AI Assistant</h1>
          <p className="text-muted mt-2 text-sm">
            Set up in under 3 minutes. No credit card required.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <Input id="name" label="Full name" placeholder="Alexis Rivera" required />
            <Input
              id="business"
              label="Business name"
              placeholder="Rivera Real Estate"
              required
            />
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="alexis@mycompany.com"
              required
            />
            <Input
              id="password"
              type={showPw ? "text" : "password"}
              label="Password"
              placeholder="At least 8 characters"
              required
              minLength={8}
              rightAdornment={
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="hover:text-foreground"
                  aria-label="Toggle password visibility"
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />

            <Button type="submit" fullWidth size="lg">
              Create account
            </Button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-3 text-muted-2">or</span>
              </div>
            </div>

            <Button type="button" variant="secondary" fullWidth size="lg">
              <span className="flex items-center gap-2">
                <GoogleG />
                Continue with Google
              </span>
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.7h5.2c-.2 1.3-1.5 3.8-5.2 3.8-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7c1.8 0 3 .8 3.7 1.4l2.5-2.4C16.6 3.7 14.5 2.8 12 2.8 6.9 2.8 2.8 6.9 2.8 12s4.1 9.2 9.2 9.2c5.3 0 8.8-3.7 8.8-9 0-.6-.1-1.2-.2-1.7H12z"
      />
    </svg>
  );
}
