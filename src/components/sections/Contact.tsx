"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "@/lib/constants";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/emailjs";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    { icon: Phone, label: CONTACT.phone.label, value: CONTACT.phone.value, href: CONTACT.phone.href },
    { icon: Mail, label: CONTACT.email.label, value: CONTACT.email.value, href: CONTACT.email.href },
    { icon: MapPin, label: CONTACT.address.label, value: CONTACT.address.value },
    { icon: Clock, label: CONTACT.hours.label, value: CONTACT.hours.value },
  ];

  const inputClasses =
    "w-full rounded-xl border py-3 px-4 text-sm outline-none transition-all duration-200 bg-white placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:bg-[#E6F9F4]";

  return (
    <section
      id="contact"
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
            {CONTACT.label}
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
            {CONTACT.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-line mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {CONTACT.body}
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href ? { href: item.href } : {};

                return (
                  <Wrapper
                    key={item.label}
                    {...wrapperProps}
                    className="feature-card !p-4 flex items-start gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider mb-0.5" style={{ color: "var(--color-text-secondary)" }}>
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="feature-card !p-8">
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                {CONTACT.formTitle}
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    Nom complet *
                  </label>
                  <input type="text" id="user_name" name="user_name" required className={inputClasses} style={{ borderColor: "var(--color-border)" }} placeholder="Votre nom complet" />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    Email *
                  </label>
                  <input type="email" id="user_email" name="user_email" required className={inputClasses} style={{ borderColor: "var(--color-border)" }} placeholder="votre@email.com" />
                </div>

                <div>
                  <label htmlFor="user_phone" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    Téléphone
                  </label>
                  <input type="tel" id="user_phone" name="user_phone" className={inputClasses} style={{ borderColor: "var(--color-border)" }} placeholder="+212 6XX XXX XXX" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    Service souhaité
                  </label>
                  <select id="service" name="service" className={`${inputClasses} appearance-none cursor-pointer`} style={{ borderColor: "var(--color-border)" }} defaultValue="">
                    <option value="" disabled>Sélectionnez un service</option>
                    {CONTACT.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    Message *
                  </label>
                  <textarea id="message" name="message" required rows={4} className={`${inputClasses} resize-none`} style={{ borderColor: "var(--color-border)" }} placeholder="Décrivez votre besoin..." />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-gradient justify-center disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                  {status === "loading" ? "Envoi en cours..." : "Envoyer la demande"}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5" />
                    Votre demande a été envoyée avec succès ! Nous vous répondrons bientôt.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg p-3">
                    <AlertCircle className="w-5 h-5" />
                    Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
