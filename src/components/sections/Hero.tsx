"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { HERO, SERVICES } from "@/lib/constants";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function HeroCarousel() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(SERVICES.length / itemsPerPage);

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
  const visibleServices = SERVICES.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Label */}
      <p className="text-base font-semibold mb-5 text-center" style={{ color: "var(--color-text-secondary)" }}>
        Nos services
      </p>

      {/* Carousel with side arrows */}
      <div className="flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevPage}
          className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white/80 cursor-pointer"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
          aria-label="Services précédents"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {visibleServices.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href="#services"
                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white/80 backdrop-blur-sm"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="relative h-[100px] md:h-[125px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    loading="eager"
                  />
                </div>
                <div className="p-4 flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(13, 124, 95, 0.1)" }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <span
                    className="text-sm font-semibold leading-tight line-clamp-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {service.title}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextPage}
          className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-white/80 cursor-pointer"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
          aria-label="Services suivants"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
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
    </div>
  );
}

export default function Hero() {
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
            {HERO.badge}
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
          {HERO.tagline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl mb-10 mx-auto max-w-2xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {HERO.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href={HERO.ctaPrimary.href} className="btn-gradient">
            {HERO.ctaPrimary.label}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={HERO.ctaSecondary.href}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
            }}
          >
            {HERO.ctaSecondary.label}
          </a>
        </motion.div>

        {/* Services Carousel merged into hero */}
        <motion.div variants={fadeUp}>
          <HeroCarousel />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a href="#services" aria-label="Défiler vers le bas">
          <ChevronDown className="w-6 h-6 animate-bounce-slow" style={{ color: "var(--color-text-secondary)" }} />
        </a>
      </div>
    </section>
  );
}
