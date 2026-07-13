import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/Background";
import { Navbar, BackToTop } from "@/components/portfolio/Navbar";
import {
  Hero, About, Stats, Expertise, Experience, Projects,
  Skills, Certifications, Testimonials, Contact, Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Expertise />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
