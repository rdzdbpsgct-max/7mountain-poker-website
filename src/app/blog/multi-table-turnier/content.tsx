"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    breadcrumb: "Multi-Table Turnier",
    tags: ["Multi-Table", "Organisation", "Fortgeschritten"],
    title: "Multi-Table Poker Turnier organisieren",
    meta: "22. März 2026 · 10 Min Lesezeit",
    intro:
      "Ab 11 Spielern wird es an einem Tisch eng. Die Lösung: Mehrere Tische. Aber Multi-Table-Turniere stellen besondere Herausforderungen: Wer sitzt wo? Wann werden Tische zusammengelegt? Wie bleibt es fair? Dieser Guide erklärt alles, was du als Turnierleiter wissen musst.",
    whenTitle: "Wann brauchst du mehrere Tische?",
    tableHeaders: ["Spieler", "Tische", "Pro Tisch"],
    tableRows: [
      ["2–10", "1", "Alle an einem Tisch"],
      ["11–18", "2", "5–9 Spieler"],
      ["19–27", "3", "6–9 Spieler"],
      ["28–36", "4", "7–9 Spieler"],
    ] as const,
    idealSizePre: "Die ",
    idealSizeStrong1: "ideale Tischgröße",
    idealSizeMid: " für Home Games liegt bei ",
    idealSizeStrong2: "7–9 Spielern",
    idealSizePost:
      ". Weniger als 5 pro Tisch macht keinen Spaß, mehr als 9 wird unpraktisch.",
    step1Title: "Schritt 1: Tischverteilung",
    step1TextPre: "Die Verteilung der Spieler auf Tische sollte ",
    step1TextStrong: "zufällig und gleichmäßig",
    step1TextPost: " sein. Am besten funktioniert Round-Robin:",
    rrLabel: "Round-Robin-Verteilung (14 Spieler, 2 Tische)",
    rrLines: [
      "Spieler 1 → Tisch 1, Sitz 1",
      "Spieler 2 → Tisch 2, Sitz 1",
      "Spieler 3 → Tisch 1, Sitz 2",
      "Spieler 4 → Tisch 2, Sitz 2",
      "... usw.",
    ],
    rrResult:
      "So hat jeder Tisch die gleiche Anzahl Spieler (7/7). Kein Tisch wird bevorzugt.",
    step2Title: "Schritt 2: Table Balancing",
    step2Text1:
      "Wenn Spieler eliminiert werden, entstehen Ungleichgewichte. Ein Tisch hat vielleicht noch 8 Spieler, der andere nur 5. Das ist unfair — der kleinere Tisch spielt öfter die Blinds und verliert schneller Chips.",
    step2RulePre: "",
    step2RuleStrong1: "Die Regel:",
    step2RuleMid:
      " Balanciere, sobald die Differenz zwischen dem größten und kleinsten Tisch ",
    step2RuleStrong2: "> 1 Spieler",
    step2RulePost: " beträgt.",
    step2WhoPre: "",
    step2WhoStrong: "Wer wird verschoben?",
    step2WhoPost:
      " Der Spieler auf dem höchsten besetzten Sitz am großen Tisch wird zum niedrigsten freien Sitz am kleinen Tisch gesetzt.",
    exampleTitle: "Beispiel:",
    exampleLines: [
      { text: "Tisch 1: 7 Spieler", highlight: false },
      { text: "Tisch 2: 5 Spieler", highlight: false },
      { text: "→ Differenz = 2 → ", highlight: false, suffix: "Balancing nötig" },
      {
        text: "→ Sitz 9 von Tisch 1 wechselt zu Sitz 3 (frei) an Tisch 2",
        highlight: false,
      },
      { text: "→ Ergebnis: 6 / 6 ✓", highlight: false },
    ],
    step3Title: "Schritt 3: Tischauflösung",
    step3Text1Pre: "Wenn ein Tisch zu wenige Spieler hat, wird er ",
    step3Text1Strong: "aufgelöst",
    step3Text1Post:
      ". Die verbliebenen Spieler werden gleichmäßig auf die aktiven Tische verteilt.",
    step3Text2Pre: "",
    step3Text2Strong: "Schwelle:",
    step3Text2Post:
      " Löse einen Tisch auf, wenn er weniger als 4–5 Spieler hat (oder wenn die Gesamtzahl an Spielern an einem einzigen Tisch Platz findet).",
    step3Steps: [
      "Tisch wird als \u201eaufgel\u00f6st\u201c markiert",
      "Verbleibende Spieler werden Round-Robin auf aktive Tische verteilt",
      "Gesperrte Sitze werden dabei übersprungen",
      "Alle Tisch-Wechsel werden dokumentiert und angekündigt",
    ],
    step4Title: "Schritt 4: Der Final Table",
    step4Text1Pre: "Der ",
    step4Text1Strong1: "Final Table",
    step4Text1Mid:
      " ist der Höhepunkt des Turniers — alle verbleibenden Spieler an einem Tisch. In der Regel wird der Final Table gebildet, wenn",
    step4Text1Strong2: " 9 oder weniger Spieler",
    step4Text1Post: " übrig sind (bei 9-er Tischen).",
    step4Text2:
      "Der Übergang zum Final Table verdient besondere Aufmerksamkeit:",
    ftPause: "Pause einlegen",
    ftPauseText:
      " — Gib den Spielern 10 Minuten zum Umsetzen und Durchatmen.",
    ftTv: "TV-Modus aktivieren",
    ftTvText:
      " — Wenn vorhanden, ist jetzt der perfekte Zeitpunkt für den ",
    ftTvLink: "TV-Modus",
    ftAnnounce: "Ankündigung",
    ftAnnounceText:
      ' — \u201EWillkommen am Final Table!\u201C Die Sprachansage von 7Mountain Poker macht das automatisch.',
    ftPhoto: "Foto",
    ftPhotoText: " — Final-Table-Foto für die Nachwelt.",
    specialTitle: "Sonderregeln für Multi-Table",
    hfhTitle: "Hand-for-Hand an der Bubble",
    hfhPre: "Wenn ein Spieler vor dem Geld, wird ",
    hfhStrong: "Hand-for-Hand",
    hfhPost:
      ' gespielt: Alle Tische spielen gleichzeitig eine Hand, dann wird pausiert, bis alle Tische fertig sind. So kann niemand die Bubble \u201Eaussitzen\u201C und hoffen, dass ein anderer Tisch zuerst jemanden eliminiert.',
    dealerTitle: "Dealer-Button bei Tischwechsel",
    dealerPre:
      "Ein Spieler, der den Tisch wechselt, kann am neuen Tisch in eine Position geraten, in der er die Blinds doppelt zahlen müsste. ",
    dealerStrong: "Faire Regel:",
    dealerPost:
      " Der Wechselspieler sitzt eine Hand aus, wenn er zwischen Small Blind und Button platziert wird.",
    seatLockTitle: "Seat Locking",
    seatLockText:
      "Manchmal willst du bestimmte Sitze sperren — zum Beispiel wenn ein Tisch physisch nur 8 Plätze hat, oder wenn ein Sitz kaputt ist. Gesperrte Sitze werden beim Balancing und bei der Verteilung automatisch übersprungen.",
    equipTitle: "Equipment für Multi-Table",
    equipItems: [
      { label: "2+ Tische", text: " — Klapptische, Pokertische oder große Esstische." },
      { label: "2 Kartendecks pro Tisch", text: " — Eins im Spiel, eins wird gemischt." },
      { label: "Dealer-Button pro Tisch", text: " — 7Mountain Poker trackt den Dealer automatisch pro Tisch." },
      { label: "Tischnummern", text: " — Einfache Schilder (Tisch 1, Tisch 2) reichen aus." },
    ],
    equipTimerLabel: "Timer sichtbar für alle",
    equipTimerPre: " — Ein großer Bildschirm mit ",
    equipTimerLink: "TV-Modus",
    equipTimerPost: ", oder ein Tablet pro Tisch.",
    digitalTitle: "Digitale Multi-Table-Verwaltung",
    digitalText:
      "Bei einem einzelnen Tisch kann man alles im Kopf behalten. Bei mehreren Tischen wird es ohne Tool schnell chaotisch. 7Mountain Poker unterstützt Multi-Table nativ:",
    digitalItems: [
      "Automatische Spielerverteilung (Round-Robin)",
      "Auto-Balancing bei Elimination (max ±1 Differenz)",
      "Tischauflösung mit automatischer Umverteilung",
      "Final-Table-Erkennung und Zusammenlegung",
      "Sprachansagen bei Tischwechsel und Auflösung",
      "Move-Log mit Quell-/Zieltisch und Sitzplatz",
      "Seat-Level-Tracking (kein Spieler geht verloren)",
    ],
    checklistTitle: "Ablauf-Checkliste",
    checklistItems: [
      "Tische und Stühle aufstellen",
      "Kartendecks und Dealer-Buttons verteilen",
      "Spieler im Timer eintragen",
      "Multi-Table-Modus aktivieren (Tischanzahl, Sitze)",
      '\u201EVerteilen\u201C drücken \u2192 Spieler werden zugewiesen',
      "Tischnummern aushängen",
      "Timer starten — Balancing + Auflösung laufen automatisch",
      "Bei Tischwechsel: Spieler informieren (Sprachansage)",
      "Final Table: Pause, Foto, weiter geht\u2019s!",
    ],
    ctaTitle: "Multi-Table-Turnier starten",
    ctaText:
      "Automatische Verteilung, Balancing und Tischauflösung inklusive.",
    ctaButton: "Turnier starten",
    prevArticle: "Vorheriger Artikel",
    allArticles: "Alle Artikel",
  },
  en: {
    breadcrumb: "Multi-Table Tournament",
    tags: ["Multi-Table", "Organization", "Advanced"],
    title: "How to Organize a Multi-Table Poker Tournament",
    meta: "March 22, 2026 · 10 min read",
    intro:
      "Once you have 11 or more players, a single table gets crowded. The solution: multiple tables. But multi-table tournaments come with unique challenges: Who sits where? When do you merge tables? How do you keep things fair? This guide covers everything you need to know as a tournament director.",
    whenTitle: "When do you need multiple tables?",
    tableHeaders: ["Players", "Tables", "Per Table"],
    tableRows: [
      ["2–10", "1", "All at one table"],
      ["11–18", "2", "5–9 players"],
      ["19–27", "3", "6–9 players"],
      ["28–36", "4", "7–9 players"],
    ] as const,
    idealSizePre: "The ",
    idealSizeStrong1: "ideal table size",
    idealSizeMid: " for home games is ",
    idealSizeStrong2: "7–9 players",
    idealSizePost:
      ". Fewer than 5 per table is no fun, more than 9 becomes impractical.",
    step1Title: "Step 1: Table Distribution",
    step1TextPre: "Player distribution across tables should be ",
    step1TextStrong: "random and even",
    step1TextPost: ". Round-robin works best:",
    rrLabel: "Round-Robin Distribution (14 players, 2 tables)",
    rrLines: [
      "Player 1 → Table 1, Seat 1",
      "Player 2 → Table 2, Seat 1",
      "Player 3 → Table 1, Seat 2",
      "Player 4 → Table 2, Seat 2",
      "... etc.",
    ],
    rrResult:
      "This way each table has the same number of players (7/7). No table gets an advantage.",
    step2Title: "Step 2: Table Balancing",
    step2Text1:
      "As players get eliminated, imbalances arise. One table might still have 8 players while the other has only 5. That\u2019s unfair — the smaller table plays the blinds more often and loses chips faster.",
    step2RulePre: "",
    step2RuleStrong1: "The rule:",
    step2RuleMid:
      " Rebalance whenever the difference between the largest and smallest table is ",
    step2RuleStrong2: "> 1 player",
    step2RulePost: ".",
    step2WhoPre: "",
    step2WhoStrong: "Who gets moved?",
    step2WhoPost:
      " The player in the highest occupied seat at the larger table moves to the lowest open seat at the smaller table.",
    exampleTitle: "Example:",
    exampleLines: [
      { text: "Table 1: 7 players", highlight: false },
      { text: "Table 2: 5 players", highlight: false },
      { text: "→ Difference = 2 → ", highlight: false, suffix: "Balancing required" },
      {
        text: "→ Seat 9 from Table 1 moves to Seat 3 (open) at Table 2",
        highlight: false,
      },
      { text: "→ Result: 6 / 6 ✓", highlight: false },
    ],
    step3Title: "Step 3: Table Dissolution",
    step3Text1Pre: "When a table has too few players, it gets ",
    step3Text1Strong: "dissolved",
    step3Text1Post:
      ". The remaining players are distributed evenly across the active tables.",
    step3Text2Pre: "",
    step3Text2Strong: "Threshold:",
    step3Text2Post:
      " Dissolve a table when it has fewer than 4–5 players (or when the total number of players fits at a single table).",
    step3Steps: [
      "Table is marked as \u201cdissolved\u201d",
      "Remaining players are distributed round-robin to active tables",
      "Locked seats are skipped in the process",
      "All table moves are documented and announced",
    ],
    step4Title: "Step 4: The Final Table",
    step4Text1Pre: "The ",
    step4Text1Strong1: "Final Table",
    step4Text1Mid:
      " is the highlight of the tournament — all remaining players at one table. Typically, the final table is formed when",
    step4Text1Strong2: " 9 or fewer players",
    step4Text1Post: " remain (at 9-seat tables).",
    step4Text2:
      "The transition to the final table deserves special attention:",
    ftPause: "Take a break",
    ftPauseText:
      " — Give players 10 minutes to move seats and take a breather.",
    ftTv: "Activate TV mode",
    ftTvText: " — If available, now is the perfect time for ",
    ftTvLink: "TV mode",
    ftAnnounce: "Announcement",
    ftAnnounceText:
      " — \u201cWelcome to the Final Table!\u201d 7Mountain Poker\u2019s voice announcements handle this automatically.",
    ftPhoto: "Photo",
    ftPhotoText: " — Take a final table photo for posterity.",
    specialTitle: "Special Rules for Multi-Table",
    hfhTitle: "Hand-for-Hand at the Bubble",
    hfhPre: "When one elimination away from the money, ",
    hfhStrong: "hand-for-hand",
    hfhPost:
      " play begins: All tables play one hand simultaneously, then pause until every table has finished. This prevents anyone from stalling at the bubble hoping another table eliminates someone first.",
    dealerTitle: "Dealer Button on Table Changes",
    dealerPre:
      "A player who changes tables may end up in a position where they would pay the blinds twice. ",
    dealerStrong: "Fair rule:",
    dealerPost:
      " The transferred player sits out one hand if placed between the small blind and the button.",
    seatLockTitle: "Seat Locking",
    seatLockText:
      "Sometimes you want to lock certain seats — for example when a table physically only has 8 spots, or when a seat is broken. Locked seats are automatically skipped during balancing and distribution.",
    equipTitle: "Equipment for Multi-Table",
    equipItems: [
      { label: "2+ tables", text: " — Folding tables, poker tables, or large dining tables." },
      { label: "2 card decks per table", text: " — One in play, one being shuffled." },
      { label: "Dealer button per table", text: " — 7Mountain Poker tracks the dealer automatically per table." },
      { label: "Table numbers", text: " — Simple signs (Table 1, Table 2) are enough." },
    ],
    equipTimerLabel: "Timer visible for all",
    equipTimerPre: " — A large screen with ",
    equipTimerLink: "TV mode",
    equipTimerPost: ", or a tablet per table.",
    digitalTitle: "Digital Multi-Table Management",
    digitalText:
      "With a single table you can keep track of everything in your head. With multiple tables, it quickly gets chaotic without a tool. 7Mountain Poker supports multi-table natively:",
    digitalItems: [
      "Automatic player distribution (round-robin)",
      "Auto-balancing on elimination (max \u00b11 difference)",
      "Table dissolution with automatic redistribution",
      "Final table detection and merging",
      "Voice announcements for table changes and dissolution",
      "Move log with source/destination table and seat",
      "Seat-level tracking (no player gets lost)",
    ],
    checklistTitle: "Step-by-Step Checklist",
    checklistItems: [
      "Set up tables and chairs",
      "Distribute card decks and dealer buttons",
      "Enter players in the timer",
      "Activate multi-table mode (table count, seats)",
      "Press \u201cDistribute\u201d → players get assigned",
      "Post table numbers",
      "Start the timer — balancing + dissolution run automatically",
      "On table changes: inform players (voice announcement)",
      "Final table: break, photo, let\u2019s go!",
    ],
    ctaTitle: "Start a Multi-Table Tournament",
    ctaText:
      "Automatic distribution, balancing, and table dissolution included.",
    ctaButton: "Start tournament",
    prevArticle: "Previous article",
    allArticles: "All articles",
  },
};

export default function MultiTableTurnierContent() {
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
          { name: c.breadcrumb, href: "/blog/multi-table-turnier" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-4">
          {c.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
          {c.title}
        </h1>
        <p className="mt-4 text-muted">{c.meta}</p>

        <div className="mt-12 space-y-8">
          <p className="text-lg text-muted leading-relaxed">{c.intro}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.whenTitle}
          </h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  {c.tableHeaders.map((h) => (
                    <th key={h} className="pb-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-muted">
                {c.tableRows.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      i < c.tableRows.length - 1
                        ? "border-b border-border/20"
                        : ""
                    }
                  >
                    <td
                      className={`py-1 ${i === 1 ? "font-medium text-foreground" : ""}`}
                    >
                      {row[0]}
                    </td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted leading-relaxed mt-4">
            {c.idealSizePre}
            <strong className="text-foreground">{c.idealSizeStrong1}</strong>
            {c.idealSizeMid}
            <strong className="text-foreground">{c.idealSizeStrong2}</strong>
            {c.idealSizePost}
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.step1Title}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.step1TextPre}
            <strong className="text-foreground">{c.step1TextStrong}</strong>
            {c.step1TextPost}
          </p>
          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6">
            <p className="text-sm text-emerald font-semibold mb-3">
              {c.rrLabel}
            </p>
            <p className="text-sm text-muted font-mono">
              {c.rrLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < c.rrLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <p className="text-sm text-muted mt-3">{c.rrResult}</p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.step2Title}
          </h2>
          <p className="text-muted leading-relaxed">{c.step2Text1}</p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">{c.step2RuleStrong1}</strong>
            {c.step2RuleMid}
            <strong className="text-foreground">{c.step2RuleStrong2}</strong>
            {c.step2RulePost}
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">{c.step2WhoStrong}</strong>
            {c.step2WhoPost}
          </p>

          <div className="rounded-xl border border-border/50 bg-surface/40 p-5 mt-4">
            <h4 className="font-bold text-foreground mb-3">
              {c.exampleTitle}
            </h4>
            <p className="text-sm text-muted">
              {c.exampleLines.map((line, i) => (
                <span key={i}>
                  {line.text}
                  {line.suffix && (
                    <span className="text-emerald font-semibold">
                      {line.suffix}
                    </span>
                  )}
                  {i < c.exampleLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.step3Title}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.step3Text1Pre}
            <strong className="text-foreground">{c.step3Text1Strong}</strong>
            {c.step3Text1Post}
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">{c.step3Text2Strong}</strong>
            {c.step3Text2Post}
          </p>
          <ul className="space-y-2 text-muted">
            {c.step3Steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald">{i + 1}.</span> {step}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.step4Title}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.step4Text1Pre}
            <strong className="text-foreground">{c.step4Text1Strong1}</strong>
            {c.step4Text1Mid}
            <strong className="text-foreground">{c.step4Text1Strong2}</strong>
            {c.step4Text1Post}
          </p>
          <p className="text-muted leading-relaxed">{c.step4Text2}</p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald">🏆</span>{" "}
              <span>
                <strong className="text-foreground">{c.ftPause}</strong>
                {c.ftPauseText}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">📺</span>{" "}
              <span>
                <strong className="text-foreground">{c.ftTv}</strong>
                {c.ftTvText}
                <Link
                  href="/features/tv-modus"
                  className="text-emerald hover:underline"
                >
                  {c.ftTvLink}
                </Link>
                .
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">🎙️</span>{" "}
              <span>
                <strong className="text-foreground">{c.ftAnnounce}</strong>
                {c.ftAnnounceText}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">📸</span>{" "}
              <span>
                <strong className="text-foreground">{c.ftPhoto}</strong>
                {c.ftPhotoText}
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.specialTitle}
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            {c.hfhTitle}
          </h3>
          <p className="text-muted leading-relaxed">
            {c.hfhPre}
            <strong className="text-foreground">{c.hfhStrong}</strong>
            {c.hfhPost}
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            {c.dealerTitle}
          </h3>
          <p className="text-muted leading-relaxed">
            {c.dealerPre}
            <strong className="text-foreground">{c.dealerStrong}</strong>
            {c.dealerPost}
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            {c.seatLockTitle}
          </h3>
          <p className="text-muted leading-relaxed">{c.seatLockText}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.equipTitle}
          </h2>
          <ul className="space-y-2 text-muted">
            {c.equipItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald">✓</span>{" "}
                <span>
                  <strong className="text-foreground">{item.label}</strong>
                  {item.text}
                </span>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <span className="text-emerald">✓</span>{" "}
              <span>
                <strong className="text-foreground">
                  {c.equipTimerLabel}
                </strong>
                {c.equipTimerPre}
                <Link
                  href="/features/tv-modus"
                  className="text-emerald hover:underline"
                >
                  {c.equipTimerLink}
                </Link>
                {c.equipTimerPost}
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.digitalTitle}
          </h2>
          <p className="text-muted leading-relaxed">{c.digitalText}</p>
          <ul className="space-y-2 text-muted">
            {c.digitalItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald">•</span> {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.checklistTitle}
          </h2>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-6 space-y-2 text-sm text-muted">
            {c.checklistItems.map((item, i) => (
              <p key={i} className="flex items-start gap-2">
                <span className="text-emerald">☐</span> {item}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {c.ctaTitle}
            </h3>
            <p className="text-muted mb-6">{c.ctaText}</p>
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
            href="/blog/poker-chips-guide"
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
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald hover:underline font-semibold"
          >
            {c.allArticles}
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
