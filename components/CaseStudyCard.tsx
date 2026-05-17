"use client";

import Link from "next/link";
import Image from "next/image";
import type { CaseStudyCard as CaseStudyCardType } from "@/lib/types";

export default function CaseStudyCard({ slug, title, oneLiner, tags, thumbnail, metric }: CaseStudyCardType) {
  return (
    <Link
      href={`/work/${slug}`}
      style={{ textDecoration: "none", display: "flex", flexDirection: "column", height: "100%" }}
    >
      <article
        className="case-study-card"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "box-shadow 0.25s ease, transform 0.25s ease, background 0.25s ease, color 0.25s ease",
          animation: "float-card 10s ease-in-out infinite alternate",
        }}
        onMouseEnter={(e) => {
          const card = e.currentTarget as HTMLElement;
          card.style.background = "var(--color-accent)";
          card.style.transform = "translateY(-8px)";
          card.style.boxShadow = "0 22px 60px rgba(0, 0, 0, 0.12)";
          const h3 = card.querySelector('h3');
          const paragraphs = card.querySelectorAll('p');
          const tags = card.querySelectorAll('.case-study-tag');
          const link = card.querySelector('.case-study-link');
          if (h3) (h3 as HTMLElement).style.color = "#ffffff";
          paragraphs.forEach(p => (p as HTMLElement).style.color = "#ffffff");
          tags.forEach(tag => {
            (tag as HTMLElement).style.color = "#ffffff";
            (tag as HTMLElement).style.background = "rgba(255, 255, 255, 0.16)";
          });
          if (link) (link as HTMLElement).style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget as HTMLElement;
          card.style.background = "var(--color-surface)";
          card.style.transform = "translateY(0)";
          card.style.boxShadow = "none";
          const h3 = card.querySelector('h3');
          const paragraphs = card.querySelectorAll('p');
          const tags = card.querySelectorAll('.case-study-tag');
          const link = card.querySelector('.case-study-link');
          if (h3) (h3 as HTMLElement).style.color = "var(--color-text)";
          const firstP = paragraphs[0];
          if (firstP) (firstP as HTMLElement).style.color = "var(--color-muted)";
          paragraphs.forEach((p, idx) => {
            if (idx > 0) (p as HTMLElement).style.color = "var(--color-accent)";
          });
          tags.forEach(tag => {
            (tag as HTMLElement).style.color = "var(--color-accent)";
            (tag as HTMLElement).style.background = "var(--color-accent-soft)";
          });
          if (link) (link as HTMLElement).style.color = "var(--color-accent)";
        }}
      >
        {thumbnail && (
          <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
            <Image
              src={thumbnail}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
          <h3
            className="case-study-title"
            style={{
              fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
              fontSize: "24px",
              fontWeight: 400,
              color: "var(--color-text)",
              marginBottom: "10px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "14px",
              color: "var(--color-muted)",
              lineHeight: 1.65,
              marginBottom: "16px",
              flex: 1,
            }}
          >
            {oneLiner}
          </p>

          {metric && (
            <p
              className="case-study-metric"
              style={{
                fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--color-accent)",
                marginBottom: "16px",
              }}
            >
              {metric}
            </p>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "auto" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="case-study-tag"
                style={{
                  fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                  fontSize: "12px",
                  color: "var(--color-accent)",
                  background: "var(--color-accent-soft)",
                  borderRadius: "20px",
                  padding: "3px 10px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
            <div />
            <span
              className="case-study-link"
              style={{
                fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--color-accent)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Read case study
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>        </div>
      </article>
    </Link>
  );
}
