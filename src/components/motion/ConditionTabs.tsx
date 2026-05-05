import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Actif = {
  name: string;
  bold: string;
  rest?: string;
};

type Tab = {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
  chip: string;
  pedagogy: {
    lede: string;
    body: string;
  };
  actifs: Actif[];
  footer: string;
  disclaimer: string;
  placeholder?: boolean;
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
      <div className="flex gap-6 md:gap-8 overflow-x-auto border-b border-black/[0.08] mb-10 md:mb-12 -mx-6 px-6 md:mx-0 md:px-0 text-[15px] font-medium">
        {tabs.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`relative pb-4 whitespace-nowrap transition-colors ${
                isActive ? 'text-ink' : 'text-ink-3 hover:text-ink-2'
              }`}
              style={{ fontFamily: 'inherit' }}
            >
              {t.label}
              {isActive && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[1.5px] bg-ember"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.35fr] gap-10 lg:gap-14 items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-blush/30 lg:sticky lg:top-28 lg:self-start">
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
          <div className="absolute left-[18px] top-[18px] rounded-[6px] bg-deep/95 backdrop-blur px-3 py-[7px] font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-white">
            {active.chip}
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex flex-col gap-7"
            >
              <div className="max-w-[560px]">
                <p className="text-[18px] font-medium leading-[1.5] tracking-[-0.005em] text-ink mb-3">
                  {active.pedagogy.lede}
                </p>
                <p className="text-[15px] leading-[1.65] text-ink-2">
                  {active.pedagogy.body}
                </p>
              </div>

              <div className="rounded-[14px] bg-base border border-black/[0.04] p-6 md:p-7">
                {active.placeholder ? (
                  <p className="text-[14px] text-ink-3 italic leading-relaxed">
                    Section en préparation.
                  </p>
                ) : (
                  <>
                    <div className="hidden md:grid grid-cols-[180px_1fr] gap-x-6 pb-2.5 border-b border-black/[0.12]">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3 font-medium">
                        Actif
                      </span>
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3 font-medium">
                        Effet
                      </span>
                    </div>
                    {active.actifs.map((a, i) => (
                      <div
                        key={a.name}
                        className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-6 gap-y-1.5 md:gap-y-0 py-3 md:items-baseline ${
                          i > 0 ? 'border-t border-black/[0.07]' : ''
                        }`}
                      >
                        <span className="text-[14.5px] font-semibold text-ink tracking-[-0.005em]">
                          {a.name}
                        </span>
                        <p className="text-[13.5px] leading-[1.45] text-ink-2 m-0">
                          <b className="font-semibold text-ink">{a.bold}</b>
                          {a.rest ? ` ${a.rest}` : ''}
                        </p>
                      </div>
                    ))}
                    <div className="mt-4 pt-3.5 border-t border-black/[0.07] text-[12.5px] text-ink-3 leading-[1.55]">
                      {active.footer}
                    </div>
                  </>
                )}
              </div>

              <p className="italic-serif text-[13px] text-ink-3">
                {active.disclaimer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
