import type { Metadata } from "next";
import PokerLigaOrganisierenContent from "./content";

export const metadata: Metadata = {
  title: "Poker Liga organisieren: Punktesystem, Spieltage & Ranking | 7Mountain Poker",
  description:
    "So organisierst du eine Poker-Liga für deine Home-Game-Gruppe. Punktesystem, Saisons, Tiebreaker, Ranking und digitale Verwaltung — der komplette Guide.",
  alternates: { canonical: "/blog/poker-liga-organisieren" },
};

export default function PokerLigaOrganisierenPage() {
  return <PokerLigaOrganisierenContent />;
}
