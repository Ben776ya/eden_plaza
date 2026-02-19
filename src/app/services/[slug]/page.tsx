"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  MapPin,
  Phone,
  Users,
  Star,
} from "lucide-react";
import { SERVICES, CONTACT } from "@/lib/constants";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2 sm:space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-lg sm:rounded-xl border overflow-hidden transition-all"
          style={{ borderColor: "var(--color-border)", background: "white" }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
          >
            <span
              className="font-semibold text-[13px] sm:text-base pr-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              {faq.question}
            </span>
            <ChevronDown
              className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300"
              style={{
                color: "var(--color-primary)",
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === i ? "250px" : "0px",
              opacity: openIndex === i ? 1 : 0,
            }}
          >
            <p
              className="px-4 pb-4 sm:px-5 sm:pb-5 text-[13px] sm:text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center" style={{ background: "var(--color-bg-light)" }}>
          <div className="text-center px-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
              Service introuvable
            </h1>
            <p className="mb-8 text-sm sm:text-base" style={{ color: "var(--color-text-secondary)" }}>
              Le service demandé n&apos;existe pas.
            </p>
            <Link href="/" className="btn-gradient !py-3 !px-5 text-sm">
              Retour à l&apos;accueil
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = service.icon;
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <Header />
      <main style={{ background: "var(--color-bg-light)" }}>
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 pb-0 overflow-hidden">
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)",
            }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-20">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm mb-5 sm:mb-8 flex-wrap"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="text-white font-medium">{service.title}</span>
            </motion.nav>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className="text-xs sm:text-sm font-medium text-white">Service professionnel</span>
                </div>
                <h1
                  className="font-bold text-white mb-4 sm:mb-5"
                  style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)", lineHeight: 1.15 }}
                >
                  {service.title}
                </h1>
                <p
                  className="text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {service.intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/#contact" className="btn-gradient !py-3 !px-5 text-sm sm:!py-4 sm:!px-8 sm:text-base justify-center">
                    Demander un Devis
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={CONTACT.phone.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-sm font-semibold text-white border-2 border-white/30 transition-all hover:bg-white/10"
                  >
                    <Phone className="w-4 h-4" />
                    {CONTACT.phone.value}
                  </a>
                </div>
              </motion.div>

              {/* Image — hidden on very small screens, shown as smaller on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:flex-1 max-w-lg"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 sm:py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">
              {/* Left Column — Main Content */}
              <div className="lg:col-span-2 space-y-8 sm:space-y-12">
                {/* Prestations */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    <span
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(13, 124, 95, 0.1)" }}
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "var(--color-primary)" }} />
                    </span>
                    Nos prestations
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {service.prestations.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border"
                        style={{ borderColor: "var(--color-border)", background: "white" }}
                      >
                        <div
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))" }}
                        >
                          <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                        </div>
                        <span
                          className="text-[13px] sm:text-sm leading-relaxed"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Targets */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2.5 sm:gap-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    <span
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(13, 124, 95, 0.1)" }}
                    >
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "var(--color-primary)" }} />
                    </span>
                    Pour les professionnels
                  </h2>
                  <p
                    className="text-[13px] sm:text-sm leading-relaxed p-4 sm:p-5 rounded-lg sm:rounded-xl border"
                    style={{
                      borderColor: "var(--color-border)",
                      background: "white",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {service.targets}
                  </p>
                </motion.div>

                {/* Coverage */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2.5 sm:gap-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    <span
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(13, 124, 95, 0.1)" }}
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "var(--color-primary)" }} />
                    </span>
                    Zones couvertes
                  </h2>
                  <p
                    className="text-[13px] sm:text-sm leading-relaxed p-4 sm:p-5 rounded-lg sm:rounded-xl border"
                    style={{
                      borderColor: "var(--color-border)",
                      background: "white",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {service.coverage}
                  </p>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    <span
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(13, 124, 95, 0.1)" }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "var(--color-primary)" }} />
                    </span>
                    Pourquoi choisir Eden Plaza ?
                  </h2>
                  <div className="space-y-2 sm:space-y-3">
                    {service.whyUs.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border"
                        style={{ borderColor: "var(--color-border)", background: "white" }}
                      >
                        <div
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))" }}
                        />
                        <span className="text-[13px] sm:text-sm" style={{ color: "var(--color-text-primary)" }}>
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* FAQ */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Questions fréquentes
                  </h2>
                  <FAQAccordion faqs={service.faqs} />
                </motion.div>
              </div>

              {/* Right Column — Sidebar */}
              <div className="space-y-5 sm:space-y-6">
                {/* On mobile: CTA first, then other services. On desktop: other services first, then sticky CTA */}
                <div className="lg:hidden">
                  {/* Mobile CTA */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-xl p-5 text-white"
                    style={{
                      background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))",
                    }}
                  >
                    <h3 className="text-base font-bold mb-2">Besoin de ce service ?</h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                      Contactez-nous pour un devis gratuit et personnalisé.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <Link
                        href="/#contact"
                        className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                        style={{ background: "white", color: "var(--color-primary)" }}
                      >
                        Devis Gratuit
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={CONTACT.phone.href}
                        className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-lg text-sm font-semibold border border-white/30 text-white transition-all hover:bg-white/10"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Appeler
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Other Services */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-xl sm:rounded-2xl border p-4 sm:p-6"
                  style={{ borderColor: "var(--color-border)", background: "white" }}
                >
                  <h3
                    className="text-sm sm:text-base font-bold mb-3 sm:mb-4"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Nos autres services
                  </h3>
                  <div className="space-y-1 sm:space-y-2">
                    {otherServices.map((s) => {
                      const SIcon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all hover:bg-[rgba(13,124,95,0.05)] group"
                        >
                          <div
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: "rgba(13, 124, 95, 0.1)" }}
                          >
                            <SIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "var(--color-primary)" }} />
                          </div>
                          <span
                            className="text-xs sm:text-sm font-medium group-hover:text-[var(--color-primary)] transition-colors"
                            style={{ color: "var(--color-text-primary)" }}
                          >
                            {s.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Desktop-only sticky CTA */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="hidden lg:block rounded-2xl p-6 text-white sticky top-24"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))",
                  }}
                >
                  <h3 className="text-lg font-bold mb-3">Besoin de ce service ?</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/#contact"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                      style={{ background: "white", color: "var(--color-primary)" }}
                    >
                      Devis Gratuit
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={CONTACT.phone.href}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border border-white/30 text-white transition-all hover:bg-white/10"
                    >
                      <Phone className="w-4 h-4" />
                      Appeler maintenant
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-10 sm:py-16" style={{ background: "white" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Prêt à transformer vos espaces ?
              </h2>
              <p
                className="text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Contactez Eden Plaza Nettoyage pour un devis gratuit. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href="/#contact" className="btn-gradient !py-3 !px-5 text-sm sm:!py-4 sm:!px-8 sm:text-base justify-center w-full sm:w-auto">
                  Demander un Devis Gratuit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl text-sm font-semibold border-2 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                  style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour à l&apos;accueil
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
