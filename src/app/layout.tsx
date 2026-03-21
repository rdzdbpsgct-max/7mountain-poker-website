import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const siteUrl = "https://7mountain-poker.vercel.app";

export const metadata: Metadata = {
  title: "7Mountain Poker - Tournament Timer",
  description:
    "Der ultimative Poker-Turnier-Timer v6.9.9. Blindstruktur, Spielerverwaltung, TV-Modus, Fernbedienung, Ligen, Lizenzschl\u00fcssel-System und mehr. 1.282 Tests. Kostenlos und ohne Anmeldung.",
  keywords: [
    "poker",
    "tournament",
    "timer",
    "blind structure",
    "poker timer",
    "turnier",
    "pokertimer",
    "blindstruktur",
    "tv modus",
    "fernbedienung",
    "liga",
    "lizenzschl\u00fcssel",
    "spielersuche",
    "bounty",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "7Mountain Poker - Tournament Timer",
    description:
      "Der ultimative Poker-Turnier-Timer v6.9.9. TV-Modus, Fernbedienung, Ligen, ICM-Rechner, Lizenzschl\u00fcssel-System und mehr. 1.282 Tests. Kostenlos und ohne Anmeldung.",
    type: "website",
    url: siteUrl,
    siteName: "7Mountain Poker",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "7Mountain Poker - Tournament Timer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7Mountain Poker - Tournament Timer",
    description:
      "Der ultimative Poker-Turnier-Timer. Kostenlos und ohne Anmeldung.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "7Mountain Poker",
    alternateName: "7Mountain Poker Tournament Timer",
    description:
      "Professional poker tournament timer with blind structure generator, player management, TV mode, remote control, leagues, ICM calculator and more. Free and no signup required.",
    url: siteUrl,
    softwareVersion: "6.9.9",
    applicationCategory: "GameApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Tournament Timer",
      "Blind Structure Generator",
      "Player Management",
      "TV Mode with 4 Layouts",
      "Smartphone Remote Control",
      "468 Voice Announcements",
      "League & Series Mode",
      "ICM Calculator",
      "Side Pot Calculator",
      "Rebuy, Add-On & Bounty",
      "PWA & Offline Support",
      "Multi-Currency (EUR, USD, GBP, CHF, SEK)",
      "License Key System with HMAC-SHA256",
      "Player Search",
      "Preflight Validations",
      "Series Auto-Link",
    ],
    author: {
      "@type": "Person",
      name: "Michael Prill",
    },
    inLanguage: ["de", "en"],
  };

  // JSON-LD is a static, hardcoded object with no user input - safe to serialize
  const jsonLdString = JSON.stringify(jsonLd);

  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
