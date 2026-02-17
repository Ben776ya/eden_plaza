import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eden Plaza Nettoyage | Services de Nettoyage Professionnel à Casablanca",
  description:
    "Entreprise de nettoyage professionnel à Casablanca. Nettoyage bureaux, résidentiel, industriel, Airbnb, fin de chantier, traitement 4D. Devis gratuit.",
  openGraph: {
    title: "Eden Plaza Nettoyage | Services de Nettoyage Professionnel à Casablanca",
    description:
      "Entreprise de nettoyage professionnel à Casablanca. Nettoyage bureaux, résidentiel, industriel, Airbnb, fin de chantier, traitement 4D. Devis gratuit.",
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${sora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
