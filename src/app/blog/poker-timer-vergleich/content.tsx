"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const t = {
  de: {
    tag1: "Vergleich",
    tag2: "Apps",
    title: "Poker Timer App Vergleich 2026",
    meta: "22. März 2026 · 10 Min Lesezeit",
    intro:
      "Es gibt dutzende Poker-Timer-Apps — aber welche ist die richtige für dein Home Game? Wir vergleichen die beliebtesten Optionen nach Features, Funktionsumfang, Offline-Fähigkeit und Benutzerfreundlichkeit.",
    h2_must: "Was ein guter Poker Timer können muss",
    pMust: "Mindestens sollte jede Timer-App diese Basisfunktionen bieten:",
    must1: "Konfigurierbarer Countdown mit Blind-Levels",
    must2: "Automatische Level-Erhöhung",
    must3: "Pausen-Management",
    must4: "Akustische Signale bei Level-Wechsel",
    must5: "Spielerverwaltung",
    pBeyond: (
      <>
        Die Frage ist: Was bieten die Apps <em>darüber hinaus</em>?
      </>
    ),
    h2_compare: "Der Vergleich",
    thFeature: "Feature",
    th7M: "7Mountain",
    thBlinds: "Blinds Are Up",
    thPTP: "Poker Timer Pro",
    rowAccess: "Zugang",
    r7mAccess: "Kostenlos",
    rBaAccess: "Kostenpflichtig",
    rPtAccess: "Teilweise kostenlos",
    rowPlatform: "Plattform",
    r7mPlatform: "Web (PWA)",
    rBaPlatform: "iOS/Android",
    rPtPlatform: "iOS/Android",
    rowOffline: "Offline",
    r7mOffline: "✓ Voll",
    rowTV: "TV-Modus",
    r7mTV: "✓ 4 Layouts",
    rBaTV: "✓ Basic",
    rowRemote: "Fernbedienung",
    r7mRemote: "✓ QR-Scan",
    rowVoice: "Sprachansagen",
    r7mVoice: "590 MP3s",
    rBaVoice: "Beeps",
    rPtVoice: "TTS",
    rowLeague: "Liga-System",
    r7mLeague: "✓ Voll",
    rPtLeague: "Einfach",
    rowICM: "ICM-Rechner",
    rowMulti: "Multi-Table",
    rowSignup: "Anmeldung nötig",
    r7mSignup: "Nein",
    rBaSignup: "Nein",
    rPtSignup: "Ja",
    h2_7m: "7Mountain Poker: Der Allrounder",
    p7m: (
      <>
        Als <strong className="text-foreground">Progressive Web App (PWA)</strong> läuft 7Mountain
        Poker auf jedem Gerät mit Browser — kein App-Store-Download nötig. Die App bietet den größten
        Funktionsumfang aller kostenlosen Timer:
      </>
    ),
    feat1: (
      <>
        <Link href="/features/tv-modus" className="text-emerald hover:underline">
          4 TV-Display-Layouts
        </Link>{" "}
        mit 8 rotierenden Info-Screens
      </>
    ),
    feat2: (
      <>
        <Link href="/features/fernbedienung" className="text-emerald hover:underline">
          Smartphone-Fernbedienung
        </Link>{" "}
        via QR-Code (WebRTC)
      </>
    ),
    feat3: "590 professionelle ElevenLabs-Sprachansagen (DE + EN)",
    feat4: (
      <>
        <Link href="/features/liga" className="text-emerald hover:underline">
          Komplettes Liga-System
        </Link>{" "}
        mit ELO-Rating und Head-to-Head
      </>
    ),
    feat5: (
      <>
        <Link href="/features/icm-rechner" className="text-emerald hover:underline">
          ICM-Rechner
        </Link>{" "}
        für faire Deal-Verhandlungen
      </>
    ),
    feat6: (
      <>
        <Link href="/features/blindstruktur" className="text-emerald hover:underline">
          Blindstruktur-Generator
        </Link>{" "}
        mit 3 Geschwindigkeiten
      </>
    ),
    h2_blinds: "Blinds Are Up: Der Klassiker",
    pBlinds:
      "Eine solide native App mit gutem UI-Design. Stärken sind die einfache Bedienung und der Multi-Table-Support. Schwächen: Keine Fernbedienung, kein Liga-System, kostenpflichtig.",
    h2_ptp: "Poker Timer Pro: Der Nische-Player",
    pPtp:
      "Fokus auf mobile Nutzung mit einfacher Spielerverwaltung. Die kostenlose Version ist stark eingeschränkt, die Pro-Version erfordert ein Abo. Kein TV-Modus, keine Fernbedienung.",
    h2_conclusion: "Fazit",
    pConclusion: (
      <>
        Für Home Games mit Anspruch an{" "}
        <strong className="text-foreground">
          Liga-Tracking, TV-Display und professionelle Sprachansagen
        </strong>{" "}
        gibt es aktuell keine bessere kostenlose Alternative als 7Mountain Poker. Die Tatsache, dass
        keine Installation oder Anmeldung nötig ist, macht den Einstieg besonders einfach.
      </>
    ),
    ctaTitle: "Selbst überzeugen",
    ctaSub: "Kostenlos, ohne Anmeldung, sofort einsatzbereit.",
    ctaButton: "7Mountain Poker starten",
    prevArticle: "Vorheriger Artikel",
    nextArticle: "Nächster Artikel",
  },
  en: {
    tag1: "Comparison",
    tag2: "Apps",
    title: "Poker Timer App Comparison 2026",
    meta: "March 22, 2026 · 10 min read",
    intro:
      "There are dozens of poker timer apps — but which one is right for your home game? We compare the most popular options by features, functionality, offline capability, and ease of use.",
    h2_must: "What a Good Poker Timer Needs",
    pMust: "At minimum, every timer app should offer these basic features:",
    must1: "Configurable countdown with blind levels",
    must2: "Automatic level progression",
    must3: "Break management",
    must4: "Audio alerts on level changes",
    must5: "Player management",
    pBeyond: (
      <>
        The question is: What do the apps offer <em>beyond that</em>?
      </>
    ),
    h2_compare: "The Comparison",
    thFeature: "Feature",
    th7M: "7Mountain",
    thBlinds: "Blinds Are Up",
    thPTP: "Poker Timer Pro",
    rowAccess: "Access",
    r7mAccess: "Free",
    rBaAccess: "Paid",
    rPtAccess: "Partially free",
    rowPlatform: "Platform",
    r7mPlatform: "Web (PWA)",
    rBaPlatform: "iOS/Android",
    rPtPlatform: "iOS/Android",
    rowOffline: "Offline",
    r7mOffline: "✓ Full",
    rowTV: "TV Mode",
    r7mTV: "✓ 4 Layouts",
    rBaTV: "✓ Basic",
    rowRemote: "Remote Control",
    r7mRemote: "✓ QR Scan",
    rowVoice: "Voice Announcements",
    r7mVoice: "590 MP3s",
    rBaVoice: "Beeps",
    rPtVoice: "TTS",
    rowLeague: "League System",
    r7mLeague: "✓ Full",
    rPtLeague: "Basic",
    rowICM: "ICM Calculator",
    rowMulti: "Multi-Table",
    rowSignup: "Sign-up Required",
    r7mSignup: "No",
    rBaSignup: "No",
    rPtSignup: "Yes",
    h2_7m: "7Mountain Poker: The All-Rounder",
    p7m: (
      <>
        As a <strong className="text-foreground">Progressive Web App (PWA)</strong>, 7Mountain Poker
        runs on any device with a browser — no app store download needed. The app offers the most
        comprehensive feature set of all free timers:
      </>
    ),
    feat1: (
      <>
        <Link href="/features/tv-modus" className="text-emerald hover:underline">
          4 TV display layouts
        </Link>{" "}
        with 8 rotating info screens
      </>
    ),
    feat2: (
      <>
        <Link href="/features/fernbedienung" className="text-emerald hover:underline">
          Smartphone remote control
        </Link>{" "}
        via QR code (WebRTC)
      </>
    ),
    feat3: "590 professional ElevenLabs voice announcements (DE + EN)",
    feat4: (
      <>
        <Link href="/features/liga" className="text-emerald hover:underline">
          Complete league system
        </Link>{" "}
        with ELO rating and head-to-head
      </>
    ),
    feat5: (
      <>
        <Link href="/features/icm-rechner" className="text-emerald hover:underline">
          ICM calculator
        </Link>{" "}
        for fair deal negotiations
      </>
    ),
    feat6: (
      <>
        <Link href="/features/blindstruktur" className="text-emerald hover:underline">
          Blind structure generator
        </Link>{" "}
        with 3 speeds
      </>
    ),
    h2_blinds: "Blinds Are Up: The Classic",
    pBlinds:
      "A solid native app with good UI design. Strengths are its ease of use and multi-table support. Weaknesses: No remote control, no league system, paid.",
    h2_ptp: "Poker Timer Pro: The Niche Player",
    pPtp:
      "Focused on mobile use with simple player management. The free version is heavily limited, the Pro version requires a subscription. No TV mode, no remote control.",
    h2_conclusion: "Conclusion",
    pConclusion: (
      <>
        For home games that demand{" "}
        <strong className="text-foreground">
          league tracking, TV display, and professional voice announcements
        </strong>
        , there is currently no better free alternative than 7Mountain Poker. The fact that no
        installation or sign-up is required makes getting started particularly easy.
      </>
    ),
    ctaTitle: "See for yourself",
    ctaSub: "Free, no sign-up, ready to use instantly.",
    ctaButton: "Launch 7Mountain Poker",
    prevArticle: "Previous article",
    nextArticle: "Next article",
  },
};

export default function PokerTimerVergleichContent() {
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
          { name: "Poker Timer Vergleich", href: "/blog/poker-timer-vergleich" },
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

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_must}</h2>
          <p className="text-muted leading-relaxed">{c.pMust}</p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.must1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.must2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.must3}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.must4}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&#x2713;</span> {c.must5}
            </li>
          </ul>
          <p className="text-muted leading-relaxed">{c.pBeyond}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_compare}</h2>

          <div className="rounded-xl border border-border/50 bg-surface/40 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted/70 border-b border-border/30">
                  <th className="p-3">{c.thFeature}</th>
                  <th className="p-3 text-emerald">{c.th7M}</th>
                  <th className="p-3">{c.thBlinds}</th>
                  <th className="p-3">{c.thPTP}</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowAccess}</td>
                  <td className="p-3 text-emerald">{c.r7mAccess}</td>
                  <td className="p-3">{c.rBaAccess}</td>
                  <td className="p-3">{c.rPtAccess}</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowPlatform}</td>
                  <td className="p-3 text-emerald">{c.r7mPlatform}</td>
                  <td className="p-3">{c.rBaPlatform}</td>
                  <td className="p-3">{c.rPtPlatform}</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowOffline}</td>
                  <td className="p-3 text-emerald">{c.r7mOffline}</td>
                  <td className="p-3">&#x2713;</td>
                  <td className="p-3">&#x2713;</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowTV}</td>
                  <td className="p-3 text-emerald">{c.r7mTV}</td>
                  <td className="p-3">{c.rBaTV}</td>
                  <td className="p-3">&#x2717;</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowRemote}</td>
                  <td className="p-3 text-emerald">{c.r7mRemote}</td>
                  <td className="p-3">&#x2717;</td>
                  <td className="p-3">&#x2717;</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowVoice}</td>
                  <td className="p-3 text-emerald">{c.r7mVoice}</td>
                  <td className="p-3">{c.rBaVoice}</td>
                  <td className="p-3">{c.rPtVoice}</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowLeague}</td>
                  <td className="p-3 text-emerald">{c.r7mLeague}</td>
                  <td className="p-3">&#x2717;</td>
                  <td className="p-3">{c.rPtLeague}</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowICM}</td>
                  <td className="p-3 text-emerald">&#x2713;</td>
                  <td className="p-3">&#x2717;</td>
                  <td className="p-3">&#x2717;</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-medium text-foreground">{c.rowMulti}</td>
                  <td className="p-3 text-emerald">&#x2713;</td>
                  <td className="p-3">&#x2713;</td>
                  <td className="p-3">&#x2717;</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">{c.rowSignup}</td>
                  <td className="p-3 text-emerald">{c.r7mSignup}</td>
                  <td className="p-3">{c.rBaSignup}</td>
                  <td className="p-3">{c.rPtSignup}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_7m}</h2>
          <p className="text-muted leading-relaxed">{c.p7m}</p>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.feat1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.feat2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.feat3}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.feat4}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.feat5}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald">&bull;</span> {c.feat6}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_blinds}</h2>
          <p className="text-muted leading-relaxed">{c.pBlinds}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_ptp}</h2>
          <p className="text-muted leading-relaxed">{c.pPtp}</p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{c.h2_conclusion}</h2>
          <p className="text-muted leading-relaxed">{c.pConclusion}</p>

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
            href="/blog/perfekte-blindstruktur"
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
            href="/blog/poker-liga-organisieren"
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
