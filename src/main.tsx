import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AnimatedBackground } from "@/components/portfolio/Background";
import { BackToTop, Navbar } from "@/components/portfolio/Navbar";
import {
  About,
  Certifications,
  Contact,
  Expertise,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
  Stats,
  Testimonials,
} from "@/components/portfolio/Sections";
import "./styles.css";

function PortfolioApp() {
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>,
);