"use client";

import Link from "next/link";
import Image from "next/image";
import type { CaseStudyCard as CaseStudyCardType } from "@/lib/types";

export default function CaseStudyCard({ slug, title, oneLiner, tags, thumbnail, metric, date, bold }: CaseStudyCardType) {
  return (
    <Link
      href={`/work/${slug}`}
      style={{ textDecoration: "none", display: "flex", flexDirection: "column", height: "100%" }}
    >
      <article className="case-study-card">
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

        <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
          <h3
            className="case-study-title"
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "18px",
              fontWeight: 500,
              marginBottom: bold ? "12px" : "8px",
              lineHeight: 1.35,
            }}
          >
            {bold && title.includes(": ") ? (
              <>
                <span style={{ fontWeight: 700 }}>{title.split(": ")[0]}</span>
                {": " + title.split(": ").slice(1).join(": ")}
              </>
            ) : title}
          </h3>

          {date && (
            bold ? (
              <span
                className="case-study-tag"
                style={{
                  fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                  fontSize: "12px",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  fontWeight: 500,
                  marginBottom: "12px",
                  display: "inline-block",
                  alignSelf: "flex-start",
                }}
              >
                {date}
              </span>
            ) : (
              <p
                className="case-study-date"
                style={{
                  fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                  fontSize: "12px",
                  marginBottom: "16px",
                  fontWeight: 500,
                }}
              >
                {date}
              </p>
            )
          )}

          <p
            className="case-study-description"
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: bold ? "16px" : "18px",
              fontWeight: bold ? 400 : 500,
              lineHeight: bold ? 1.75 : 1.7,
              marginBottom: "24px",
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
                marginBottom: "20px",
              }}
            >
              {metric}
            </p>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="case-study-tag"
                style={{
                  fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                  fontSize: "12px",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <span
            className="case-study-link"
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "14px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Read case study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
