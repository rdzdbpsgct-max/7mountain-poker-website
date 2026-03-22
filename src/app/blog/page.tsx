import type { Metadata } from "next";
import BlogContent from "./content";

export const metadata: Metadata = {
  title: "Poker Blog | Tipps, Guides & Turnier-Ratgeber | 7Mountain Poker",
  description:
    "Alles rund um Poker-Turniere: Blindstrukturen, Timer-Apps, Liga-Organisation und Turnier-Planung. Tipps und Guides für Home Games.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
