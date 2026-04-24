import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

type FormulaOverlay = {
  kind: 'formula';
  patientLabel: string;
  rows: Array<{ name: string; dose: string }>;
  footer: string;
};

type ChatOverlay = {
  kind: 'chat';
  doctor: string;
  status: string;
  message: string;
  reply: string;
  avatar?: string;
};

type ScoreOverlay = {
  kind: 'score';
  label: string;
  score: string;
  delta: string;
  rows: Array<{ label: string; value: string }>;
  footer: string;
};

type Overlay = FormulaOverlay | ChatOverlay | ScoreOverlay;

type Props = {
  image: string;
  alt: string;
  title: string;
  description: string;
  overlay: Overlay;
  index?: number;
};

function renderOverlay(o: Overlay) {
  if (o.kind === 'formula') {
    return (
      <div>
        <div className="text-[10px] uppercase tracking-[0.15em] text-ink-3 mb-3 pb-2.5 border-b border-black/[0.08]">
          {o.patientLabel}
        </div>
        {o.rows.map((r) => (
          <div key={r.name} className="flex justify-between items-baseline py-1 text-[12px]">
            <span className="text-ink-2">{r.name}</span>
            <strong className="font-semibold text-ink">{r.dose}</strong>
          </div>
        ))}
        <div className="mt-3 pt-2.5 border-t border-black/[0.06] text-[10px] italic text-ink-3">
          {o.footer}
        </div>
      </div>
    );
  }

  if (o.kind === 'chat') {
    return (
      <div>
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-black/[0.08]">
          {o.avatar ? (
            <img
              src={o.avatar}
              alt={o.doctor}
              className="w-7 h-7 rounded-full object-cover border border-black/[0.05] shrink-0"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-blush/60 border border-black/[0.05] shrink-0" />
          )}
          <div>
            <div className="text-[11px] font-semibold text-ink leading-tight">{o.doctor}</div>
            <div className="text-[9px] text-ink-3 leading-tight flex items-center gap-1 mt-0.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4E8A6B]" /> {o.status}
            </div>
          </div>
        </div>
        <div className="bg-cream/80 rounded-[10px] px-3 py-2 text-[11px] text-ink mb-1.5 max-w-[88%] leading-snug">
          {o.message}
        </div>
        <div className="ml-auto bg-deep text-white rounded-[10px] px-3 py-2 text-[11px] mt-1.5 max-w-[60%] leading-snug">
          {o.reply}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.15em] text-ink-3 mb-2">{o.label}</div>
      <div className="flex justify-between items-baseline mb-3">
        <div className="text-[34px] font-semibold text-ink leading-none tracking-[-0.035em]">
          {o.score}
        </div>
        <div className="text-[11px] text-ink-2">{o.delta}</div>
      </div>
      {o.rows.map((r) => (
        <div key={r.label} className="flex justify-between items-baseline py-1 text-[12px]">
          <span className="text-ink-2">{r.label}</span>
          <span className="text-ink font-mono tracking-[1px]">{r.value}</span>
        </div>
      ))}
      <div className="mt-2.5 pt-2 border-t border-black/[0.06] text-[10px] italic text-ink-3 leading-snug">
        {o.footer}
      </div>
    </div>
  );
}

export default function PillarCard({
  image,
  alt,
  title,
  description,
  overlay,
  index = 0,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  // Très léger parallax : image de fond se déplace de -6% à +6%
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.12 }}
      className="flex flex-col group"
    >
      <motion.div
        ref={cardRef}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="grain-overlay relative aspect-[4/5] overflow-hidden rounded-2xl bg-blush/30 mb-6"
      >
        <motion.img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="film-grade absolute inset-0 h-[112%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ y: bgY, top: '-6%' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: index * 0.12 + 0.35 }}
          className={`absolute bottom-4 rounded-[12px] bg-base/85 backdrop-blur-md p-5 shadow-[0_10px_30px_-12px_rgba(54,24,34,0.25)] ${
            overlay.kind === 'chat'
              ? 'right-4 w-[62%]'
              : 'left-4 right-4'
          }`}
        >
          {renderOverlay(overlay)}
        </motion.div>
      </motion.div>
      <h3 className="text-[22px] md:text-[23px] font-semibold leading-tight text-ink mb-2 tracking-[-0.02em]">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-ink-2">{description}</p>
    </motion.article>
  );
}
