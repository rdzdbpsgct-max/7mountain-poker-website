import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Poker Liga verwalten | Kostenlose Ligaverwaltung | 7Mountain Poker",
  description:
    "Verwalte deine Poker-Liga mit Punktesystem, Spieltagen, Finanzen und Tiebreaker. ELO-Rating, Head-to-Head-Matrix, QR-Sharing. Kostenlos.",
  alternates: { canonical: "/features/liga" },
};

export default function LigaPage() {
  return <Content />;
}
