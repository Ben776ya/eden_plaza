import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";

const SITE_URL = "https://www.edenplazanettoyage.ma";
const LAST_UPDATED = "2026-04-11";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.datePublished,
    changeFrequency: "monthly" as const,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
    },
    {
      url: `${SITE_URL}/politique-confidentialite`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
    },
    ...blogPages,
    ...servicePages,
  ];
}
