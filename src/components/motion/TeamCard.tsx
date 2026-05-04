import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  image: string;
  alt: string;
  name: string;
  role: string;
  bio: string;
  index?: number;
};

export default function TeamCard({ image, alt, name, role, bio, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.12 }}
      className="flex flex-col group"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-blush/30 mb-5"
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="film-grade absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ objectPosition: 'center top' }}
        />
      </motion.div>
      <h3 className="text-[20px] md:text-[21px] font-semibold leading-tight text-ink mb-1 tracking-[-0.02em]">
        {name}
      </h3>
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ember-deep mb-3">
        {role}
      </div>
      <p className="text-[14.5px] leading-[1.6] text-ink-2">{bio}</p>
    </motion.article>
  );
}
