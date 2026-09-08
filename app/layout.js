import { Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";

const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-sinhala",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pawani-irushini.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "පවනි ඉරුෂිනි | Hiru Star Season 5 – SUPER 30",
  description:
    "සැප්තැම්බර් 13 ඉරිදා රාත්‍රී 7.30 සිට Hiru TV හි Hiru Star Season 5 SUPER 30 වටයේ පවනි ඉරුෂිනි. Hiru Star App එකෙන් කොළ මනාපය ලබා දෙන්න.",
  openGraph: {
    title: "පවනි ඉරුෂිනි | Hiru Star Season 5 – SUPER 30",
    description:
      "සැප්තැම්බර් 13 ඉරිදා රාත්‍රී 7.30 සිට Hiru TV – LIVE. කොළ මනාපය ලබා දෙන්න!",
    images: ["/pawani-super30.jpeg"],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b0703",
};

export default function RootLayout({ children }) {
  return (
    <html lang="si" className={sinhala.variable}>
      <body>{children}</body>
    </html>
  );
}
