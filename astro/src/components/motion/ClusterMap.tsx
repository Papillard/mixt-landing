import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';

// Seeded RNG for deterministic point distribution
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

type Cluster = {
  cx: number;
  cy: number;
  count: number;
  spread: number;
  color: string;
  label?: string;
  countLabel?: string;
  anchorOffset?: { dx: number; dy: number };
};

const CLUSTERS: Cluster[] = [
  {
    cx: 25,
    cy: 30,
    count: 26,
    spread: 11,
    color: '#7FE0A5',
    label: 'Cluster Kligman',
    countLabel: '12 400 prescriptions',
    anchorOffset: { dx: -5, dy: -22 },
  },
  {
    cx: 68,
    cy: 38,
    count: 22,
    spread: 10,
    color: '#D4A08A',
    label: 'Rétinoïdes + azélaïque',
    countLabel: '8 900 prescriptions',
    anchorOffset: { dx: -3, dy: -22 },
  },
  {
    cx: 72,
    cy: 70,
    count: 18,
    spread: 8,
    color: '#E8664B',
    label: 'Corticoïdes modérés',
    countLabel: '6 100 prescriptions',
    anchorOffset: { dx: -2, dy: 20 },
  },
  { cx: 35, cy: 72, count: 14, spread: 7, color: '#B4E8C5' },
  { cx: 50, cy: 52, count: 10, spread: 6, color: '#A8B5A7' },
];

type Point = { x: number; y: number; r: number; color: string; delay: number };

function generatePoints(): Point[] {
  const rng = seeded(42);
  const pts: Point[] = [];
  let idx = 0;
  CLUSTERS.forEach((c) => {
    for (let i = 0; i < c.count; i++) {
      // Gaussian-ish distribution around cluster center
      const angle = rng() * Math.PI * 2;
      const dist = Math.pow(rng(), 0.7) * c.spread;
      const x = c.cx + Math.cos(angle) * dist;
      const y = c.cy + Math.sin(angle) * dist * 0.85;
      const r = 0.8 + rng() * 1.4;
      pts.push({ x, y, r, color: c.color, delay: 0.4 + idx * 0.012 });
      idx++;
    }
  });
  return pts;
}

export default function ClusterMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const points = useMemo(generatePoints, []);

  return (
    <div ref={ref} className="relative aspect-square w-full overflow-hidden rounded-2xl bg-sage-deep/80 border border-white/[0.08]">
      {/* Subtle grid lines */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <radialGradient id="cluster-halo-mint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7FE0A5" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7FE0A5" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cluster-halo-blush" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4A08A" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#D4A08A" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cluster-halo-ember" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8664B" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#E8664B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Grid lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.2"
        >
          {[20, 40, 60, 80].map((v) => (
            <g key={v}>
              <line x1="5" y1={v} x2="95" y2={v} />
              <line x1={v} y1="5" x2={v} y2="95" />
            </g>
          ))}
        </motion.g>

        {/* Cluster halos (static glow background) */}
        {CLUSTERS.slice(0, 3).map((c, i) => (
          <motion.circle
            key={`halo-${i}`}
            cx={c.cx}
            cy={c.cy}
            r={c.spread * 2.2}
            fill={
              i === 0
                ? 'url(#cluster-halo-mint)'
                : i === 1
                ? 'url(#cluster-halo-blush)'
                : 'url(#cluster-halo-ember)'
            }
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: [1, 1.08, 1] } : {}}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 + i * 0.1 },
              scale: { duration: 3.5, delay: 0.3 + i * 0.1, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}

        {/* Points */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill={p.color}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 0.88, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ mixBlendMode: 'screen' }}
          />
        ))}
      </svg>

      {/* Annotations HTML floating over SVG */}
      {CLUSTERS.filter((c) => c.label).map((c, i) => (
        <motion.div
          key={`ann-${i}`}
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="absolute rounded-[6px] bg-sage-deep/95 backdrop-blur border border-white/15 px-2.5 py-1.5 text-[10px] leading-tight shadow-[0_4px_12px_-4px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{
            left: `${c.cx + (c.anchorOffset?.dx ?? 0)}%`,
            top: `${c.cy + (c.anchorOffset?.dy ?? 0)}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="font-mono uppercase tracking-[0.1em] font-semibold text-white whitespace-nowrap">
            {c.label}
          </div>
          <div className="font-mono text-mint-soft mt-0.5 whitespace-nowrap">{c.countLabel}</div>
        </motion.div>
      ))}
    </div>
  );
}
