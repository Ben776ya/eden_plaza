import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/Providers";

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
  icons: {
    icon: "/logo.png",
  },
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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8922537549805606"
          crossOrigin="anonymous"
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0ZC1983VH7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0ZC1983VH7');
        `}
      </Script>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
