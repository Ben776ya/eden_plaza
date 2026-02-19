"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n/types";

const LANGUAGES: { code: Language; label: string; available: boolean }[] = [
  { code: "fr", label: "FR", available: true },
  { code: "en", label: "EN", available: true },
  { code: "ar", label: "AR", available: false },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center rounded-lg border p-0.5 gap-0.5"
      style={{ borderColor: "var(--color-border)" }}
    >
      {LANGUAGES.map(({ code, label, available }) => (
        <button
          key={code}
          onClick={() => available && setLanguage(code)}
          disabled={!available}
          title={!available ? "Coming soon" : undefined}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer ${
            language === code
              ? "gradient-text bg-[rgba(13,124,95,0.08)]"
              : available
              ? "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
