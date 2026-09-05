import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headings
  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Tables — only match lines that actually start with |
  html = html.replace(/^(\|[^\n]+\n?)+/gm, (match) => {
    const rows = match.trim().split("\n").filter((r) => r.trim());
    let out = "<table><thead>";
    let headerDone = false;
    for (const row of rows) {
      if (/^\|[\s\-:|]+\|$/.test(row.trim())) {
        if (!headerDone) { out += "</thead><tbody>"; headerDone = true; }
        continue;
      }
      const cells = row.split("|").slice(1, -1);
      if (!headerDone) {
        out += "<tr>" + cells.map((c) => `<th>${c.trim()}</th>`).join("") + "</tr>";
      } else {
        out += "<tr>" + cells.map((c) => `<td>${c.trim()}</td>`).join("") + "</tr>";
      }
    }
    if (!headerDone) out += "</thead><tbody>";
    out += "</tbody></table>";
    return out;
  });

  // Paragraphs and lists
  html = html.split("\n\n").map((para) => {
    const trimmed = para.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<h") || trimmed.startsWith("<table") || trimmed.startsWith("<hr")) {
      return trimmed;
    }

    const lines = trimmed.split("\n");

    // Ordered list
    const isOrdered = lines.every((l) => l.trim() === "" || /^\d+\.\s/.test(l.trim()));
    if (isOrdered && lines.some((l) => /^\d+\.\s/.test(l.trim()))) {
      const items = lines
        .filter((l) => /^\d+\.\s/.test(l.trim()))
        .map((l) => `<li>${l.trim().replace(/^\d+\.\s/, "")}</li>`)
        .join("");
      return `<ol>${items}</ol>`;
    }

    // Unordered list
    const isUnordered = lines.every((l) => l.trim() === "" || /^-\s/.test(l.trim()));
    if (isUnordered && lines.some((l) => /^-\s/.test(l.trim()))) {
      const items = lines
        .filter((l) => /^-\s/.test(l.trim()))
        .map((l) => `<li>${l.trim().replace(/^-\s/, "")}</li>`)
        .join("");
      return `<ul>${items}</ul>`;
    }

    return `<p>${trimmed}</p>`;
  }).join("\n");

  return html;
}

interface CaseStudyData {
  title: string;
  subtitle?: string;
  content: string;
  heroImage?: string;
  [key: string]: any;
}

async function getCaseStudy(slug: string): Promise<CaseStudyData | null> {
  try {
    const filePath = path.join(process.cwd(), "content", "case-studies", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return { ...data, content, title: data.title || slug } as CaseStudyData;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "case-studies");
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(".md", "") }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return (
      <div style={{ padding: "40px 32px", maxWidth: "1100px", margin: "0 auto" }}>
        <h1>Case Study Not Found</h1>
        <Link href="/">← Back to home</Link>
      </div>
    );
  }

  const htmlContent = markdownToHtml(caseStudy.content);

  // Split content: Executive Summary goes before the image, rest after
  let contentBefore = htmlContent;
  let contentAfter = '';
  if (caseStudy.heroImage) {
    const firstH2End = htmlContent.indexOf('</h2>');
    const secondH2Start = htmlContent.indexOf('<h2>', firstH2End + 5);
    if (secondH2Start > -1) {
      contentBefore = htmlContent.slice(0, secondH2Start);
      contentAfter = htmlContent.slice(secondH2Start);
    }
  }

  return (
    <>
      <style>{`
        .case-study-header {
          padding: 80px 32px 60px;
          max-width: 1100px;
          margin: 0 auto;
          border-bottom: 1px solid var(--color-border);
        }
        .case-study-title {
          font-family: var(--font-instrument-serif, 'Instrument Serif', Georgia, serif);
          font-size: 48px;
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .case-study-subtitle {
          font-size: 18px;
          color: var(--color-muted);
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .case-study-meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 24px;
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid var(--color-border);
        }
        .meta-item { font-size: 13px; }
        .meta-label { color: var(--color-muted); font-weight: 500; margin-bottom: 4px; }
        .meta-value { color: var(--color-text); font-weight: 600; font-size: 14px; line-height: 1.4; }
        .case-study-content {
          padding: 60px 32px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .case-study-content h1 {
          font-family: var(--font-instrument-serif, 'Instrument Serif', Georgia, serif);
          font-size: 36px;
          font-weight: 400;
          color: var(--color-text);
          margin-top: 60px;
          margin-bottom: 24px;
          line-height: 1.2;
        }
        .case-study-content h1:first-child { margin-top: 0; }
        .case-study-content h2 {
          font-family: var(--font-instrument-serif, 'Instrument Serif', Georgia, serif);
          font-size: 28px;
          font-weight: 400;
          color: var(--color-text);
          margin-top: 56px;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .case-study-content h3 {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 18px;
          font-weight: 600;
          color: var(--color-text);
          margin-top: 36px;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .case-study-content p {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 16px;
          color: var(--color-text);
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .case-study-content strong {
          font-weight: 600;
          color: var(--color-accent);
        }
        .case-study-content em { font-style: italic; }
        .case-study-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          overflow: hidden;
          font-size: 14px;
        }
        .case-study-content th {
          background: var(--color-accent-soft);
          font-weight: 600;
          color: var(--color-accent);
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--color-border);
        }
        .case-study-content td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--color-border);
          color: var(--color-text);
          line-height: 1.5;
        }
        .case-study-content tr:last-child td { border-bottom: none; }
        .case-study-content ul,
        .case-study-content ol {
          margin: 16px 0 16px 24px;
          line-height: 1.75;
        }
        .case-study-content li {
          margin-bottom: 10px;
          font-size: 16px;
          color: var(--color-text);
        }
        .case-study-content a {
          color: var(--color-accent);
          text-decoration: underline;
        }
        .case-study-content a:hover { opacity: 0.8; }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--color-accent);
          text-decoration: none;
          margin-bottom: 60px;
          cursor: pointer;
        }
        .back-link:hover { opacity: 0.8; }
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
          .case-study-header { padding: 60px 24px 40px; }
          .case-study-title { font-size: 32px; }
          .case-study-content { padding: 40px 24px; }
          .case-study-meta { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Background blobs */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "320px", height: "320px", top: "80px", left: "-100px", borderRadius: "50%", background: "#E84714", opacity: 0.12, animation: "floatA 7s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "180px", height: "180px", bottom: "120px", right: "-50px", borderRadius: "50%", background: "#E84714", opacity: 0.10, animation: "floatB 9s ease-in-out infinite", animationDelay: "1s" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="case-study-header">
          <Link href="/" className="back-link">← Back to portfolio</Link>
          <h1 className="case-study-title">{caseStudy.title}</h1>
          {caseStudy.subtitle && <p className="case-study-subtitle">{caseStudy.subtitle}</p>}

          <div className="case-study-meta">
            {caseStudy.role && (
              <div className="meta-item">
                <div className="meta-label">Role</div>
                <div className="meta-value">{caseStudy.role}</div>
              </div>
            )}
            {caseStudy.duration && (
              <div className="meta-item">
                <div className="meta-label">Duration</div>
                <div className="meta-value">{caseStudy.duration}</div>
              </div>
            )}
            {caseStudy.team && (
              <div className="meta-item">
                <div className="meta-label">Team</div>
                <div className="meta-value">{caseStudy.team}</div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="case-study-content">
          <div dangerouslySetInnerHTML={{ __html: contentBefore }} />
          {caseStudy.heroImage && contentAfter && (
            <div style={{ margin: "40px 0" }}>
              <div style={{
                maxWidth: "680px",
                margin: "0 auto",
                position: "relative",
                height: "360px",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#F7F7F7",
                border: "1px solid var(--color-border)",
              }}>
                <Image
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                  priority
                />
              </div>
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: contentAfter }} />
        </div>

        {/* Footer */}
        <div style={{ padding: "60px 32px", maxWidth: "1100px", margin: "0 auto", borderTop: "1px solid var(--color-border)", textAlign: "center" }}>
          <Link href="/" className="back-link" style={{ justifyContent: "center" }}>← Back to portfolio</Link>
        </div>
      </div>
    </>
  );
}
