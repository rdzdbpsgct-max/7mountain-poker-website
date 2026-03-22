import type { Metadata } from "next";
import MultiTableTurnierContent from "./content";

export const metadata: Metadata = {
  title: "Multi-Table Poker Turnier organisieren | Tischverteilung, Balancing & Final Table | 7Mountain Poker",
  description:
    "So organisierst du ein Poker-Turnier mit mehreren Tischen: Tischverteilung, Balancing, Tischauflösung, Final Table und Spielerwechsel — der komplette Guide.",
  alternates: { canonical: "/blog/multi-table-turnier" },
};

export default function MultiTableTurnierPage() {
  return <MultiTableTurnierContent />;
}
