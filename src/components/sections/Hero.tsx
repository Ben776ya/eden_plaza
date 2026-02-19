"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function HeroCarousel() {
  const { t } = useLanguage();
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(SERVICES.length / itemsPerPage);

  // Merge base service data (icon, slug, image) with translated text
  const services = SERVICES.map((s, i) => ({ ...s, ...t.services[i] }));

  const nextPage = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-advance every 4s
  useEffect(() => {
    const timer = setInterval(nextPage, 4000);
    return () => clearInterval(timer);
  }, [nextPage]);

  const startIdx = page * itemsPerPage;
  const visibleServices = services.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Label */}
      <p className="text-base font-semibold mb-5 text-center" style={{ color: "var(--color-text-secondary)" }}>
        {t.ui.heroServicesLabel}
      </p>

      {/* Carousel with side arrows (desktop) */}
      <div className="flex items-center gap-4">
        {/* Left Arrow - hidden on mobile, shown on sm+ */}
        <button
          onClick={prevPage}
          className="shrink-0 w-12 h-12 rounded-full hidden sm:flex items-center justify-center border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white/80 cursor-pointer"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
          aria-label={t.ui.prevServices}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {visibleServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white/80 backdrop-blur-sm flex flex-row sm:flex-col"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="relative w-[100px] min-h-[80px] sm:w-full sm:min-h-0 sm:h-[125px] overflow-hidden shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100px, 33vw"
                    loading="eager"
                  />
                </div>
                <div className="p-3 sm:p-4 flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(13, 124, 95, 0.1)" }}
                  >
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <span
                    className="text-xs sm:text-sm font-semibold leading-tight line-clamp-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {service.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right Arrow - hidden on mobile, shown on sm+ */}
        <button
          onClick={nextPage}
          className="shrink-0 w-12 h-12 rounded-full hidden sm:flex items-center justify-center border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white/80 cursor-pointer"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
          aria-label={t.ui.nextServices}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile arrows + dots */}
      <div className="flex items-center justify-center gap-4 mt-4">
        {/* Mobile left arrow */}
        <button
          onClick={prevPage}
          className="shrink-0 w-9 h-9 rounded-full flex sm:hidden items-center justify-center border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white/80 cursor-pointer"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
          aria-label={t.ui.prevServices}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === page ? "24px" : "8px",
                background: i === page
                  ? "linear-gradient(90deg, var(--color-primary), var(--color-primary-light))"
                  : "var(--color-border)",
              }}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile right arrow */}
        <button
          onClick={nextPage}
          className="shrink-0 w-9 h-9 rounded-full flex sm:hidden items-center justify-center border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white/80 cursor-pointer"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
          aria-label={t.ui.nextServices}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--color-bg-light)" }}
    >
      {/* Animated Mesh Gradient Blobs */}
      <div className="mesh-blob mesh-blob-1" />
      <div className="mesh-blob mesh-blob-2" />
      <div className="mesh-blob mesh-blob-3" />
      <div className="mesh-blob mesh-blob-4" />
      <div className="mesh-blob mesh-blob-5" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-28 pb-16"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(13, 124, 95, 0.08)",
              color: "var(--color-primary)",
              border: "1px solid rgba(13, 124, 95, 0.15)",
            }}
          >
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.h1
          variants={fadeUp}
          className="font-bold tracking-tight mb-6"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            lineHeight: 1.15,
            color: "var(--color-text-primary)",
          }}
        >
          {t.hero.tagline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl mb-10 mx-auto max-w-2xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="#services" className="btn-gradient">
            {t.hero.ctaPrimary.label}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
            }}
          >
            {t.hero.ctaSecondary.label}
          </a>
        </motion.div>

        {/* Services Carousel merged into hero */}
        <motion.div variants={fadeUp}>
          <HeroCarousel />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a href="#services" aria-label={t.ui.scrollDown}>
          <ChevronDown className="w-6 h-6 animate-bounce-slow" style={{ color: "var(--color-text-secondary)" }} />
        </a>
      </div>
    </section>
  );
}
