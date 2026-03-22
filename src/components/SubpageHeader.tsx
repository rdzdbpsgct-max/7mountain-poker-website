"use client";

import Link from "next/link";
import type { Locale } from "@/hooks/useLocale";

type Props = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  backHref?: string;
  backLabel?: { de: string; en: string };
};

export default function SubpageHeader({
  locale,
  setLocale,
  backHref = "/#features",
  backLabel = { de: "← Alle Features", en: "← All Features" },
}: Props) {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-foreground hover:text-emerald transition-colors"
        >
          ♠ ♥ <span className="font-black">7Mountain Poker</span> ♦ ♣
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-lg bg-surface/60 p-1">
            <button
              onClick={() => setLocale("de")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                locale === "de"
                  ? "bg-emerald text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                locale === "en"
                  ? "bg-emerald text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
          <Link
            href={backHref}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {backLabel[locale]}
          </Link>
        </div>
      </div>
    </header>
  );
}
