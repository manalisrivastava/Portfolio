"use client";

import { useRef, useEffect, useState } from "react";
import siteData from "@/content/site.json";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <footer
      id="contact"
      ref={sectionRef}
      style={{
        background: "var(--color-text)",
        color: "#fff",
        padding: "96px 0 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            color: "#fff",
            marginBottom: "24px",
            lineHeight: 1.1,
            ...reveal(0),
          }}
        >
          Let&apos;s talk.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
            fontSize: "17px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.65,
            marginBottom: "48px",
            maxWidth: "480px",
            ...reveal(0.1),
          }}
        >
          I&apos;m currently open to product roles in the UK. The fastest way to reach me is email.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "64px", ...reveal(0.2) }}>
          <ContactRow
            label="Email"
            href={`mailto:${siteData.email}`}
            value={siteData.email}
          />
          <ContactRow
            label="LinkedIn"
            href={siteData.linkedinUrl}
            value={siteData.linkedin}
          />
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}
          >
            © 2026 Manali Srivastava · Built with Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactRow({
  label,
  href,
  value,
}: {
  label: string;
  href?: string;
  value: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
      <span
        style={{
          fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.35)",
          width: "72px",
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          style={{
            fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
            fontSize: "16px",
            color: "var(--color-accent-soft)",
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {value}
        </a>
      ) : (
        <span
          style={{
            fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
            fontSize: "16px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
}
