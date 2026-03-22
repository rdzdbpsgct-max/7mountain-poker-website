import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Poker Timer per Handy steuern | Smartphone-Fernbedienung | 7Mountain Poker",
  description:
    "Steuere dein Poker-Turnier vom Smartphone. QR-Code scannen, verbinden, Timer steuern. Spieler eliminieren, Rebuys vergeben — alles per Handy.",
  alternates: { canonical: "/features/fernbedienung" },
};

export default function FernbedienungPage() {
  return <Content />;
}
