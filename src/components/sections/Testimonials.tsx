"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Testimonials() {
  const { t } = useLanguage();

  // Merge base data (name, initial, color) with translated quote
  const testimonials = TESTIMONIALS.map((item, i) => ({
    ...item,
    quote: t.testimonials[i].quote,
  }));

  return (
    <section
      id="avis"
      className="py-20 md:py-28"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest gradient-text"
          >
            {t.ui.testimonialsLabel}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 mb-4 font-bold"
            style={{
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              color: "var(--color-text-primary)",
            }}
          >
            {t.ui.testimonialsTitle}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-line mx-auto"
          />
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="feature-card relative !text-left"
            >
              {/* Decorative quote */}
              <span
                className="absolute top-4 right-6 text-7xl leading-none font-serif select-none"
                style={{ color: "rgba(13,124,95,0.08)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "var(--color-secondary)" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm italic leading-relaxed mb-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                &laquo; {item.quote} &raquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${item.color}`}
                >
                  {item.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    {item.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                    {t.ui.verifiedClient}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
