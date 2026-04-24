import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Actif = { name: string; dose: string; mechanism: string };

type FormulationSection = {
  heading: string;
  actifs: Actif[];
};

type Tab = {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
  narrative: string;
  resultBig: string;
  resultCaption: string;
  formulation: {
    title: string;
    sections: FormulationSection[];
    footer: string;
  };
  disclaimer: string;
};

type Props = {
  tabs: Tab[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ConditionTabs({ tabs }: Props) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div>
      <div className="flex gap-6 md:gap-8 overflow-x-auto border-b border-black/[0.12] mb-10 md:mb-14 -mx-6 px-6 md:mx-0 md:px-0">
        {tabs.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`relative pb-3 text-[15px] whitespace-nowrap transition-colors ${isActive ? 'text-ink font-semibold' : 'text-ink-3 hover:text-ink-2'}`}
              style={{ fontFamily: 'inherit' }}
            >
              {t.label}
              {isActive && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-ember"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[44%_1fr] gap-8 lg:gap-12">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-blush/30 lg:sticky lg:top-28 lg:self-start">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.image}
              src={active.image}
              alt={active.imageAlt}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-start pb-8 mb-8 border-b border-black/[0.08]">
                <p className="text-[18px] md:text-[19px] leading-relaxed text-ink">{active.narrative}</p>
                <div className="md:text-right md:min-w-[180px]">
                  <div className="text-[48px] md:text-[60px] font-semibold leading-[0.95] tracking-[-0.045em] text-ink mb-2">
                    {active.resultBig}
                  </div>
                  <p className="text-[12px] text-ink-3 leading-snug">{active.resultCaption}</p>
                </div>
              </div>

              <div className="rounded-[12px] bg-base border border-black/[0.08] p-7 md:p-8">
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-3 pb-4 mb-6 border-b border-black/[0.08]">
                  {active.formulation.title}
                </div>
                {active.formulation.sections.map((s) => (
                  <div key={s.heading} className="mb-6 last:mb-0">
                    <h5 className="font-semibold text-[15px] text-ink mb-3">→ {s.heading}</h5>
                    {s.actifs.map((a) => (
                      <div key={a.name} className="grid grid-cols-[1.2fr_0.6fr_1.5fr] gap-3 md:gap-4 py-1.5 items-baseline text-[13.5px]">
                        <strong className="font-medium text-ink">{a.name}</strong>
                        <span className="font-mono text-ink-2">{a.dose}</span>
                        <em className="not-italic text-ink-2">{a.mechanism}</em>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t border-black/[0.08] text-[12px] text-ink-3 leading-relaxed">
                  {active.formulation.footer}
                </div>
              </div>
              <p className="mt-4 text-[12px] text-ink-3 italic">{active.disclaimer}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
