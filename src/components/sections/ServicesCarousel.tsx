"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/constants";

export default function ServicesCarousel() {
  // Double the items for seamless loop
  const items = [...SERVICES, ...SERVICES];

  return (
    <section className="py-12 overflow-hidden" style={{ background: "var(--color-bg-light)" }}>
      <div className="marquee-track">
        {items.map((service, i) => (
          <a
            key={`${service.title}-${i}`}
            href="#contact"
            className="marquee-item flex flex-col items-center text-center p-3"
          >
            <div className="relative w-full h-[100px] rounded-lg overflow-hidden mb-3">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="200px"
                loading="lazy"
              />
            </div>
            <span
              className="text-xs font-semibold leading-tight px-1"
              style={{ color: "var(--color-text-primary)" }}
            >
              {service.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
