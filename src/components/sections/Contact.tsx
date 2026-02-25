"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const name = fd.get("user_name") ?? "";
    const email = fd.get("user_email") ?? "";
    const phone = fd.get("user_phone") ?? "";
    const service = fd.get("service") ?? "";
    const message = fd.get("message") ?? "";

    // Save to dashboard (fire-and-forget — WhatsApp always opens regardless)
    fetch("/api/devis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, service, message }),
    }).catch(() => {/* non-blocking */});

    // Open WhatsApp with pre-filled message
    const text = [
      `Bonjour Eden Plaza Nettoyage,`,
      ``,
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      service ? `Service : ${service}` : null,
      message ? `Message : ${message}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    formRef.current.reset();
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const contactInfo = [
    { icon: Phone, label: t.contact.phone.label, value: CONTACT.phone.value, href: CONTACT.phone.href },
    { icon: Mail, label: t.contact.email.label, value: CONTACT.email.value, href: CONTACT.email.href },
    { icon: MapPin, label: t.contact.address.label, value: CONTACT.address.value },
    { icon: Clock, label: t.contact.hours.label, value: t.contact.hours.value },
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
            {t.contact.label}
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
            {t.contact.title}
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
              {t.contact.body}
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
                {t.contact.formTitle}
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    {t.ui.formName}
                  </label>
                  <input type="text" id="user_name" name="user_name" required className={inputClasses} style={{ borderColor: "var(--color-border)" }} placeholder={t.ui.formPlaceholderName} />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    {t.ui.formEmail}
                  </label>
                  <input type="email" id="user_email" name="user_email" required className={inputClasses} style={{ borderColor: "var(--color-border)" }} placeholder={t.ui.formPlaceholderEmail} />
                </div>

                <div>
                  <label htmlFor="user_phone" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    {t.ui.formPhone}
                  </label>
                  <input type="tel" id="user_phone" name="user_phone" className={inputClasses} style={{ borderColor: "var(--color-border)" }} placeholder={t.ui.formPlaceholderPhone} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    {t.ui.formService}
                  </label>
                  <select id="service" name="service" className={`${inputClasses} appearance-none cursor-pointer`} style={{ borderColor: "var(--color-border)" }} defaultValue="">
                    <option value="" disabled>{t.ui.formPlaceholderService}</option>
                    {t.contact.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                    {t.ui.formMessage}
                  </label>
                  <textarea id="message" name="message" required rows={4} className={`${inputClasses} resize-none`} style={{ borderColor: "var(--color-border)" }} placeholder={t.ui.formPlaceholderMessage} />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gradient justify-center cursor-pointer"
                >
                  {t.ui.formSubmit}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
