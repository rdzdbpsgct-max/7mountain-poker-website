import type { Metadata } from "next";
import BlindstrukturContent from "./content";

export const metadata: Metadata = {
  title: "Poker Blindstruktur Generator | 7Mountain Poker",
  description:
    "Generiere die perfekte Blindstruktur in 3 Geschwindigkeiten. Chip-aware Rundung, Ante-Berechnung, Endzeit-Planung. Kostenlos und ohne Anmeldung.",
  alternates: { canonical: "/features/blindstruktur" },
};

export default function BlindstrukturPage() {
  return <BlindstrukturContent />;
}
