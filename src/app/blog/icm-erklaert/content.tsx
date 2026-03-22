"use client";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    breadcrumb: "ICM erklärt",
    tag1: "Strategie",
    tag2: "ICM",
    tag3: "Fortgeschritten",
    title: "ICM erklärt: Das Independent Chip Model verstehen",
    meta: "22. März 2026 · 11 Min Lesezeit",
    intro:
      "Stell dir vor: Du sitzt am Final Table eines Home-Game-Turniers. Drei Spieler übrig, die Punkte sind 50/30/20 aufgeteilt. Du hast den größten Stack. Jemand schlägt einen Deal vor. Wie viel steht dir fair zu? Genau hier kommt ICM ins Spiel.",
    h2What: "Was ist ICM?",
    what1p1: "Das ",
    what1Strong: "Independent Chip Model",
    what1p2:
      " (ICM) berechnet den relativen Wert eines Chipstacks in einem Turnier. Anders als bei einem Cash Game, wo 1.000 Chips immer den gleichen Wert haben, hängt der Wert von Chips in einem Turnier davon ab, wie die Platzierungsstruktur aussieht.",
    what2p1: "Die zentrale Erkenntnis: ",
    what2Strong:
      "Chips in einem Turnier sind nicht linear an Wert gebunden.",
    what2p2:
      " Der erste Chip ist mehr wert als der letzte, weil er dein Überleben sichert. Verdoppelst du deinen Stack, verdoppelt sich nicht dein Equity-Anspruch.",
    tipLabel: "💡 Einfache Faustregel",
    tipText:
      "Ein Chip-Chop (Equity proportional zu Chips) bevorzugt den Chipleader. ICM berücksichtigt, dass auch der Small Stack noch eine reale Chance auf den 1. Platz hat — und gibt ihm deshalb mehr als der reine Chip-Anteil vermuten lässt.",
    h2How: "Wie funktioniert die Berechnung?",
    howIntro: "ICM verwendet den ",
    howStrong: "Malmuth-Harville-Algorithmus",
    howIntro2: ". Die Grundidee:",
    how1Label: "Wahrscheinlichkeit für Platz 1:",
    how1: "Proportional zum Chipanteil. Hat ein Spieler 50% aller Chips, gewinnt er zu 50%.",
    how2Label: "Wahrscheinlichkeit für Platz 2:",
    how2: "Für jeden möglichen Gewinner wird berechnet, wie wahrscheinlich der Spieler unter den verbleibenden Zweiter wird — wieder proportional zum relativen Chipanteil.",
    how3Label: "Rekursiv weiter:",
    how3: "Für Platz 3, 4, usw. wird das Verfahren verschachtelt wiederholt.",
    how4Label: "Equity berechnen:",
    how4: "Für jeden Platz wird die Wahrscheinlichkeit mit dem Platzierungswert multipliziert und aufsummiert.",
    h2Example: "Konkretes Beispiel",
    exampleIntro:
      "3 Spieler am Final Table. Preisverteilung: 50% / 30% / 20%. Chipverteilung:",
    thPlayer: "Spieler",
    thChips: "Chips",
    thShare: "Anteil",
    thChipChop: "Chip-Chop %",
    thIcm: "ICM-Equity %",
    exAnna: "Anna",
    exBen: "Ben",
    exClara: "Clara",
    exNote:
      "Beachte den Unterschied: Anna bekommt beim Chip-Chop 50%, aber nur 44,4% nach ICM. Clara dagegen bekommt 23,6% statt 20%. Das liegt daran, dass Clara selbst mit nur 20% der Chips noch realistische Chancen auf den 2. oder sogar 1. Platz hat.",
    h2Deal: "ICM in der Praxis: Deal-Verhandlungen",
    dealIntro1: "Der häufigste Anwendungsfall für ICM ist der ",
    dealStrong: "Deal am Final Table",
    dealIntro2:
      ". Statt weiterzuspielen, einigen sich die verbleibenden Spieler auf eine faire Aufteilung basierend auf ihren Chipstacks.",
    dealHow: "So funktioniert es:",
    deal1: "Alle notieren ihre Chipstände",
    deal2: "ICM-Equity wird berechnet (z.B. mit dem ",
    deal2Link: "7Mountain ICM-Rechner",
    deal2End: ")",
    deal3: "Die Equity-Werte werden als faire Aufteilung vorgeschlagen",
    deal4: "Alle stimmen zu — oder verhandeln weiter",
    dealTipLabel: "💡 Verhandlungstipp",
    dealTip:
      'Oft wird ein Teil der Gesamtequity \u201Efür den Gewinner\u201C reserviert. Beispiel: ICM-basierte Aufteilung + 10% des Pools an den tatsächlichen Sieger. So hat jeder einen Anreiz, das letzte Stück zu spielen.',
    h2Bubble: "ICM und Bubble-Strategie",
    bubbleIntro1: "ICM hat auch massive Auswirkungen auf die ",
    bubbleStrong: "Strategie an der Bubble",
    bubbleIntro2:
      " (ein Spieler vor den Platzierungen). An der Bubble verliert jeder Chip, den du riskierst, überproportional an ICM-Wert — weil der Sprung in die Ränge den größten Equity-Zuwachs bringt.",
    bubbleBig: "Big Stacks",
    bubbleBigText:
      "können aggressiv spielen — sie riskieren weniger ICM-Equity",
    bubbleMed: "Medium Stacks",
    bubbleMedText:
      "sollten tight spielen — sie haben am meisten zu verlieren",
    bubbleShort: "Short Stacks",
    bubbleShortText:
      "können loose shoven — ihr ICM-Verlust beim Ausscheiden ist gering, aber der Gewinn beim Verdoppeln groß",
    h2Limits: "Grenzen von ICM",
    limitsIntro: "ICM ist ein Modell — und wie jedes Modell hat es Grenzen:",
    limit1Label: "Keine Skill-Berücksichtigung",
    limit1:
      "ICM nimmt an, dass alle Spieler gleich stark sind. Ein Pro hat aber mehr Equity als ein Anfänger mit dem gleichen Stack.",
    limit2Label: "Keine Position",
    limit2:
      "Dealer-Position, Blinds und Tischposition werden nicht berücksichtigt.",
    limit3Label: "Statisch",
    limit3:
      "ICM berechnet einen Snapshot, nicht den weiteren Verlauf des Turniers.",
    limitsOutro1: "Trotz dieser Grenzen ist ICM der ",
    limitsOutroStrong: "Gold-Standard",
    limitsOutro2:
      " für faire Deal-Verhandlungen und wird weltweit bei professionellen Turnieren eingesetzt.",
    h2Exact: "Exakt vs. Monte Carlo",
    exact1p1: "Bei wenigen Spielern (≤10) kann ICM ",
    exact1Strong: "exakt",
    exact1p2:
      " berechnet werden — durch vollständige rekursive Permutation aller möglichen Platzierungen. Bei mehr Spielern wird die Berechnung exponentiell aufwändig, weshalb ",
    exact1Strong2: "Monte-Carlo-Simulationen",
    exact1p3:
      " eingesetzt werden (10.000+ Durchläufe für statistisch zuverlässige Ergebnisse).",
    exact2p1: "Der ",
    exact2Link: "ICM-Rechner von 7Mountain Poker",
    exact2p2:
      " verwendet beides: exakte Berechnung bis 10 Spieler, Monte Carlo darüber hinaus. Alles läuft direkt im Browser — keine Server-Anfrage nötig.",
    ctaTitle: "ICM selbst berechnen",
    ctaDesc:
      "Chipstacks eingeben, Equity sofort sehen. Kostenlos im Browser.",
    ctaButton: "ICM-Rechner öffnen",
    prevArticle: "Vorheriger Artikel",
    nextArticle: "Nächster Artikel",
  },
  en: {
    breadcrumb: "ICM Explained",
    tag1: "Strategy",
    tag2: "ICM",
    tag3: "Advanced",
    title: "ICM Explained: Understanding the Independent Chip Model",
    meta: "March 22, 2026 · 11 min read",
    intro:
      "Imagine: You're at the final table of a home game tournament. Three players remain, the prizes are split 50/30/20. You have the biggest stack. Someone proposes a deal. What's your fair share? This is exactly where ICM comes in.",
    h2What: "What Is ICM?",
    what1p1: "The ",
    what1Strong: "Independent Chip Model",
    what1p2:
      " (ICM) calculates the relative value of a chip stack in a tournament. Unlike a cash game where 1,000 chips always have the same value, the value of chips in a tournament depends on the payout structure.",
    what2p1: "The key insight: ",
    what2Strong:
      "Chips in a tournament are not linearly tied to value.",
    what2p2:
      " The first chip is worth more than the last because it ensures your survival. Doubling your stack does not double your equity share.",
    tipLabel: "💡 Simple Rule of Thumb",
    tipText:
      "A chip-chop (equity proportional to chips) favors the chip leader. ICM accounts for the fact that even the short stack still has a real chance at 1st place — and therefore awards them more than their pure chip share would suggest.",
    h2How: "How Does the Calculation Work?",
    howIntro: "ICM uses the ",
    howStrong: "Malmuth-Harville algorithm",
    howIntro2: ". The basic idea:",
    how1Label: "Probability for 1st place:",
    how1: "Proportional to chip share. If a player has 50% of all chips, they win 50% of the time.",
    how2Label: "Probability for 2nd place:",
    how2: "For each possible winner, the probability of the player finishing second among the remaining players is calculated — again proportional to relative chip share.",
    how3Label: "Recursively continue:",
    how3: "For 3rd, 4th place, etc., the process is repeated in a nested fashion.",
    how4Label: "Calculate equity:",
    how4: "For each position, the probability is multiplied by the payout value and summed up.",
    h2Example: "Concrete Example",
    exampleIntro:
      "3 players at the final table. Payout structure: 50% / 30% / 20%. Chip distribution:",
    thPlayer: "Player",
    thChips: "Chips",
    thShare: "Share",
    thChipChop: "Chip-Chop %",
    thIcm: "ICM Equity %",
    exAnna: "Anna",
    exBen: "Ben",
    exClara: "Clara",
    exNote:
      "Notice the difference: Anna gets 50% in a chip-chop, but only 44.4% under ICM. Clara, on the other hand, gets 23.6% instead of 20%. This is because Clara, even with only 20% of the chips, still has realistic chances at 2nd or even 1st place.",
    h2Deal: "ICM in Practice: Deal Negotiations",
    dealIntro1: "The most common use case for ICM is the ",
    dealStrong: "final table deal",
    dealIntro2:
      ". Instead of playing on, the remaining players agree on a fair split based on their chip stacks.",
    dealHow: "How it works:",
    deal1: "Everyone notes their chip counts",
    deal2: "ICM equity is calculated (e.g., with the ",
    deal2Link: "7Mountain ICM Calculator",
    deal2End: ")",
    deal3: "The equity values are proposed as a fair split",
    deal4: "Everyone agrees — or continues negotiating",
    dealTipLabel: "💡 Negotiation Tip",
    dealTip:
      "Often a portion of the total equity is reserved \"for the winner.\" Example: ICM-based split + 10% of the pool to the actual winner. This gives everyone an incentive to play out the final stretch.",
    h2Bubble: "ICM and Bubble Strategy",
    bubbleIntro1: "ICM also has massive implications for ",
    bubbleStrong: "bubble strategy",
    bubbleIntro2:
      " (one player away from the payouts). On the bubble, every chip you risk loses disproportionate ICM value — because the jump into the money provides the largest equity increase.",
    bubbleBig: "Big Stacks",
    bubbleBigText:
      "can play aggressively — they risk less ICM equity",
    bubbleMed: "Medium Stacks",
    bubbleMedText:
      "should play tight — they have the most to lose",
    bubbleShort: "Short Stacks",
    bubbleShortText:
      "can shove loose — their ICM loss from busting is small, but the gain from doubling is large",
    h2Limits: "Limitations of ICM",
    limitsIntro:
      "ICM is a model — and like any model, it has limitations:",
    limit1Label: "No Skill Adjustment",
    limit1:
      "ICM assumes all players are equally skilled. But a pro has more equity than a beginner with the same stack.",
    limit2Label: "No Position",
    limit2:
      "Dealer position, blinds, and table position are not accounted for.",
    limit3Label: "Static",
    limit3:
      "ICM calculates a snapshot, not the future course of the tournament.",
    limitsOutro1: "Despite these limitations, ICM is the ",
    limitsOutroStrong: "gold standard",
    limitsOutro2:
      " for fair deal negotiations and is used worldwide in professional tournaments.",
    h2Exact: "Exact vs. Monte Carlo",
    exact1p1: "With few players (10 or fewer), ICM can be calculated ",
    exact1Strong: "exactly",
    exact1p2:
      " — through complete recursive permutation of all possible finishes. With more players, the computation becomes exponentially expensive, which is why ",
    exact1Strong2: "Monte Carlo simulations",
    exact1p3:
      " are used (10,000+ iterations for statistically reliable results).",
    exact2p1: "The ",
    exact2Link: "ICM Calculator in 7Mountain Poker",
    exact2p2:
      " uses both: exact calculation for up to 10 players, Monte Carlo beyond that. Everything runs directly in the browser — no server request needed.",
    ctaTitle: "Calculate ICM Yourself",
    ctaDesc:
      "Enter chip stacks, see equity instantly. Free in your browser.",
    ctaButton: "Open ICM Calculator",
    prevArticle: "Previous article",
    nextArticle: "Next article",
  },
};

export default function IcmErklaertContent() {
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
          { name: c.breadcrumb, href: "/blog/icm-erklaert" },
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
          <span className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">
            {c.tag3}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          {c.title}
        </h1>
        <p className="mt-4 text-muted">{c.meta}</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">{c.intro}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2What}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.what1p1}
            <strong className="text-foreground">{c.what1Strong}</strong>
            {c.what1p2}
          </p>
          <p className="text-muted leading-relaxed">
            {c.what2p1}
            <strong className="text-foreground">{c.what2Strong}</strong>
            {c.what2p2}
          </p>

          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6">
            <p className="text-sm text-emerald font-semibold mb-2">
              {c.tipLabel}
            </p>
            <p className="text-sm text-muted">{c.tipText}</p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2How}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.howIntro}
            <strong className="text-foreground">{c.howStrong}</strong>
            {c.howIntro2}
          </p>
          <ol className="space-y-3 text-muted list-decimal list-inside">
            <li>
              <strong className="text-foreground">{c.how1Label}</strong>{" "}
              {c.how1}
            </li>
            <li>
              <strong className="text-foreground">{c.how2Label}</strong>{" "}
              {c.how2}
            </li>
            <li>
              <strong className="text-foreground">{c.how3Label}</strong>{" "}
              {c.how3}
            </li>
            <li>
              <strong className="text-foreground">{c.how4Label}</strong>{" "}
              {c.how4}
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2Example}
          </h2>
          <p className="text-muted leading-relaxed">{c.exampleIntro}</p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  <th className="pb-2">{c.thPlayer}</th>
                  <th className="pb-2">{c.thChips}</th>
                  <th className="pb-2">{c.thShare}</th>
                  <th className="pb-2">{c.thChipChop}</th>
                  <th className="pb-2 text-emerald">{c.thIcm}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20">
                  <td className="py-2 font-medium text-foreground">
                    {c.exAnna}
                  </td>
                  <td>50.000</td>
                  <td>50%</td>
                  <td>50,0%</td>
                  <td className="text-emerald font-semibold">44,4%</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-2 font-medium text-foreground">
                    {c.exBen}
                  </td>
                  <td>30.000</td>
                  <td>30%</td>
                  <td>30,0%</td>
                  <td className="text-emerald font-semibold">32,0%</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-foreground">
                    {c.exClara}
                  </td>
                  <td>20.000</td>
                  <td>20%</td>
                  <td>20,0%</td>
                  <td className="text-emerald font-semibold">23,6%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted leading-relaxed mt-4">{c.exNote}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2Deal}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.dealIntro1}
            <strong className="text-foreground">{c.dealStrong}</strong>
            {c.dealIntro2}
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">{c.dealHow}</strong>
          </p>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>{c.deal1}</li>
            <li>
              {c.deal2}
              <Link
                href="/features/icm-rechner"
                className="text-emerald hover:underline"
              >
                {c.deal2Link}
              </Link>
              {c.deal2End}
            </li>
            <li>{c.deal3}</li>
            <li>{c.deal4}</li>
          </ol>

          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 mt-4">
            <p className="text-sm text-emerald font-semibold mb-2">
              {c.dealTipLabel}
            </p>
            <p className="text-sm text-muted">{c.dealTip}</p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2Bubble}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.bubbleIntro1}
            <strong className="text-foreground">{c.bubbleStrong}</strong>
            {c.bubbleIntro2}
          </p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald">•</span>{" "}
              <strong className="text-foreground">{c.bubbleBig}</strong>{" "}
              {c.bubbleBigText}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">•</span>{" "}
              <strong className="text-foreground">{c.bubbleMed}</strong>{" "}
              {c.bubbleMedText}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">•</span>{" "}
              <strong className="text-foreground">{c.bubbleShort}</strong>{" "}
              {c.bubbleShortText}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2Limits}
          </h2>
          <p className="text-muted leading-relaxed">{c.limitsIntro}</p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>{" "}
              <strong className="text-foreground">{c.limit1Label}</strong> —{" "}
              {c.limit1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>{" "}
              <strong className="text-foreground">{c.limit2Label}</strong> —{" "}
              {c.limit2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>{" "}
              <strong className="text-foreground">{c.limit3Label}</strong> —{" "}
              {c.limit3}
            </li>
          </ul>
          <p className="text-muted leading-relaxed">
            {c.limitsOutro1}
            <strong className="text-foreground">
              {c.limitsOutroStrong}
            </strong>
            {c.limitsOutro2}
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2Exact}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.exact1p1}
            <strong className="text-foreground">{c.exact1Strong}</strong>
            {c.exact1p2}
            <strong className="text-foreground">{c.exact1Strong2}</strong>
            {c.exact1p3}
          </p>
          <p className="text-muted leading-relaxed">
            {c.exact2p1}
            <Link
              href="/features/icm-rechner"
              className="text-emerald hover:underline"
            >
              {c.exact2Link}
            </Link>
            {c.exact2p2}
          </p>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {c.ctaTitle}
            </h3>
            <p className="text-muted mb-6">{c.ctaDesc}</p>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> {c.ctaButton}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/blog/poker-liga-organisieren"
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
            href="/blog/poker-chips-guide"
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
