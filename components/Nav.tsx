"use client";

import Link from "next/link";

export default function Nav() {
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
          border-radius: 6px;
          transition: background 0.15s, color 0.15s;
          display: inline-block;
        }
        .nav-link:hover {
          background: var(--color-accent);
          color: #fff;
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(250, 250, 247, 0.92)",
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
          <>
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  textDecoration: "none",
                }}
              >
                Manali Srivastava 👋
              </Link>

              <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                {[
                  ["Work", "/#work"],
                  ["About", "/#about"],
                  ["Contact", "/#contact"],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="nav-link">
                    {label}
                  </a>
                ))}
              </div>
            </>
        </div>
      </nav>
    </>
  );
}
