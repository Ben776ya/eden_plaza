"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  // Merge base data (value, suffix, icon) with translated label
  const stats = STATS.map((s, i) => ({ ...s, label: t.stats[i].label }));

  return (
    <section
      className="py-16 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`text-center ${
                  i < stats.length - 1
                    ? "lg:border-r lg:border-white/20"
                    : ""
                }`}
              >
                <Icon className="w-7 h-7 mx-auto mb-3" style={{ color: "rgba(255,255,255,0.6)" }} />
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
