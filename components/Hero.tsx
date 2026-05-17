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
        .hero-line:nth-child(2) { animation-delay: 0.16s; }
        .hero-line:nth-child(3) { animation-delay: 0.27s; }
        .hero-line:nth-child(4) { animation-delay: 0.38s; }

        @keyframes photoReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-photo-col {
          opacity: 0;
          animation: photoReveal 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.15s;
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
        .circle-big   { animation: floatA 10s ease-in-out infinite; }
        .circle-small { animation: floatB 13s ease-in-out infinite; animation-delay: 2s; }

        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column !important;
            gap: 48px !important;
            padding: 40px 24px 60px !important;
          }
          .hero-photo-col {
            width: 260px !important;
            height: 320px !important;
            margin: 0 auto;
          }
          .hero-name { font-size: 48px !important; }
        }
      `}</style>

      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "64px",
        }}
      >
        <div
          className="hero-inner"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "40px 32px 80px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "80px",
          }}
        >

          {/* ── Left: text ── */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>

            <h1 className="hero-line hero-name" style={{
              fontFamily: "var(--font-instrument-serif, 'Instrument Serif', Georgia, serif)",
              fontSize: "72px",
              fontWeight: 400,
              color: "var(--color-text)",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              marginBottom: "24px",
            }}>
              Hi, I&apos;m Manali.
            </h1>

            <div className="hero-line" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
              {["PSPO I", "Product Manager", "UK"].map((badge) => (
                <span key={badge} style={{
                  fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  background: "var(--color-accent-soft)",
                  border: "1px solid rgba(196,98,45,0.25)",
                  borderRadius: "5px",
                  padding: "4px 11px",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}>
                  {badge}
                </span>
              ))}
            </div>

            <p className="hero-line" style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "16px",
              color: "var(--color-muted)",
              lineHeight: 1.75,
              marginBottom: "24px",
              maxWidth: "480px",
            }}>
              I build user-focused digital products by combining product strategy, customer insight, and structured problem-solving. With experience across fintech, AI-enabled platforms, operations, and regulated workflows. Turning complex business challenges into simple, scalable product decisions that drive adoption, efficiency, and revenue.
            </p>

            <div className="hero-line" style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
              {/* Row 1: both buttons side by side */}
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href="#work"
                  style={{
                    background: "var(--color-accent)",
                    color: "#fff",
                    padding: "10px 22px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 500,
                    textDecoration: "none",
                    fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
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
                    color: "var(--color-accent)",
                    padding: "10px 22px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 500,
                    textDecoration: "none",
                    fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                    border: "1.5px solid var(--color-accent)",
                    display: "inline-block",
                    background: "transparent",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent-soft)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Get in touch
                </a>
              </div>

              {/* Row 2: availability below */}
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                fontSize: "12px",
                color: "var(--color-muted)",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 }} />
                Open to roles in the UK
              </span>
            </div>
          </div>

          {/* ── Right: photo + static circles ── */}
          <div
            className="hero-photo-col"
            style={{
              flex: "0 0 auto",
              width: "340px",
              height: "420px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* Large circle — top-right */}
            <div className="circle-big" style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              top: "-32px",
              right: "-32px",
              borderRadius: "50%",
              background: "#C4622D",
              opacity: 0.18,
              zIndex: 0,
            }} />

            {/* Small circle — bottom-left */}
            <div className="circle-small" style={{
              position: "absolute",
              width: "180px",
              height: "180px",
              bottom: "-16px",
              left: "-16px",
              borderRadius: "50%",
              background: "#A8481E",
              opacity: 0.12,
              zIndex: 0,
            }} />

            {/* Photo */}
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "200px 200px 160px 160px",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              background: "var(--color-accent-soft)",
              boxShadow: "0 24px 64px rgba(196,98,45,0.15), 0 4px 16px rgba(0,0,0,0.07)",
            }}>
              <Image
                src="/images/profile.jpg"
                alt="Manali Srivastava"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center center",
                  mixBlendMode: "multiply",
                }}
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
