import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";

const SITE_URL = "https://www.edenplazanettoyage.ma";

export const metadata: Metadata = {
  title: "Blog & Actualités | Eden Plaza Nettoyage",
  description:
    "Guides pratiques, conseils d'experts et actualités du secteur du nettoyage professionnel à Casablanca et au Maroc.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog & Actualités | Eden Plaza Nettoyage",
    description:
      "Guides pratiques, conseils d'experts et actualités du secteur du nettoyage professionnel à Casablanca et au Maroc.",
    locale: "fr_MA",
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "Eden Plaza Nettoyage",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Blog - Eden Plaza Nettoyage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Actualités | Eden Plaza Nettoyage",
    description:
      "Guides pratiques et conseils nettoyage professionnel au Maroc.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function BlogPage() {
  return <BlogListClient />;
}
