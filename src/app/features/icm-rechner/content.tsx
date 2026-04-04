"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    badge: "Feature",
    h1: "ICM Rechner f\u00fcr Poker Turniere",
    intro:
      "Berechne die faire Equity jedes Spielers basierend auf seinem Chipstack und der Auszahlungsstruktur. Das Independent Chip Model (ICM) ist der Standard f\u00fcr professionelle Deal-Verhandlungen.",
    whatIsIcmTitle: "Was ist ICM?",
    whatIsIcmP1Start: "Das ",
    whatIsIcmP1Strong: "Independent Chip Model",
    whatIsIcmP1End:
      " berechnet den monet\u00e4ren Wert eines Chipstacks, indem es die Wahrscheinlichkeit analysiert, mit der ein Spieler jeden Platz im Turnier erreicht \u2014 basierend auf seinem relativen Chipanteil.",
    whatIsIcmP2:
      "Anders als ein einfacher Chip-Chop ber\u00fccksichtigt ICM, dass Chips in einem Turnier nicht linear an Wert gewinnen: Der erste Chip ist mehr wert als der letzte, weil er das \u00dcberleben sichert.",
    whatIsIcmP3Start: "ICM wird verwendet f\u00fcr ",
    whatIsIcmP3Deal: "Deal-Verhandlungen",
    whatIsIcmP3Mid: " am Final Table, ",
    whatIsIcmP3Bubble: "Bubble-Entscheidungen",
    whatIsIcmP3End: " und die Bewertung von Spielsituationen.",
    algoTitle: "Malmuth-Harville Algorithmus",
    algoFeatures: [
      { title: "Exakte Berechnung (\u226410 Spieler)", desc: "Vollst\u00e4ndige rekursive Permutation aller m\u00f6glichen Platzierungen. Mathematisch exakt, keine Abweichung." },
      { title: "Monte Carlo (>10 Spieler)", desc: "10.000 Simulationen f\u00fcr gr\u00f6\u00dfere Felder. Statistisch zuverl\u00e4ssig mit minimaler Abweichung." },
      { title: "Echtzeit-Berechnung", desc: "Ergebnisse in Millisekunden direkt im Browser. Keine Serveranfrage, kein Warten." },
      { title: "In der App integriert", desc: "\u00d6ffne den ICM-Rechner direkt im Spielmodus. Chipstacks werden automatisch \u00fcbernommen." },
    ],
    useCasesTitle: "Anwendungsf\u00e4lle",
    useCases: [
      { emoji: "\uD83E\uDD1D", label: "Deal-Making / Chop", desc: "3 Methoden: ICM Chop, Chip Chop, Even Split. Manuelle Anpassung per Slider und Deal-Best\u00e4tigung mit Auszahlungs\u00fcbersicht." },
      { emoji: "\uD83D\uDCA1", label: "Bubble-Play", desc: "Verstehe den ICM-Druck: Wer hat am meisten zu verlieren, wer kann aggressiv spielen?" },
      { emoji: "\uD83D\uDCCA", label: "Lernwerkzeug", desc: "Vergleiche Chip-Chop mit ICM-Equity und verstehe den Unterschied." },
    ],
    ctaLabel: "ICM Rechner \u00f6ffnen",
    ctaSub: "Kostenlos, ohne Anmeldung. Im Spielmodus verf\u00fcgbar.",
    backHome: "Zur\u00fcck zur Startseite",
    breadcrumbFeatures: "Features",
    breadcrumbPage: "ICM-Rechner",
  },
  en: {
    badge: "Feature",
    h1: "ICM Calculator for Poker Tournaments",
    intro:
      "Calculate each player\u2019s fair equity based on their chip stack and the payout structure. The Independent Chip Model (ICM) is the standard for professional deal negotiations.",
    whatIsIcmTitle: "What is ICM?",
    whatIsIcmP1Start: "The ",
    whatIsIcmP1Strong: "Independent Chip Model",
    whatIsIcmP1End:
      " calculates the monetary value of a chip stack by analyzing the probability of a player finishing in each position \u2014 based on their relative share of chips.",
    whatIsIcmP2:
      "Unlike a simple chip chop, ICM accounts for the fact that chips in a tournament do not gain value linearly: the first chip is worth more than the last, because it ensures survival.",
    whatIsIcmP3Start: "ICM is used for ",
    whatIsIcmP3Deal: "deal negotiations",
    whatIsIcmP3Mid: " at the final table, ",
    whatIsIcmP3Bubble: "bubble decisions",
    whatIsIcmP3End: ", and evaluating game situations.",
    algoTitle: "Malmuth-Harville Algorithm",
    algoFeatures: [
      { title: "Exact Calculation (\u226410 players)", desc: "Full recursive permutation of all possible placements. Mathematically exact, zero deviation." },
      { title: "Monte Carlo (>10 players)", desc: "10,000 simulations for larger fields. Statistically reliable with minimal deviation." },
      { title: "Real-Time Calculation", desc: "Results in milliseconds directly in the browser. No server request, no waiting." },
      { title: "Built into the App", desc: "Open the ICM calculator directly in game mode. Chip stacks are imported automatically." },
    ],
    useCasesTitle: "Use Cases",
    useCases: [
      { emoji: "\uD83E\uDD1D", label: "Deal-Making / Chop", desc: "3 methods: ICM Chop, Chip Chop, Even Split. Manual adjustment via sliders and deal confirmation with payout overview." },
      { emoji: "\uD83D\uDCA1", label: "Bubble Play", desc: "Understand ICM pressure: who has the most to lose, and who can play aggressively?" },
      { emoji: "\uD83D\uDCCA", label: "Learning Tool", desc: "Compare a chip chop with ICM equity and understand the difference." },
    ],
    ctaLabel: "Open ICM Calculator",
    ctaSub: "Free, no signup needed. Available in game mode.",
    backHome: "Back to homepage",
    breadcrumbFeatures: "Features",
    breadcrumbPage: "ICM Calculator",
  },
};

export default function IcmRechnerContent() {
  const { locale, setLocale } = useLocale();
  const c = t[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubpageHeader locale={locale} setLocale={setLocale} />
      <BreadcrumbJsonLd
        items={[
          { name: c.breadcrumbFeatures, href: "/#features" },
          { name: c.breadcrumbPage, href: "/features/icm-rechner" },
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

        {/* What is ICM */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {c.whatIsIcmTitle}
          </h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6 text-muted leading-relaxed space-y-4">
            <p>
              {c.whatIsIcmP1Start}
              <strong className="text-foreground">{c.whatIsIcmP1Strong}</strong>
              {c.whatIsIcmP1End}
            </p>
            <p>{c.whatIsIcmP2}</p>
            <p>
              {c.whatIsIcmP3Start}
              <strong className="text-foreground">{c.whatIsIcmP3Deal}</strong>
              {c.whatIsIcmP3Mid}
              <strong className="text-foreground">{c.whatIsIcmP3Bubble}</strong>
              {c.whatIsIcmP3End}
            </p>
          </div>
        </section>

        {/* Algorithm */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {c.algoTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.algoFeatures.map((f) => (
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

        {/* Use Cases */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {c.useCasesTitle}
          </h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6">
            <ul className="space-y-3 text-muted">
              {c.useCases.map((uc) => (
                <li key={uc.label} className="flex items-start gap-3">
                  <span className="text-emerald mt-0.5">{uc.emoji}</span>
                  <span>
                    <strong className="text-foreground">{uc.label}</strong>{" "}
                    &mdash; {uc.desc}
                  </span>
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
