import type { Metadata } from "next";
import IcmErklaertContent from "./content";

export const metadata: Metadata = {
  title: "ICM erklärt: Independent Chip Model für Poker Turniere | 7Mountain Poker",
  description:
    "Was ist ICM? Wie funktioniert das Independent Chip Model? Berechnung, Anwendung bei Deal-Verhandlungen und Bubble-Strategie — einfach erklärt mit Beispielen.",
  alternates: { canonical: "/blog/icm-erklaert" },
};

export default function IcmErklaertPage() {
  return <IcmErklaertContent />;
}
