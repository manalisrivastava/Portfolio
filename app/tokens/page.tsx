export default function TokensPage() {
  const colors = [
    { name: "--color-bg", hex: "#FAFAF7", label: "Background" },
    { name: "--color-surface", hex: "#FFFFFF", label: "Surface" },
    { name: "--color-text", hex: "#1A1A1A", label: "Text" },
    { name: "--color-text-muted", hex: "#5C5C5C", label: "Text Muted" },
    { name: "--color-border", hex: "#E5E5E0", label: "Border" },
    { name: "--color-accent", hex: "#C4622D", label: "Accent (Burnt Sienna)" },
    { name: "--color-accent-soft", hex: "#F5E9E2", label: "Accent Soft" },
  ];

  const type = [
    { label: "Serif — Instrument Serif", family: "'Instrument Serif', Georgia, serif", sample: "Building at the intersection of payments, compliance, and AI." },
    { label: "Sans — Inter", family: "'Inter', system-ui, sans-serif", sample: "Co-founder turned PM. Shipped an AI-enabled platform from 0 → £300K+ ARR." },
  ];

  const spacing = [
    { token: "--space-1", value: "4px" },
    { token: "--space-2", value: "8px" },
    { token: "--space-3", value: "12px" },
    { token: "--space-4", value: "16px" },
    { token: "--space-6", value: "24px" },
    { token: "--space-8", value: "32px" },
    { token: "--space-12", value: "48px" },
    { token: "--space-16", value: "64px" },
    { token: "--space-24", value: "96px" },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "48px 32px", maxWidth: "1100px", margin: "0 auto", background: "#FAFAF7", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "8px", color: "#1A1A1A" }}>Design Token Swatches</h1>
      <p style={{ color: "#5C5C5C", marginBottom: "48px", fontSize: "14px" }}>Review before proceeding — visit <code>/tokens</code> in the dev server.</p>

      {/* Colors */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "20px", color: "#1A1A1A", textTransform: "uppercase", letterSpacing: "0.05em" }}>Colors</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
          {colors.map((c) => (
            <div key={c.name} style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #E5E5E0", background: "#fff" }}>
              <div style={{ height: "80px", background: c.hex, border: c.hex === "#FFFFFF" ? "1px solid #E5E5E0" : "none" }} />
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontWeight: 600, fontSize: "13px", color: "#1A1A1A" }}>{c.label}</div>
                <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#5C5C5C", marginTop: "2px" }}>{c.hex}</div>
                <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#999", marginTop: "2px" }}>{c.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "20px", color: "#1A1A1A", textTransform: "uppercase", letterSpacing: "0.05em" }}>Typography</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {type.map((t) => (
            <div key={t.label} style={{ padding: "24px", background: "#fff", borderRadius: "8px", border: "1px solid #E5E5E0" }}>
              <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#5C5C5C", marginBottom: "12px" }}>{t.label}</div>
              <p style={{ fontFamily: t.family, fontSize: "22px", color: "#1A1A1A", margin: 0, lineHeight: 1.4 }}>{t.sample}</p>
            </div>
          ))}
          <div style={{ padding: "24px", background: "#fff", borderRadius: "8px", border: "1px solid #E5E5E0" }}>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#5C5C5C", marginBottom: "12px" }}>Serif type scale (heading sizes)</div>
            {["48px", "36px", "28px", "22px", "18px"].map((size) => (
              <p key={size} style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: size, color: "#1A1A1A", margin: "0 0 8px", lineHeight: 1.2 }}>Manali Srivastava — {size}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "20px", color: "#1A1A1A", textTransform: "uppercase", letterSpacing: "0.05em" }}>Spacing Scale</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {spacing.map((s) => (
            <div key={s.token} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#5C5C5C", width: "100px" }}>{s.token}</div>
              <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#999", width: "40px" }}>{s.value}</div>
              <div style={{ height: "16px", background: "#C4622D", width: s.value, borderRadius: "2px" }} />
            </div>
          ))}
        </div>
      </section>

      {/* Accent usage preview */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "12px", fontWeight: 600, marginBottom: "20px", color: "#1A1A1A", textTransform: "uppercase", letterSpacing: "0.05em" }}>Accent in context</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <button style={{ background: "#C4622D", color: "#fff", padding: "12px 24px", borderRadius: "8px", border: "none", fontFamily: "system-ui", fontWeight: 500, cursor: "pointer", fontSize: "15px" }}>
            See my work →
          </button>
          <button style={{ background: "transparent", color: "#C4622D", padding: "12px 24px", borderRadius: "8px", border: "1.5px solid #C4622D", fontFamily: "system-ui", fontWeight: 500, cursor: "pointer", fontSize: "15px" }}>
            Get in touch
          </button>
          <span style={{ background: "#F5E9E2", color: "#C4622D", padding: "4px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: 500, display: "inline-flex", alignItems: "center" }}>
            0-to-1
          </span>
          <span style={{ background: "#F5E9E2", color: "#C4622D", padding: "4px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: 500, display: "inline-flex", alignItems: "center" }}>
            AI product
          </span>
        </div>
      </section>

      <div style={{ padding: "16px", background: "#F5E9E2", borderRadius: "8px", borderLeft: "3px solid #C4622D" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#C4622D", fontWeight: 500 }}>
          ✓ Review these tokens. If anything needs changing (colours, fonts, spacing), say so now. Once approved, I'll build the full site.
        </p>
      </div>
    </div>
  );
}
