import { BookOpen, Lightbulb, Newspaper, type LucideIcon } from "lucide-react";

// ─── Types ─────────────────────────────────────────────
export type BlogCategory = "guide" | "conseil" | "actualite";

export interface BlogPostMeta {
  slug: string;
  image: string;
  category: BlogCategory;
  icon: LucideIcon;
  datePublished: string;
  readTimeMinutes: number;
  relatedServices: string[];
}

export type BlogSectionType =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "cta"; text: string; href: string };

export interface BlogPostContent {
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  sections: BlogSectionType[];
}

// ─── Categories ────────────────────────────────────────
export const BLOG_CATEGORIES: Record<BlogCategory, { icon: LucideIcon }> = {
  guide: { icon: BookOpen },
  conseil: { icon: Lightbulb },
  actualite: { icon: Newspaper },
};

// ─── Posts Metadata ────────────────────────────────────
export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "comment-choisir-entreprise-nettoyage-casablanca",
    image: "/services/nettoyage-bureaux.webp",
    category: "guide",
    icon: BookOpen,
    datePublished: "2026-04-11",
    readTimeMinutes: 8,
    relatedServices: ["nettoyage-bureaux", "nettoyage-appartements-villas", "nettoyage-industriel"],
  },
  {
    slug: "nettoyage-fin-de-chantier-guide-complet",
    image: "/services/nettoyage-chantier.webp",
    category: "guide",
    icon: BookOpen,
    datePublished: "2026-04-11",
    readTimeMinutes: 7,
    relatedServices: ["nettoyage-de-chantier", "nettoyage-vitres-facades", "nettoyage-appartements-villas"],
  },
  {
    slug: "normes-haccp-restaurants-maroc-guide-hygiene",
    image: "/services/nettoyage-resto-cafes.webp",
    category: "conseil",
    icon: Lightbulb,
    datePublished: "2026-04-11",
    readTimeMinutes: 6,
    relatedServices: ["nettoyage-restos-cafes", "hygiene-traitement-4d", "desinfection"],
  },
];
