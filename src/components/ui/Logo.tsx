"use client";

import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#accueil"
      className={`flex items-center group ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Eden Plaza Nettoyage"
        width={219}
        height={90}
        className="h-[68px] w-auto transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:drop-shadow-[0_8px_20px_rgba(13,124,95,0.3)] group-hover:rotate-[-1deg]"
        priority
      />
    </a>
  );
}
