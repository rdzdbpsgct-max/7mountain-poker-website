import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Poker Turnier planen: Der komplette Guide für 2026 | 7Mountain Poker",
  description:
    "Von der Spieleranzahl über die Blindstruktur bis zur Platzierung. Der umfassende Guide für die perfekte Organisation deines Poker-Turniers zu Hause.",
  alternates: { canonical: "/blog/poker-turnier-planen" },
};

export default function PokerTurnierPlanenPage() {
  return <Content />;
}
