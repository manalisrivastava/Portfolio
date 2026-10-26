"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-muted);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 999px;
          transition: background 0.15s, color 0.15s;
          display: inline-block;
          white-space: nowrap;
        }
        .nav-link:hover {
          background: var(--color-accent);
          color: #fff;
        }
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--color-text);
        }
        .nav-mobile-menu {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 12px 16px 16px;
          border-top: 1px solid var(--color-border);
          background: rgba(255,255,255,0.97);
        }
        .nav-mobile-menu .nav-link {
          display: block;
          padding: 10px 16px;
        }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; align-items: center; justify-content: center; }
          .nav-mobile-menu { display: flex; }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-link { transition: none; }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 32px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--color-text)",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            Manali
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop-links" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {[
              ["About", "/#about"],
              ["Work", "/#work"],
              ["Built", "/#built"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="nav-mobile-menu">
            {[
              ["About", "/#about"],
              ["Work", "/#work"],
              ["Built", "/#built"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="nav-link" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
