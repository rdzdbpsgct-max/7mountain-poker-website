"use client";

import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import SubpageHeader from "@/components/SubpageHeader";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
};

const articles: Record<"de" | "en", Article[]> = {
  de: [
    {
      slug: "poker-turnier-planen",
      title: "Poker Turnier planen: Der komplette Guide für 2026",
      excerpt:
        "Von der Spieleranzahl über die Blindstruktur bis zur Platzierung — alles was du für ein perfekt organisiertes Home Game brauchst.",
      date: "22. März 2026",
      readTime: "12 Min",
      tags: ["Planung", "Home Game", "Anfänger"],
    },
    {
      slug: "perfekte-blindstruktur",
      title: "Die perfekte Blindstruktur für Home Games",
      excerpt:
        "Schnell, Standard oder Deep Stack? Wie du die Blindstruktur an Spieleranzahl, Dauer und Chipstückelung anpasst.",
      date: "22. März 2026",
      readTime: "8 Min",
      tags: ["Blindstruktur", "Strategie", "Tipps"],
    },
    {
      slug: "poker-timer-vergleich",
      title: "Poker Timer App Vergleich 2026: Die besten kostenlosen Timer",
      excerpt:
        "Wir vergleichen die beliebtesten Poker-Timer-Apps: Features, Funktionsumfang, Offline-Fähigkeit und Benutzerfreundlichkeit.",
      date: "22. März 2026",
      readTime: "10 Min",
      tags: ["Vergleich", "Apps", "Tools"],
    },
    {
      slug: "poker-liga-organisieren",
      title: "Poker Liga organisieren: Der komplette Guide",
      excerpt:
        "Punktesystem, Spielplan, Tiebreaker und Saison-Abschluss — so organisierst du eine faire und spannende Poker-Liga.",
      date: "22. März 2026",
      readTime: "13 Min",
      tags: ["Liga", "Organisation", "Fortgeschritten"],
    },
    {
      slug: "icm-erklaert",
      title: "ICM erklärt: Das Independent Chip Model verstehen",
      excerpt:
        "Was ist ICM? Wie funktioniert die Berechnung? Anwendung bei Deal-Verhandlungen und Bubble-Strategie — einfach erklärt.",
      date: "22. März 2026",
      readTime: "11 Min",
      tags: ["Strategie", "ICM", "Fortgeschritten"],
    },
    {
      slug: "poker-chips-guide",
      title: "Poker Chips Guide: Farben, Werte und Verteilung",
      excerpt:
        "Welche Chip-Farben haben welchen Wert? Wie viele Chips brauchst du? 3 bewährte Chip-Setups für Home Games.",
      date: "22. März 2026",
      readTime: "10 Min",
      tags: ["Equipment", "Chips", "Anfänger"],
    },
    {
      slug: "multi-table-turnier",
      title: "Multi-Table Turniere im Home Game: So funktioniert's",
      excerpt:
        "Ab 12 Spielern brauchst du mehrere Tische. Verteilung, Balancing, Tischauflösung und Final Table — der komplette Guide.",
      date: "22. März 2026",
      readTime: "12 Min",
      tags: ["Multi-Table", "Organisation", "Fortgeschritten"],
    },
  ],
  en: [
    {
      slug: "poker-turnier-planen",
      title: "Planning a Poker Tournament: The Complete 2026 Guide",
      excerpt:
        "From player count to blind structure to payouts — everything you need for a perfectly organized home game.",
      date: "March 22, 2026",
      readTime: "12 min",
      tags: ["Planning", "Home Game", "Beginner"],
    },
    {
      slug: "perfekte-blindstruktur",
      title: "The Perfect Blind Structure for Home Games",
      excerpt:
        "Fast, standard, or deep stack? How to tailor the blind structure to player count, duration, and chip denominations.",
      date: "March 22, 2026",
      readTime: "8 min",
      tags: ["Blind Structure", "Strategy", "Tips"],
    },
    {
      slug: "poker-timer-vergleich",
      title: "Poker Timer App Comparison 2026: The Best Free Timers",
      excerpt:
        "We compare the most popular poker timer apps: features, functionality, offline capability, and usability.",
      date: "March 22, 2026",
      readTime: "10 min",
      tags: ["Comparison", "Apps", "Tools"],
    },
    {
      slug: "poker-liga-organisieren",
      title: "How to Organize a Poker League: The Complete Guide",
      excerpt:
        "Point systems, schedules, tiebreakers, and season finales — how to run a fair and exciting poker league.",
      date: "March 22, 2026",
      readTime: "13 min",
      tags: ["League", "Organization", "Advanced"],
    },
    {
      slug: "icm-erklaert",
      title: "ICM Explained: Understanding the Independent Chip Model",
      excerpt:
        "What is ICM? How does the calculation work? Application in deal negotiations and bubble strategy — explained simply.",
      date: "March 22, 2026",
      readTime: "11 min",
      tags: ["Strategy", "ICM", "Advanced"],
    },
    {
      slug: "poker-chips-guide",
      title: "Poker Chips Guide: Colors, Values, and Distribution",
      excerpt:
        "Which chip colors have which values? How many chips do you need? 3 proven chip setups for home games.",
      date: "March 22, 2026",
      readTime: "10 min",
      tags: ["Equipment", "Chips", "Beginner"],
    },
    {
      slug: "multi-table-turnier",
      title: "Multi-Table Home Game Tournaments: How It Works",
      excerpt:
        "With 12+ players you need multiple tables. Distribution, balancing, table dissolution, and final table — the complete guide.",
      date: "March 22, 2026",
      readTime: "12 min",
      tags: ["Multi-Table", "Organization", "Advanced"],
    },
  ],
};

const t = {
  de: {
    heading: "Poker Ratgeber & Tipps",
    subtitle:
      "Guides, Tutorials und Vergleiche rund um Poker-Turniere, Blindstrukturen und Timer-Apps.",
    readTime: "Lesezeit",
    backToHome: "Zurück zur Startseite",
  },
  en: {
    heading: "Poker Guides & Tips",
    subtitle:
      "Guides, tutorials, and comparisons about poker tournaments, blind structures, and timer apps.",
    readTime: "read",
    backToHome: "Back to homepage",
  },
};

export default function BlogContent() {
  const { locale, setLocale } = useLocale();
  const c = t[locale];
  const arts = articles[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubpageHeader
        locale={locale}
        setLocale={setLocale}
        backHref="/"
        backLabel={{ de: "← Startseite", en: "← Homepage" }}
      />

      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }]} />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">
          Blog
        </span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black text-foreground">
          {c.heading}
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">{c.subtitle}</p>

        <div className="mt-12 space-y-8">
          {arts.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block rounded-2xl border border-border/50 bg-surface/40 p-6 sm:p-8 transition-all duration-300 hover:border-emerald/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald/10"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald/10 border border-emerald/20 px-3 py-0.5 text-xs text-emerald"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-emerald transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-muted leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted/70">
                <span>{article.date}</span>
                <span>·</span>
                <span>
                  {article.readTime} {c.readTime}
                </span>
              </div>
            </Link>
          ))}
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
            {c.backToHome}
          </Link>
        </div>
      </main>
    </div>
  );
}
