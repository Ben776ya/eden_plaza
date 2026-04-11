import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

const SITE_URL = "https://www.edenplazanettoyage.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: service.slug === "nettoyage-de-chantier" ||
      service.slug === "nettoyage-airbnb" ||
      service.slug === "nettoyage-bureaux" ||
      service.slug === "nettoyage-industriel" ||
      service.slug === "nettoyage-vitres-facades" ||
      service.slug === "nettoyage-canape-fauteuil" ||
      service.slug === "nettoyage-appartements-villas"
      ? 0.9
      : 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...servicePages,
  ];
}
