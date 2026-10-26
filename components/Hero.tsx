"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-line {
          opacity: 0;
          animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .hero-line:nth-child(1) { animation-delay: 0.05s; }
        .hero-line:nth-child(2) { animation-delay: 0.18s; }
        .hero-line:nth-child(3) { animation-delay: 0.30s; }

        @keyframes photoReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-photo-col {
          opacity: 0;
          animation: photoReveal 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.15s;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        .hero-card {
          animation: floatCard 4s ease-in-out infinite;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .hero-products-wrap {
          position: relative;
          display: inline-block;
        }
        .hero-products-underline {
          position: absolute;
          left: -18px;
          top: -8px;
          width: calc(100% + 30px);
          height: calc(100% + 20px);
          pointer-events: none;
          overflow: visible;
        }

        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column !important;
            gap: 56px !important;
            padding: 40px 24px 60px !important;
          }
          .hero-photo-col {
            width: 100% !important;
            height: 380px !important;
          }
          .hero-name { font-size: 44px !important; line-height: 1.12 !important; }
        }
      `}</style>

      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "64px" }}>
        <div
          className="hero-inner"
          style={{
            maxWidth: "1100px", margin: "0 auto", padding: "40px 32px 80px",
            width: "100%", display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "48px",
          }}
        >

          {/* ── Left: text ── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>

            <h1 className="hero-line hero-name" style={{
              fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
              fontSize: "72px", fontWeight: 400, color: "var(--color-text)",
              lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: "20px",
            }}>
              Hi, I&apos;m{" "}
              <span style={{ color: "var(--color-accent)" }}>Manali</span>
            </h1>

            <p className="hero-line" style={{
              fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
              fontSize: "58px", fontWeight: 400, color: "var(--color-text)",
              lineHeight: 1.1, marginBottom: "40px",
            }}>
              I turn messy problems into{" "}
              <span
                className="hero-products-wrap"
                style={{ fontStyle: "italic" }}
              >
                products
                <svg
                  className="hero-products-underline"
                  viewBox="0 0 240 100"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 16,43 C 10,16 65,3 118,8 C 168,3 226,16 230,52 C 234,78 210,92 118,92 C 65,94 8,80 16,49"
                    stroke="#E84714"
                    strokeWidth="4.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}users actually trust.
            </p>

            <div className="hero-line" style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href="#work"
                  style={{
                    background: "var(--color-accent)", color: "#fff",
                    padding: "13px 32px", borderRadius: "100px",
                    fontSize: "14px", fontWeight: 500, textDecoration: "none",
                    fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  See my work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="#contact"
                  style={{
                    color: "var(--color-accent)", padding: "13px 32px", borderRadius: "100px",
                    fontSize: "14px", fontWeight: 500, textDecoration: "none",
                    fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                    border: "1.5px solid var(--color-accent)", display: "inline-block",
                    background: "transparent", transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent-soft)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Get in touch
                </a>
              </div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                fontSize: "12px", color: "var(--color-muted)",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 }} />
                Open to roles in the UK
              </span>
            </div>
          </div>

          {/* ── Right: photo + floating cards ── */}
          <div
            className="hero-photo-col"
            style={{ flex: "0 0 auto", width: "500px", height: "520px", position: "relative", flexShrink: 0 }}
          >
            {/* Illustration — already contains the floating cards baked in */}
            <Image
              src="/images/hero.illustration.png.png"
              alt="Manali Srivastava — product manager illustration"
              fill
              style={{ objectFit: "contain", objectPosition: "center center" }}
              priority
            />

          </div>

        </div>
      </section>
    </>
  );
}
