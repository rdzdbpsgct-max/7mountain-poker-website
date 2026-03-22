"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    tag1: "Blindstruktur",
    tag2: "Strategie",
    title: "Die perfekte Blindstruktur für Home Games",
    meta: "22. März 2026 · 8 Min Lesezeit",
    intro:
      "Die Blindstruktur ist das Herzstück jedes Poker-Turniers. Sie bestimmt das Tempo, die Dauer und wie viel Skill gegenüber Glück eine Rolle spielt. Eine gut gewählte Struktur macht den Unterschied zwischen einem frustrierenden Coin-Flip-Fest und einem spannenden, strategischen Turnier.",
    h2_what: "Was macht eine gute Blindstruktur aus?",
    pWhat: "Eine gute Blindstruktur hat drei Eigenschaften:",
    prop1: (
      <>
        <strong className="text-foreground">Gleichmäßige Steigerung</strong> — Die Blinds steigen um
        50–100% pro Level. Keine plötzlichen Sprünge.
      </>
    ),
    prop2: (
      <>
        <strong className="text-foreground">Genug Big Blinds</strong> — Spieler sollten zu Beginn
        mindestens 100 BB haben, idealerweise 150–200 BB.
      </>
    ),
    prop3: (
      <>
        <strong className="text-foreground">Passende Dauer</strong> — Die Struktur sollte zur
        verfügbaren Zeit passen, nicht umgekehrt.
      </>
    ),
    h2_speeds: "3 Geschwindigkeiten im Vergleich",
    h3_fast: "⚡ Schnell (Turbo)",
    fastDetails: (
      <>
        <strong className="text-foreground">Level-Dauer:</strong> 6–8 Minuten
        <br />
        <strong className="text-foreground">Startstack:</strong> 50–80 Big Blinds
        <br />
        <strong className="text-foreground">Turnierdauer:</strong> 1–2 Stunden für 8 Spieler
      </>
    ),
    fastDesc:
      "Ideal für kurze Runden unter Freunden oder als Aufwärmer vor dem Hauptturnier. Der Glücksfaktor ist höher, aber die Action ist schnell und unterhaltsam.",
    thLevel: "Level",
    thSB: "SB",
    thBB: "BB",
    thDuration: "Dauer",
    breakLabel: "Pause",
    h3_standard: "♠ Standard",
    standardDetails: (
      <>
        <strong className="text-foreground">Level-Dauer:</strong> 12–15 Minuten
        <br />
        <strong className="text-foreground">Startstack:</strong> 100–150 Big Blinds
        <br />
        <strong className="text-foreground">Turnierdauer:</strong> 2,5–4 Stunden für 8 Spieler
      </>
    ),
    standardDesc:
      "Der Klassiker für den Pokerabend. Genug Zeit für strategisches Spiel, aber nicht so lang, dass jemand nach Hause will bevor es spannend wird.",
    h3_deep: "🎰 Deep Stack",
    deepDetails: (
      <>
        <strong className="text-foreground">Level-Dauer:</strong> 15–20 Minuten
        <br />
        <strong className="text-foreground">Startstack:</strong> 150–200+ Big Blinds
        <br />
        <strong className="text-foreground">Turnierdauer:</strong> 4+ Stunden für 8 Spieler
      </>
    ),
    deepDesc:
      "Für erfahrene Spieler, die tiefes Post-Flop-Spiel bevorzugen. Mehr Raum für Bluffs, Fallen und komplexe Entscheidungen. Plane genug Zeit (und Snacks) ein.",
    h2_ante: "Ante: Ja oder Nein?",
    pAnte: "Antes erhöhen den Pot und verhindern zu tightes Spiel in späteren Levels. Zwei Optionen:",
    anteStandard: (
      <>
        <strong className="text-foreground">Standard-Ante</strong>: ~12,5% des Big Blind. Klassisch,
        aber erfordert ständiges Einwerfen.
      </>
    ),
    anteBBA: (
      <>
        <strong className="text-foreground">Big Blind Ante (BBA)</strong>: Der BB-Spieler zahlt die
        Ante für den gesamten Tisch. WSOP-Standard seit 2018. Schneller und einfacher.
      </>
    ),
    h2_breaks: "Pausen richtig planen",
    pBreaks: (
      <>
        Alle <strong className="text-foreground">60–90 Minuten</strong> eine Pause von 5–10 Minuten
        einplanen. Nutze die Pause für Color-Ups (kleine Chips entfernen) — der Timer kann das
        automatisch ankündigen.
      </>
    ),
    h2_generate: "Automatisch generieren lassen",
    pGenerate: (
      <>
        Der{" "}
        <Link href="/features/blindstruktur" className="text-emerald hover:underline">
          Blindstruktur-Generator
        </Link>{" "}
        von 7Mountain Poker berechnet die optimale Struktur basierend auf deiner Spieleranzahl,
        gewünschter Dauer und Chipstückelung. Du kannst auch eine Endzeit angeben — die Struktur wird
        passend generiert.
      </>
    ),
    ctaTitle: "Blindstruktur generieren",
    ctaSub: "3 Geschwindigkeiten, chip-aware Rundung, automatische Pausen.",
    ctaButton: "Generator öffnen",
    prevArticle: "Vorheriger Artikel",
    nextArticle: "Nächster Artikel",
  },
  en: {
    tag1: "Blind Structure",
    tag2: "Strategy",
    title: "The Perfect Blind Structure for Home Games",
    meta: "March 22, 2026 · 8 min read",
    intro:
      "The blind structure is the heart of every poker tournament. It determines the pace, duration, and how much skill versus luck comes into play. A well-chosen structure makes the difference between a frustrating coin-flip fest and an exciting, strategic tournament.",
    h2_what: "What Makes a Good Blind Structure?",
    pWhat: "A good blind structure has three qualities:",
    prop1: (
      <>
        <strong className="text-foreground">Smooth Progression</strong> — Blinds increase by 50–100%
        per level. No sudden jumps.
      </>
    ),
    prop2: (
      <>
        <strong className="text-foreground">Enough Big Blinds</strong> — Players should start with at
        least 100 BB, ideally 150–200 BB.
      </>
    ),
    prop3: (
      <>
        <strong className="text-foreground">Appropriate Duration</strong> — The structure should fit
        the available time, not the other way around.
      </>
    ),
    h2_speeds: "3 Speeds Compared",
    h3_fast: "⚡ Fast (Turbo)",
    fastDetails: (
      <>
        <strong className="text-foreground">Level duration:</strong> 6–8 minutes
        <br />
        <strong className="text-foreground">Starting stack:</strong> 50–80 big blinds
        <br />
        <strong className="text-foreground">Tournament duration:</strong> 1–2 hours for 8 players
      </>
    ),
    fastDesc:
      "Ideal for quick sessions with friends or as a warm-up before the main event. The luck factor is higher, but the action is fast and entertaining.",
    thLevel: "Level",
    thSB: "SB",
    thBB: "BB",
    thDuration: "Duration",
    breakLabel: "Break",
    h3_standard: "♠ Standard",
    standardDetails: (
      <>
        <strong className="text-foreground">Level duration:</strong> 12–15 minutes
        <br />
        <strong className="text-foreground">Starting stack:</strong> 100–150 big blinds
        <br />
        <strong className="text-foreground">Tournament duration:</strong> 2.5–4 hours for 8 players
      </>
    ),
    standardDesc:
      "The classic for poker night. Enough time for strategic play, but not so long that someone wants to leave before it gets exciting.",
    h3_deep: "🎰 Deep Stack",
    deepDetails: (
      <>
        <strong className="text-foreground">Level duration:</strong> 15–20 minutes
        <br />
        <strong className="text-foreground">Starting stack:</strong> 150–200+ big blinds
        <br />
        <strong className="text-foreground">Tournament duration:</strong> 4+ hours for 8 players
      </>
    ),
    deepDesc:
      "For experienced players who prefer deep post-flop play. More room for bluffs, traps, and complex decisions. Make sure to plan enough time (and snacks).",
    h2_ante: "Ante: Yes or No?",
    pAnte:
      "Antes increase the pot and prevent overly tight play in later levels. Two options:",
    anteStandard: (
      <>
        <strong className="text-foreground">Standard Ante</strong>: ~12.5% of the big blind. Classic,
        but requires constant posting.
      </>
    ),
    anteBBA: (
      <>
        <strong className="text-foreground">Big Blind Ante (BBA)</strong>: The BB player posts the
        ante for the entire table. WSOP standard since 2018. Faster and simpler.
      </>
    ),
    h2_breaks: "Planning Breaks Properly",
    pBreaks: (
      <>
        Schedule a 5–10 minute break every{" "}
        <strong className="text-foreground">60–90 minutes</strong>. Use the break for color-ups
        (removing small chips) — the timer can announce this automatically.
      </>
    ),
    h2_generate: "Generate Automatically",
    pGenerate: (
      <>
        The{" "}
        <Link href="/features/blindstruktur" className="text-emerald hover:underline">
          blind structure generator
        </Link>{" "}
        from 7Mountain Poker calculates the optimal structure based on your player count, desired
        duration, and chip denominations. You can also specify an end time — the structure will be
        generated accordingly.
      </>
    ),
    ctaTitle: "Generate Blind Structure",
    ctaSub: "3 speeds, chip-aware rounding, automatic breaks.",
    ctaButton: "Open generator",
    prevArticle: "Previous article",
    nextArticle: "Next article",
  },
};

export default function PerfekteBlindstrukturContent() {
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
          { name: "Perfekte Blindstruktur", href: "/blog/perfekte-blindstruktur" },
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

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">{c.intro}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_what}</h2>
          <p className="text-muted leading-relaxed">{c.pWhat}</p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald font-bold">1.</span> {c.prop1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald font-bold">2.</span> {c.prop2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald font-bold">3.</span> {c.prop3}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_speeds}</h2>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.h3_fast}</h3>
          <p className="text-muted leading-relaxed">{c.fastDetails}</p>
          <p className="text-muted leading-relaxed">{c.fastDesc}</p>

          <div className="rounded-xl border border-border/50 bg-surface/40 p-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  <th className="pb-2">{c.thLevel}</th>
                  <th className="pb-2">{c.thSB}</th>
                  <th className="pb-2">{c.thBB}</th>
                  <th className="pb-2">{c.thDuration}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr>
                  <td className="py-1">1</td>
                  <td>25</td>
                  <td>50</td>
                  <td>6 min</td>
                </tr>
                <tr>
                  <td className="py-1">2</td>
                  <td>50</td>
                  <td>100</td>
                  <td>6 min</td>
                </tr>
                <tr>
                  <td className="py-1">3</td>
                  <td>75</td>
                  <td>150</td>
                  <td>6 min</td>
                </tr>
                <tr>
                  <td className="py-1">4</td>
                  <td>100</td>
                  <td>200</td>
                  <td>6 min</td>
                </tr>
                <tr className="text-amber-400">
                  <td className="py-1">{c.breakLabel}</td>
                  <td colSpan={3}>5 min</td>
                </tr>
                <tr>
                  <td className="py-1">5</td>
                  <td>150</td>
                  <td>300</td>
                  <td>6 min</td>
                </tr>
                <tr>
                  <td className="py-1">6</td>
                  <td>200</td>
                  <td>400</td>
                  <td>6 min</td>
                </tr>
                <tr>
                  <td className="py-1">7</td>
                  <td>300</td>
                  <td>600</td>
                  <td>6 min</td>
                </tr>
                <tr>
                  <td className="py-1">8</td>
                  <td>500</td>
                  <td>1.000</td>
                  <td>6 min</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.h3_standard}</h3>
          <p className="text-muted leading-relaxed">{c.standardDetails}</p>
          <p className="text-muted leading-relaxed">{c.standardDesc}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.h3_deep}</h3>
          <p className="text-muted leading-relaxed">{c.deepDetails}</p>
          <p className="text-muted leading-relaxed">{c.deepDesc}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_ante}</h2>
          <p className="text-muted leading-relaxed">{c.pAnte}</p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.anteStandard}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.anteBBA}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_breaks}</h2>
          <p className="text-muted leading-relaxed">{c.pBreaks}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_generate}</h2>
          <p className="text-muted leading-relaxed">{c.pGenerate}</p>

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
            href="/blog/poker-turnier-planen"
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
            {c.prevArticle}
          </Link>
          <Link
            href="/blog/poker-timer-vergleich"
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
