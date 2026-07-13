import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Menu, X } from "lucide-react";

const NAV = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60]"
      >
        <div className="h-full w-full bg-gradient-to-r from-primary via-cyan to-accent" />
      </motion.div>

      <header
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,94%)] rounded-full transition-all duration-300 ${
          scrolled ? "glass shadow-[0_10px_40px_-10px_oklch(0.1_0.05_260/0.8)]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center font-bold text-primary-foreground shadow-[0_0_20px_oklch(0.68_0.2_255/0.6)]">
              S
            </div>
            <span className="font-display font-semibold tracking-tight text-sm md:text-base">
              Sarfraaj<span className="text-muted-foreground">.dev</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.68_0.2_255/0.7)] hover:shadow-[0_12px_32px_-8px_oklch(0.68_0.2_255/0.9)] transition-all"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden h-9 w-9 grid place-items-center rounded-full glass"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden px-5 pb-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 grid place-items-center rounded-full glass glow-border hover:scale-105 transition-transform"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
