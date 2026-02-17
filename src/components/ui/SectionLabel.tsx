"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  children: React.ReactNode;
  color?: "primary" | "gold" | "light";
}

const colorMap = {
  primary: "text-[var(--color-primary)]",
  gold: "text-[var(--color-secondary)]",
  light: "text-[var(--color-secondary)]",
} as const;

export default function SectionLabel({ children, color = "primary" }: SectionLabelProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`text-sm font-semibold uppercase tracking-widest ${colorMap[color]}`}
    >
      {children}
    </motion.p>
  );
}
