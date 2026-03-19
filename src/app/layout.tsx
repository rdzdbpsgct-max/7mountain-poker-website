import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "7Mountain Poker - Tournament Timer",
  description:
    "Der ultimative Poker-Turnier-Timer. Blindstruktur, Spielerverwaltung, Ligen und mehr. Kostenlos und ohne Anmeldung.",
  keywords: [
    "poker",
    "tournament",
    "timer",
    "blind structure",
    "poker timer",
    "turnier",
  ],
  openGraph: {
    title: "7Mountain Poker - Tournament Timer",
    description:
      "Der ultimative Poker-Turnier-Timer. Kostenlos und ohne Anmeldung.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
