import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  beforeLabel?: string;
  afterLabel?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BeforeAfterReveal({
  before,
  after,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-2">
      {/* BEFORE */}
      <motion.figure
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-blush/30"
      >
        <img
          src={before.src}
          alt={before.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover scale-[1.6] origin-bottom"
          style={{ objectPosition: 'center 85%' }}
        />
        <span className="absolute left-3 top-3 rounded-full bg-deep/95 text-white px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase">
          {beforeLabel}
        </span>
      </motion.figure>

      {/* AFTER — premium reveal: scale-in + blur-out + soft fade */}
      <motion.figure
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-blush/30"
      >
        <motion.img
          src={after.src}
          alt={after.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover origin-bottom"
          style={{ objectPosition: 'center 85%' }}
          initial={{ opacity: 0, scale: 1.7, filter: 'blur(16px)' }}
          animate={
            inView
              ? { opacity: 1, scale: 1.6, filter: 'blur(0px)' }
              : {}
          }
          transition={{ duration: 1.4, delay: 0.45, ease: [0.16, 0.84, 0.44, 1] }}
        />
        {/* Soft shine sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: [0, 0.35, 0] } : {}}
          transition={{ duration: 1.4, delay: 0.6, times: [0, 0.4, 1] }}
          style={{
            background:
              'linear-gradient(115deg, transparent 0%, transparent 35%, rgba(255,248,242,0.55) 50%, transparent 65%, transparent 100%)',
            mixBlendMode: 'overlay',
          }}
        />
        <span className="absolute left-3 top-3 rounded-full bg-deep/95 text-white px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase z-[2]">
          {afterLabel}
        </span>
      </motion.figure>
    </div>
  );
}
