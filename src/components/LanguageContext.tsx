"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, getTranslations } from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslations>;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");
  const t = getTranslations(locale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
  };

  useEffect(() => {
    const titles: Record<Locale, string> = {
      de: "7Mountain Poker - Tournament Timer",
      en: "7Mountain Poker - Tournament Timer",
    };
    const descriptions: Record<Locale, string> = {
      de: "Der ultimative Poker-Turnier-Timer. Blindstruktur, Spielerverwaltung, TV-Modus, Fernbedienung, Ligen und mehr. Kostenlos und ohne Anmeldung.",
      en: "The ultimate poker tournament timer. Blind structure, player management, TV mode, remote control, leagues and more. Free and no signup required.",
    };
    document.title = titles[locale];
    document.documentElement.lang = locale;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", descriptions[locale]);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
