import fs from "fs";
import path from "path";
import matter from "gray-matter";
import AboutContent from "./AboutContent";

function parseAboutMd(content: string): { paragraphs: string[] } {
  const lines = content
    .replace(/^## About\s*/m, "")
    .trim()
    .split("\n");

  const paragraphs: string[] = [];
  let current = "";

  for (const line of lines) {
    if (line.trim() === "") {
      if (current.trim()) {
        paragraphs.push(current.trim());
        current = "";
      }
    } else {
      current += (current ? " " : "") + line.trim();
    }
  }
  if (current.trim()) paragraphs.push(current.trim());

  return { paragraphs };
}

export default function About() {
  const filePath = path.join(process.cwd(), "content", "about.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { paragraphs } = parseAboutMd(raw);

  const profileExists = fs.existsSync(
    path.join(process.cwd(), "public", "images", "profile.jpg")
  );

  return <AboutContent paragraphs={paragraphs} profileExists={profileExists} />;
}
