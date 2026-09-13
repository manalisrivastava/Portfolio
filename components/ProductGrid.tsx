"use client";

import ProductCard, { type ProductCardData } from "./ProductCard";
import { useEffect, useRef, useState } from "react";

const products: ProductCardData[] = [
  {
    slug: "offpath",
    name: "Offpath",
    description:
      "Describe a feature. Uncover the edge cases you missed. Powered by a local AI model that runs entirely on your machine. No API keys, no usage limits, and no data leaving your computer. Full control, as much as you want.",
    thumbnail: "/images/offpath-landing.png",
    thumbnailWidth: 1280,
    thumbnailHeight: 570,
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="products" style={{ padding: "48px 0", borderTop: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
      <div className="circle-big" style={{
        position: "absolute",
        width: "260px",
        height: "260px",
        top: "40px",
        right: "-90px",
        borderRadius: "50%",
        background: "#E84714",
        opacity: 0.13,
        zIndex: 0,
        animation: "floatA 8s ease-in-out infinite",
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
          Products
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
