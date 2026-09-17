import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  /** Libellé de la condition, ex. "MÉLASMA". */
  label: string;
  /** Légende de la courbe d'amélioration. */
  improveLabel?: string;
  /** Légende de la courbe d'effets indésirables. */
  sideEffectLabel?: string;
};

/**
 * Device signature "courbe de suivi" (charte Mixt) : progression de S.0 à S.12,
 * points ember, avec la courbe d'effets indésirables qui monte puis retombe.
 * C'est ce second tracé qui désamorce la première cause d'abandon : la phase
 * d'adaptation, que personne n'explique avant de commencer.
 */
export default function ProgressCurve({
  label,
  improveLabel = 'Amélioration de votre peau',
  sideEffectLabel = "Phase d'adaptation (rougeurs, desquamation)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const W = 620;
  const H = 260;
  const padL = 44;
  const padR = 24;
  const padT = 28;
  const padB = 46;
  const weeks = [0, 2, 4, 6, 8, 10, 12];
  const x = (w: number) => padL + (w / 12) * (W - padL - padR);
  const y = (v: number) => H - padB - (v / 100) * (H - padT - padB);

  // Amélioration : plateau initial, puis montée franche, puis consolidation.
  const improve = 'M ' + [
    [0, 2], [2, 5], [4, 16], [6, 38], [8, 60], [10, 76], [12, 86],
  ].map(([w, v], i) => `${i ? 'L' : ''}${x(w)},${y(v)}`).join(' ');

  // Effets indésirables : pic autour de S.2-S.3, retour à zéro vers S.8.
  const side = 'M ' + [
    [0, 4], [1, 26], [2, 34], [3, 30], [4, 20], [6, 9], [8, 3], [10, 1], [12, 1],
  ].map(([w, v], i) => `${i ? 'L' : ''}${x(w)},${y(v)}`).join(' ');

  const dots = [0, 4, 8, 12];
  const dotVal: Record<number, number> = { 0: 2, 4: 16, 8: 60, 12: 86 };

  return (
    <div ref={ref} className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`Courbe de progression sur 12 semaines pour ${label}`}>
        {/* grille verticale */}
        {weeks.map((w) => (
          <line key={w} x1={x(w)} y1={padT} x2={x(w)} y2={H - padB} stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        ))}
        <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="currentColor" strokeOpacity="0.28" strokeWidth="1" />

        {/* zone d'adaptation */}
        <rect x={x(0)} y={padT} width={x(4) - x(0)} height={H - padT - padB} fill="currentColor" fillOpacity="0.05" />
        <text x={x(2)} y={padT - 10} textAnchor="middle" className="fill-current" fontSize="10" opacity="0.55" style={{ letterSpacing: '0.12em' }}>
          ADAPTATION
        </text>
        <text x={x(8)} y={padT - 10} textAnchor="middle" className="fill-current" fontSize="10" opacity="0.55" style={{ letterSpacing: '0.12em' }}>
          AMÉLIORATION
        </text>

        {/* effets indésirables */}
        <motion.path
          d={side}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.45 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        />

        {/* amélioration */}
        <motion.path
          d={improve}
          fill="none"
          stroke="#E8664B"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />

        {dots.map((w, i) => (
          <motion.circle
            key={w}
            cx={x(w)}
            cy={y(dotVal[w])}
            r="5"
            fill="#E8664B"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.22 }}
          />
        ))}

        {weeks.map((w) => (
          <text key={w} x={x(w)} y={H - padB + 20} textAnchor="middle" className="fill-current" fontSize="11" opacity="0.6">
            S.{w}
          </text>
        ))}
      </svg>

      <div className="mt-5 flex flex-col sm:flex-row gap-x-7 gap-y-2 text-[12.5px]">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-5 h-[3px] rounded-full" style={{ background: '#E8664B' }} />
          {improveLabel}
        </span>
        <span className="inline-flex items-center gap-2 opacity-70">
          <span className="inline-block w-5 h-0 border-t-2 border-dashed border-current" />
          {sideEffectLabel}
        </span>
      </div>
    </div>
  );
}
