import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import ServicePageClient from "./ServicePageClient";

const SITE_URL = "https://www.edenplazanettoyage.ma";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} à Casablanca | Eden Plaza Nettoyage`;
  const description =
    service.intro.length > 155
      ? service.intro.slice(0, 152) + "..."
      : service.intro;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      locale: "fr_MA",
      type: "website",
      url: `${SITE_URL}/services/${slug}`,
      siteName: "Eden Plaza Nettoyage",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServicePageClient slug={slug} />;
}
