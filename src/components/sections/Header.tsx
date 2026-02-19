"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy();
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (Math.abs(delta) < 10) return;

      if (delta > 0 && currentY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Main Navbar — hide on scroll down, show on scroll up */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          visible ? "navbar-visible" : "navbar-hidden"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {t.nav.map((link) => {
              const href = isHome ? link.href : `/${link.href}`;
              const isActive = isHome && `#${activeSection}` === link.href;
              return (
                <a
                  key={link.href}
                  href={href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "gradient-text"
                      : "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, var(--color-primary), var(--color-primary-light))",
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Phone number */}
            <a
              href="tel:+212661074155"
              className="hidden lg:inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <Phone className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
              06 61 07 41 55
            </a>

            {/* CTA Button — gradient style */}
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="hidden md:inline-flex btn-gradient !py-2.5 !px-5 text-sm"
            >
              {t.ui.freeQuote}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer"
              aria-label={mobileOpen ? t.ui.closeMenu : t.ui.openMenu}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-45 bg-black/40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-2xl p-8 flex flex-col md:hidden"
              aria-label="Menu mobile"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end mb-8 cursor-pointer"
                aria-label={t.ui.closeMenu}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col gap-6">
                {t.nav.map((link) => (
                  <a
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-[var(--color-primary)]"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={() => setMobileOpen(false)}
                className="mt-8 btn-gradient justify-center text-sm !py-2.5 !px-5 self-start"
              >
                {t.ui.freeQuote}
              </a>

              {/* Language Switcher in mobile menu */}
              <div className="mt-6">
                <LanguageSwitcher />
              </div>

              <div className="mt-auto pt-8 border-t text-sm space-y-3" style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}>
                <a href="tel:+212661074155" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                  06 61 07 41 55
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
