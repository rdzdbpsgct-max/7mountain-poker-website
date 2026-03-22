import type { Metadata } from "next";
import PokerChipsGuideContent from "./content";

export const metadata: Metadata = {
  title: "Poker Chips Guide: Werte, Farben & Color-Up | 7Mountain Poker",
  description:
    "Alles über Poker Chips für Home Games: Standard-Farben und Werte, Chip-Verteilung pro Spieler, Color-Up-Timing und Tipps für den Chip-Kauf.",
  alternates: { canonical: "/blog/poker-chips-guide" },
};

export default function PokerChipsGuidePage() {
  return <PokerChipsGuideContent />;
}
