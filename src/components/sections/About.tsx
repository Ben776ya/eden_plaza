"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="apropos"
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
            {ABOUT.label}
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
            {ABOUT.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-line mx-auto"
          />
        </div>

        {/* 3-Card Grid (Mission, Team, Values) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ABOUT.cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="feature-card text-center"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="founder-card bg-white p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12"
          style={{
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Founder Image */}
          <div className="shrink-0">
            <div className="relative w-[200px] md:w-[280px] aspect-square rounded-2xl overflow-hidden"
              style={{
                border: "5px solid white",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Image
                src={ABOUT.founder.image}
                alt={ABOUT.founder.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="280px"
                loading="lazy"
              />
            </div>
          </div>

          {/* Founder Info */}
          <div>
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: "var(--color-text-primary)" }}
            >
              {ABOUT.founder.name}
            </h3>
            <div className="gradient-line mb-4" />
            <p
              className="text-sm font-medium mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              {ABOUT.founder.role}
            </p>
            <p
              className="text-base leading-relaxed italic"
              style={{ color: "var(--color-text-secondary)" }}
            >
              &ldquo;{ABOUT.founder.message}&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
