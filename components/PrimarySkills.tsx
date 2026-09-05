"use client";

import { useRef, useEffect, useState } from "react";

const skills = [
  {
    title: "Stakeholder Management",
    description: "I align cross-functional teams, manage competing priorities, and ensure every decision is grounded in shared context across engineering, design, and business.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="var(--color-accent-soft)" />
        <circle cx="20" cy="14" r="4" stroke="var(--color-accent)" strokeWidth="1.8" fill="none" />
        <circle cx="12" cy="18" r="3" stroke="var(--color-accent)" strokeWidth="1.6" fill="none" />
        <circle cx="28" cy="18" r="3" stroke="var(--color-accent)" strokeWidth="1.6" fill="none" />
        <path d="M8 29c0-3 2-4.5 4-4.5s3.5 1 4 2" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M24 26.5c.5-1 2-2 4-2s4 1.5 4 4.5" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M14 30c0-3.5 2.5-5.5 6-5.5s6 2 6 5.5" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "No Code",
    description: "I build and iterate on digital products using no-code tools, reducing time-to-market and validating ideas without engineering overhead.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="var(--color-accent-soft)" />
        <path d="M15 15l-5 5 5 5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 15l5 5-5 5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 13l-4 14" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "MVP",
    description: "I scope and ship minimum viable products that test real hypotheses fast, cutting waste and generating learnings before full investment.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="var(--color-accent-soft)" />
        <path d="M20 10l2.5 7h7.5l-6 4.5 2.5 7L20 25l-6.5 3.5 2.5-7L10 17h7.5L20 10z" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Product Management",
    description: "I own the full product lifecycle, from discovery to delivery, balancing user needs, technical constraints, and business goals.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="var(--color-accent-soft)" />
        <rect x="10" y="10" width="9" height="9" rx="2" stroke="var(--color-accent)" strokeWidth="1.8" fill="none" />
        <rect x="21" y="10" width="9" height="9" rx="2" stroke="var(--color-accent)" strokeWidth="1.8" fill="none" />
        <rect x="10" y="21" width="9" height="9" rx="2" stroke="var(--color-accent)" strokeWidth="1.8" fill="none" />
        <rect x="21" y="21" width="9" height="9" rx="2" stroke="var(--color-accent)" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
  {
    title: "Product Discovery",
    description: "I run structured discovery to surface the right problems, using interviews, journey mapping, and rapid prototyping to validate before building.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="var(--color-accent-soft)" />
        <circle cx="18" cy="18" r="7" stroke="var(--color-accent)" strokeWidth="1.8" fill="none" />
        <path d="M23 23l5.5 5.5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Prioritisation",
    description: "I make clear, defensible decisions about what to build next using frameworks like RICE and opportunity scoring to align teams around the highest-impact work.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="var(--color-accent-soft)" />
        <path d="M12 14h16" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 20h11" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 26h7" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "96px 0", borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}
    >
      {/* Floating circles */}
      <div style={{
        position: "absolute", width: "260px", height: "260px",
        top: "-60px", right: "-60px", borderRadius: "50%",
        background: "#E84714", opacity: 0.08, zIndex: 0,
        animation: "floatA 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: "140px", height: "140px",
        bottom: "40px", left: "-40px", borderRadius: "50%",
        background: "#E84714", opacity: 0.07, zIndex: 0,
        animation: "floatB 10s ease-in-out infinite",
        animationDelay: "1.5s",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
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
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Primary Skills
        </h2>

        <div
          className="primary-skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.title}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                padding: "28px",
                borderRadius: "16px",
              }}
              className="primary-skill-card"
            >
              <div style={{ flexShrink: 0, marginTop: "2px" }}>{skill.icon}</div>
              <div>
                <h3
                  className="psk-title"
                  style={{
                    fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                    fontSize: "17px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {skill.title}
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
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
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
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(232,71,20,0.12);
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
          .primary-skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
