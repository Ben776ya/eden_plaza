"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog";
import BlogCard from "@/components/ui/BlogCard";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogListClient() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

  const filteredPosts =
    activeCategory === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const categories: { key: BlogCategory | "all"; label: string }[] = [
    { key: "all", label: t.ui.blogAllCategories },
    { key: "guide", label: t.ui.blogCategoryGuide },
    { key: "conseil", label: t.ui.blogCategoryConseil },
    { key: "actualite", label: t.ui.blogCategoryActualite },
  ];

  return (
    <>
      <Header />
      <main style={{ background: "var(--color-bg-light)" }}>
        {/* Hero */}
        <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)",
            }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {t.ui.blogLabel}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white font-bold mb-4"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: 1.15 }}
            >
              {t.ui.blogTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {t.ui.blogSubtitle}
            </motion.p>
          </div>
        </section>

        {/* Category Filter + Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer"
                    style={{
                      background: isActive ? "var(--color-primary)" : "white",
                      color: isActive ? "white" : "var(--color-text-secondary)",
                      border: `1px solid ${isActive ? "var(--color-primary)" : "var(--color-border)"}`,
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </motion.div>

            {/* Blog Grid */}
            <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <p className="text-center py-12 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                Aucun article dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
