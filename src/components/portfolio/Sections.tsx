import { motion } from "framer-motion";
import {
  ArrowRight, Download, Mail, ChevronDown, Cloud, Shield, Server, Network,
  Cpu, Database, Wifi, Lock, Monitor, Globe, Users, Zap, CheckCircle2,
  Briefcase, GraduationCap, Award, Github, Linkedin, Phone, MapPin,
  Building2, Sparkles, Terminal, Layers, Send
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ---------- HERO ----------
export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for enterprise IT roles · Gurugram, IN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl"
        >
          Building <span className="text-gradient">reliable</span><br />
          enterprise IT<br />
          infrastructure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          Experienced IT Support Engineer with expertise in Microsoft 365, Azure Administration,
          Windows Server, Endpoint Security, Enterprise Networking, macOS, and Google Workspace.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 text-sm md:text-base text-muted-foreground/80 max-w-2xl"
        >
          Four+ years supporting enterprise environments — resolving complex issues, hardening
          endpoints, and delivering secure, scalable systems that never get in the way of work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-8px_oklch(0.68_0.2_255/0.7)] hover:shadow-[0_16px_40px_-8px_oklch(0.68_0.2_255/0.9)] transition-all"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass glow-border hover:bg-white/10 transition-all"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            View Experience <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* floating tech icons */}
        <div className="mt-16 hidden md:flex items-center gap-8 opacity-70">
          {[Cloud, Shield, Server, Network, Cpu, Database, Wifi, Lock].map((Icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="h-10 w-10 grid place-items-center rounded-xl glass"
            >
              <Icon className="h-5 w-5 text-cyan" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}

// ---------- SECTION HEADER ----------
function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl mb-14">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-cyan mb-4">
        <Sparkles className="h-3 w-3" /> {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground text-lg">{description}</p>}
    </div>
  );
}

// ---------- ABOUT ----------
export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="About" title="I make enterprise IT invisible — in the best way." />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Hello, I'm <span className="text-foreground font-medium">Sarfraaj Khan</span>, an IT Support
              Engineer passionate about solving technology challenges and building dependable IT
              environments.
            </p>
            <p>
              Over the past four years, I've worked across enterprise organizations supporting Windows and
              macOS environments, Microsoft 365, Azure Administration, Google Workspace, Windows Server,
              endpoint protection, networking, and enterprise hardware.
            </p>
            <p>
              My expertise extends beyond troubleshooting — I contribute to infrastructure planning, vendor
              coordination, endpoint security implementation, asset lifecycle management, Microsoft
              licensing, and enterprise technology operations.
            </p>
            <p className="text-foreground">
              Great IT support isn't just fixing problems — it's preventing them before they happen.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Building2, label: "Currently at", value: "Prasatti Group" },
              { icon: MapPin, label: "Based in", value: "Gurugram, Haryana" },
              { icon: Briefcase, label: "Experience", value: "4+ years enterprise IT" },
              { icon: GraduationCap, label: "Education", value: "Bachelor of Arts" },
            ].map((row) => (
              <div key={row.label} className="glass glow-border rounded-2xl p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center">
                  <row.icon className="h-5 w-5 text-cyan" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{row.label}</div>
                  <div className="text-sm font-medium">{row.value}</div>
                </div>
              </div>
            ))}
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
    { value: 4, suffix: "+", label: "Years Experience" },
    { value: 1000, suffix: "+", label: "Issues Resolved" },
    { value: 500, suffix: "+", label: "Devices Managed" },
    { value: 99, suffix: "%", label: "User Satisfaction" },
    { value: 50, suffix: "+", label: "IT Projects" },
  ];
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto glass glow-border rounded-3xl p-8 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-gradient font-display">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- EXPERTISE ----------
export function Expertise() {
  const groups = [
    {
      icon: Cloud,
      title: "Cloud & Identity",
      items: ["Microsoft 365", "Azure Administration", "Azure Active Directory", "Google Workspace", "Microsoft Licensing", "Identity Management"],
    },
    {
      icon: Server,
      title: "Systems & Servers",
      items: ["Windows Server", "Active Directory", "Group Policy", "Windows 10 / 11", "macOS", "Software Deployment"],
    },
    {
      icon: Network,
      title: "Networking",
      items: ["TCP/IP", "DNS", "DHCP", "VPN", "Firewall", "Routing & Switching", "Network Troubleshooting"],
    },
    {
      icon: Shield,
      title: "Security",
      items: ["Endpoint Security", "EDR", "Vulnerability Assessment", "Access Control", "Patch Management"],
    },
    {
      icon: Monitor,
      title: "End-User Support",
      items: ["L1 / L2 Support", "Hardware Troubleshooting", "Printer Configuration", "Driver Management", "Ticketing Systems", "Remote Support"],
    },
    {
      icon: Users,
      title: "IT Operations",
      items: ["Asset Management", "Vendor Management", "IT Procurement", "Meeting Room Tech", "Video Conferencing", "CCTV & Biometric"],
    },
  ];
  return (
    <section id="expertise" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Core Expertise"
          title="A full-stack IT engineer for the modern enterprise."
          description="Six domains of deep, hands-on capability — from cloud identity to the endpoint on someone's desk."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass glow-border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center mb-4">
                <g.icon className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{g.title}</h3>
              <ul className="space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan" /> {it}
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

// ---------- EXPERIENCE TIMELINE ----------
export function Experience() {
  const jobs = [
    {
      role: "IT Executive",
      company: "Prasatti Group Sales and Services",
      period: "Nov 2024 – Present",
      current: true,
      points: [
        "Microsoft 365 & Azure administration across the organization",
        "User account, license, and identity lifecycle management",
        "Google Workspace administration and configuration",
        "Endpoint Detection and Response (EDR) deployment",
        "Printer infrastructure, macOS & Windows support",
        "Meeting room, projector, and biometric systems",
        "Vendor coordination, IT procurement, infrastructure planning",
        "L1 / L2 technical support and incident resolution",
        "Asset lifecycle management & software deployment",
      ],
    },
    {
      role: "Desktop Support Engineer",
      company: "Team Computers Pvt Ltd",
      period: "Dec 2022 – Apr 2024",
      current: false,
      points: [
        "Desktop, laptop deployment & hardware troubleshooting",
        "Network and USB printer support, Brady printer configuration",
        "macOS, iOS, Android device support",
        "Remote support and inventory management",
        "Firewall configuration and PoE switch support",
        "Network troubleshooting, software installation",
        "Asset & incident management, technical documentation",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Four years, two teams, thousands of tickets resolved."
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div className={`pl-12 md:pl-0 md:[direction:ltr] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_oklch(0.68_0.2_255/0.9)]" />
                  <div className="text-xs text-cyan font-mono mb-2">{job.period}</div>
                  <h3 className="text-2xl font-bold">{job.role}</h3>
                  <div className="text-muted-foreground mt-1">{job.company}</div>
                  {job.current && (
                    <span className="inline-block mt-3 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      Current Role
                    </span>
                  )}
                </div>
                <div className={`pl-12 md:pl-0 md:[direction:ltr] mt-4 md:mt-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass glow-border rounded-2xl p-5">
                    <ul className="space-y-2">
                      {job.points.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan mt-0.5 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- PROJECTS ----------
export function Projects() {
  const projects = [
    { title: "Enterprise Microsoft 365 Administration", tag: "M365", icon: Cloud,
      overview: "End-to-end M365 tenant administration across users, licensing, and services.",
      tech: ["Exchange Online", "SharePoint", "Teams", "Intune"],
      outcome: "Standardized licensing, reduced spend, streamlined onboarding by 60%." },
    { title: "Azure User Lifecycle Management", tag: "Azure", icon: Layers,
      overview: "Automated join/move/leave flows across Entra ID and downstream systems.",
      tech: ["Entra ID", "Conditional Access", "PowerShell"],
      outcome: "Cut onboarding from days to hours; zero orphan accounts." },
    { title: "Endpoint Security Deployment", tag: "Security", icon: Shield,
      overview: "Rolled out EDR across the fleet with policy tuning and response playbooks.",
      tech: ["EDR", "Defender", "Patch Mgmt"],
      outcome: "Full visibility across 500+ endpoints; incidents contained in minutes." },
    { title: "Printer Infrastructure Overhaul", tag: "Infra", icon: Terminal,
      overview: "Centralized print management with driver standardization and secure release.",
      tech: ["Windows Print", "Brady", "Networked MFPs"],
      outcome: "80% fewer print tickets, faster office moves." },
    { title: "Enterprise Network Support", tag: "Network", icon: Network,
      overview: "L1/L2 network operations across offices — switching, VPN, firewall rules.",
      tech: ["PoE Switching", "VPN", "Firewall"],
      outcome: "Uptime restored quickly; zero recurring incidents post-remediation." },
    { title: "Meeting Room & AV Technology", tag: "AV", icon: Monitor,
      overview: "Deployed and standardized meeting room tech across floors.",
      tech: ["Projectors", "VC", "Biometric"],
      outcome: "Consistent meeting experience; reduced AV disruptions." },
    { title: "Google Workspace Administration", tag: "Workspace", icon: Globe,
      overview: "Managed identity, mail routing, groups, and security posture in Workspace.",
      tech: ["Admin Console", "Groups", "MDM"],
      outcome: "Cleaner tenant, stronger security baseline." },
    { title: "VPN Deployment & Remote Access", tag: "Access", icon: Lock,
      overview: "Rolled out remote access for distributed teams with policy-driven controls.",
      tech: ["VPN", "MFA", "Split tunneling"],
      outcome: "Secure, reliable access from anywhere." },
    { title: "Asset Inventory System", tag: "Ops", icon: Database,
      overview: "Built a single source of truth for hardware & software assets.",
      tech: ["Inventory DB", "Lifecycle"],
      outcome: "Accurate audits, better forecasting, zero missing devices." },
  ];

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Selected work from the field."
          description="Real infrastructure, real users, real business impact."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative glass glow-border rounded-2xl p-6 overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center">
                  <p.icon className="h-5 w-5 text-cyan" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2 py-1 rounded-full border border-white/10">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-semibold text-lg leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.overview}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-cyan flex items-start gap-2">
                <Zap className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                <span>{p.outcome}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SKILLS ----------
export function Skills() {
  const skills = [
    { name: "Microsoft 365", level: 95 },
    { name: "Azure Administration", level: 88 },
    { name: "Windows Server & AD", level: 90 },
    { name: "Windows 10 / 11", level: 96 },
    { name: "macOS Support", level: 85 },
    { name: "Networking (TCP/IP, DNS, DHCP)", level: 88 },
    { name: "Firewall & VPN", level: 82 },
    { name: "Google Workspace", level: 88 },
    { name: "Endpoint Security & EDR", level: 86 },
    { name: "Hardware & Deployment", level: 94 },
    { name: "Remote Support & Ticketing", level: 96 },
    { name: "Vendor & Project Management", level: 84 },
  ];
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Technical Skills" title="Depth where it matters." />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-cyan to-accent shadow-[0_0_12px_oklch(0.68_0.2_255/0.7)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    if (s === "Completed") return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
    if (s === "In Progress") return "bg-amber-500/15 text-amber-300 border-amber-500/30";
    return "bg-white/5 text-muted-foreground border-white/10";
  };
  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Certifications" title="Credentials, current and forthcoming." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass glow-border rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center">
                  <Award className="h-6 w-6 text-cyan" />
                </div>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${badge(c.status)}`}>
                  {c.status}
                </span>
              </div>
              <div className="text-xs font-mono text-cyan mb-1">{c.code}</div>
              <h3 className="font-semibold">{c.name}</h3>
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
    { name: "Colleague, Prasatti Group", role: "Operations Lead", quote: "Sarfraaj takes ownership from the first ticket to the final rollout. IT just works when he's on it." },
    { name: "Manager, Team Computers", role: "Service Delivery", quote: "Reliable, calm under pressure, and technically sharp. A safe pair of hands for enterprise support." },
    { name: "End User", role: "Enterprise Client", quote: "Fixes issues quickly and explains them clearly. Rare combination." },
  ];
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Testimonials" title="What people say." />
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glow-border rounded-2xl p-6"
            >
              <div className="text-4xl font-display text-primary leading-none">"</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
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
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something reliable."
          description="Open to enterprise IT roles, consulting, and interesting problems."
        />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "sarfaraajsince2004@gmail.com", href: "mailto:sarfaraajsince2004@gmail.com" },
              { icon: Phone, label: "Phone", value: "Available on request", href: "#" },
              { icon: MapPin, label: "Location", value: "Gurugram, Haryana, India", href: "#" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sarfraaj", href: "#" },
              { icon: Github, label: "GitHub", value: "github.com/sarfraaj", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 glass glow-border rounded-2xl p-4 hover:bg-white/5 transition-colors"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center">
                  <c.icon className="h-5 w-5 text-cyan" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass glow-border rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Company" name="company" placeholder="Company (optional)" />
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea
                required
                rows={5}
                placeholder="How can I help?"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-xs text-muted-foreground">
                {sent ? "Message queued — I'll reply soon." : "Typically respond within 24 hours."}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-8px_oklch(0.68_0.2_255/0.7)] hover:shadow-[0_16px_40px_-8px_oklch(0.68_0.2_255/0.9)] transition-all"
              >
                <Send className="h-4 w-4" /> Send Message
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
      <label htmlFor={props.name} className="text-xs text-muted-foreground mb-1 block">{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        placeholder={props.placeholder}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  return (
    <footer className="relative pt-16 pb-10 px-6 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center font-bold text-primary-foreground">S</div>
              <span className="font-display font-semibold">Sarfraaj Khan</span>
            </div>
            <p className="text-sm text-muted-foreground">
              IT Support Engineer · System Administrator · Microsoft 365 & Azure Administrator
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Explore</div>
            <ul className="space-y-1.5 text-sm">
              {["About", "Expertise", "Experience", "Projects", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Get in touch</div>
            <a href="mailto:sarfaraajsince2004@gmail.com" className="text-sm block hover:text-cyan">sarfaraajsince2004@gmail.com</a>
            <div className="text-sm text-muted-foreground mt-1">Gurugram, Haryana · India</div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>Designed & Developed by Sarfraaj Khan.</div>
          <div>© 2026 All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
