"use client";

import { useState, useEffect, useCallback } from "react";

export type Locale = "de" | "en";

const STORAGE_KEY = "7mp-locale";

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>("de");

  // Read from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en") setLocaleState("en");
    } catch {
      // Private browsing or localStorage unavailable
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // Ignore
    }
    document.documentElement.lang = l;
  }, []);

  return { locale, setLocale };
}
