"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/blog";
import { BLOG_CONTENT } from "@/lib/blog-content";
import { useLanguage } from "@/contexts/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const { t } = useLanguage();
  const content = BLOG_CONTENT[post.slug];
  if (!content) return null;

  const CategoryIcon = BLOG_CATEGORIES[post.category].icon;
  const categoryLabel =
    post.category === "guide"
      ? t.ui.blogCategoryGuide
      : post.category === "conseil"
        ? t.ui.blogCategoryConseil
        : t.ui.blogCategoryActualite;

  const formattedDate = new Date(post.datePublished).toLocaleDateString("fr-MA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article variants={cardVariants}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white"
        style={{ borderColor: "var(--color-border)" }}
      >
        {/* Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <Image
            src={post.image}
            alt={content.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: "var(--color-primary)" }}
            >
              <CategoryIcon className="w-3 h-3" />
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-3 text-xs" style={{ color: "var(--color-text-secondary)" }}>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTimeMinutes} {t.ui.blogMinRead}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-base sm:text-lg font-bold mb-2 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors"
            style={{ color: "var(--color-text-primary)" }}
          >
            {content.title}
          </h3>

          {/* Excerpt */}
          <p
            className="text-sm leading-relaxed line-clamp-3 mb-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {content.excerpt}
          </p>

          {/* Read more */}
          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-[var(--color-primary)]"
            style={{ color: "var(--color-primary)" }}
          >
            {t.ui.blogReadMore}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
