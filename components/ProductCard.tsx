"use client";

import Link from "next/link";
import Image from "next/image";

export type ProductCardData = {
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
};

export default function ProductCard({
  slug,
  name,
  description,
  thumbnail,
  thumbnailWidth,
  thumbnailHeight,
}: ProductCardData) {
  return (
    <Link href={`/work/${slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        className="product-card"
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid var(--color-border)",
          borderRadius: "20px",
          overflow: "hidden",
          background: "var(--color-surface)",
        }}
      >
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src={thumbnail}
            alt={name}
            width={thumbnailWidth}
            height={thumbnailHeight}
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </div>

        <div style={{ padding: "40px 48px 48px", display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "16px",
              lineHeight: 1.25,
            }}
          >
            {name}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--color-muted)",
              marginBottom: "28px",
              maxWidth: "640px",
            }}
          >
            {description}
          </p>

          <span
            className="product-explore-link"
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "15px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--color-accent)",
            }}
          >
            Explore
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
