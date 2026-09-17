import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export type Milestone = { week: number; label: string };

type Props = {
  label: string;
  improveLabel?: string;
  /** Décrit la phase d'adaptation propre à la condition. */
  sideEffectLabel?: string;
  /** 'slow' pour le pigment (mélasma), 'fast' pour l'inflammatoire (acné). */
  pace?: 'slow' | 'fast';
  milestones?: Milestone[];
};

/** Catmull-Rom converti en bézier cubique : courbe lissée qui passe par chaque point. */
function smooth(pts: [number, number][]): string {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`;
  }
  return d;
}

export default function ProgressCurve({
  label,
  improveLabel = 'Amélioration de votre peau',
  sideEffectLabel = "Phase d'adaptation",
  pace = 'fast',
  milestones = [],
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const W = 660;
  const H = 300;
  const padL = 46;
  const padR = 34;
  const padT = 54;
  const padB = 56;
  const weeks = [0, 2, 4, 6, 8, 10, 12];
  const x = (w: number) => padL + (w / 12) * (W - padL - padR);
  const y = (v: number) => H - padB - (v / 100) * (H - padT - padB);

  // Le pigment répond plus tard que l'inflammatoire : deux rythmes distincts.
  const improveRaw: [number, number][] =
    pace === 'slow'
      ? [[0, 1], [2, 3], [4, 9], [6, 24], [8, 45], [10, 66], [12, 80]]
      : [[0, 2], [2, 8], [4, 24], [6, 46], [8, 65], [10, 78], [12, 88]];
  const sideRaw: [number, number][] = [
    [0, 3], [1, 24], [2, 32], [3, 28], [4, 18], [6, 8], [8, 3], [10, 1], [12, 1],
  ];

  const improvePts = improveRaw.map(([w, v]) => [x(w), y(v)] as [number, number]);
  const sidePts = sideRaw.map(([w, v]) => [x(w), y(v)] as [number, number]);
  const improveD = smooth(improvePts);

  const valAt = (w: number) => improveRaw.find(([k]) => k === w)?.[1] ?? 0;
  const marks = milestones.length ? milestones : [{ week: 12, label: '' }];

  return (
    <div ref={ref} className="w-full text-ink">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
        aria-label={`Progression sur 12 semaines pour ${label}`}>

        {weeks.map((w) => (
          <line key={w} x1={x(w)} y1={padT} x2={x(w)} y2={H - padB}
            stroke="#1A1210" strokeOpacity="0.10" strokeWidth="1" />
        ))}
        <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB}
          stroke="#1A1210" strokeOpacity="0.22" strokeWidth="1" />

        {/* bornes de phase */}
        <line x1={x(0)} y1={padT - 20} x2={x(4)} y2={padT - 20} stroke="#3A8A75" strokeOpacity="0.45" strokeWidth="1" />
        <line x1={x(4)} y1={padT - 20} x2={x(12)} y2={padT - 20} stroke="#E8664B" strokeOpacity="0.6" strokeWidth="1" />
        <text x={x(2)} y={padT - 28} textAnchor="middle" fill="#3A8A75" fontSize="9.5"
          style={{ letterSpacing: '0.16em', fontFamily: 'ui-monospace, monospace' }} opacity="0.9">
          ADAPTATION
        </text>
        <text x={x(8)} y={padT - 28} textAnchor="middle" fill="#E8664B" fontSize="9.5"
          style={{ letterSpacing: '0.16em', fontFamily: 'ui-monospace, monospace' }}>
          AMÉLIORATION
        </text>


        <motion.path d={smooth(sidePts)} fill="none" stroke="#3A8A75" strokeWidth="2"
          strokeDasharray="4 5" strokeLinecap="round"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.75 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }} />

        <motion.path d={improveD} fill="none" stroke="#E8664B" strokeWidth="3.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} />

        {marks.map((m, i) => (
          <g key={m.week}>
            <motion.circle cx={x(m.week)} cy={y(valAt(m.week))} r="5.5" fill="#E8664B"
              stroke="#FFF8F2" strokeWidth="2.5"
              initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.75 + i * 0.2 }} />
            {m.label && (
              <motion.text x={x(m.week)} y={y(valAt(m.week)) - 18} textAnchor={m.week === 12 ? 'end' : 'middle'}
                fill="#1A1210" fontSize="11" opacity="0.92"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.95 + i * 0.2 }}>
                {m.label}
              </motion.text>
            )}
          </g>
        ))}

        {weeks.map((w) => (
          <text key={w} x={x(w)} y={H - padB + 22} textAnchor="middle" fill="#1A1210" fontSize="10.5"
            opacity={w === 0 || w === 12 ? 0.75 : 0.45}
            style={{ fontFamily: 'ui-monospace, monospace', letterSpacing: '0.06em' }}>
            {w === 0 ? 'Départ' : w === 12 ? '12 semaines' : w}
          </text>
        ))}
      </svg>

      <div className="mt-6 pt-5 border-t border-black/10 flex flex-col sm:flex-row gap-x-8 gap-y-2.5 text-[12.5px]">
        <span className="inline-flex items-center gap-2.5 text-ink">
          <span className="inline-block w-6 h-[3px] rounded-full" style={{ background: '#E8664B' }} />
          {improveLabel}
        </span>
        <span className="inline-flex items-center gap-2.5 text-ink-2">
          <span className="inline-block w-6 h-0 border-t-2 border-dashed" style={{ borderColor: '#3A8A75' }} />
          {sideEffectLabel}
        </span>
      </div>
    </div>
  );
}
