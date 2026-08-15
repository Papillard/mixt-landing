import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Step = {
  number: string;
  title: string;
  desc: string;
  tag?: string;
};

type Panel = {
  label: string;
  kind: 'image' | 'chart' | 'journal' | 'chat';
  src?: string;
  alt?: string;
  objectPosition?: string;
  caption?: string;
  chartRows?: Array<{ when: string; what: string }>;
  chat?: Array<{ from: 'assistant' | 'user'; text: string }>;
};

type Props = {
  steps: Step[];
  panels: Panel[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

function PanelMedia({ panel, animatedChart = true }: { panel: Panel; animatedChart?: boolean }) {
  if (panel.kind === 'chat') {
    const nav = ['Messagerie', 'Assistant IA', 'Ta peau', 'Consultation', 'Traitement'];
    return (
      <div className="flex overflow-hidden rounded-2xl border border-black/[0.08] bg-base shadow-[0_20px_60px_-30px_rgba(54,24,34,0.4)] h-[440px]">
        {/* Rail sombre */}
        <div className="hidden sm:flex flex-col w-[132px] shrink-0 bg-deep text-white/90 px-3.5 py-4">
          <div className="font-serif text-[19px] font-semibold leading-none" style={{ fontOpticalSizing: 'auto' }}>Mixt</div>
          <div className="mt-1 text-[9px] leading-tight text-white/45">Ta peau, suivie<br />par un médecin</div>
          <div className="mt-5 flex flex-col gap-0.5">
            {nav.map((n, i) => (
              <div
                key={n}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[11px] ${i === 0 ? 'bg-white/12 text-white font-medium' : 'text-white/55'}`}
              >
                <span className={`inline-block w-1 h-1 rounded-full ${i === 0 ? 'bg-ember' : 'bg-white/25'}`}></span>
                {n}
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-2 pt-4">
            <img
              src="/images/laetitia-after.webp"
              alt="Laetitia"
              className="w-6 h-6 rounded-full object-cover border border-white/15"
              loading="lazy"
              decoding="async"
            />
            <span className="text-[10px] text-white/60">Laetitia</span>
          </div>
        </div>
        {/* Zone chat */}
        <div className="flex-1 flex flex-col bg-cream/50 min-w-0">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/[0.06]">
            <span className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-deep text-white">
                <span className="font-serif font-semibold text-[16px] leading-none -translate-y-[0.5px]" style={{ fontOpticalSizing: 'auto' }}>m</span>
              </span>
              <span className="leading-tight">
                <span className="block text-[12px] font-semibold text-ink">Équipe Mixt</span>
                <span className="flex items-center gap-1 text-[10px] text-ink-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4E8A6B]"></span>
                  Répond sous 24h
                </span>
              </span>
            </span>
            <span className="text-ember-deep font-medium text-[10.5px]">Voir mon ordonnance →</span>
          </div>
          <div className="flex-1 flex flex-col gap-2.5 px-4 py-4 overflow-hidden">
            {panel.chat?.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-snug ${
                    m.from === 'user'
                      ? 'bg-deep text-white rounded-br-md'
                      : 'bg-white text-ink border border-black/[0.05] rounded-bl-md'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 rounded-full bg-white border border-black/[0.08] px-3.5 py-2.5">
              <span className="text-[12px] text-ink-3 flex-1">Votre message…</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-deep text-white text-[11px]">↑</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (panel.kind === 'journal') {
    return (
      <div className="rounded-[14px] bg-cream border border-black/[0.06] p-6 md:p-7 font-mono text-[13.5px] md:text-[14px]">
        <div className="mb-5 flex">
          <div className="rounded-[6px] bg-deep/95 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-white">
            {panel.label}
          </div>
        </div>
        {panel.chartRows?.map((r) => (
          <div key={r.when} className="flex flex-wrap justify-between items-baseline gap-2 py-2.5 border-b border-black/[0.08] last:border-b-0 last:pb-0 first:pt-0">
            <span className="text-ember-deep uppercase tracking-[0.12em] font-semibold whitespace-nowrap">{r.when}</span>
            <span className="text-ink text-right">{r.what}</span>
          </div>
        ))}
      </div>
    );
  }

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
            style={panel.objectPosition ? { objectPosition: panel.objectPosition } : undefined}
          />
        )}
        {panel.kind === 'image' && !panel.src && (
          <div className="absolute inset-0 flex items-center justify-center text-ink-3 text-sm italic">
            {panel.caption}
          </div>
        )}
        {panel.kind === 'chart' && (animatedChart ? <ProgressChart /> : <StaticChart />)}
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
              {p && <PanelMedia panel={p} animatedChart={false} />}
              <div>
                <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-ember-deep mb-2.5">
                  {s.number}
                </div>
                <div className="text-[22px] font-semibold text-ink leading-[1.2] mb-3 tracking-[-0.02em]">
                  {s.title}
                </div>
                {s.tag && (
                  <div className="inline-flex items-center rounded-full border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-2 mb-3">
                    {s.tag}
                  </div>
                )}
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
                      {s.tag && (
                        <div className="inline-flex items-center rounded-full border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-2 mb-3">
                          {s.tag}
                        </div>
                      )}
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
        <g stroke="#1A121014" strokeWidth="0.8" strokeDasharray="2 4">
          <line x1="30" y1="210" x2="370" y2="210" />
          <line x1="30" y1="140" x2="370" y2="140" />
          <line x1="30" y1="70" x2="370" y2="70" />
        </g>
        <motion.path
          d="M 30 210 C 110 208 150 180 200 145 S 310 75 370 50"
          fill="none"
          stroke="url(#v3chart-glow)"
          strokeWidth="8"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M 30 210 C 110 208 150 180 200 145 S 310 75 370 50"
          fill="none"
          stroke="url(#v3chart)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
        />
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

function StaticChart() {
  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full p-6">
        <defs>
          <linearGradient id="v3chart-static" x1="0" x2="1" y1="0" y2="0.4">
            <stop offset="0%" stopColor="#361822" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#C4513A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E8664B" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="v3chart-glow-static" x1="0" x2="1" y1="0" y2="0.4">
            <stop offset="0%" stopColor="#361822" stopOpacity="0" />
            <stop offset="100%" stopColor="#E8664B" stopOpacity="0.28" />
          </linearGradient>
        </defs>
        <g stroke="#1A121014" strokeWidth="0.8" strokeDasharray="2 4">
          <line x1="30" y1="210" x2="370" y2="210" />
          <line x1="30" y1="140" x2="370" y2="140" />
          <line x1="30" y1="70" x2="370" y2="70" />
        </g>
        <path
          d="M 30 210 C 110 208 150 180 200 145 S 310 75 370 50"
          fill="none"
          stroke="url(#v3chart-glow-static)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 30 210 C 110 208 150 180 200 145 S 310 75 370 50"
          fill="none"
          stroke="url(#v3chart-static)"
          strokeWidth="2"
          strokeLinecap="round"
        />
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
