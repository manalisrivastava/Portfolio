"use client";

import { useRef, useEffect, useState } from "react";

const principles = [
  {
    title: "Discovery before building.",
    description: "I talk to the people closest to the problem before anything gets built.",
  },
  {
    title: "Visibility before automation.",
    description: "You can't automate what you can't see, so I map the process first.",
  },
  {
    title: "Trust before transactions.",
    description: "People adopt what they trust. I earn that before asking for anything.",
  },
  {
    title: "Constraints are inputs.",
    description: "Budgets, regulation and limits shape a better solution, not a worse one.",
  },
  {
    title: "Build the MVP, then decide.",
    description: "I use AI coding tools to turn ideas into working MVPs fast, so decisions come from real feedback, not slides.",
  },
];

export default function PrimarySkills() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "96px 0", borderTop: "1px solid var(--color-border)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
            fontSize: "64px",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "64px",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          How I Work
        </h2>

        {/* 3 + 2 centred layout */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease 0.08s, transform 0.65s ease 0.08s",
          }}
        >
          <div className="hiw-row hiw-row-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginBottom: "24px" }}>
            {principles.slice(0, 3).map((p) => (
              <PrincipleCard key={p.title} {...p} />
            ))}
          </div>
          <div className="hiw-row hiw-row-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "24px", maxWidth: "calc(66.66% - 8px)", margin: "0 auto" }}>
            {principles.slice(3).map((p) => (
              <PrincipleCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .primary-skill-card {
          border: 1.5px solid var(--color-border);
          background: var(--color-surface, #fff);
          transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .psk-title { color: var(--color-text); }
        .psk-desc { color: var(--color-muted); }
        .primary-skill-card:hover {
          background: var(--color-accent-soft);
          border-color: var(--color-accent);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(232,71,20,0.10);
        }
        @media (prefers-reduced-motion: reduce) {
          .primary-skill-card { transition: none !important; }
          .primary-skill-card:hover { transform: none !important; }
        }
        @media (max-width: 768px) {
          .hiw-row-3, .hiw-row-2 {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

function PrincipleCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="primary-skill-card"
      style={{
        padding: "28px 24px",
        borderRadius: "16px",
      }}
    >
      <h3
        className="psk-title"
        style={{
          fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "10px",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        className="psk-desc"
        style={{
          fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
          fontSize: "14px",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}
