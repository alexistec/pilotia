# PilotIA

> Your WhatsApp AI assistant. Train it once and it answers repetitive customer questions, only notifying you when someone is ready to buy.

**Status:** Phase 1 — Frontend MVP. All flows are wired with mock data. No backend, no real WhatsApp, no real AI yet (see roadmap below).

## What's included

9 screens covering the full product flow:

1. **Landing** (`/`) — hero, demo chat preview, stats
2. **Sign up** (`/signup`) — form with benefits sidebar + testimonial
3. **Welcome** (`/welcome`) — onboarding intro with 3 steps
4. **Onboarding step 1** (`/onboarding/whatsapp`) — connect WhatsApp Business (QR + phone)
5. **Onboarding step 2** (`/onboarding/training`) — choose voice or text training
6. **Onboarding step 3** (`/onboarding/voice`) — voice recording + live transcript
7. **Onboarding step 4** (`/onboarding/review`) — review what the AI learned
8. **Activation** (`/activate`) — "Your AI assistant is ready"
9. **Dashboard** (`/dashboard`) — KPIs + customers requiring attention

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens, no `tailwind.config.js`)
- **lucide-react** for icons
- Mock state via `useState` — no backend yet

## Local development

```bash
npm install
npm run dev
```

App runs at http://localhost:3000.

## Scripts

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Project structure

```
src/
├── app/                # App Router pages
│   ├── page.tsx        # Landing
│   ├── signup/         # Sign up
│   ├── welcome/        # Onboarding intro
│   ├── onboarding/     # 4-step onboarding flow
│   ├── activate/       # Activation success
│   └── dashboard/      # Authenticated dashboard
├── components/ui/      # Button, Card, Input, Logo, ProgressHeader, etc.
└── lib/                # cn() and small helpers
```

## Environment variables

None required for Phase 1. Will be added when backend integration begins (see roadmap).

```bash
# .env.local — Phase 2+
# NEXT_PUBLIC_SUPABASE_URL=
# SUPABASE_SERVICE_ROLE_KEY=
# OPENAI_API_KEY=
# ANTHROPIC_API_KEY=
# WHATSAPP_PHONE_NUMBER_ID=
# WHATSAPP_ACCESS_TOKEN=
# WHATSAPP_WEBHOOK_VERIFY_TOKEN=
```

## Deploy

Configured for **Netlify** (see `netlify.toml`). Push to `main` triggers a production deploy; each PR gets a preview URL.

## Roadmap

- **Phase 1 — Frontend MVP** *(this repo, in progress)*
- Phase 2 — Auth + Database (Supabase)
- Phase 3 — AI training (Whisper + Claude/GPT-4 for profile extraction)
- Phase 4 — WhatsApp Business Cloud API integration (Meta)
- Phase 5 — Real-time dashboard + push notifications

Full plan: see Notion page **PILOT - AGENT WHATSAPP**.

## License

Private. © 2026 Alexis Quiñónez.
