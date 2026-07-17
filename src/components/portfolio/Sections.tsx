import { motion } from "framer-motion";
import {
  Download, Mail, Cloud, Shield, Server, Network, Lock, Monitor,
  Users, CheckCircle2, Briefcase, GraduationCap, Award, Linkedin,
  Phone, MapPin, Building2, Layers, Send, ArrowUpRight, Sparkles,
  Terminal, Database, Globe,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import portraitAsset from "@/assets/sarfraaj-portrait.jpg.asset.json";

const AVATAR = portraitAsset.url;

// ---------- HERO ----------
export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 pill px-3 py-1.5 mb-10 md:mb-14"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink">
            Available · Q1 2026
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-black leading-[0.92] tracking-[-0.05em] text-[3.2rem] sm:text-6xl md:text-7xl lg:text-[7.2rem] text-ink"
            >
              IT engineer
              <br />
              keeping{" "}
              <span className="font-italic-serif text-lime font-normal italic">
                systems,
              </span>
              <br />
              networks &amp;
              <br />
              people online.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-xl text-[15px] md:text-base text-muted-foreground leading-relaxed"
            >
              I&apos;m <span className="text-ink font-medium">Sarfraaj</span> — an IT
              Support Engineer with 3.8+ years across Microsoft 365, Azure Administration,
              Windows Server, endpoint security, networking and enterprise
              hardware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full pl-5 pr-2 py-2 text-sm font-medium bg-ink text-paper hover:opacity-90 transition"
              >
                See the work
                <span className="h-7 w-7 rounded-full bg-paper/15 grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="#contact"
                className="text-[13px] uppercase tracking-[0.2em] font-mono text-ink hover:text-lime transition"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="paper-card rounded-[28px] p-3 relative">
              <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-br from-rose-100 via-white to-sky-100 aspect-[4/5]">
                <img
                  src={AVATAR}
                  alt="Sarfraaj Khan portrait"
                  className="w-full h-full object-cover"
                />
                {/* now chip */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-3 left-3 pill px-3 py-1.5 flex items-center gap-2"
                >
                  <div className="flex flex-col leading-none">
                    <span className="micro-label">Now</span>
                    <span className="text-[13px] font-medium text-ink">Keeping IT up</span>
                  </div>
                </motion.div>
                {/* years chip */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-3 right-3 pill px-3 py-1.5 flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink">3.8 yrs · craft</span>
                </motion.div>
                <div className="absolute bottom-3 left-3">
                  <div className="micro-label">Engineer · Portrait</div>
                  <div className="font-display font-bold text-ink text-lg leading-none mt-1">Sarfraaj K.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-black/10">
          <div className="flex items-center gap-3">
            <span className="micro-label">Scroll</span>
            <span className="h-px w-14 bg-ink/40" />
          </div>
          <div className="micro-label">Gurugram, Haryana · Remote friendly</div>
        </div>

        {/* Marquee tech row */}
        <LogoMarquee />
      </div>
    </section>
  );
}

function LogoMarquee() {
  const items = [
    "Microsoft 365", "Azure", "Windows Server", "Active Directory",
    "Intune", "Entra ID", "Google Workspace", "EDR / EPP",
    "Firewall", "VPN", "macOS", "Windows 11",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="mt-16 relative overflow-hidden">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
            <span className="font-display font-bold text-2xl md:text-3xl text-ink/70">{t}</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

// ---------- SECTION HEADER ----------
function SectionHeader({
  index, eyebrow, title, description,
}: {
  index: string; eyebrow: string; title: React.ReactNode; description?: string;
}) {
  return (
    <div className="mb-14">
      <div className="micro-label mb-6">/ {index} — {eyebrow}</div>
      <h2 className="font-display font-black tracking-[-0.045em] leading-[0.96] text-4xl md:text-6xl lg:text-[4.5rem] text-ink max-w-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

// ---------- ABOUT ----------
export function About() {
  const chips = [
    { k: "Product", v: "IT Ops · Endpoint · Cloud" },
    { k: "Support", v: "L1 · L2 · Remote" },
    { k: "Cloud", v: "M365 · Azure · Workspace" },
    { k: "Security", v: "EDR · Firewall · VPN" },
    { k: "Tools", v: "Intune · AD · PowerShell" },
    { k: "Based in", v: "Gurugram, IN · Remote" },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={
            <>
              Reliable IT that just works —{" "}
              <span className="font-italic-serif italic font-normal text-lime">from</span>{" "}
              tickets to strategy.
            </>
          }
          description="From daily L1/L2 support to Microsoft 365 & Azure administration, endpoint security rollouts and vendor coordination — I own the whole lifecycle of the systems people rely on."
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div className="paper-card rounded-3xl p-3">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 via-white to-sky-100">
              <img src={AVATAR} alt="Sarfraaj Khan" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3">
              {chips.map((c) => (
                <div key={c.k} className="paper-card rounded-2xl p-4">
                  <div className="micro-label">{c.k}</div>
                  <div className="mt-2 font-medium text-ink text-sm">{c.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 paper-card rounded-3xl p-6">
              <div className="micro-label mb-3">Experience</div>
              <div className="flex items-baseline gap-4">
                <div className="font-display font-black text-6xl md:text-7xl text-ink leading-none">3.8+</div>
                <div className="text-sm text-muted-foreground max-w-xs">
                  Years supporting enterprise environments across Microsoft 365, Azure,
                  Windows Server, macOS and networking.
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {[
                  "Shipped EDR & endpoint security across full org fleet",
                  "500+ devices managed across two enterprise programs",
                  "Owns vendor management, licensing & IT procurement",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- STATS ----------
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1500;
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  const stats = [
    { value: 4, suffix: "+", label: "Years in enterprise IT" },
    { value: 1000, suffix: "+", label: "Tickets resolved" },
    { value: 500, suffix: "+", label: "Endpoints managed" },
    { value: 99, suffix: "%", label: "User satisfaction" },
  ];
  return (
    <section className="relative px-6 pb-8">
      <div className="max-w-[1200px] mx-auto paper-card rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display font-black text-4xl md:text-5xl text-ink leading-none">
              <Counter end={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 micro-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- EXPERTISE ----------
export function Expertise() {
  const groups = [
    { n: "01", icon: Cloud, title: "Cloud & Identity",
      items: ["Microsoft 365", "Azure Administration", "Entra ID", "Google Workspace", "Licensing", "MFA / Conditional Access"] },
    { n: "02", icon: Server, title: "Systems & Servers",
      items: ["Windows Server", "Active Directory", "Group Policy", "Windows 10 / 11", "macOS", "Software Deployment"] },
    { n: "03", icon: Network, title: "Networking",
      items: ["TCP/IP · DNS · DHCP", "VPN", "Firewall", "Routing & Switching", "PoE / Unmanaged", "Wi-Fi"] },
    { n: "04", icon: Shield, title: "Security",
      items: ["Endpoint Security", "EDR / EPP", "Vulnerability Scanning", "Patch Management", "Incident Response"] },
    { n: "05", icon: Monitor, title: "End-User Support",
      items: ["L1 / L2 Support", "Hardware Troubleshooting", "Printer Config", "Driver Management", "Ticketing", "Remote Support"] },
    { n: "06", icon: Users, title: "IT Operations",
      items: ["Asset Management", "Vendor Management", "IT Procurement", "AV / VC", "CCTV & Biometric", "Documentation"] },
  ];
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title={
            <>
              Six domains,{" "}
              <span className="font-italic-serif italic font-normal text-lime">one</span>{" "}
              craft.
            </>
          }
          description="A working toolkit built across 3.8+ years supporting enterprise fleets end-to-end."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="paper-card rounded-3xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="micro-label">{g.n}</div>
                <div className="h-10 w-10 rounded-full bg-ink text-paper grid place-items-center">
                  <g.icon className="h-4 w-4" />
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl text-ink mb-4">{g.title}</h3>
              <ul className="space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-ink/40" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- EXPERIENCE ----------
export function Experience() {
  const jobs = [
    {
      idx: "01",
      role: "IT Executive",
      company: "Prasatti Group Sales and Services",
      period: "May 2024 — Present",
      current: true,
      summary:
        "Own end-to-end IT operations: Microsoft 365 & Azure administration, endpoint security (EDR / EPP Cloud), Google Workspace, vendor management, meeting room tech and L1/L2 support.",
      tags: ["M365", "Azure", "EDR", "Vendor Mgmt", "Google Workspace"],
    },
    {
      idx: "02",
      role: "Desktop Support Engineer · L1 & L2",
      company: "Team Computers Pvt Ltd",
      period: "Dec 2022 — Apr 2024",
      current: false,
      summary:
        "Ran desktop, laptop and printer support at scale — including MacBook, iPad, iOS & Android troubleshooting, asset inventory, biometric attendance, firewall & PoE switch support.",
      tags: ["Desktop", "MacBook", "Printers", "Firewall", "PoE"],
    },
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title={
            <>
              3.8+ years across{" "}
              <span className="font-italic-serif italic font-normal text-lime">SaaS,</span>{" "}
              services & enterprise IT.
            </>
          }
          description="Long-running roles supporting growing teams — from a national IT services provider to an in-house IT executive seat."
        />
        <div className="space-y-4">
          {jobs.map((j, i) => (
            <motion.div
              key={j.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="paper-card rounded-3xl p-6 md:p-8 grid md:grid-cols-[80px_1fr_auto] gap-6 items-start hover:-translate-y-0.5 transition-transform"
            >
              <div className="micro-label pt-2">{j.idx}</div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-ink">{j.role}</h3>
                  {j.current && (
                    <span className="micro-label text-lime flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Current
                    </span>
                  )}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{j.company}</div>
                <p className="mt-4 text-sm md:text-[15px] text-muted-foreground max-w-2xl leading-relaxed">
                  {j.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {j.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border border-black/10 text-ink/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="micro-label md:text-right whitespace-nowrap">{j.period}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROJECTS ----------
export function Projects() {
  const projects = [
    { n: "01", title: "Microsoft 365 Administration", tag: "M365", icon: Cloud,
      overview: "Tenant administration across users, licensing, Exchange, SharePoint and Teams for the full org.",
      outcome: "Standardized licensing · streamlined onboarding by 60%." },
    { n: "02", title: "EDR / EPP Cloud Deployment", tag: "Security", icon: Shield,
      overview: "Rolled out endpoint detection and response across the fleet with policy tuning and incident playbooks.",
      outcome: "Full visibility across every endpoint · incidents contained in minutes." },
    { n: "03", title: "Azure Identity & Licensing", tag: "Azure", icon: Layers,
      overview: "Azure administration — user lifecycle, license assignment, mail/Office-365 solution and access.",
      outcome: "Clean joiner/mover/leaver flow · zero orphan accounts." },
    { n: "04", title: "Printer Infrastructure Overhaul", tag: "Infra", icon: Terminal,
      overview: "Centralised print — driver standardisation, network + USB printers, Brady & touch printers.",
      outcome: "~80% fewer print tickets · faster office moves." },
    { n: "05", title: "Meeting Room & AV Standardisation", tag: "AV", icon: Monitor,
      overview: "Projector, video conferencing and biometric configuration across floors — event & meeting management.",
      outcome: "Consistent room experience · fewer AV disruptions." },
    { n: "06", title: "Google Workspace Administration", tag: "Workspace", icon: Globe,
      overview: "Identity, groups, security posture and mail routing in Workspace alongside M365.",
      outcome: "Cleaner tenant · stronger security baseline." },
    { n: "07", title: "Asset & Vendor Ops", tag: "Ops", icon: Database,
      overview: "Single source of truth for hardware & software assets, license renewals and vendor coordination.",
      outcome: "Accurate audits · zero missing devices." },
    { n: "08", title: "Remote Access & VPN", tag: "Access", icon: Lock,
      overview: "Policy-driven remote access with MFA for distributed staff.",
      outcome: "Secure, reliable access from anywhere." },
    { n: "09", title: "L1 / L2 Support Operations", tag: "Support", icon: Users,
      overview: "Owns hardware, software and networking tickets end to end, with remote support and vendor escalations.",
      outcome: "Fast resolution · high user satisfaction." },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="04"
          eyebrow="Selected work"
          title={
            <>
              Real infrastructure,{" "}
              <span className="font-italic-serif italic font-normal text-lime">real</span>{" "}
              business impact.
            </>
          }
          description="A snapshot of programs shipped across Prasatti Group and Team Computers."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="paper-card rounded-3xl p-6 hover:-translate-y-1 transition-transform group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="micro-label">{p.n}</div>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] px-2 py-1 rounded-full border border-black/10 text-ink/80">
                  {p.tag}
                </span>
              </div>
              <div className="h-11 w-11 rounded-full bg-ink text-paper grid place-items-center mb-4">
                <p.icon className="h-4 w-4" />
              </div>
              <h3 className="font-display font-bold text-xl leading-tight text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.overview}</p>
              <div className="mt-5 pt-4 border-t border-black/10 flex items-start gap-2 text-xs text-ink/80">
                <Sparkles className="h-3.5 w-3.5 text-lime shrink-0 mt-0.5" />
                <span>{p.outcome}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills is a duplicate id; keep exported but return null to preserve existing imports
export function Skills() { return null; }

// ---------- CERTIFICATIONS ----------
export function Certifications() {
  const certs = [
    { name: "Microsoft Azure Administrator", code: "AZ-104", status: "In Progress" },
    { name: "Microsoft 365 Administrator", code: "MS-102", status: "Planned" },
    { name: "Google Workspace Administrator", code: "GWA", status: "Planned" },
    { name: "CompTIA Network+", code: "N10-008", status: "Completed" },
    { name: "CompTIA Security+", code: "SY0-601", status: "In Progress" },
    { name: "Windows Server Administration", code: "WSA", status: "Completed" },
  ];
  const badge = (s: string) => {
    if (s === "Completed") return "bg-lime/15 text-ink border-lime/40";
    if (s === "In Progress") return "bg-amber-500/10 text-amber-700 border-amber-500/30";
    return "bg-black/5 text-muted-foreground border-black/10";
  };
  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="05"
          eyebrow="Certifications"
          title={
            <>
              Credentials,{" "}
              <span className="font-italic-serif italic font-normal text-lime">current</span>{" "}
              &amp; forthcoming.
            </>
          }
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="paper-card rounded-3xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-11 w-11 rounded-full bg-ink text-paper grid place-items-center">
                  <Award className="h-5 w-5" />
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-[0.18em] px-2 py-1 rounded-full border ${badge(c.status)}`}>
                  {c.status}
                </span>
              </div>
              <div className="micro-label mb-1">{c.code}</div>
              <h3 className="font-display font-bold text-ink">{c.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
export function Testimonials() {
  const items = [
    { name: "Operations Lead", role: "Prasatti Group", quote: "Sarfraaj takes ownership from the first ticket to the final rollout. IT just works when he's on it." },
    { name: "Service Delivery", role: "Team Computers", quote: "Reliable, calm under pressure and technically sharp. A safe pair of hands for enterprise support." },
    { name: "End User", role: "Enterprise Client", quote: "Fixes issues quickly and explains them clearly. Rare combination." },
  ];
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="06"
          eyebrow="Kind words"
          title={
            <>
              What people{" "}
              <span className="font-italic-serif italic font-normal text-lime">say.</span>
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="paper-card rounded-3xl p-6"
            >
              <div className="font-italic-serif italic text-5xl text-lime leading-none">&ldquo;</div>
              <p className="mt-2 text-[15px] text-ink leading-relaxed">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-black/10">
                <div className="font-medium text-sm text-ink">{t.name}</div>
                <div className="micro-label mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT ----------
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="font-italic-serif italic font-normal text-lime">reliable.</span>
            </>
          }
          description="Open to enterprise IT roles, IT executive positions, and interesting infrastructure problems."
        />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="grid gap-3">
            {[
              { icon: Mail, label: "Email", value: "sarfaraajsince2004@gmail.com", href: "mailto:sarfaraajsince2004@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 88264 57998", href: "tel:+918826457998" },
              { icon: MapPin, label: "Location", value: "Gurugram, Haryana · India", href: "#" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sarfraaj", href: "#" },
              { icon: Building2, label: "Currently at", value: "Prasatti Group · IT Executive", href: "#" },
              { icon: GraduationCap, label: "Education", value: "Bachelor of Arts", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 paper-card rounded-2xl p-4 hover:-translate-y-0.5 transition-transform"
              >
                <div className="h-10 w-10 rounded-full bg-ink text-paper grid place-items-center">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="micro-label">{c.label}</div>
                  <div className="text-sm font-medium truncate text-ink">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="paper-card rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Company" name="company" placeholder="Company (optional)" />
            <div>
              <label className="micro-label mb-1 block">Message</label>
              <textarea
                required
                rows={6}
                placeholder="How can I help?"
                className="w-full rounded-2xl bg-white/70 border border-black/10 px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:border-ink/60 focus:ring-2 focus:ring-ink/10 transition"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-xs text-muted-foreground">
                {sent ? "Message queued — I'll reply soon." : "Typically respond within 24 hours."}
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full pl-5 pr-2 py-2 text-sm font-medium bg-ink text-paper hover:opacity-90 transition"
              >
                Send message
                <span className="h-7 w-7 rounded-full bg-paper/15 grid place-items-center group-hover:rotate-45 transition-transform">
                  <Send className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field(props: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={props.name} className="micro-label mb-1 block">{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        placeholder={props.placeholder}
        className="w-full rounded-2xl bg-white/70 border border-black/10 px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:border-ink/60 focus:ring-2 focus:ring-ink/10 transition"
      />
    </div>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  return (
    <footer className="relative pt-16 pb-10 px-6 border-t border-black/10 mt-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 items-start">
          <div>
            <div className="font-display font-black text-4xl md:text-5xl text-ink leading-[0.95] tracking-[-0.04em]">
              Let&apos;s work{" "}
              <span className="font-italic-serif italic font-normal text-lime">together.</span>
            </div>
            <a
              href="mailto:sarfaraajsince2004@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-lime"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
          </div>
          <div>
            <div className="micro-label mb-3">Explore</div>
            <ul className="space-y-1.5 text-sm">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-ink/70 hover:text-ink">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="micro-label mb-3">Elsewhere</div>
            <ul className="space-y-1.5 text-sm">
              <li><a href="mailto:sarfaraajsince2004@gmail.com" className="text-ink/70 hover:text-ink">Email</a></li>
              <li><a href="tel:+918826457998" className="text-ink/70 hover:text-ink">Phone</a></li>
              <li><a href="#" className="text-ink/70 hover:text-ink">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-3 micro-label">
          <div>Sarfraaj Khan · IT Support Engineer</div>
          <div>© 2026 · All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}

// Keep Briefcase import used
void Briefcase;
