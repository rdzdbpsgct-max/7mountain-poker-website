"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    badge: "Feature",
    h1: "Poker Blindstruktur Generator",
    intro:
      "Die perfekte Blindstruktur f\u00fcr jedes Turnier \u2014 automatisch berechnet basierend auf Spieleranzahl, gew\u00fcnschter Dauer und Chipst\u00fcckelung.",
    speedsTitle: "3 Geschwindigkeiten",
    speeds: [
      { speed: "Schnell \u26A1", time: "1\u20132 Stunden", desc: "Kurze Levels, aggressive Blind-Steigerung. Perfekt f\u00fcr schnelle Cash-Game-Runden unter Freunden." },
      { speed: "Normal \u2660", time: "2\u20134 Stunden", desc: "Ausgewogene Struktur mit genug Spielraum. Der Standard f\u00fcr Home Games." },
      { speed: "Deep Stack \uD83C\uDFB0", time: "4+ Stunden", desc: "Lange Levels, sanfte Blind-Steigerung. F\u00fcr ernsthafte Pokerspieler, die tiefes Spiel bevorzugen." },
    ],
    smartTitle: "Intelligente Berechnung",
    smartFeatures: [
      { title: "Chip-aware Rundung", desc: "Blinds werden automatisch auf die kleinste verf\u00fcgbare Chipst\u00fcckelung gerundet. Keine krummen Werte." },
      { title: "Ante-Berechnung", desc: "Standard-Ante (~12,5% des Big Blind) oder Big Blind Ante (BBA, WSOP-Standard). Automatisch berechnet." },
      { title: "Endzeit-Planung", desc: "Gib eine gew\u00fcnschte Endzeit an und die Blindstruktur wird passend generiert. Tab im Generator mit Live-Preview." },
      { title: "Dauer-Prognose", desc: "Gesch\u00e4tzte Turnierdauer basierend auf Spieleranzahl, Rebuy-Wahrscheinlichkeit und Blindstruktur." },
      { title: "Benannte Pausen", desc: "Automatische Pausen mit konfigurierbaren Intervallen. Color-Up-Hinweise an die n\u00e4chste Pause gekoppelt." },
      { title: "Vollst\u00e4ndig editierbar", desc: "Jedes Level einzeln anpassbar \u2014 Blinds, Ante, Dauer, Pausen. Oder komplett manuell erstellen." },
    ],
    printTitle: "Druckbare Blindstruktur",
    printDesc:
      "Drucke die komplette Blindstruktur als \u00fcbersichtliche Tabelle \u2014 inklusive Chip-Werte, Auszahlungsstruktur und Turnier-Infos. Print-optimiertes Layout in Schwarz-Wei\u00df.",
    ctaLabel: "Blindstruktur generieren",
    ctaSub: "Kostenlos, ohne Anmeldung. Vorlagen speicherbar.",
    backHome: "Zur\u00fcck zur Startseite",
    breadcrumbFeatures: "Features",
    breadcrumbPage: "Blindstruktur",
  },
  en: {
    badge: "Feature",
    h1: "Poker Blind Structure Generator",
    intro:
      "The perfect blind structure for any tournament \u2014 automatically calculated based on player count, desired duration, and chip denominations.",
    speedsTitle: "3 Speeds",
    speeds: [
      { speed: "Fast \u26A1", time: "1\u20132 hours", desc: "Short levels, aggressive blind increases. Perfect for quick cash-game rounds with friends." },
      { speed: "Normal \u2660", time: "2\u20134 hours", desc: "Balanced structure with plenty of play. The standard for home games." },
      { speed: "Deep Stack \uD83C\uDFB0", time: "4+ hours", desc: "Long levels, gentle blind increases. For serious poker players who prefer deep-stacked play." },
    ],
    smartTitle: "Smart Calculation",
    smartFeatures: [
      { title: "Chip-aware Rounding", desc: "Blinds are automatically rounded to the smallest available chip denomination. No awkward values." },
      { title: "Ante Calculation", desc: "Standard ante (~12.5% of big blind) or Big Blind Ante (BBA, WSOP standard). Automatically calculated." },
      { title: "End-Time Planning", desc: "Set a desired end time and the blind structure is generated to match. Tab in generator with live preview." },
      { title: "Duration Estimate", desc: "Estimated tournament duration based on player count, rebuy probability, and blind structure." },
      { title: "Named Breaks", desc: "Automatic breaks at configurable intervals. Color-up reminders tied to the next break." },
      { title: "Fully Editable", desc: "Every level individually adjustable \u2014 blinds, ante, duration, breaks. Or create entirely from scratch." },
    ],
    printTitle: "Printable Blind Structure",
    printDesc:
      "Print the complete blind structure as a clear table \u2014 including chip values, payout structure, and tournament info. Print-optimized black-and-white layout.",
    ctaLabel: "Generate blind structure",
    ctaSub: "Free, no signup needed. Templates can be saved.",
    backHome: "Back to homepage",
    breadcrumbFeatures: "Features",
    breadcrumbPage: "Blind Structure",
  },
};

const speedColors = [
  "border-emerald/30",
  "border-gold/30",
  "border-red-accent/30",
];

export default function BlindstrukturContent() {
  const { locale, setLocale } = useLocale();
  const c = t[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubpageHeader locale={locale} setLocale={setLocale} />
      <BreadcrumbJsonLd
        items={[
          { name: c.breadcrumbFeatures, href: "/#features" },
          { name: c.breadcrumbPage, href: "/features/blindstruktur" },
        ]}
      />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">
          {c.badge}
        </span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black text-foreground">
          {c.h1}
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">{c.intro}</p>

        {/* 3 Speeds */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {c.speedsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {c.speeds.map((s, i) => (
              <div
                key={s.speed}
                className={`rounded-xl border ${speedColors[i]} bg-surface/40 p-6`}
              >
                <h3 className="text-xl font-black text-foreground mb-1">
                  {s.speed}
                </h3>
                <p className="text-sm text-emerald font-semibold mb-3">
                  {s.time}
                </p>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Smart Features */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {c.smartTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.smartFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border/50 bg-surface/40 p-5"
              >
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Print */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {c.printTitle}
          </h2>
          <p className="text-muted">{c.printDesc}</p>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://7mountainpoker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
          >
            <span>&#9654;</span> {c.ctaLabel}
          </a>
          <p className="mt-3 text-sm text-muted">{c.ctaSub}</p>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 4l-4 4 4 4" />
            </svg>
            {c.backHome}
          </Link>
        </div>
      </main>
    </div>
  );
}
