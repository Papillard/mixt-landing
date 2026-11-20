import { motion } from 'framer-motion';

// Frise « ce que le médecin regarde » : les éléments du dossier s'empilent un à un,
// convergent vers la décision médicale, puis le protocole et le suivi en découlent.
// Lecture seule : pas de bordure de carte ni d'effet de survol (rien n'est cliquable).

type Item = { label: string; when: string; key?: boolean };

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DossierTimeline({ items }: { items: Item[] }) {
  return (
    <div className="relative pl-9">
      {/* Fil vertical qui se dessine */}
      <motion.span
        aria-hidden="true"
        className="absolute left-[11px] top-2 bottom-2 w-[2px] origin-top bg-ink/15"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <ol className="m-0 p-0 list-none flex flex-col">
        {items.map((it, i) => (
          <motion.li
            key={it.label}
            className={`relative ${it.key ? 'my-4' : 'py-3'}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.22 }}
          >
            {/* Pastille sur le fil */}
            <span
              aria-hidden="true"
              className={`absolute -left-9 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full ${
                it.key ? 'h-6 w-6 bg-ember' : 'h-3.5 w-3.5 ml-[5px] bg-base border-2 border-ink/30'
              }`}
            >
              {it.key && (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </span>
            {it.key ? (
              <motion.div
                className="rounded-xl bg-deep text-white px-5 py-4 flex items-baseline justify-between gap-4"
                initial={{ scale: 0.96 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.25 + i * 0.22 }}
              >
                <span className="text-[19px] md:text-[21px] font-bold tracking-[-0.02em]">{it.label}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 whitespace-nowrap">{it.when}</span>
              </motion.div>
            ) : (
              <div className="flex items-baseline justify-between gap-4 border-b border-ink/[0.08] pb-3">
                <span className="text-[17px] md:text-[18px] text-ink">{it.label}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 whitespace-nowrap">{it.when}</span>
              </div>
            )}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
