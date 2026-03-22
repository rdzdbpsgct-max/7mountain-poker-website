import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "TV-Modus für Poker Turniere | 7Mountain Poker",
  description:
    "Zeige Blindstruktur, Timer und Spielerstände auf TV oder Beamer. 4 Layouts, 8 rotierende Screens, Cross-Device-Display. Kostenlos.",
  alternates: { canonical: "/features/tv-modus" },
};

export default function TVModusPage() {
  return <Content />;
}
