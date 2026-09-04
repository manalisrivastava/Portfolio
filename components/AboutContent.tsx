"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function renderParagraph(text: string, key: number, style?: React.CSSProperties) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p
      key={key}
      style={{
        fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
        fontSize: "16px",
        color: "var(--color-muted)",
        lineHeight: 1.75,
        marginBottom: "16px",
        ...style,
      }}
    >
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} style={{ color: "var(--color-text)", fontWeight: 600 }}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
}

interface Props {
  paragraphs: string[];
}

export default function AboutContent({ paragraphs }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: "96px 0", borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}
    >
      {/* Animated circles */}
      <div style={{
        position: "absolute", width: "260px", height: "260px",
        top: "40px", right: "-60px", borderRadius: "50%",
        background: "#E84714", opacity: 0.10, zIndex: 0,
        animation: "floatA 7s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: "160px", height: "160px",
        top: "38%", left: "-50px", borderRadius: "50%",
        background: "#E84714", opacity: 0.07, zIndex: 0,
        animation: "floatB 9s ease-in-out infinite",
        animationDelay: "1.5s",
      }} />

      <div
        style={{
          maxWidth: "1100px", margin: "0 auto", padding: "0 32px",
          display: "grid", gridTemplateColumns: "1fr 2fr",
          gap: "64px", alignItems: "start",
          position: "relative", zIndex: 1,
        }}
        className="about-grid"
      >
        {/* Illustration column */}
        <div style={{ ...reveal(0), position: "relative", width: "100%", aspectRatio: "4/5" }}>
          <Image
            src="/images/Aboutme.illustration.png.png"
            alt="About Manali Srivastava"
            fill
            style={{ objectFit: "contain", objectPosition: "center center" }}
          />
        </div>

        {/* Text column */}
        <div>
          <h2 style={{
            fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
            fontSize: "64px", fontWeight: 400, color: "var(--color-text)",
            marginBottom: "28px", lineHeight: 1.05, letterSpacing: "-0.01em",
            ...reveal(0.1),
          }}>
            About Me
          </h2>
          {paragraphs.map((p, i) => renderParagraph(p, i, reveal(0.2 + i * 0.1)))}
        </div>
      </div>

      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translate(0px, 0px); }
          40%       { transform: translate(-14px, -22px); }
          70%       { transform: translate(10px, -10px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translate(0px, 0px); }
          35%       { transform: translate(16px, -16px); }
          65%       { transform: translate(-10px, 12px); }
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
