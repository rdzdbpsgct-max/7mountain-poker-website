"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    tag1: "Planung",
    tag2: "Home Game",
    title: "Poker Turnier planen: Der komplette Guide für 2026",
    meta: "22. März 2026 · 12 Min Lesezeit",
    intro:
      "Ein Poker-Turnier zu Hause zu organisieren ist einfacher als du denkst — vorausgesetzt, du planst die richtigen Dinge im Voraus. Dieser Guide führt dich Schritt für Schritt durch alles, was du brauchst: von der Einladung bis zum letzten Chip.",
    h2_1: "1. Spieleranzahl und Einladung",
    p1a: (
      <>
        Die ideale Gruppengröße für ein Home Game liegt zwischen{" "}
        <strong className="text-foreground">6 und 10 Spielern</strong>. Mit weniger als 6 wird es
        schnell langweilig, mit mehr als 10 brauchst du einen zweiten Tisch. Plane mit 1–2 Spielern
        Puffer ein — es sagt immer jemand ab.
      </>
    ),
    p1b: (
      <>
        Verschicke die Einladung mindestens{" "}
        <strong className="text-foreground">eine Woche vorher</strong> mit Datum, Uhrzeit, Startzeit
        und Adresse. Eine WhatsApp-Gruppe reicht völlig aus.
      </>
    ),
    h2_2: "2. Turnier-Format wählen",
    p2a: (
      <>
        Das Turnier-Format bestimmt die Atmosphäre. Entscheide vorab, ob es ein{" "}
        <strong className="text-foreground">Freezeout</strong> (keine zweite Chance) oder ein{" "}
        <strong className="text-foreground">Rebuy-Turnier</strong> wird. Bei Rebuys können
        eliminierte Spieler in den ersten Levels zurückkehren — das hält alle länger im Spiel.
      </>
    ),
    tipTitle: "Tipp",
    tipText:
      "Ein typisches Setup: Rebuys in den ersten 4 Levels erlaubt, danach Freezeout. Optional mit einem Add-On nach der Rebuy-Phase.",
    h2_3: "3. Die richtige Blindstruktur",
    p3a: "Die Blindstruktur bestimmt, wie lange das Turnier dauert und wie viel Skill vs. Glück eine Rolle spielt. Als Faustregel:",
    speed1: (
      <>
        <strong className="text-foreground">Schnell (1–2 Std.)</strong>: 6–8 Min Levels, aggressive
        Steigerung. Ideal für kurze Runden.
      </>
    ),
    speed2: (
      <>
        <strong className="text-foreground">Normal (2–4 Std.)</strong>: 10–15 Min Levels,
        ausgewogene Steigerung. Der Standard für Home Games.
      </>
    ),
    speed3: (
      <>
        <strong className="text-foreground">Deep Stack (4+ Std.)</strong>: 15–20 Min Levels, sanfte
        Steigerung. Für erfahrene Spieler.
      </>
    ),
    p3b: (
      <>
        Nutze einen{" "}
        <Link href="/features/blindstruktur" className="text-emerald hover:underline">
          Blindstruktur-Generator
        </Link>
        , um die optimale Struktur für deine Spieleranzahl und gewünschte Dauer zu berechnen.
      </>
    ),
    h2_4: "4. Chips und Startstack",
    p4a: (
      <>
        Du brauchst mindestens{" "}
        <strong className="text-foreground">3–4 verschiedene Chip-Farben</strong>. Ein typisches Set:
      </>
    ),
    thColor: "Farbe",
    thValue: "Wert",
    thPerPlayer: "Pro Spieler",
    chipWhite: "Weiß",
    chipRed: "Rot",
    chipGreen: "Grün",
    chipBlack: "Schwarz",
    pieces: "Stück",
    p4b: (
      <>
        Das ergibt einen Startstack von <strong className="text-foreground">5.250 Chips</strong> pro
        Spieler — ein guter Wert für 12–15 Min Levels.
      </>
    ),
    h2_5: "5. Platzierungen festlegen",
    p5a: "Standard-Verteilung der Plätze für 6–10 Spieler:",
    place1: "1. Platz: 50% des Prizepools",
    place2: "2. Platz: 30%",
    place3: "3. Platz: 20%",
    p5b: "Bei mehr als 10 Spielern kannst du den 4. Platz noch ins Geld nehmen (10%). Alternativ: Bounty-Turniere, bei denen jede Elimination einen kleinen Bonus bringt.",
    h2_6: "6. Equipment-Checkliste",
    eq1: "Pokertisch oder großer Esstisch mit Filzauflage",
    eq2: "Pokerchips (mindestens 300 für 8 Spieler)",
    eq3: "2 Kartendecks (am besten Plastikkarten)",
    eq4: "Dealer-Button",
    eq5Link: "Poker Timer App",
    eq5Suffix: " auf Laptop/Tablet",
    eq6: (
      <>
        Optional: TV/Beamer für den{" "}
        <Link href="/features/tv-modus" className="text-emerald hover:underline">
          TV-Modus
        </Link>
      </>
    ),
    eq7: "Getränke und Snacks",
    h2_7: "7. Timer starten",
    p7a: (
      <>
        Mit einem{" "}
        <Link href="https://7mountainpoker.vercel.app" className="text-emerald hover:underline">
          Poker-Timer
        </Link>{" "}
        läuft alles automatisch: Blind-Erhöhungen, Pausen-Timer, Sprachansagen für Level-Wechsel und
        Eliminierungen. Du kannst dich aufs Spielen konzentrieren statt auf die Organisation.
      </>
    ),
    p7b: (
      <>
        Bonus: Mit der{" "}
        <Link href="/features/fernbedienung" className="text-emerald hover:underline">
          Smartphone-Fernbedienung
        </Link>{" "}
        steuerst du alles vom Platz aus — Play/Pause, nächstes Level, Spieler eliminieren.
      </>
    ),
    h2_8: "8. Liga aufbauen",
    p8: (
      <>
        Wenn ihr regelmäßig spielt, lohnt sich eine{" "}
        <Link href="/features/liga" className="text-emerald hover:underline">
          Poker-Liga
        </Link>
        . Punkte für jedes Turnier, eine Rangliste über die Saison, und am Ende ein Liga-Champion. Das
        motiviert alle, wiederzukommen.
      </>
    ),
    ctaTitle: "Bereit für dein Turnier?",
    ctaSub: "Starte in 30 Sekunden — ohne Anmeldung, kostenlos.",
    ctaButton: "Jetzt Turnier starten",
    allArticles: "Alle Artikel",
    nextArticle: "Nächster Artikel",
  },
  en: {
    tag1: "Planning",
    tag2: "Home Game",
    title: "How to Plan a Poker Tournament: The Complete 2026 Guide",
    meta: "March 22, 2026 · 12 min read",
    intro:
      "Organizing a poker tournament at home is easier than you think — as long as you plan the right things ahead of time. This guide walks you through everything you need, step by step: from the invitation to the last chip.",
    h2_1: "1. Player Count and Invitations",
    p1a: (
      <>
        The ideal group size for a home game is between{" "}
        <strong className="text-foreground">6 and 10 players</strong>. With fewer than 6 it gets
        boring quickly, with more than 10 you need a second table. Plan for 1–2 extra players as a
        buffer — someone always cancels.
      </>
    ),
    p1b: (
      <>
        Send out the invitation at least{" "}
        <strong className="text-foreground">one week in advance</strong> with the date, time, start
        time, and address. A WhatsApp group works perfectly fine.
      </>
    ),
    h2_2: "2. Choose the Tournament Format",
    p2a: (
      <>
        The tournament format sets the atmosphere. Decide beforehand whether it will be a{" "}
        <strong className="text-foreground">Freezeout</strong> (no second chance) or a{" "}
        <strong className="text-foreground">Rebuy tournament</strong>. With rebuys, eliminated players
        can re-enter during the early levels — keeping everyone in the game longer.
      </>
    ),
    tipTitle: "Tip",
    tipText:
      "A typical setup: Rebuys allowed in the first 4 levels, then freezeout. Optionally with an add-on after the rebuy phase.",
    h2_3: "3. The Right Blind Structure",
    p3a: "The blind structure determines how long the tournament lasts and how much skill vs. luck matters. As a rule of thumb:",
    speed1: (
      <>
        <strong className="text-foreground">Fast (1–2 hrs)</strong>: 6–8 min levels, aggressive
        increases. Ideal for quick sessions.
      </>
    ),
    speed2: (
      <>
        <strong className="text-foreground">Standard (2–4 hrs)</strong>: 10–15 min levels, balanced
        increases. The standard for home games.
      </>
    ),
    speed3: (
      <>
        <strong className="text-foreground">Deep Stack (4+ hrs)</strong>: 15–20 min levels, gentle
        increases. For experienced players.
      </>
    ),
    p3b: (
      <>
        Use a{" "}
        <Link href="/features/blindstruktur" className="text-emerald hover:underline">
          blind structure generator
        </Link>{" "}
        to calculate the optimal structure for your player count and desired duration.
      </>
    ),
    h2_4: "4. Chips and Starting Stack",
    p4a: (
      <>
        You need at least{" "}
        <strong className="text-foreground">3–4 different chip colors</strong>. A typical set:
      </>
    ),
    thColor: "Color",
    thValue: "Value",
    thPerPlayer: "Per Player",
    chipWhite: "White",
    chipRed: "Red",
    chipGreen: "Green",
    chipBlack: "Black",
    pieces: "pcs",
    p4b: (
      <>
        This gives a starting stack of <strong className="text-foreground">5,250 chips</strong> per
        player — a good value for 12–15 min levels.
      </>
    ),
    h2_5: "5. Set the Payout Structure",
    p5a: "Standard payout distribution for 6–10 players:",
    place1: "1st place: 50% of the prize pool",
    place2: "2nd place: 30%",
    place3: "3rd place: 20%",
    p5b: "With more than 10 players, you can pay out 4th place as well (10%). Alternatively: bounty tournaments, where each elimination earns a small bonus.",
    h2_6: "6. Equipment Checklist",
    eq1: "Poker table or large dining table with felt cover",
    eq2: "Poker chips (at least 300 for 8 players)",
    eq3: "2 card decks (plastic cards preferred)",
    eq4: "Dealer button",
    eq5Link: "Poker Timer App",
    eq5Suffix: " on laptop/tablet",
    eq6: (
      <>
        Optional: TV/projector for{" "}
        <Link href="/features/tv-modus" className="text-emerald hover:underline">
          TV mode
        </Link>
      </>
    ),
    eq7: "Drinks and snacks",
    h2_7: "7. Start the Timer",
    p7a: (
      <>
        With a{" "}
        <Link href="https://7mountainpoker.vercel.app" className="text-emerald hover:underline">
          poker timer
        </Link>{" "}
        everything runs automatically: blind increases, break timers, voice announcements for level
        changes and eliminations. You can focus on playing instead of organizing.
      </>
    ),
    p7b: (
      <>
        Bonus: With the{" "}
        <Link href="/features/fernbedienung" className="text-emerald hover:underline">
          smartphone remote control
        </Link>{" "}
        you control everything from your seat — play/pause, next level, eliminate players.
      </>
    ),
    h2_8: "8. Build a League",
    p8: (
      <>
        If you play regularly, setting up a{" "}
        <Link href="/features/liga" className="text-emerald hover:underline">
          poker league
        </Link>{" "}
        is worth it. Points for every tournament, a leaderboard across the season, and a league
        champion at the end. It keeps everyone coming back.
      </>
    ),
    ctaTitle: "Ready for your tournament?",
    ctaSub: "Start in 30 seconds — no sign-up, free.",
    ctaButton: "Start tournament now",
    allArticles: "All articles",
    nextArticle: "Next article",
  },
};

export default function PokerTurnierPlanenContent() {
  const { locale, setLocale } = useLocale();
  const c = t[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubpageHeader
        locale={locale}
        setLocale={setLocale}
        backHref="/blog"
        backLabel={{ de: "← Blog", en: "← Blog" }}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Blog", href: "/blog" },
          { name: "Poker Turnier planen", href: "/blog/poker-turnier-planen" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">
            {c.tag1}
          </span>
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">
            {c.tag2}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          {c.title}
        </h1>
        <p className="mt-4 text-muted">{c.meta}</p>

        <div className="mt-12 prose prose-lg prose-invert max-w-none space-y-8">
          <p className="text-lg text-muted leading-relaxed">{c.intro}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_1}</h2>
          <p className="text-muted leading-relaxed">{c.p1a}</p>
          <p className="text-muted leading-relaxed">{c.p1b}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_2}</h2>
          <p className="text-muted leading-relaxed">{c.p2a}</p>
          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6">
            <p className="text-sm text-emerald font-semibold mb-2">&#x1F4A1; {c.tipTitle}</p>
            <p className="text-sm text-muted">{c.tipText}</p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_3}</h2>
          <p className="text-muted leading-relaxed">{c.p3a}</p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.speed1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.speed2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.speed3}
            </li>
          </ul>
          <p className="text-muted leading-relaxed">{c.p3b}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_4}</h2>
          <p className="text-muted leading-relaxed">{c.p4a}</p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  <th className="pb-2">{c.thColor}</th>
                  <th className="pb-2">{c.thValue}</th>
                  <th className="pb-2">{c.thPerPlayer}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr>
                  <td className="py-1">{c.chipWhite}</td>
                  <td>25</td>
                  <td>10 {c.pieces}</td>
                </tr>
                <tr>
                  <td className="py-1">{c.chipRed}</td>
                  <td>100</td>
                  <td>10 {c.pieces}</td>
                </tr>
                <tr>
                  <td className="py-1">{c.chipGreen}</td>
                  <td>500</td>
                  <td>4 {c.pieces}</td>
                </tr>
                <tr>
                  <td className="py-1">{c.chipBlack}</td>
                  <td>1.000</td>
                  <td>2 {c.pieces}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted leading-relaxed">{c.p4b}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_5}</h2>
          <p className="text-muted leading-relaxed">{c.p5a}</p>
          <ul className="space-y-1 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x1F3C6;</span> {c.place1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x1F948;</span> {c.place2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x1F949;</span> {c.place3}
            </li>
          </ul>
          <p className="text-muted leading-relaxed">{c.p5b}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_6}</h2>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.eq1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.eq2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.eq3}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.eq4}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span>{" "}
              <Link
                href="https://7mountainpoker.vercel.app"
                className="text-emerald hover:underline"
              >
                {c.eq5Link}
              </Link>
              {c.eq5Suffix}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.eq6}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.eq7}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_7}</h2>
          <p className="text-muted leading-relaxed">{c.p7a}</p>
          <p className="text-muted leading-relaxed">{c.p7b}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_8}</h2>
          <p className="text-muted leading-relaxed">{c.p8}</p>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">{c.ctaTitle}</h3>
            <p className="text-muted mb-6">{c.ctaSub}</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>&#x25B6;</span> {c.ctaButton}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/blog"
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
            {c.allArticles}
          </Link>
          <Link
            href="/blog/perfekte-blindstruktur"
            className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold"
          >
            {c.nextArticle}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
