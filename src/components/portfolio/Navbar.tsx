import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, FileText, Menu, Moon, Sun, X } from "lucide-react";
import portraitAsset from "@/assets/sarfraaj-portrait.jpg.asset.json";

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-ink" />

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,94%)]">
        <div className="pill flex items-center justify-between pl-2 pr-2 py-2">
          <a href="#top" className="flex items-center gap-2 pl-1">
            <span className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-black/10 bg-ink">
              <img src={portraitAsset.url} alt="Sarfraaj Khan" className="h-full w-full object-cover" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink">Sarfraaj/2026</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-ink rounded-full hover:bg-black/5 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-black/10 bg-white/60"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] font-mono border border-black/10 hover:bg-black/5"
            >
              Index
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] font-mono bg-ink text-paper hover:opacity-90"
            >
              <FileText className="h-3.5 w-3.5" /> Resume
            </a>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 paper-card rounded-2xl p-2 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-ink hover:bg-black/5 rounded-lg"
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
      className="fixed bottom-6 right-6 z-50 h-12 w-12 grid place-items-center rounded-full bg-ink text-paper hover:scale-105 transition-transform"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
