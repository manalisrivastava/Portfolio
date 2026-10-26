"use client";

import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudyCard as CaseStudyCardType } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

const caseStudies: CaseStudyCardType[] = [
  {
    slug: "mbk",
    title: "MBK: Replacing scattered client workflows with one CRM",
    oneLiner: "Led a CRM transformation for a regulated consultancy, from discovery to rollout.",
    tags: ["Digital Transformation", "Delivery Governance"],
    thumbnail: "/images/MBK-card-new.png.png",
    date: "Jan 2026 – Aug 2026",
    bold: true,
  },
  {
    slug: "shasymitra",
    title: "ShasyMitra: Earning farmers' trust before asking for a sale",
    oneLiner: "Founded and built an AI-enabled advisory and payments platform for farmers in India.",
    tags: ["0-to-1", "Applied AI"],
    thumbnail: "/images/shasymitra-card.png.png",
    date: "Mar 2022 – Jun 2024",
    bold: true,
  },
  {
    slug: "asha",
    title: "Asha: Launching a programme for rural women entrepreneurs",
    oneLiner: "Led the launch and digital rollout of an entrepreneurship programme for a non-profit.",
    tags: ["Programme Delivery", "Digital Adoption"],
    thumbnail: "/images/asha-card-placeholder.png",
    date: "Jan 2021 – Feb 2022",
    bold: false,
  },
  {
    slug: "offpath",
    title: "Offpath: Finding the edge cases before they find you",
    oneLiner: "Built an open-source tool that finds edge cases in a feature spec, running on a local AI model.",
    tags: ["0-to-1", "Applied AI"],
    thumbnail: "/images/offpath-landing.png",
    date: "Aug 2026",
    bold: false,
  },
];

export default function CaseStudyGrid() {
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
    <section ref={sectionRef} id="work" style={{ padding: "48px 0", borderTop: "1px solid var(--color-border)" }}>
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
          Selected Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
            alignItems: "stretch",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease 0.08s, transform 0.65s ease 0.08s",
          }}
          className="case-study-grid"
        >
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} {...cs} />
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #work h2, .case-study-grid { transition: none !important; opacity: 1 !important; transform: none !important; }
        }
        @media (max-width: 768px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .case-study-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
