"use client";

import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudyCard as CaseStudyCardType } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

const caseStudies: CaseStudyCardType[] = [
  {
    slug: "mbk",
    title: "MBK Early Years",
    oneLiner: "Designed onboarding workflows, SOPs, and an internal CRM for a £250K+ regulated business serving 14,000+ clients.",
    tags: ["Ops", "CRM design", "GDPR", "Systems"],
    metric: "40% reduction in onboarding friction",
    date: "Jan 2026 - Present",
  },
  {
    slug: "shasymitra",
    title: "ShasyMitra: Scaling an Agtech Startup from 0 to £870K ARR",
    oneLiner: "Architected a hybrid \"phygital\" agtech ecosystem combining vernacular advisory apps with physical retail hubs to serve 21,000+ farmers across 5 states.",
    tags: ["0-to-1", "Marketplace", "Ecosystem Strategy", "Phygital"],
    thumbnail: "/images/shasymitra-card.png.png",
    date: "Mar 2022 - Jun 2024",
    bold: true,
  },
  {
    slug: "payswift",
    title: "Payswift",
    oneLiner: "Optimised merchant onboarding and payment monitoring across PSD2, KYC, and AML workflows for 50+ SMB clients.",
    tags: ["Payments", "Compliance", "Onboarding", "SQL"],
    metric: "£500K+ revenue recovered",
    date: "Jun 2020 - Feb 2021",
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" style={{ padding: "48px 0", borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
      {/* Animated circles */}
      <div className="circle-big" style={{
        position: "absolute",
        width: "280px",
        height: "280px",
        top: "60px",
        left: "-80px",
        borderRadius: "50%",
        background: "#E84714",
        opacity: 0.15,
        zIndex: 0,
        animation: "floatA 7s ease-in-out infinite",
      }} />

      <div className="circle-small" style={{
        position: "absolute",
        width: "160px",
        height: "160px",
        bottom: "100px",
        right: "-40px",
        borderRadius: "50%",
        background: "#E84714",
        opacity: 0.12,
        zIndex: 0,
        animation: "floatB 9s ease-in-out infinite",
        animationDelay: "1s",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <h2
          className={isVisible ? "animate-in-scroll" : ""}
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
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Selected Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "stretch",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
          className="case-study-grid"
        >
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} {...cs} />
          ))}
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

        @media (max-width: 900px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .case-study-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
