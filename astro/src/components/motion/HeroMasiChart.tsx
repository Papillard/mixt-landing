import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Bezier cubique smooth positionné dans la moitié basse pour ne pas cacher le visage
const CURVE_D = 'M 10 52 C 26 56, 44 80, 90 83';
const FRACS = [0, 0.33, 0.66, 1];

export default function HeroMasiChart() {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [points, setPoints] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    if (!pathRef.current) return;
    const total = pathRef.current.getTotalLength();
    const computed = FRACS.map((f) => {
      const pt = pathRef.current!.getPointAtLength(f * total);
      return { x: pt.x, y: pt.y };
    });
    setPoints(computed);
  }, []);

  const DRAW_DURATION = 2;
  const DRAW_DELAY = 0.6;

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          {/* Courbe en cream pointillé élégant */}
          <linearGradient id="masi-glow" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0%" stopColor="#FFF8F2" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFF8F2" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Axes + ticks repères, sans drop-shadow (propre et épuré) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          stroke="rgba(255,248,242,0.6)"
          strokeWidth="0.2"
        >
          {/* Axe Y */}
          <line x1="10" y1="48" x2="10" y2="89" />
          {/* Axe X */}
          <line x1="10" y1="89" x2="92" y2="89" />
          {/* Ticks Y */}
          <line x1="9" y1="52" x2="10.5" y2="52" />
          <line x1="9" y1="68.5" x2="10.5" y2="68.5" />
          <line x1="9" y1="85" x2="10.5" y2="85" />
          {/* Ticks X */}
          <line x1="36" y1="88.5" x2="36" y2="90.5" />
          <line x1="63" y1="88.5" x2="63" y2="90.5" />
          <line x1="90" y1="88.5" x2="90" y2="90.5" />
        </motion.g>
        {/* Labels S.0 / S.12 — pas de MASI, pas de shadow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          fill="rgba(255,248,242,0.75)"
          fontFamily="'DM Mono', monospace"
          fontSize="1.8"
        >
          <text x="90" y="94" textAnchor="end">S.12</text>
          <text x="11" y="94" textAnchor="start">S.0</text>
        </motion.g>

        {/* Glow cream subtil */}
        <motion.path
          d={CURVE_D}
          fill="none"
          stroke="url(#masi-glow)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            pathLength: { duration: DRAW_DURATION, delay: DRAW_DELAY, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.4, delay: DRAW_DELAY },
          }}
        />

        {/* Courbe principale — blanc cream pointillé élégant, trait fin */}
        <motion.path
          ref={pathRef}
          d={CURVE_D}
          fill="none"
          stroke="#FFF8F2"
          strokeWidth="0.22"
          strokeLinecap="round"
          strokeDasharray="1.2 1.6"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: DRAW_DURATION, delay: DRAW_DELAY, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: 'drop-shadow(0 0 0.8px rgba(0,0,0,0.22))' }}
        />

      </svg>

      {/* Dots positionnés exactement sur la courbe via getPointAtLength */}
      {points.map((p, i) => {
        const dotDelay = DRAW_DELAY + FRACS[i] * DRAW_DURATION;
        const isEnd = i === 0 || i === points.length - 1;
        const size = isEnd ? 13 : 9;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: size,
              height: size,
              background: '#E8664B',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: dotDelay,
              type: 'spring',
              stiffness: 360,
              damping: 12,
            }}
          >
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: '#E8664B' }}
              initial={{ opacity: 0 }}
              animate={
                inView
                  ? {
                      opacity: [0.45, 0, 0.45],
                      scale: [1, isEnd ? 2.6 : 2.1, 1],
                    }
                  : {}
              }
              transition={{
                delay: dotDelay + 0.4,
                duration: 2.6,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <span
              className="absolute inset-0 rounded-full"
              style={{ background: '#E8664B' }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
