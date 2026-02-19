"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
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
            Nos Services
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
            Des services professionnels adaptés à tous vos besoins
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-line mx-auto"
          />
        </div>

        {/* Services Grid — Mission Nettoyage style with hover rotation + icon spin */}
        <div
          className="grid gap-6 md:gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="service-card"
              >
                {/* Card Image */}
                <Link href={`/services/${service.slug}`} className="relative aspect-video overflow-hidden block">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover service-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </Link>

                {/* Card Content */}
                <div className="p-6">
                  <div
                    className="service-icon w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4 bg-white"
                    style={{
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      marginTop: "-42px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 hover:gap-2.5 gradient-text"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
