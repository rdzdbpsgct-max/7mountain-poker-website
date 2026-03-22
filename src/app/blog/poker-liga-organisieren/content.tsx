"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    tags: ["Liga", "Organisation", "Home Game"],
    title: "Poker Liga organisieren: Der komplette Guide",
    date: "22. März 2026 · 14 Min Lesezeit",
    intro: "Eine Poker-Liga verwandelt lose Pokerabende in ein fortlaufendes Event, auf das sich alle freuen. Statt einzelner Turniere ohne Konsequenz entsteht ein Wettbewerb über eine ganze Saison — mit Rangliste, Rivalitäten und einem Liga-Champion am Ende. Dieser Guide zeigt dir, wie du eine Liga aufbaust, die funktioniert und Spaß macht.",
    whyTitle: "Warum eine Liga?",
    whyIntro: "Die Vorteile gegenüber einzelnen Turnieren liegen auf der Hand:",
    whyItems: [
      { label: "Motivation", desc: 'Eine Rangliste motiviert, regelmäßig zu kommen. \u201EIch bin Dritter, nächste Woche hol ich mir den zweiten Platz.\u201C' },
      { label: "Verbindlichkeit", desc: "Feste Spieltage mit Liga-Punkten sorgen dafür, dass weniger abgesagt wird." },
      { label: "Fairness", desc: "Über viele Turniere setzt sich Skill gegen Glück durch." },
      { label: "Gemeinschaft", desc: "Eine Liga schafft Zusammenhalt und Running Gags, die über Jahre halten." },
    ],
    step1Title: "Schritt 1: Grundregeln festlegen",
    step1Intro: "Bevor der erste Chip fällt, sollten alle Spieler diese Fragen klären:",
    rhythmTitle: "Spielrhythmus",
    rhythmText: "Der häufigste Rhythmus ist einmal pro Monat — regelmäßig genug für Spannung, aber mit genug Abstand, damit alle Zeit finden. Wöchentlich funktioniert nur bei sehr motivierten Gruppen. Alle 2 Wochen ist ein guter Kompromiss.",
    seasonTitle: "Saisondauer",
    seasonText: "Eine Saison von 8–12 Spieltagen ist ideal. Kürzer und der Zufall dominiert, länger und es wird schwer, die Motivation zu halten. Bei monatlichen Spielen ergibt das eine natürliche Saison von September bis Juni — perfekt abgestimmt auf Poker im Winter.",
    formatTitle: "Turnier-Format festlegen",
    formatText: "Halte das Turnier-Format konstant über die Saison. Einigt euch auf Startchips, Blindstruktur und ob Rebuys erlaubt sind. Konsistenz macht die Liga fair und vergleichbar.",
    tipLabel: "💡 Organisations-Tipp",
    tipText: "Führe eine Ergebnistabelle mit Platzierungen und Punkten pro Spieler und Spieltag. Am Ende der Saison weiß jeder genau, wo er steht. Die",
    tipLinkText: "Liga-Funktion von 7Mountain Poker",
    tipSuffix: " macht das automatisch.",
    step2Title: "Schritt 2: Punktesystem wählen",
    step2Intro: "Das Punktesystem bestimmt, wie viel jede Platzierung wert ist. Es gibt drei bewährte Modelle:",
    model1Title: "Modell 1: Standard-Punkte",
    model1Desc: "Feste Punkte pro Platzierung. Einfach, transparent, bewährt.",
    model1Note: "Der Abstand zwischen 1. und 2. Platz (3 Punkte) ist bewusst größer als zwischen den hinteren Plätzen — ein Sieg soll sich deutlich lohnen.",
    model2Title: "Modell 2: ELO-Rating",
    model2Desc: "Angelehnt an Schach: Jeder Spieler startet mit 1500 Punkten. Nach jedem Turnier werden Punkte basierend auf der erwarteten vs. tatsächlichen Leistung umverteilt. Ein Sieg gegen starke Spieler bringt mehr als gegen schwache.",
    model2Pro: "Vorteil:",
    model2ProText: " Selbst-adjustierend, berücksichtigt Gegner-Stärke.",
    model2Con: "Nachteil:",
    model2ConText: " Weniger intuitiv, schwerer zu erklären.",
    model3Title: "Modell 3: Gewichtete Punkte",
    model3Desc: "Wie Standard-Punkte, aber neuere Turniere zählen mehr als ältere. Ein Decay-Faktor sorgt dafür, dass aktuelle Form mehr wiegt als vergangene Erfolge.",
    model3Pro: "Vorteil:",
    model3ProText: " Belohnt aktuelle Performance, hält die Tabelle dynamisch.",
    model3Con: "Nachteil:",
    model3ConText: " Frühes Führen wird weniger belohnt.",
    step3Title: "Schritt 3: Tiebreaker definieren",
    step3Intro: "Bei Punktgleichheit braucht ihr klare Regeln. Empfohlene Reihenfolge:",
    tiebreakers: [
      { label: "Durchschnittliche Platzierung", desc: " — Wer hat über alle Turniere besser abgeschnitten?" },
      { label: "Anzahl Siege", desc: " — Bei gleichem Durchschnitt: Wer hat öfter gewonnen?" },
      { label: "Anzahl Cashes", desc: " — Wer war öfter im Geld?" },
      { label: "Head-to-Head", desc: " — Wer hat den anderen öfter geschlagen?" },
      { label: "Letztes Ergebnis", desc: " — Wer war zuletzt besser?" },
    ],
    step4Title: "Schritt 4: Gastspieler handhaben",
    step4Intro: "Gäste beleben die Runde, aber sie sollten die Liga-Wertung nicht verzerren. Zwei bewährte Ansätze:",
    guestA: "Gastspieler markieren",
    guestADesc: " — Gäste spielen mit, erscheinen aber nicht in der Gesamttabelle. Ihre Punkte gehen an niemanden.",
    guestB: "Mindest-Teilnahme",
    guestBDesc: " — Nur Spieler mit ≥50% Teilnahmequote erscheinen in der Endwertung.",
    step5Title: "Schritt 5: Saison-Abschluss planen",
    step5Intro: "Das letzte Turnier der Saison sollte besonders sein:",
    finaleItems: [
      { icon: "🏆", label: "Doppelte Punkte", desc: " — Das Finale mit doppelten Punkten für extra Spannung." },
      { icon: "🎉", label: "Liga-Trophäe", desc: " — Ein kleiner Pokal oder eine Trophäe für den Liga-Champion." },
      { icon: "📊", label: "Saisonrückblick", desc: " — Zeige die finale Tabelle, Statistiken und lustige Awards (meiste Rebuys, meiste Bubble-Finishes, etc.)." },
    ],
    step6Title: "Schritt 6: Digitale Verwaltung",
    step6Intro: "Zettelwirtschaft und Excel-Tabellen funktionieren — bis sie es nicht mehr tun. Sobald eure Liga mehr als 3–4 Spieltage hat, lohnt sich eine digitale Lösung:",
    digitalItems: [
      "Automatische Punkteberechnung nach jedem Turnier",
      "Ergebnistabelle mit Statistiken pro Spieler",
      "Head-to-Head-Statistiken",
      "QR-Code zum Teilen der Tabelle",
      "Export als CSV oder Text (für WhatsApp)",
    ],
    digitalSuffix: "Die Liga-Funktion von 7Mountain Poker bietet all das — inklusive 3 Ranking-Algorithmen, Saison-Verwaltung, Gastspieler-Markierung, Punkt-Korrekturen und TV-Display für die Tabelle.",
    mistakesTitle: "Häufige Fehler vermeiden",
    mistakes: [
      { label: "Zu kompliziertes Punktesystem", desc: "Wenn du 5 Minuten brauchst, um das System zu erklären, ist es zu komplex. Start einfach, erweitere später." },
      { label: "Keine festen Termine", desc: '\u201EWir spielen, wenn alle können\u201C hei\u00DFt: Ihr spielt nie. Legt einen festen Wochentag fest (z.B. \u201EErster Freitag im Monat\u201C).' },
      { label: "Ergebnisse nicht tracken", desc: "Am Ende der Saison will jeder wissen, wie er abgeschnitten hat. Tracke Platzierungen von Anfang an." },
      { label: "Kein Mindest-Teilnahme-Kriterium", desc: 'Jemand kommt einmal, gewinnt, und ist \u201ELiga-F\u00FChrer\u201C. Setze eine Mindest-Teilnahme von 50%.' },
    ],
    exampleTitle: 'Beispiel: Unsere Liga \u201EMountain League\u201C',
    exampleIntro: "Hier ein konkretes Beispiel, wie eine gut funktionierende Liga aussehen kann:",
    exampleData: [
      { label: "Spieler:", value: "8 Stammspieler + 2–3 Gäste pro Abend" },
      { label: "Rhythmus:", value: "Jeden 1. Samstag im Monat, 19 Uhr" },
      { label: "Format:", value: "Freezeout + 1 Rebuy in Level 1–4" },
      { label: "Punkte:", value: "Standard (10/7/5/4/3/2/1)" },
      { label: "Saison:", value: "September bis Juni (10 Spieltage)" },
      { label: "Finale:", value: "Doppelte Punkte" },
      { label: "Tiebreaker:", value: "Ø Platzierung → Siege → Head-to-Head" },
      { label: "Trophäe:", value: "Wanderpokal + Gruppenfoto" },
    ],
    ctaTitle: "Liga erstellen",
    ctaSubtitle: "Punktesystem, Spieltage, Statistiken — alles in einer App.",
    ctaButton: "Liga starten",
    allArticles: "Alle Artikel",
    nextArticle: "Nächster Artikel",
  },
  en: {
    tags: ["League", "Organization", "Home Game"],
    title: "How to Organize a Poker League: The Complete Guide",
    date: "March 22, 2026 · 14 min read",
    intro: "A poker league turns casual poker nights into an ongoing event everyone looks forward to. Instead of single tournaments with no consequences, you create a competition spanning an entire season — with standings, rivalries, and a league champion at the end. This guide shows you how to build a league that works and is fun.",
    whyTitle: "Why a League?",
    whyIntro: "The advantages over individual tournaments are obvious:",
    whyItems: [
      { label: "Motivation", desc: "A leaderboard motivates regular attendance. 'I'm third — next week I'm going for second place.'" },
      { label: "Commitment", desc: "Fixed game days with league points ensure fewer cancellations." },
      { label: "Fairness", desc: "Over many tournaments, skill wins out over luck." },
      { label: "Community", desc: "A league builds bonds and inside jokes that last for years." },
    ],
    step1Title: "Step 1: Set Ground Rules",
    step1Intro: "Before the first chip falls, all players should clarify these questions:",
    rhythmTitle: "Playing Schedule",
    rhythmText: "The most common schedule is once per month — regular enough for excitement, but with enough spacing for everyone to find time. Weekly only works for very motivated groups. Every 2 weeks is a good compromise.",
    seasonTitle: "Season Length",
    seasonText: "A season of 8–12 game days is ideal. Shorter and luck dominates, longer and it's hard to maintain motivation. With monthly games, this creates a natural season from September to June — perfect for poker in winter.",
    formatTitle: "Set the Tournament Format",
    formatText: "Keep the tournament format consistent throughout the season. Agree on starting chips, blind structure, and whether rebuys are allowed. Consistency makes the league fair and comparable.",
    tipLabel: "💡 Organization Tip",
    tipText: "Keep a results table with placements and points per player and game day. At the end of the season, everyone knows exactly where they stand. The",
    tipLinkText: "league feature of 7Mountain Poker",
    tipSuffix: " does this automatically.",
    step2Title: "Step 2: Choose a Point System",
    step2Intro: "The point system determines how much each placement is worth. There are three proven models:",
    model1Title: "Model 1: Standard Points",
    model1Desc: "Fixed points per placement. Simple, transparent, proven.",
    model1Note: "The gap between 1st and 2nd place (3 points) is intentionally larger than between lower places — a win should be clearly rewarded.",
    model2Title: "Model 2: ELO Rating",
    model2Desc: "Inspired by chess: Every player starts at 1500 points. After each tournament, points are redistributed based on expected vs. actual performance. A win against strong players earns more than against weaker ones.",
    model2Pro: "Advantage:",
    model2ProText: " Self-adjusting, considers opponent strength.",
    model2Con: "Disadvantage:",
    model2ConText: " Less intuitive, harder to explain.",
    model3Title: "Model 3: Weighted Points",
    model3Desc: "Like standard points, but recent tournaments count more than older ones. A decay factor ensures current form outweighs past achievements.",
    model3Pro: "Advantage:",
    model3ProText: " Rewards current performance, keeps standings dynamic.",
    model3Con: "Disadvantage:",
    model3ConText: " Early leading is less rewarded.",
    step3Title: "Step 3: Define Tiebreakers",
    step3Intro: "In case of equal points, you need clear rules. Recommended order:",
    tiebreakers: [
      { label: "Average placement", desc: " — Who performed better across all tournaments?" },
      { label: "Number of wins", desc: " — With equal average: Who won more often?" },
      { label: "Number of cashes", desc: " — Who finished in the money more often?" },
      { label: "Head-to-head", desc: " — Who beat the other more often?" },
      { label: "Most recent result", desc: " — Who performed better most recently?" },
    ],
    step4Title: "Step 4: Handle Guest Players",
    step4Intro: "Guests liven up the game, but they shouldn't distort the league standings. Two proven approaches:",
    guestA: "Mark guest players",
    guestADesc: " — Guests play along but don't appear in the overall standings. Their points go to no one.",
    guestB: "Minimum participation",
    guestBDesc: " — Only players with ≥50% participation rate appear in the final standings.",
    step5Title: "Step 5: Plan the Season Finale",
    step5Intro: "The last tournament of the season should be special:",
    finaleItems: [
      { icon: "🏆", label: "Double points", desc: " — The finale with double points for extra excitement." },
      { icon: "🎉", label: "League trophy", desc: " — A small cup or trophy for the league champion." },
      { icon: "📊", label: "Season review", desc: " — Show the final standings, statistics, and fun awards (most rebuys, most bubble finishes, etc.)." },
    ],
    step6Title: "Step 6: Digital Management",
    step6Intro: "Paper tracking and Excel spreadsheets work — until they don't. Once your league has more than 3–4 game days, a digital solution pays off:",
    digitalItems: [
      "Automatic point calculation after each tournament",
      "Results table with per-player statistics",
      "Head-to-head statistics",
      "QR code for sharing the standings",
      "Export as CSV or text (for WhatsApp)",
    ],
    digitalSuffix: "The league feature of 7Mountain Poker offers all of this — including 3 ranking algorithms, season management, guest player marking, point corrections, and TV display for the standings.",
    mistakesTitle: "Common Mistakes to Avoid",
    mistakes: [
      { label: "Overly complex point system", desc: "If it takes 5 minutes to explain the system, it's too complex. Start simple, expand later." },
      { label: "No fixed dates", desc: "'We'll play when everyone's available' means: You'll never play. Set a fixed day (e.g., 'First Friday of the month')." },
      { label: "Not tracking results", desc: "At the end of the season, everyone wants to know how they did. Track placements from day one." },
      { label: "No minimum participation rule", desc: "Someone shows up once, wins, and is the 'league leader'. Set a minimum participation of 50%." },
    ],
    exampleTitle: "Example: Our \"Mountain League\"",
    exampleIntro: "Here's a concrete example of what a well-functioning league looks like:",
    exampleData: [
      { label: "Players:", value: "8 regulars + 2–3 guests per evening" },
      { label: "Schedule:", value: "Every 1st Saturday of the month, 7 PM" },
      { label: "Format:", value: "Freezeout + 1 rebuy in levels 1–4" },
      { label: "Points:", value: "Standard (10/7/5/4/3/2/1)" },
      { label: "Season:", value: "September to June (10 game days)" },
      { label: "Finale:", value: "Double points" },
      { label: "Tiebreaker:", value: "Avg placement → Wins → Head-to-head" },
      { label: "Trophy:", value: "Traveling cup + group photo" },
    ],
    ctaTitle: "Create a League",
    ctaSubtitle: "Point system, game days, statistics — all in one app.",
    ctaButton: "Start League",
    allArticles: "All articles",
    nextArticle: "Next article",
  },
};

export default function PokerLigaOrganisierenContent() {
  const { locale, setLocale } = useLocale();
  const c = t[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubpageHeader locale={locale} setLocale={setLocale} backHref="/blog" backLabel={{ de: "← Blog", en: "← Blog" }} />
      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: "Poker Liga organisieren", href: "/blog/poker-liga-organisieren" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          {c.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald">{tag}</span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">{c.title}</h1>
        <p className="mt-4 text-muted">{c.date}</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">{c.intro}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.whyTitle}</h2>
          <p className="text-muted leading-relaxed">{c.whyIntro}</p>
          <ul className="space-y-2 text-muted">
            {c.whyItems.map((item) => (
              <li key={item.label} className="flex items-start gap-2">
                <span className="text-emerald">•</span>
                <span><strong className="text-foreground">{item.label}</strong> — {item.desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.step1Title}</h2>
          <p className="text-muted leading-relaxed">{c.step1Intro}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.rhythmTitle}</h3>
          <p className="text-muted leading-relaxed">{c.rhythmText}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.seasonTitle}</h3>
          <p className="text-muted leading-relaxed">{c.seasonText}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.formatTitle}</h3>
          <p className="text-muted leading-relaxed">{c.formatText}</p>
          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 mt-4">
            <p className="text-sm text-emerald font-semibold mb-2">{c.tipLabel}</p>
            <p className="text-sm text-muted">
              {c.tipText}
              <Link href="/features/liga" className="text-emerald hover:underline ml-1">{c.tipLinkText}</Link>
              {c.tipSuffix}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.step2Title}</h2>
          <p className="text-muted leading-relaxed">{c.step2Intro}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.model1Title}</h3>
          <p className="text-muted leading-relaxed">{c.model1Desc}</p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted/70"><th className="pb-2">{locale === "de" ? "Platz" : "Place"}</th><th className="pb-2">1.</th><th className="pb-2">2.</th><th className="pb-2">3.</th><th className="pb-2">4.</th><th className="pb-2">5.</th><th className="pb-2">6.</th><th className="pb-2">7.</th></tr></thead>
              <tbody className="text-muted">
                <tr><td className="py-1 font-medium text-foreground">{locale === "de" ? "Punkte" : "Points"}</td><td>10</td><td>7</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mt-2">{c.model1Note}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.model2Title}</h3>
          <p className="text-muted leading-relaxed">{c.model2Desc}</p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">{c.model2Pro}</strong>{c.model2ProText}<br />
            <strong className="text-foreground">{c.model2Con}</strong>{c.model2ConText}
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{c.model3Title}</h3>
          <p className="text-muted leading-relaxed">{c.model3Desc}</p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">{c.model3Pro}</strong>{c.model3ProText}<br />
            <strong className="text-foreground">{c.model3Con}</strong>{c.model3ConText}
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.step3Title}</h2>
          <p className="text-muted leading-relaxed">{c.step3Intro}</p>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            {c.tiebreakers.map((tb) => (
              <li key={tb.label}><strong className="text-foreground">{tb.label}</strong>{tb.desc}</li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.step4Title}</h2>
          <p className="text-muted leading-relaxed">{c.step4Intro}</p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2"><span className="text-emerald">A)</span> <span><strong className="text-foreground">{c.guestA}</strong>{c.guestADesc}</span></li>
            <li className="flex items-start gap-2"><span className="text-emerald">B)</span> <span><strong className="text-foreground">{c.guestB}</strong>{c.guestBDesc}</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.step5Title}</h2>
          <p className="text-muted leading-relaxed">{c.step5Intro}</p>
          <ul className="space-y-2 text-muted">
            {c.finaleItems.map((item) => (
              <li key={item.label} className="flex items-start gap-2">
                <span className="text-emerald">{item.icon}</span>
                <span><strong className="text-foreground">{item.label}</strong>{item.desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.step6Title}</h2>
          <p className="text-muted leading-relaxed">{c.step6Intro}</p>
          <ul className="space-y-2 text-muted">
            {c.digitalItems.map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-emerald">✓</span> {item}</li>
            ))}
          </ul>
          <p className="text-muted leading-relaxed">
            <Link href="/features/liga" className="text-emerald hover:underline">{c.digitalSuffix}</Link>
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.mistakesTitle}</h2>
          <div className="space-y-4">
            {c.mistakes.map((m) => (
              <div key={m.label} className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <p className="text-sm font-semibold text-red-400 mb-1">❌ {m.label}</p>
                <p className="text-sm text-muted">{m.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.exampleTitle}</h2>
          <p className="text-muted leading-relaxed">{c.exampleIntro}</p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6 space-y-3 text-sm text-muted">
            {c.exampleData.map((d) => (
              <p key={d.label}><strong className="text-foreground">{d.label}</strong> {d.value}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">{c.ctaTitle}</h3>
            <p className="text-muted mb-6">{c.ctaSubtitle}</p>
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
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4" /></svg>
            {c.allArticles}
          </Link>
          <Link href="/blog/icm-erklaert" className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold">
            {c.nextArticle}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
