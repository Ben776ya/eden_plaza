"use client";

import { WHATSAPP_URL, WHATSAPP_TOOLTIP } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={WHATSAPP_TOOLTIP}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl whatsapp-pulse group"
      style={{ backgroundColor: "var(--color-whatsapp)" }}
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        {WHATSAPP_TOOLTIP}
      </span>
    </a>
  );
}
