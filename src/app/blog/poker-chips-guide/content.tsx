"use client";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    breadcrumb: "Poker Chips Guide",
    tag1: "Equipment",
    tag2: "Chips",
    tag3: "Anfänger",
    title: "Poker Chips Guide: Werte, Farben & Color-Up",
    meta: "22. März 2026 · 9 Min Lesezeit",
    intro:
      "Die richtigen Chips machen den Unterschied zwischen einem professionellen Poker-Erlebnis und einer chaotischen Zettelwirtschaft. Dieser Guide erklärt alles: Standard-Farben, Werte-Verteilung, wie viele Chips du brauchst und wann du ein Color-Up durchführen solltest.",
    h2Colors: "Standard Chip-Farben und Werte",
    colorsIntro:
      "Es gibt keinen offiziellen Standard, aber diese Farbzuordnung hat sich bei Home Games durchgesetzt:",
    thColor: "Farbe",
    thValue: "Üblicher Wert",
    thUsage: "Verwendung",
    cWhite: "Weiß",
    cWhiteVal: "25 / 1",
    cWhiteUse: "Niedrigster Wert, Start-Blinds",
    cRed: "Rot",
    cRedVal: "100 / 5",
    cRedUse: "Standard-Spielchip",
    cGreen: "Grün",
    cGreenVal: "500 / 25",
    cGreenUse: "Mittlere bis späte Blinds",
    cBlack: "Schwarz",
    cBlackVal: "1.000 / 100",
    cBlackUse: "Hohe Blinds, Deep Stacks",
    cBlue: "Blau",
    cBlueVal: "5.000 / 500",
    cBlueUse: "Spätphase, große Stacks",
    cPurple: "Lila/Violett",
    cPurpleVal: "10.000 / 1.000",
    cPurpleUse: "Nur bei Deep Stack Turnieren",
    h2HowMany: "Wie viele Chips pro Spieler?",
    howManyIntro:
      "Die Chip-Verteilung hängt vom Startstack und der Blindstruktur ab. Hier drei bewährte Setups:",
    h3SetupA: "Setup A: Turbo (5.000 Chips)",
    h3SetupB: "Setup B: Standard (10.000 Chips)",
    h3SetupC: "Setup C: Deep Stack (20.000 Chips)",
    thSetupColor: "Farbe",
    thSetupValue: "Wert",
    thSetupCount: "Anzahl",
    thSetupSum: "Summe",
    sWhite: "Weiß",
    sRed: "Rot",
    sGreen: "Grün",
    sBlack: "Schwarz",
    sBlue: "Blau",
    sTotal: "Gesamt",
    setupBNote:
      "Der blaue 5.000er-Chip kommt erst beim Color-Up ins Spiel — starte mit den anderen 4 Farben.",
    h2Total: "Wie viele Chips insgesamt kaufen?",
    totalIntro: "Die Formel ist einfach:",
    totalFormula: "Chips gesamt = (Spieler × Chips pro Spieler) + 20% Reserve",
    totalExample:
      "Für 8 Spieler mit Setup B (31 Chips/Spieler): 8 × 31 = 248, plus 20% Reserve = ",
    totalExampleStrong: "~300 Chips",
    totalExample2:
      ". Ein 300er- oder 500er-Chipkoffer deckt die meisten Home Games ab.",
    totalReserveLabel: "Reserve brauchst du für:",
    totalReserve:
      " Rebuys, Color-Ups (größere Chips einwechseln) und den einen Spieler, der seine Chips unter der Couch verliert.",
    h2ColorUp: "Color-Up: Wann und wie?",
    colorUpIntro1: "Ein ",
    colorUpStrong: "Color-Up",
    colorUpIntro2:
      ' (auch \u201EChip Race\u201C) entfernt die kleinste Chip-Denomination aus dem Spiel, wenn sie nicht mehr benötigt wird. Das hält den Tisch übersichtlich und sorgt dafür, dass Spieler nicht mit Bergen kleiner Chips hantieren.',
    h3When: "Wann color-uppen?",
    whenText1:
      "Faustregel: Entferne eine Chip-Farbe, wenn die ",
    whenStrong: "Blinds mehr als 4× den Chipwert",
    whenText2:
      " betragen. Beispiel: Weiße 25er-Chips werden entfernt, wenn die Blinds bei 100/200 oder höher sind.",
    thCuColor: "Chip-Farbe",
    thCuValue: "Wert",
    thCuBlinds: "Color-Up bei Blinds",
    cuWhite: "Weiß",
    cuRed: "Rot",
    cuGreen: "Grün",
    h3How: "Wie funktioniert das Color-Up?",
    cuStep1Label: "Pausen nutzen",
    cuStep1: "Color-Ups am besten in einer Turnierpause durchführen.",
    cuStep2Label: "Aufrunden",
    cuStep2:
      "Ungerade Restchips werden aufgerundet. Hat ein Spieler 3 weiße 25er (= 75), bekommt er einen roten 100er.",
    cuStep3Label: "Chip Race (optional)",
    cuStep3:
      "Bei professionellen Turnieren: Ungerade Chips werden per Chip Race (Kartenziehen) verteilt. Für Home Games ist Aufrunden einfacher.",
    cuStep4Label: "Einsammeln",
    cuStep4:
      "Alle entfernten Chips werden eingesammelt und zurück in die Reserve gelegt.",
    cuTipLabel: "💡 Timer-Tipp",
    cuTip1: "Der ",
    cuTipLink: "7Mountain Poker Timer",
    cuTip2:
      " kündigt Color-Ups automatisch an — per Sprache und Banner. Du definierst die Chip-Stückelung im Setup, und der Timer erinnert dich in der richtigen Pause.",
    h2Quality: "Chip-Qualität: Plastik vs. Clay",
    qualityIntro: "Es gibt drei Qualitätsstufen:",
    qPlasticTitle: "Plastik",
    qPlasticPrice: "ab 200 Chips",
    qPlastic:
      "Leicht, rutschen leicht, klingen billig. Für den Anfang okay, aber kein Casino-Feeling.",
    qCompositeTitle: "Composite / ABS",
    qCompositePrice: "ab 200 Chips",
    qComposite:
      "Guter Kompromiss: angenehmes Gewicht (11–14g), griffige Oberfläche, ordentliches Feeling. ",
    qCompositeStrong: "Empfehlung für Home Games.",
    qClayTitle: "Clay / Keramik",
    qClayPrice: "ab 200 Chips",
    qCite:
      "Casino-Qualität: perfektes Gewicht, Griffigkeit und Sound. Für Enthusiasten und Liga-Spieler.",
    h2Mistakes: "Häufige Fehler beim Chip-Setup",
    err1Title: "❌ Zu wenige Farben",
    err1: "Mit nur 2 Farben wird es spätestens bei Blinds über 500 unübersichtlich. Mindestens 3, besser 4–5 Farben.",
    err2Title: "❌ Blinds passen nicht zu Chips",
    err2: "Wenn dein kleinstes Chip 100 wert ist, können deine Start-Blinds nicht 25/50 sein. Chips und Blindstruktur müssen zusammenpassen.",
    err3Title: "❌ Color-Up vergessen",
    err3: "Ohne Color-Up stapeln sich kleine Chips zu Bergen. Das verlangsamt das Spiel und führt zu Fehlern beim Zählen.",
    ctaTitle: "Chip-Management im Timer",
    ctaDesc:
      "Definiere Chipwerte, erhalte automatische Color-Up-Erinnerungen und Kompatibilitätswarnungen.",
    ctaButton: "Timer öffnen",
    prevArticle: "Vorheriger Artikel",
    nextArticle: "Nächster Artikel",
  },
  en: {
    breadcrumb: "Poker Chips Guide",
    tag1: "Equipment",
    tag2: "Chips",
    tag3: "Beginner",
    title: "Poker Chips Guide: Values, Colors & Color-Up",
    meta: "March 22, 2026 · 9 min read",
    intro:
      "The right chips make the difference between a professional poker experience and a chaotic mess of IOUs. This guide covers everything: standard colors, value distribution, how many chips you need, and when to perform a color-up.",
    h2Colors: "Standard Chip Colors and Values",
    colorsIntro:
      "There is no official standard, but this color assignment has become the norm for home games:",
    thColor: "Color",
    thValue: "Common Value",
    thUsage: "Usage",
    cWhite: "White",
    cWhiteVal: "25 / 1",
    cWhiteUse: "Lowest value, starting blinds",
    cRed: "Red",
    cRedVal: "100 / 5",
    cRedUse: "Standard playing chip",
    cGreen: "Green",
    cGreenVal: "500 / 25",
    cGreenUse: "Mid to late blinds",
    cBlack: "Black",
    cBlackVal: "1,000 / 100",
    cBlackUse: "High blinds, deep stacks",
    cBlue: "Blue",
    cBlueVal: "5,000 / 500",
    cBlueUse: "Late stage, large stacks",
    cPurple: "Purple",
    cPurpleVal: "10,000 / 1,000",
    cPurpleUse: "Deep stack tournaments only",
    h2HowMany: "How Many Chips per Player?",
    howManyIntro:
      "The chip distribution depends on the starting stack and blind structure. Here are three proven setups:",
    h3SetupA: "Setup A: Turbo (5,000 Chips)",
    h3SetupB: "Setup B: Standard (10,000 Chips)",
    h3SetupC: "Setup C: Deep Stack (20,000 Chips)",
    thSetupColor: "Color",
    thSetupValue: "Value",
    thSetupCount: "Count",
    thSetupSum: "Total",
    sWhite: "White",
    sRed: "Red",
    sGreen: "Green",
    sBlack: "Black",
    sBlue: "Blue",
    sTotal: "Total",
    setupBNote:
      "The blue 5,000 chip only enters play during the color-up — start with the other 4 colors.",
    h2Total: "How Many Chips to Buy in Total?",
    totalIntro: "The formula is simple:",
    totalFormula: "Total chips = (Players × Chips per player) + 20% reserve",
    totalExample:
      "For 8 players with Setup B (31 chips/player): 8 × 31 = 248, plus 20% reserve = ",
    totalExampleStrong: "~300 chips",
    totalExample2:
      ". A 300 or 500 chip case covers most home games.",
    totalReserveLabel: "You need the reserve for:",
    totalReserve:
      " Rebuys, color-ups (exchanging for larger chips), and that one player who loses their chips under the couch.",
    h2ColorUp: "Color-Up: When and How?",
    colorUpIntro1: "A ",
    colorUpStrong: "color-up",
    colorUpIntro2:
      " (also called \"chip race\") removes the smallest chip denomination from play when it's no longer needed. This keeps the table tidy and prevents players from handling mountains of small chips.",
    h3When: "When to Color Up?",
    whenText1:
      "Rule of thumb: Remove a chip color when the ",
    whenStrong: "blinds exceed 4x the chip value",
    whenText2:
      ". Example: White 25-value chips are removed when blinds reach 100/200 or higher.",
    thCuColor: "Chip Color",
    thCuValue: "Value",
    thCuBlinds: "Color-Up at Blinds",
    cuWhite: "White",
    cuRed: "Red",
    cuGreen: "Green",
    h3How: "How Does the Color-Up Work?",
    cuStep1Label: "Use breaks",
    cuStep1: "Color-ups are best done during a tournament break.",
    cuStep2Label: "Round up",
    cuStep2:
      "Odd remaining chips are rounded up. If a player has 3 white 25-chips (= 75), they get one red 100-chip.",
    cuStep3Label: "Chip race (optional)",
    cuStep3:
      "In professional tournaments: Odd chips are distributed via chip race (drawing cards). For home games, rounding up is simpler.",
    cuStep4Label: "Collect",
    cuStep4:
      "All removed chips are collected and returned to the reserve.",
    cuTipLabel: "💡 Timer Tip",
    cuTip1: "The ",
    cuTipLink: "7Mountain Poker Timer",
    cuTip2:
      " announces color-ups automatically — via voice and banner. You define the chip denominations in the setup, and the timer reminds you at the right break.",
    h2Quality: "Chip Quality: Plastic vs. Clay",
    qualityIntro: "There are three quality tiers:",
    qPlasticTitle: "Plastic",
    qPlasticPrice: "from 200 chips",
    qPlastic:
      "Lightweight, slippery, cheap-sounding. Fine for getting started, but no casino feel.",
    qCompositeTitle: "Composite / ABS",
    qCompositePrice: "from 200 chips",
    qComposite:
      "Good compromise: comfortable weight (11–14g), textured surface, solid feel. ",
    qCompositeStrong: "Recommended for home games.",
    qClayTitle: "Clay / Ceramic",
    qClayPrice: "from 200 chips",
    qCite:
      "Casino quality: perfect weight, grip, and sound. For enthusiasts and league players.",
    h2Mistakes: "Common Chip Setup Mistakes",
    err1Title: "❌ Too few colors",
    err1: "With only 2 colors, things get confusing once blinds exceed 500. Use at least 3, ideally 4–5 colors.",
    err2Title: "❌ Blinds don't match chips",
    err2: "If your smallest chip is worth 100, your starting blinds can't be 25/50. Chips and blind structure must align.",
    err3Title: "❌ Forgetting the color-up",
    err3: "Without color-ups, small chips pile up into mountains. This slows down play and leads to counting errors.",
    ctaTitle: "Chip Management in the Timer",
    ctaDesc:
      "Define chip values, get automatic color-up reminders and compatibility warnings.",
    ctaButton: "Open Timer",
    prevArticle: "Previous article",
    nextArticle: "Next article",
  },
};

export default function PokerChipsGuideContent() {
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
          { name: c.breadcrumb, href: "/blog/poker-chips-guide" },
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
            {c.h2Colors}
          </h2>
          <p className="text-muted leading-relaxed">{c.colorsIntro}</p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  <th className="pb-2">{c.thColor}</th>
                  <th className="pb-2">{c.thValue}</th>
                  <th className="pb-2">{c.thUsage}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20">
                  <td className="py-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-white border border-gray-300 mr-2 align-middle"></span>{" "}
                    {c.cWhite}
                  </td>
                  <td>{c.cWhiteVal}</td>
                  <td>{c.cWhiteUse}</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-red-500 mr-2 align-middle"></span>{" "}
                    {c.cRed}
                  </td>
                  <td>{c.cRedVal}</td>
                  <td>{c.cRedUse}</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-green-500 mr-2 align-middle"></span>{" "}
                    {c.cGreen}
                  </td>
                  <td>{c.cGreenVal}</td>
                  <td>{c.cGreenUse}</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-gray-900 mr-2 align-middle"></span>{" "}
                    {c.cBlack}
                  </td>
                  <td>{c.cBlackVal}</td>
                  <td>{c.cBlackUse}</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-blue-500 mr-2 align-middle"></span>{" "}
                    {c.cBlue}
                  </td>
                  <td>{c.cBlueVal}</td>
                  <td>{c.cBlueUse}</td>
                </tr>
                <tr>
                  <td className="py-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-purple-500 mr-2 align-middle"></span>{" "}
                    {c.cPurple}
                  </td>
                  <td>{c.cPurpleVal}</td>
                  <td>{c.cPurpleUse}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2HowMany}
          </h2>
          <p className="text-muted leading-relaxed">{c.howManyIntro}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            {c.h3SetupA}
          </h3>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  <th className="pb-2">{c.thSetupColor}</th>
                  <th className="pb-2">{c.thSetupValue}</th>
                  <th className="pb-2">{c.thSetupCount}</th>
                  <th className="pb-2">{c.thSetupSum}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr>
                  <td className="py-1">{c.sWhite}</td>
                  <td>25</td>
                  <td>8</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sRed}</td>
                  <td>100</td>
                  <td>8</td>
                  <td>800</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sGreen}</td>
                  <td>500</td>
                  <td>4</td>
                  <td>2.000</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sBlack}</td>
                  <td>1.000</td>
                  <td>2</td>
                  <td>2.000</td>
                </tr>
                <tr className="font-semibold text-foreground">
                  <td className="py-1" colSpan={2}>
                    {c.sTotal}
                  </td>
                  <td>22</td>
                  <td>5.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            {c.h3SetupB}
          </h3>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  <th className="pb-2">{c.thSetupColor}</th>
                  <th className="pb-2">{c.thSetupValue}</th>
                  <th className="pb-2">{c.thSetupCount}</th>
                  <th className="pb-2">{c.thSetupSum}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr>
                  <td className="py-1">{c.sWhite}</td>
                  <td>25</td>
                  <td>10</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sRed}</td>
                  <td>100</td>
                  <td>10</td>
                  <td>1.000</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sGreen}</td>
                  <td>500</td>
                  <td>6</td>
                  <td>3.000</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sBlack}</td>
                  <td>1.000</td>
                  <td>4</td>
                  <td>4.000</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sBlue}</td>
                  <td>5.000</td>
                  <td>1</td>
                  <td>5.000</td>
                </tr>
                <tr className="font-semibold text-foreground">
                  <td className="py-1" colSpan={2}>
                    {c.sTotal}
                  </td>
                  <td>31</td>
                  <td>13.250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mt-2">{c.setupBNote}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            {c.h3SetupC}
          </h3>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  <th className="pb-2">{c.thSetupColor}</th>
                  <th className="pb-2">{c.thSetupValue}</th>
                  <th className="pb-2">{c.thSetupCount}</th>
                  <th className="pb-2">{c.thSetupSum}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr>
                  <td className="py-1">{c.sWhite}</td>
                  <td>25</td>
                  <td>12</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sRed}</td>
                  <td>100</td>
                  <td>12</td>
                  <td>1.200</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sGreen}</td>
                  <td>500</td>
                  <td>8</td>
                  <td>4.000</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sBlack}</td>
                  <td>1.000</td>
                  <td>6</td>
                  <td>6.000</td>
                </tr>
                <tr>
                  <td className="py-1">{c.sBlue}</td>
                  <td>5.000</td>
                  <td>2</td>
                  <td>10.000</td>
                </tr>
                <tr className="font-semibold text-foreground">
                  <td className="py-1" colSpan={2}>
                    {c.sTotal}
                  </td>
                  <td>40</td>
                  <td>21.500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2Total}
          </h2>
          <p className="text-muted leading-relaxed">{c.totalIntro}</p>
          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 text-center">
            <p className="text-lg font-mono text-foreground">
              {c.totalFormula}
            </p>
          </div>
          <p className="text-muted leading-relaxed mt-4">
            {c.totalExample}
            <strong className="text-foreground">
              {c.totalExampleStrong}
            </strong>
            {c.totalExample2}
          </p>
          <p className="text-muted leading-relaxed">
            <strong className="text-foreground">
              {c.totalReserveLabel}
            </strong>
            {c.totalReserve}
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2ColorUp}
          </h2>
          <p className="text-muted leading-relaxed">
            {c.colorUpIntro1}
            <strong className="text-foreground">{c.colorUpStrong}</strong>
            {c.colorUpIntro2}
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            {c.h3When}
          </h3>
          <p className="text-muted leading-relaxed">
            {c.whenText1}
            <strong className="text-foreground">{c.whenStrong}</strong>
            {c.whenText2}
          </p>
          <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70">
                  <th className="pb-2">{c.thCuColor}</th>
                  <th className="pb-2">{c.thCuValue}</th>
                  <th className="pb-2">{c.thCuBlinds}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20">
                  <td className="py-1">{c.cuWhite}</td>
                  <td>25</td>
                  <td>100/200</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-1">{c.cuRed}</td>
                  <td>100</td>
                  <td>500/1.000</td>
                </tr>
                <tr>
                  <td className="py-1">{c.cuGreen}</td>
                  <td>500</td>
                  <td>2.000/4.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
            {c.h3How}
          </h3>
          <ol className="space-y-2 text-muted list-decimal list-inside">
            <li>
              <strong className="text-foreground">{c.cuStep1Label}</strong> —{" "}
              {c.cuStep1}
            </li>
            <li>
              <strong className="text-foreground">{c.cuStep2Label}</strong> —{" "}
              {c.cuStep2}
            </li>
            <li>
              <strong className="text-foreground">{c.cuStep3Label}</strong> —{" "}
              {c.cuStep3}
            </li>
            <li>
              <strong className="text-foreground">{c.cuStep4Label}</strong> —{" "}
              {c.cuStep4}
            </li>
          </ol>

          <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-6 mt-4">
            <p className="text-sm text-emerald font-semibold mb-2">
              {c.cuTipLabel}
            </p>
            <p className="text-sm text-muted">
              {c.cuTip1}
              <Link
                href="https://7mountainpoker.vercel.app"
                className="text-emerald hover:underline"
              >
                {c.cuTipLink}
              </Link>
              {c.cuTip2}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2Quality}
          </h2>
          <p className="text-muted leading-relaxed">{c.qualityIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
              <h4 className="font-bold text-foreground mb-2">
                {c.qPlasticTitle}
              </h4>
              <p className="text-xs text-muted mb-2">{c.qPlasticPrice}</p>
              <p className="text-sm text-muted">{c.qPlastic}</p>
            </div>
            <div className="rounded-xl border border-emerald/30 bg-surface/40 p-4">
              <h4 className="font-bold text-emerald mb-2">
                {c.qCompositeTitle}
              </h4>
              <p className="text-xs text-muted mb-2">
                {c.qCompositePrice}
              </p>
              <p className="text-sm text-muted">
                {c.qComposite}
                <strong className="text-foreground">
                  {c.qCompositeStrong}
                </strong>
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface/40 p-4">
              <h4 className="font-bold text-foreground mb-2">
                {c.qClayTitle}
              </h4>
              <p className="text-xs text-muted mb-2">{c.qClayPrice}</p>
              <p className="text-sm text-muted">{c.qCite}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            {c.h2Mistakes}
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">
                {c.err1Title}
              </p>
              <p className="text-sm text-muted">{c.err1}</p>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">
                {c.err2Title}
              </p>
              <p className="text-sm text-muted">{c.err2}</p>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-sm font-semibold text-red-400 mb-1">
                {c.err3Title}
              </p>
              <p className="text-sm text-muted">{c.err3}</p>
            </div>
          </div>

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
            href="/blog/icm-erklaert"
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
            href="/blog/multi-table-turnier"
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
