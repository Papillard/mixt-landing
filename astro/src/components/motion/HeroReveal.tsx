import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroReveal({
  eyebrow,
  title,
  highlight,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
        className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-2 flex items-center gap-3"
      >
        <span className="inline-block h-px w-10 bg-ink-2/60" />
        {eyebrow}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        className="font-serif text-[44px] md:text-[60px] font-normal leading-[1.05] tracking-[-0.035em] text-ink"
        style={{ fontVariationSettings: "'opsz' 144" }}
      >
        {title}{' '}
        <span
          className="italic-serif"
          style={{ display: 'inline' }}
        >
          {highlight}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        className="text-lg leading-relaxed text-ink-2 max-w-xl"
      >
        {subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
        className="mt-4"
      >
        {children}
      </motion.div>
    </div>
  );
}
