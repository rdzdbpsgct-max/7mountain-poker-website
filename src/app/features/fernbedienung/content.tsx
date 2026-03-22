"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    badge: "Feature",
    title: "Smartphone-Fernbedienung",
    intro: "QR-Code scannen und dein Handy wird zur vollwertigen Turnier-Fernbedienung. Keine App-Installation nötig — funktioniert direkt im Browser.",
    howTitle: "So funktioniert\u2019s",
    steps: [
      { step: "1", title: "QR-Code anzeigen", desc: "Öffne den Share Hub (\uD83D\uDCE1) im Spielmodus. Ein QR-Code mit eindeutiger Raum-ID wird generiert." },
      { step: "2", title: "Mit Handy scannen", desc: "Scanne den QR-Code mit der Smartphone-Kamera. Die App öffnet sich automatisch und verbindet sich." },
      { step: "3", title: "Turnier steuern", desc: "Große Touch-Buttons für Play/Pause, Levels, Dealer, Sound und Spieler-Management." },
    ],
    controlsTitle: "Steuerungsmöglichkeiten",
    controls: [
      { title: "Timer-Steuerung", desc: "Play/Pause, nächstes/vorheriges Level, Level zurücksetzen. Alles mit großen Touch-Targets (min. 48px)." },
      { title: "Spieler-Management", desc: "Spieler eliminieren, Rebuys/Add-Ons vergeben. Bei Bounty-Turnieren: Eliminator per Touch auswählen." },
      { title: "Turnier-Infos", desc: "Live-Prizepool, Durchschnitts-Stack in BB, Spielzeit, nächstes Level, Break-Anzeige und ITM-Badge." },
      { title: "Sound & Dealer", desc: "Sound an/aus, Dealer weiterrücken, Call the Clock starten. Alles vom Sofa aus." },
    ],
    techTitle: "Technische Details",
    techItems: [
      { label: "WebRTC via PeerJS", desc: "Peer-to-Peer-Verbindung ohne eigenen Server. Signaling über PeerJS Cloud." },
      { label: "Auto-Reconnect", desc: "Verbindung überlebt Browser-Refresh. Exponentieller Backoff (3 Versuche)." },
      { label: "Multi-Controller", desc: "Bis zu 4 Smartphones gleichzeitig als Fernbedienung nutzbar." },
      { label: "Wake Lock", desc: "Display bleibt an. Touch-optimiert mit Safe-Area-Insets für alle Smartphone-Modelle." },
    ],
    cta: "Fernbedienung ausprobieren",
    ctaSub: "Kostenlos, ohne Anmeldung. \uD83D\uDCE1 Share Hub im Spielmodus",
    backHome: "Zurück zur Startseite",
  },
  en: {
    badge: "Feature",
    title: "Smartphone Remote Control",
    intro: "Scan a QR code and your phone becomes a full-featured tournament remote. No app install needed \u2014 works directly in the browser.",
    howTitle: "How It Works",
    steps: [
      { step: "1", title: "Show QR Code", desc: "Open the Share Hub (\uD83D\uDCE1) in game mode. A QR code with a unique room ID is generated." },
      { step: "2", title: "Scan with Phone", desc: "Scan the QR code with your smartphone camera. The app opens automatically and connects." },
      { step: "3", title: "Control the Tournament", desc: "Large touch buttons for Play/Pause, Levels, Dealer, Sound and Player Management." },
    ],
    controlsTitle: "Control Options",
    controls: [
      { title: "Timer Controls", desc: "Play/Pause, next/previous level, reset level. All with large touch targets (min. 48px)." },
      { title: "Player Management", desc: "Eliminate players, assign rebuys/add-ons. In bounty tournaments: select the eliminator by touch." },
      { title: "Tournament Info", desc: "Live prize pool, average stack in BB, play time, next level, break display and ITM badge." },
      { title: "Sound & Dealer", desc: "Toggle sound, advance dealer, start Call the Clock. All from the comfort of your couch." },
    ],
    techTitle: "Technical Details",
    techItems: [
      { label: "WebRTC via PeerJS", desc: "Peer-to-peer connection without a dedicated server. Signaling via PeerJS Cloud." },
      { label: "Auto-Reconnect", desc: "Connection survives browser refresh. Exponential backoff (3 attempts)." },
      { label: "Multi-Controller", desc: "Up to 4 smartphones can be used as remote controls simultaneously." },
      { label: "Wake Lock", desc: "Display stays on. Touch-optimized with safe area insets for all smartphone models." },
    ],
    cta: "Try Remote Control",
    ctaSub: "Free, no signup needed. \uD83D\uDCE1 Share Hub in game mode",
    backHome: "Back to homepage",
  },
};

export default function FernbedienungContent() {
  const { locale, setLocale } = useLocale();
  const c = t[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubpageHeader locale={locale} setLocale={setLocale} />

      <BreadcrumbJsonLd items={[{ name: "Features", href: "/#features" }, { name: "Fernbedienung", href: "/features/fernbedienung" }]} />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">{c.badge}</span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black text-foreground">
          {c.title}
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          {c.intro}
        </p>

        {/* How it works */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.howTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {c.steps.map((item) => (
              <div key={item.step} className="relative rounded-xl border border-border/50 bg-surface/40 p-6">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2 mt-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Controls */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.controlsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.controls.map((ctrl) => (
              <div key={ctrl.title} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{ctrl.title}</h3>
                <p className="text-sm text-muted">{ctrl.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.techTitle}</h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6">
            <ul className="space-y-3 text-muted">
              {c.techItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="text-emerald mt-0.5">{"\u2713"}</span>
                  <span><strong className="text-foreground">{item.label}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://7mountainpoker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
          >
            <span>▶</span> {c.cta}
          </a>
          <p className="mt-3 text-sm text-muted">{c.ctaSub}</p>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            {c.backHome}
          </Link>
        </div>
      </main>
    </div>
  );
}
