import Masthead from "@/components/Masthead";
import About from "@/components/About";
import Experience from "@/components/Experience";
import SkillTree from "@/components/SkillTree";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education"; 

export default function Home() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", minHeight: "100vh" }}>
      <Masthead />
      <About />
      <Experience />
      <SkillTree />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}