import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* animated grid */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* glowing orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.22 260 / 0.35), transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.18 210 / 0.3), transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* floating network nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.18 250)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.75 0.14 210)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => {
          const x = (i * 137) % 100;
          const y = (i * 71) % 100;
          return (
            <g key={i}>
              <circle cx={`${x}%`} cy={`${y}%`} r="2" fill="oklch(0.8 0.15 220)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
              </circle>
              <line
                x1={`${x}%`}
                y1={`${y}%`}
                x2={`${(x + 20) % 100}%`}
                y2={`${(y + 15) % 100}%`}
                stroke="url(#lineGrad)"
                strokeWidth="1"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
