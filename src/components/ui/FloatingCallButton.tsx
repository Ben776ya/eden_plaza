"use client";

import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+212661074155"
      aria-label="Appelez-nous"
      className="fixed bottom-6 left-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110 call-pulse"
      style={{
        background: "linear-gradient(45deg, var(--color-primary), var(--color-primary-light))",
      }}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
