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
  description:
    "Entreprise de nettoyage professionnel à Casablanca. Nettoyage bureaux, résidentiel, industriel, Airbnb, fin de chantier, traitement 4D. Devis gratuit.",
  alternates: {
    canonical: "https://www.edenplazanettoyage.ma/",
  },
  openGraph: {
    title: "Eden Plaza Nettoyage | Services de Nettoyage Professionnel à Casablanca",
    description:
      "Entreprise de nettoyage professionnel à Casablanca. Nettoyage bureaux, résidentiel, industriel, Airbnb, fin de chantier, traitement 4D. Devis gratuit.",
    locale: "fr_MA",
    type: "website",
    url: "https://www.edenplazanettoyage.ma/",
    siteName: "Eden Plaza Nettoyage",
    images: [
      {
        url: "https://www.edenplazanettoyage.ma/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eden Plaza Nettoyage - Services de Nettoyage Professionnel à Casablanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Plaza Nettoyage | Nettoyage Professionnel à Casablanca",
    description:
      "Entreprise de nettoyage professionnel à Casablanca. Devis gratuit.",
    images: ["https://www.edenplazanettoyage.ma/og-image.png"],
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
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8922537549805606"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.edenplazanettoyage.ma/#business",
              name: "Eden Plaza Nettoyage",
              url: "https://www.edenplazanettoyage.ma",
              logo: "https://www.edenplazanettoyage.ma/logo.png",
              image: "https://www.edenplazanettoyage.ma/logo.png",
              description:
                "Entreprise de nettoyage professionnel à Casablanca. Nettoyage bureaux, résidentiel, industriel, Airbnb, fin de chantier, traitement 4D.",
              telephone: "+212661074155",
              email: "contact@edenplazanettoyage.ma",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rue Attabari Résidence Hidden Hills 3",
                addressLocality: "Casablanca",
                addressRegion: "Casablanca-Settat",
                postalCode: "20000",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "33.5731",
                longitude: "-7.5898",
              },
              areaServed: [
                { "@type": "City", name: "Casablanca" },
                { "@type": "AdministrativeArea", name: "Casablanca-Settat" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              priceRange: "$$",
              currenciesAccepted: "MAD",
              sameAs: [
                "https://www.facebook.com/edenplaza.nettoyage",
                "https://www.instagram.com/edenplaza.nettoyage",
                "https://www.linkedin.com/company/edenplaza-nettoyage",
                "https://www.youtube.com/@edenplaza-nettoyage",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Eden Plaza Nettoyage",
              url: "https://www.edenplazanettoyage.ma",
              inLanguage: "fr",
              publisher: {
                "@type": "LocalBusiness",
                "@id": "https://www.edenplazanettoyage.ma/#business",
              },
            }),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
