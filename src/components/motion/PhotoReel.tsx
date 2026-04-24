import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Item = {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
};

export default function PhotoReel({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-42%']);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-cream"
    >
      <motion.div className="flex gap-5 md:gap-7 will-change-transform" style={{ x }}>
        {items.map((it, i) => (
          <motion.figure
            key={`${it.src}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            className="shrink-0 w-[260px] md:w-[360px]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-blush/40">
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {it.label && (
                <span className="absolute left-3 top-3 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-ink">
                  {it.label}
                </span>
              )}
            </div>
            {it.caption && (
              <figcaption className="mt-3 text-sm text-ink-2 leading-relaxed">
                {it.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
