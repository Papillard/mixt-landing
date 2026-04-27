import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Step = {
  number: string;
  title: string;
  desc: string;
};

type Panel = {
  label: string;
  kind: 'image' | 'chart';
  src?: string;
  alt?: string;
  caption?: string;
  chartRows?: Array<{ when: string; what: string }>;
};

type Props = {
  steps: Step[];
  panels: Panel[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

function PanelMedia({ panel }: { panel: Panel }) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
        {panel.kind === 'image' && panel.src && (
          <img
            src={panel.src}
            alt={panel.alt || ''}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {panel.kind === 'image' && !panel.src && (
          <div className="absolute inset-0 flex items-center justify-center text-ink-3 text-sm italic">
            {panel.caption}
          </div>
        )}
        {panel.kind === 'chart' && <ProgressChart />}
        <div className="absolute top-4 left-4 rounded-[6px] bg-deep/95 backdrop-blur px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-white">
          {panel.label}
        </div>
      </div>
      {panel.kind === 'chart' && panel.chartRows && (
        <div className="mt-4 rounded-[10px] bg-cream border border-black/[0.06] p-6 md:p-7 font-mono text-[13.5px] md:text-[14px]">
          {panel.chartRows.map((r) => (
            <div key={r.when} className="flex flex-wrap justify-between items-baseline gap-2 py-2.5 border-b border-black/[0.08] last:border-b-0 last:pb-0 first:pt-0">
              <span className="text-ember-deep uppercase tracking-[0.12em] font-semibold whitespace-nowrap">{r.when}</span>
              <span className="text-ink text-right">{r.what}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function StickySteps({ steps, panels }: Props) {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const progress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: '-45% 0% -45% 0%', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Mobile: interleaved image + text per step */}
      <div className="lg:hidden flex flex-col gap-16">
        {steps.map((s, i) => {
          const p = panels[i];
          return (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex flex-col gap-6"
            >
              {p && <PanelMedia panel={p} />}
              <div>
                <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-ember-deep mb-2.5">
                  {s.number}
                </div>
                <div className="text-[22px] font-semibold text-ink leading-[1.2] mb-3 tracking-[-0.02em]">
                  {s.title}
                </div>
                <p className="text-[15px] text-ink-2 leading-[1.65]">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Desktop: sticky two-column layout with progress line */}
      <div ref={containerRef} className="hidden lg:grid lg:grid-cols-[1fr_0.85fr] lg:gap-20 relative">
        <div className="flex flex-col gap-40">
          {panels.map((p, i) => (
            <motion.div
              key={i}
              ref={(el) => (panelRefs.current[i] = el)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative"
            >
              <PanelMedia panel={p} />
            </motion.div>
          ))}
        </div>

        <div className="relative lg:sticky lg:top-28 lg:self-start">
          <div className="relative pl-8">
            <div className="absolute left-[5px] top-0 bottom-0 w-px bg-ink/10" aria-hidden />
            <motion.div
              className="absolute left-[5px] top-0 w-px bg-deep origin-top"
              style={{ scaleY: lineScale, height: '100%' }}
              aria-hidden
            />
            <ul className="flex flex-col gap-14">
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.number} className="relative">
                    <motion.span
                      className="absolute -left-[31px] top-1.5 w-[11px] h-[11px] rounded-full border-2"
                      animate={{
                        backgroundColor: isActive ? '#361822' : '#FFF8F2',
                        borderColor: isActive ? '#361822' : '#9A8A80',
                        scale: isActive ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.3, ease: EASE }}
                      aria-hidden
                    />
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0.55 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-ember-deep mb-2.5">
                        {s.number}
                      </div>
                      <div className="text-[21px] md:text-[23px] font-semibold text-ink leading-[1.2] mb-3 tracking-[-0.02em]">
                        {s.title}
                      </div>
                      <p className="text-[15px] md:text-[15.5px] text-ink-2 leading-[1.65] max-w-[360px]">
                        {s.desc}
                      </p>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function ProgressChart() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'end 60%'] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute inset-0">
    <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full p-6">
      <defs>
        <linearGradient id="v3chart" x1="0" x2="1" y1="0" y2="0.4">
          <stop offset="0%" stopColor="#361822" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#C4513A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8664B" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="v3chart-glow" x1="0" x2="1" y1="0" y2="0.4">
          <stop offset="0%" stopColor="#361822" stopOpacity="0" />
          <stop offset="100%" stopColor="#E8664B" stopOpacity="0.28" />
        </linearGradient>
      </defs>
      {/* Horizontal guides */}
      <g stroke="#1A121014" strokeWidth="0.8" strokeDasharray="2 4">
        <line x1="30" y1="210" x2="370" y2="210" />
        <line x1="30" y1="140" x2="370" y2="140" />
        <line x1="30" y1="70" x2="370" y2="70" />
      </g>
      {/* Glow layer */}
      <motion.path
        d="M 30 210 C 110 208 150 180 200 145 S 310 75 370 50"
        fill="none"
        stroke="url(#v3chart-glow)"
        strokeWidth="8"
        strokeLinecap="round"
        style={{ pathLength }}
      />
      {/* Main curve — smooth single bezier */}
      <motion.path
        d="M 30 210 C 110 208 150 180 200 145 S 310 75 370 50"
        fill="none"
        stroke="url(#v3chart)"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ pathLength }}
      />
      {/* Dots on curve */}
      <g fill="#E8664B">
        <circle cx="30" cy="210" r="3.5" />
        <circle cx="200" cy="145" r="3" />
        <circle cx="280" cy="95" r="3" />
        <circle cx="370" cy="50" r="4" />
      </g>
      <g fill="#6B5B52" fontSize="10" fontFamily="'DM Mono', monospace" textAnchor="middle">
        <text x="30" y="235">S.0</text>
        <text x="200" y="235">S.4</text>
        <text x="280" y="235">S.8</text>
        <text x="370" y="235">S.12</text>
      </g>
    </svg>
    </div>
  );
}
