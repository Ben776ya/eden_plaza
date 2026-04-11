import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { BLOG_CONTENT } from "@/lib/blog-content";
import BlogPostClient from "./BlogPostClient";

const SITE_URL = "https://www.edenplazanettoyage.ma";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = BLOG_CONTENT[slug];
  if (!post || !content) return {};

  const title = content.seoTitle || content.title;
  const description = content.seoDescription || content.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      locale: "fr_MA",
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "Eden Plaza Nettoyage",
      publishedTime: post.datePublished,
      authors: ["Eden Plaza Nettoyage"],
      tags: [post.category],
      images: [
        {
          url: `${SITE_URL}${post.image}`,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
