import type { Metadata } from "next";
import { Italiana, DM_Sans, Playfair_Display } from "next/font/google";
import { label } from "@/data/label";
import "./globals.css";

const display = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(label.url),
  title: `${label.name} — Independent artists`,
  description: label.about,
  openGraph: {
    title: label.name,
    description: "Independent artists from Malaysia.",
    images: ["/artists/darl.jpg"],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/artists/darl.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
