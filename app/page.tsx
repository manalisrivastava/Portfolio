import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CaseStudyGrid />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
