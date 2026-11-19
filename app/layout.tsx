import type { Metadata } from "next";
import { Italiana, DM_Sans, Playfair_Display } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "DARL — Indie · Psychedelic · Dream Pop",
  description: "DARL is an indie band making songs for the late nights and daydreams.",
  openGraph: {
    title: "DARL",
    description: "Songs for the late nights and daydreams.",
    images: ["/images/og.jpg"],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/images/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
