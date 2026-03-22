"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    badge: "Feature",
    title: "TV-Modus für Poker Turniere",
    intro: "Verwandle jeden Fernseher oder Beamer in ein professionelles Tournament Display. Zeige Blindstruktur, Timer, Spielerstände und mehr auf dem großen Bildschirm.",
    imgAlt: "7Mountain Poker TV-Modus mit Timer, Blindstruktur und Turnier-Statistiken",
    layoutsTitle: "4 Display-Layouts",
    layouts: [
      { name: "Standard (55/45)", desc: "Timer oben, rotierende Info-Screens unten. Der Allrounder für die meisten Setups." },
      { name: "Kompakt (40/60)", desc: "Mehr Platz für Infos. Ideal wenn Spieler direkt vor dem Screen sitzen." },
      { name: "Timer-Only (100%)", desc: "Nur der Timer, bildschirmfüllend. Perfekt für kleine Räume oder als Zweitdisplay." },
      { name: "Ultra Large (70/30)", desc: "Übergroßer Timer für Sichtbarkeit auf 5+ Meter Distanz." },
    ],
    screensTitle: "8 rotierende Info-Screens",
    screensDesc: "Alle 15 Sekunden wechselt der untere Bereich automatisch zwischen diesen Screens. Manuelle Navigation per Pfeiltasten möglich.",
    screens: ["Timer & Blinds", "Spieler-Übersicht", "Turnier-Statistiken", "Auszahlungsstruktur", "Blindstruktur-Tabelle", "Chip-Werte", "Sitzplan (SVG)", "Liga-Tabelle"],
    connectTitle: "Verbindungsmöglichkeiten",
    connections: [
      { title: "Cross-Device Display", desc: "Öffne die Display-URL auf einem anderen Gerät (Tablet, Laptop, Smart-TV). Verbindet sich automatisch via PeerJS." },
      { title: "AirPlay & Chromecast", desc: "Streame kabellos auf Apple TV oder Chromecast. Funktioniert direkt aus dem Browser." },
      { title: "HDMI-Kabel", desc: "Klassische Kabelverbindung für maximale Zuverlässigkeit. Funktioniert mit jedem TV." },
    ],
    cta: "TV-Modus ausprobieren",
    ctaSub: "Kostenlos, ohne Anmeldung. Tastenkürzel: T",
    backHome: "Zurück zur Startseite",
  },
  en: {
    badge: "Feature",
    title: "TV Mode for Poker Tournaments",
    intro: "Turn any TV or projector into a professional tournament display. Show blind structure, timer, player standings and more on the big screen.",
    imgAlt: "7Mountain Poker TV mode with timer, blind structure and tournament statistics",
    layoutsTitle: "4 Display Layouts",
    layouts: [
      { name: "Standard (55/45)", desc: "Timer on top, rotating info screens below. The all-rounder for most setups." },
      { name: "Compact (40/60)", desc: "More room for info. Ideal when players are sitting right in front of the screen." },
      { name: "Timer-Only (100%)", desc: "Just the timer, full screen. Perfect for small rooms or as a secondary display." },
      { name: "Ultra Large (70/30)", desc: "Oversized timer for visibility at 5+ meter distance." },
    ],
    screensTitle: "8 Rotating Info Screens",
    screensDesc: "Every 15 seconds the lower area automatically cycles through these screens. Manual navigation via arrow keys is also available.",
    screens: ["Timer & Blinds", "Player Overview", "Tournament Statistics", "Payout Structure", "Blind Schedule", "Chip Values", "Seating Chart (SVG)", "League Standings"],
    connectTitle: "Connection Options",
    connections: [
      { title: "Cross-Device Display", desc: "Open the display URL on another device (tablet, laptop, smart TV). Connects automatically via PeerJS." },
      { title: "AirPlay & Chromecast", desc: "Stream wirelessly to Apple TV or Chromecast. Works directly from the browser." },
      { title: "HDMI Cable", desc: "Classic wired connection for maximum reliability. Works with any TV." },
    ],
    cta: "Try TV Mode",
    ctaSub: "Free, no signup needed. Keyboard shortcut: T",
    backHome: "Back to homepage",
  },
};

export default function TVModusContent() {
  const { locale, setLocale } = useLocale();
  const c = t[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubpageHeader locale={locale} setLocale={setLocale} />

      <BreadcrumbJsonLd items={[{ name: "Features", href: "/#features" }, { name: "TV-Modus", href: "/features/tv-modus" }]} />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">{c.badge}</span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black text-foreground">
          {c.title}
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          {c.intro}
        </p>

        {/* Screenshot */}
        <div className="mt-10 rounded-2xl border border-border/50 overflow-hidden shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screenshots/tv-mode.jpg"
            alt={c.imgAlt}
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        {/* Layouts */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.layoutsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.layouts.map((layout) => (
              <div key={layout.name} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{layout.name}</h3>
                <p className="text-sm text-muted">{layout.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rotating Screens */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.screensTitle}</h2>
          <p className="text-muted mb-6">
            {c.screensDesc}
          </p>
          <div className="flex flex-wrap gap-2">
            {c.screens.map((screen) => (
              <span key={screen} className="rounded-full bg-emerald/10 border border-emerald/20 px-4 py-1.5 text-sm text-emerald">
                {screen}
              </span>
            ))}
          </div>
        </section>

        {/* Connections */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.connectTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {c.connections.map((method) => (
              <div key={method.title} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-muted">{method.desc}</p>
              </div>
            ))}
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
