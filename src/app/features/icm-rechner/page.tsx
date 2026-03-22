import type { Metadata } from "next";
import IcmRechnerContent from "./content";

export const metadata: Metadata = {
  title: "ICM Rechner f\u00fcr Poker Turniere | 7Mountain Poker",
  description:
    "Independent Chip Model (ICM) Equity-Berechnung f\u00fcr faire Deal-Verhandlungen. Malmuth-Harville Algorithmus, exakt bis 10 Spieler, Monte Carlo f\u00fcr gr\u00f6\u00dfere Felder.",
  alternates: { canonical: "/features/icm-rechner" },
};

export default function IcmRechnerPage() {
  return <IcmRechnerContent />;
}
