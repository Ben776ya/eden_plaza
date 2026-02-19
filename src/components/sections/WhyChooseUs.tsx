"use client";

import { motion } from "framer-motion";
import { USPS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  // Merge base data (icon) with translated text
  const usps = USPS.map((u, i) => ({ ...u, ...t.usps[i] }));

  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--color-bg-light)" }}
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
            {t.ui.whyChooseUsLabel}
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
            {t.ui.whyChooseUsTitle}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-line mx-auto"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="feature-card text-center"
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                    boxShadow: "0 4px 15px rgba(13, 124, 95, 0.25)",
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {usp.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
