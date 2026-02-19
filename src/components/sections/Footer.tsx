"use client";

import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { SERVICES, FOOTER, CONTACT } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  // Merge base service data (slug) with translated title
  const services = SERVICES.map((s, i) => ({ slug: s.slug, title: t.services[i].title }));

  return (
    <footer style={{ background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Logo className="[&_span]:!text-white" />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              {t.footer.tagline}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={FOOTER.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href={FOOTER.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              {t.ui.footerServicesHeading}
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              {t.ui.footerLinksHeading}
            </h4>
            <ul className="space-y-2.5">
              {t.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={`/${link.href}`}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              {t.ui.footerContactHeading}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={CONTACT.phone.href} className="flex items-center gap-2.5 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--color-secondary)" }} />
                  {CONTACT.phone.value}
                </a>
              </li>
              <li>
                <a href={CONTACT.email.href} className="flex items-center gap-2.5 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--color-secondary)" }} />
                  {CONTACT.email.value}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--color-secondary)" }} />
                {CONTACT.address.value}
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--color-secondary)" }} />
                {t.ui.footerHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
