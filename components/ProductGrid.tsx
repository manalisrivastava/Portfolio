"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BuiltCard = {
  slug?: string;
  name: string;
  description: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  githubUrl?: string;
  demoUrl?: string;
  note?: string;
};

const built: BuiltCard[] = [
  {
    slug: "offpath",
    name: "Offpath",
    description:
      "An open-source tool that finds the edge cases in a feature before it reaches development. Runs entirely on your machine.",
    thumbnail: "/images/offpath-landing.png",
    thumbnailWidth: 1280,
    thumbnailHeight: 570,
    // TODO: add GitHub URL
    // TODO: add demo URL
    githubUrl: undefined,
    demoUrl: undefined,
  },
  {
    name: "AI Tax Advisor (Warwick)",
    description:
      "A citizen-facing digital tax service design, balancing user needs with regulation. University of Warwick, 2025.",
    thumbnail: "/images/offpath-results.png",
    thumbnailWidth: 1280,
    thumbnailHeight: 720,
    note: "University project — no public link",
  },
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="built" style={{ padding: "48px 0", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
            fontSize: "64px",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "56px",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          Things I&apos;ve Built
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease 0.08s, transform 0.65s ease 0.08s",
          }}
        >
          {built.map((item) => (
            <BuiltCardComponent key={item.name} {...item} />
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #built h2, #built > div > div { transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}

function BuiltCardComponent({ slug, name, description, thumbnail, thumbnailWidth, thumbnailHeight, githubUrl, demoUrl, note }: BuiltCard) {
  const inner = (
    <article
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
            fontSize: "24px",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "12px",
            lineHeight: 1.25,
          }}
        >
          {name}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
            fontSize: "16px",
            lineHeight: 1.75,
            color: "var(--color-muted)",
            marginBottom: "28px",
            maxWidth: "640px",
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "9px 20px", borderRadius: "100px",
                fontSize: "13px", fontWeight: 500, textDecoration: "none",
                fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                border: "1.5px solid var(--color-accent)", color: "var(--color-accent)",
                background: "transparent", transition: "background 0.15s",
                display: "inline-flex", alignItems: "center", gap: "6px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          ) : (
            <span style={{ fontSize: "12px", color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
              {/* TODO: add GitHub URL */}
            </span>
          )}
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "9px 20px", borderRadius: "100px",
                fontSize: "13px", fontWeight: 500, textDecoration: "none",
                fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                background: "var(--color-accent)", color: "#fff",
                transition: "opacity 0.15s",
                display: "inline-flex", alignItems: "center", gap: "6px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              Try the demo
            </a>
          ) : null}
          {note && (
            <span style={{
              fontSize: "12px", color: "var(--color-muted)",
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
            }}>
              {note}
            </span>
          )}
          {slug && !demoUrl && !githubUrl && (
            <span
              style={{
                fontSize: "14px", fontWeight: 500,
                display: "inline-flex", alignItems: "center", gap: "6px",
                color: "var(--color-accent)",
                fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              }}
            >
              Explore
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (slug) {
    return (
      <Link href={`/work/${slug}`} style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </Link>
    );
  }
  return inner;
}
