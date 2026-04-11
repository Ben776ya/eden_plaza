import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogSectionType } from "@/lib/blog";

function Paragraph({ text }: { text: string }) {
  return <p>{text}</p>;
}

function Heading({ text }: { text: string }) {
  return <h2>{text}</h2>;
}

function Subheading({ text }: { text: string }) {
  return <h3>{text}</h3>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Tip({ text }: { text: string }) {
  return (
    <div
      className="rounded-xl p-4 sm:p-5 mb-4 border-l-4"
      style={{
        borderLeftColor: "var(--color-primary)",
        background: "rgba(13, 124, 95, 0.05)",
      }}
    >
      <p className="!text-[var(--color-text-primary)] !mb-0 text-sm leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
}

function CTA({ text, href }: { text: string; href: string }) {
  return (
    <div className="my-8 text-center">
      <Link href={href} className="btn-gradient">
        {text}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default function BlogRenderer({ sections }: { sections: BlogSectionType[] }) {
  return (
    <div className="blog-content">
      {sections.map((section, i) => {
        switch (section.type) {
          case "paragraph":
            return <Paragraph key={i} text={section.text} />;
          case "heading":
            return <Heading key={i} text={section.text} />;
          case "subheading":
            return <Subheading key={i} text={section.text} />;
          case "list":
            return <List key={i} items={section.items} />;
          case "tip":
            return <Tip key={i} text={section.text} />;
          case "cta":
            return <CTA key={i} text={section.text} href={section.href} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
