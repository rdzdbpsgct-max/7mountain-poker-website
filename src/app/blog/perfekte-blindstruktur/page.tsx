import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Die perfekte Blindstruktur für Home Games | 7Mountain Poker",
  description:
    "Schnell, Standard oder Deep Stack? Wie du die Blindstruktur an Spieleranzahl, Dauer und Chipstückelung anpasst. Mit Beispielen und Generator.",
  alternates: { canonical: "/blog/perfekte-blindstruktur" },
};

export default function PerfekteBlindstrukturPage() {
  return <Content />;
}
