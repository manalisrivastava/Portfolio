"use client";

import { useRef, useEffect, useState } from "react";
import skillsData from "@/content/skills.json";

export default function Skills() {
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
    <section id="skills" ref={sectionRef} style={{ padding: "96px 0", borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
      {/* Floating circles */}
      <div style={{
        position: "absolute", width: "220px", height: "220px",
        bottom: "-40px", right: "-50px", borderRadius: "50%",
        background: "#C4622D", opacity: 0.09, zIndex: 0,
        animation: "floatA 7s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: "130px", height: "130px",
        top: "20px", left: "-40px", borderRadius: "50%",
        background: "#A8481E", opacity: 0.07, zIndex: 0,
        animation: "floatB 9s ease-in-out infinite",
        animationDelay: "2s",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
            fontSize: "36px",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "48px",
            lineHeight: 1.2,
            ...reveal(0),
          }}
        >
          Skills & Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px",
          }}
          className="skills-grid"
        >
          {skillsData.groups.map((group, i) => (
            <div key={group.title} style={reveal(0.1 + i * 0.1)}>
              <h3
                style={{
                  fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "20px",
                }}
              >
                {group.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-tag {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 13px;
          color: var(--color-text);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 5px 12px;
          font-weight: 450;
          display: inline-block;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          cursor: default;
        }
        .skill-tag:hover {
          background: var(--color-accent);
          color: #fff;
          border-color: var(--color-accent);
        }
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
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
