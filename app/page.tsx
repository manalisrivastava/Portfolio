import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import PrimarySkills from "@/components/PrimarySkills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CaseStudyGrid />
      <PrimarySkills />
      <Contact />
    </main>
  );
}
