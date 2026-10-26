import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

const CASE_STUDY_ORDER = ["mbk", "shasymitra", "asha", "offpath"];

function markdownToHtml(markdown: string): string {
  let html = markdown;

  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  html = html.split("\n\n").map((para) => {
    const trimmed = para.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<h") || trimmed.startsWith("<hr")) return trimmed;

    const lines = trimmed.split("\n");
    const isUnordered = lines.every((l) => l.trim() === "" || /^-\s/.test(l.trim()));
    if (isUnordered && lines.some((l) => /^-\s/.test(l.trim()))) {
      const items = lines
        .filter((l) => /^-\s/.test(l.trim()))
        .map((l) => `<li>${l.trim().replace(/^-\s/, "")}</li>`)
        .join("");
      return `<ul>${items}</ul>`;
    }
    const isOrdered = lines.every((l) => l.trim() === "" || /^\d+\.\s/.test(l.trim()));
    if (isOrdered && lines.some((l) => /^\d+\.\s/.test(l.trim()))) {
      const items = lines
        .filter((l) => /^\d+\.\s/.test(l.trim()))
        .map((l) => `<li>${l.trim().replace(/^\d+\.\s/, "")}</li>`)
        .join("");
      return `<ol>${items}</ol>`;
    }
    return `<p>${trimmed}</p>`;
  }).join("\n");

  return html;
}

interface CaseStudyData {
  title: string;
  role?: string;
  duration?: string;
  team?: string;
  heroImage?: string;
  content: string;
  [key: string]: unknown;
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
      <div style={{ padding: "120px 32px 40px", maxWidth: "740px", margin: "0 auto" }}>
        <h1>Case Study Not Found</h1>
        <Link href="/">← Back to home</Link>
      </div>
    );
  }

  const htmlContent = markdownToHtml(caseStudy.content);

  const currentIndex = CASE_STUDY_ORDER.indexOf(slug);
  const nextSlug = currentIndex >= 0 ? CASE_STUDY_ORDER[(currentIndex + 1) % CASE_STUDY_ORDER.length] : null;

  return (
    <>
      <style>{`
        .cs-wrap {
          max-width: 740px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .cs-header {
          padding: 100px 32px 48px;
          max-width: 740px;
          margin: 0 auto;
        }
        .cs-title {
          font-family: var(--font-instrument-serif, 'Instrument Serif', Georgia, serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--color-text);
          line-height: 1.2;
          margin-bottom: 28px;
          letter-spacing: -0.01em;
        }
        .cs-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--color-border);
        }
        .cs-meta-row {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 14px;
          color: var(--color-muted);
          line-height: 1.5;
        }
        .cs-meta-row strong {
          color: var(--color-text);
          font-weight: 600;
        }
        .cs-content {
          padding: 48px 32px 80px;
          max-width: 740px;
          margin: 0 auto;
        }
        .cs-content h2 {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-accent);
          margin-top: 52px;
          margin-bottom: 16px;
        }
        .cs-content h2:first-child { margin-top: 0; }
        .cs-content h3 {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text);
          margin-top: 28px;
          margin-bottom: 8px;
        }
        .cs-content p {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 16px;
          color: var(--color-text);
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .cs-content em { font-style: italic; color: var(--color-muted); }
        .cs-content strong { font-weight: 600; color: var(--color-text); }
        .cs-content ul, .cs-content ol {
          margin: 12px 0 20px 20px;
          line-height: 1.75;
        }
        .cs-content li {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 16px;
          color: var(--color-text);
          margin-bottom: 8px;
        }
        .cs-content a { color: var(--color-accent); text-decoration: underline; }
        .cs-hero-image {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          margin: 36px 0;
          border: 1px solid var(--color-border);
          position: relative;
          height: 340px;
          background: #F7F7F7;
        }
        .cs-image-caption {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 12px;
          color: var(--color-muted);
          text-align: center;
          margin-top: -12px;
          margin-bottom: 32px;
        }
        .cs-footer {
          padding: 48px 32px 80px;
          max-width: 740px;
          margin: 0 auto;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .cs-footer-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .cs-footer-link {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-accent);
          text-decoration: none;
        }
        .cs-footer-link:hover { opacity: 0.8; }
        .cs-contact-prompt {
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          font-size: 14px;
          color: var(--color-muted);
          text-align: center;
        }
        .cs-contact-prompt a { color: var(--color-accent); text-decoration: none; font-weight: 500; }
        @media (max-width: 768px) {
          .cs-header { padding: 90px 24px 40px; }
          .cs-title { font-size: 30px; }
          .cs-content { padding: 40px 24px 60px; }
          .cs-footer { padding: 40px 24px 60px; }
          .cs-wrap { padding: 0 24px; }
        }
      `}</style>

      {/* Header */}
      <div className="cs-header">
        <Link href="/" className="cs-footer-link" style={{ marginBottom: "32px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px" }}>
          ← Back to portfolio
        </Link>
        <h1 className="cs-title">{caseStudy.title}</h1>
        <div className="cs-meta">
          {caseStudy.role && <p className="cs-meta-row"><strong>Role</strong> · {caseStudy.role}</p>}
          {caseStudy.duration && <p className="cs-meta-row"><strong>Dates</strong> · {caseStudy.duration}</p>}
          {caseStudy.team && <p className="cs-meta-row"><strong>Team</strong> · {caseStudy.team}</p>}
        </div>
      </div>

      {/* Hero image */}
      {caseStudy.heroImage && (
        <div className="cs-wrap">
          <div className="cs-hero-image">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="cs-content">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>

      {/* Footer */}
      <div className="cs-footer">
        <div className="cs-footer-nav">
          <Link href="/" className="cs-footer-link">← Back to portfolio</Link>
          {nextSlug && (
            <Link href={`/work/${nextSlug}`} className="cs-footer-link">
              Next case study →
            </Link>
          )}
        </div>
        <p className="cs-contact-prompt">
          Working on something similar?{" "}
          <Link href="/#contact">Let&apos;s talk.</Link>
        </p>
      </div>
    </>
  );
}
