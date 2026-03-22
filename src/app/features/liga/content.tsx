"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    badge: "Feature",
    title: "Poker Liga verwalten",
    intro: "Vom ersten Spieltag bis zur Saisonwertung — die komplette Liga-Verwaltung für deine Home-Game-Gruppe. Kein Zettel, kein Chaos.",
    imgAlt: "7Mountain Poker Liga-Modus mit Tabelle, Spieltagen, Finanzen und Head-to-Head-Matrix",
    coreTitle: "Liga-Funktionen",
    coreFeatures: [
      { title: "Punktesystem", desc: "Konfigurierbares Punktesystem (Standard: 1.\u219210, 2.\u21927, 3.\u21925, ...). Punkte pro Platzierung individuell anpassbar." },
      { title: "Spieltage & Ergebnisse", desc: "Automatische Spieltag-Erstellung bei Turnierende. Platzierungen, Punkte und Statistiken pro Spieler und Spieltag." },
      { title: "Erweiterte Standings", desc: "Gesamttabelle mit Punkten, Platzierungen, Teilnahmequote, Knockouts und detaillierten Statistiken." },
      { title: "Tiebreaker-Konfiguration", desc: "5 konfigurierbare Tiebreaker-Kriterien: \u00D8 Platzierung, Siege, Cashes, Head-to-Head, letztes Ergebnis." },
      { title: "3 Ranking-Algorithmen", desc: "Standard-Punkte, ELO-Rating (konfigurierbarer K-Faktor) oder gewichtete Punkte mit Aktualit\u00E4ts-Decay." },
      { title: "Head-to-Head-Matrix", desc: "NxN Heatmap zeigt direkte Duelle zwischen allen Liga-Teilnehmern. Wer hat wen wie oft geschlagen?" },
    ],
    moreTitle: "Weitere Features",
    moreItems: [
      { label: "Saison-Konzept", desc: "Erstelle, aktiviere und beende Saisons. Historische Saisons bleiben erhalten." },
      { label: "Gastspieler", desc: "Markiere G\u00E4ste mit optionalem Ausschluss aus der Gesamttabelle." },
      { label: "Punkt-Korrekturen", desc: "Bonus oder Abzug pro Spieler mit Begr\u00FCndung." },
      { label: "QR-Code Sharing", desc: "Teile die Liga-Tabelle per QR-Code. Empf\u00E4nger sehen die Standings in der App." },
      { label: "TV-Display", desc: "Liga-Tabelle als rotierender Screen im TV-Modus (Top 10)." },
      { label: "Export", desc: "JSON-Import/Export, CSV-Download, Text-Export (WhatsApp-freundlich)." },
    ],
    cta: "Liga erstellen",
    ctaSub: "Kostenlos, ohne Anmeldung. Alle Daten bleiben lokal.",
    backHome: "Zur\u00FCck zur Startseite",
  },
  en: {
    badge: "Feature",
    title: "Manage Your Poker League",
    intro: "From the first game day to the season standings \u2014 complete league management for your home game group. No paper, no chaos.",
    imgAlt: "7Mountain Poker league mode with standings, game days, finances and head-to-head matrix",
    coreTitle: "League Features",
    coreFeatures: [
      { title: "Point System", desc: "Configurable point system (default: 1st\u219210, 2nd\u21927, 3rd\u21925, ...). Points per placement individually adjustable." },
      { title: "Game Days & Results", desc: "Automatic game day creation when a tournament ends. Placements, points and statistics per player and game day." },
      { title: "Extended Standings", desc: "Full table with points, placements, participation rate, knockouts and detailed statistics." },
      { title: "Tiebreaker Configuration", desc: "5 configurable tiebreaker criteria: avg. placement, wins, cashes, head-to-head, last result." },
      { title: "3 Ranking Algorithms", desc: "Standard points, ELO rating (configurable K-factor) or weighted points with recency decay." },
      { title: "Head-to-Head Matrix", desc: "NxN heatmap showing direct matchups between all league participants. Who has beaten whom how often?" },
    ],
    moreTitle: "More Features",
    moreItems: [
      { label: "Season System", desc: "Create, activate and end seasons. Historical seasons are preserved." },
      { label: "Guest Players", desc: "Mark guests with optional exclusion from the overall standings." },
      { label: "Point Corrections", desc: "Bonus or deduction per player with a reason." },
      { label: "QR Code Sharing", desc: "Share the league table via QR code. Recipients can view the standings in the app." },
      { label: "TV Display", desc: "League table as a rotating screen in TV mode (Top 10)." },
      { label: "Export", desc: "JSON import/export, CSV download, text export (WhatsApp-friendly)." },
    ],
    cta: "Create a League",
    ctaSub: "Free, no signup needed. All data stays local.",
    backHome: "Back to homepage",
  },
};

export default function LigaContent() {
  const { locale, setLocale } = useLocale();
  const c = t[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubpageHeader locale={locale} setLocale={setLocale} />

      <BreadcrumbJsonLd items={[{ name: "Features", href: "/#features" }, { name: "Liga", href: "/features/liga" }]} />
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
            src="/screenshots/liga-mode.jpg"
            alt={c.imgAlt}
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        {/* Core Features */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.coreTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.coreFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border/50 bg-surface/40 p-5">
                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.moreTitle}</h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6">
            <ul className="space-y-3 text-muted">
              {c.moreItems.map((item) => (
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
