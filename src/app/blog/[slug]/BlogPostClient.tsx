"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog";
import { BLOG_CONTENT } from "@/lib/blog-content";
import { SERVICES } from "@/lib/constants";
import BlogRenderer from "@/components/ui/BlogRenderer";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function BlogPostClient({ slug }: { slug: string }) {
  const { t } = useLanguage();

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = BLOG_POSTS[postIndex];
  const content = BLOG_CONTENT[slug];

  if (!post || !content) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center" style={{ background: "var(--color-bg-light)" }}>
          <div className="text-center px-6">
            <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
              Article non trouvé
            </h1>
            <Link href="/blog" className="btn-gradient !py-3 !px-5 text-sm">
              {t.ui.blogBackToBlog}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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

  const relatedServices = post.relatedServices
    .map((serviceSlug) => {
      const idx = SERVICES.findIndex((s) => s.slug === serviceSlug);
      if (idx === -1) return null;
      return { slug: serviceSlug, icon: SERVICES[idx].icon, title: t.services[idx].title };
    })
    .filter(Boolean) as { slug: string; icon: typeof SERVICES[0]["icon"]; title: string }[];

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  // JSON-LD: BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.title,
    description: content.excerpt,
    image: `https://www.edenplazanettoyage.ma${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      "@type": "Organization",
      name: "Eden Plaza Nettoyage",
      url: "https://www.edenplazanettoyage.ma",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.edenplazanettoyage.ma/#business",
      name: "Eden Plaza Nettoyage",
      logo: {
        "@type": "ImageObject",
        url: "https://www.edenplazanettoyage.ma/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.edenplazanettoyage.ma/blog/${slug}`,
    },
    wordCount: content.sections
      .map((s) => ("text" in s ? s.text : "items" in s ? s.items.join(" ") : ""))
      .join(" ")
      .split(/\s+/).length,
    articleSection: categoryLabel,
    inLanguage: "fr",
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.edenplazanettoyage.ma/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.edenplazanettoyage.ma/blog" },
      { "@type": "ListItem", position: 3, name: content.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <main style={{ background: "var(--color-bg-light)" }}>
        {/* Hero */}
        <section className="relative pt-20 sm:pt-24 pb-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)",
            }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm mb-5 sm:mb-8 flex-wrap"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="text-white font-medium">{content.title}</span>
            </motion.nav>

            {/* Category + Meta */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <CategoryIcon className="w-3 h-3" />
                {categoryLabel}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                <Clock className="w-3.5 h-3.5" />
                {post.readTimeMinutes} {t.ui.blogMinRead}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)", lineHeight: 1.2 }}
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {content.excerpt}
            </motion.p>
          </div>
        </section>

        {/* Article Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-2 sm:-mt-4 relative z-10 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={post.image}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </motion.div>
        </div>

        {/* Content + Sidebar */}
        <section className="pb-12 sm:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">
              {/* Article Content */}
              <motion.article
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="lg:col-span-2"
              >
                <div className="feature-card !p-6 sm:!p-8 md:!p-10">
                  <BlogRenderer sections={content.sections} />
                </div>
              </motion.article>

              {/* Sidebar */}
              <aside className="space-y-5 sm:space-y-6">
                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-xl sm:rounded-2xl border p-4 sm:p-6"
                    style={{ borderColor: "var(--color-border)", background: "white" }}
                  >
                    <h3
                      className="text-sm sm:text-base font-bold mb-3 sm:mb-4"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {t.ui.blogRelatedServices}
                    </h3>
                    <div className="space-y-1 sm:space-y-2">
                      {relatedServices.map((s) => {
                        const SIcon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all hover:bg-[rgba(13,124,95,0.05)] group"
                          >
                            <div
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: "rgba(13, 124, 95, 0.1)" }}
                            >
                              <SIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "var(--color-primary)" }} />
                            </div>
                            <span
                              className="text-xs sm:text-sm font-medium group-hover:text-[var(--color-primary)] transition-colors"
                              style={{ color: "var(--color-text-primary)" }}
                            >
                              {s.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Related Posts */}
                {otherPosts.length > 0 && (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-xl sm:rounded-2xl border p-4 sm:p-6"
                    style={{ borderColor: "var(--color-border)", background: "white" }}
                  >
                    <h3
                      className="text-sm sm:text-base font-bold mb-3 sm:mb-4"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {t.ui.blogRelatedPosts}
                    </h3>
                    <div className="space-y-3">
                      {otherPosts.map((p) => {
                        const c = BLOG_CONTENT[p.slug];
                        if (!c) return null;
                        return (
                          <Link
                            key={p.slug}
                            href={`/blog/${p.slug}`}
                            className="block group"
                          >
                            <div className="flex gap-3">
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0">
                                <Image
                                  src={p.image}
                                  alt={c.title}
                                  fill
                                  className="object-cover"
                                  sizes="80px"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p
                                  className="text-xs sm:text-sm font-semibold line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors"
                                  style={{ color: "var(--color-text-primary)" }}
                                >
                                  {c.title}
                                </p>
                                <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                                  {p.readTimeMinutes} {t.ui.blogMinRead}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* CTA Sidebar */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="hidden lg:block rounded-2xl p-6 text-white sticky top-24"
                  style={{ background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))" }}
                >
                  <h3 className="text-lg font-bold mb-3">{t.ui.ctaSidebarTitle}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {t.ui.ctaSidebarBodyLong}
                  </p>
                  <Link
                    href="/#contact"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                    style={{ background: "white", color: "var(--color-primary)" }}
                  >
                    {t.ui.freeQuote}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </aside>
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="pb-12 sm:pb-16" style={{ background: "white" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center py-10 sm:py-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t.ui.blogBackToBlog}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
