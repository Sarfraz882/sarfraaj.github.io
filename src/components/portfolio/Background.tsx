import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Ambient neon orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.60 0.22 250 / 0.55), transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-40 h-[620px] w-[620px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.75 0.18 205 / 0.4), transparent 60%)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.24 265 / 0.4), transparent 60%)" }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Circuit / data-stream lines */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wire" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.22 245)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.85 0.18 210)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.72 0.22 245)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.90 0.16 210)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.72 0.22 245)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Horizontal circuit traces */}
        {[
          "M0 120 H320 L360 160 H720 L760 120 H100%",
          "M0 380 H180 L220 340 H520 L560 380 H900 L940 420 H100%",
          "M0 640 H260 L300 600 H640 L680 640 H100%",
          "M0 900 H420 L460 940 H860 L900 900 H100%",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="url(#wire)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
            className="animate-datapulse"
            style={{ animationDelay: `${i * 1.6}s` }}
          />
        ))}

        {/* Network nodes */}
        {[
          [320, 120], [360, 160], [720, 120], [760, 120],
          [180, 380], [220, 340], [520, 380], [560, 380],
          [260, 640], [300, 600], [640, 640], [680, 640],
          [420, 900], [460, 940], [860, 900], [900, 900],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="14" fill="url(#node)" />
            <circle cx={cx} cy={cy} r="2.2" fill="oklch(0.95 0.14 210)" />
          </g>
        ))}
      </svg>

      {/* Scanline / vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, oklch(0.06 0.02 260 / 0.7) 100%)",
        }}
      />

      {/* Fine grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
