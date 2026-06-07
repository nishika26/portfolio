import Nav from "@/components/Nav";
import Summary from "@/components/Summary";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
 
export default function Home() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Nav />
      <Summary />
      <Work /> 
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
