export type CaseStudyCard = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  thumbnail?: string;
  metric?: string;
};

export type CaseStudyFrontmatter = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  team: string;
  tags: string[];
  order: number;
};

export type SkillGroup = {
  title: string;
  items: string[];
};
