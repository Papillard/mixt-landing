import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
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

function DesktopPanel({ tab }: { tab: Tab }) {
  return (
    <div className="flex flex-col gap-7">
      <div className="max-w-[560px]">
        <p className="text-[18px] font-medium leading-[1.5] tracking-[-0.005em] text-ink mb-3">
          {tab.pedagogy.lede}
        </p>
        <p className="text-[15px] leading-[1.65] text-ink-2">{tab.pedagogy.body}</p>
      </div>

      <div className="rounded-[14px] bg-base border border-black/[0.04] p-6 md:p-7">
        {tab.placeholder ? (
          <p className="text-[14px] text-ink-3 italic leading-relaxed">Section en préparation.</p>
        ) : (
          <>
            <div className="grid grid-cols-[180px_1fr] gap-x-6 pb-2.5 border-b border-black/[0.12]">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3 font-medium">
                Actif
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3 font-medium">
                Effet
              </span>
            </div>
            {tab.actifs.map((a, i) => (
              <div
                key={a.name}
                className={`grid grid-cols-[180px_1fr] gap-x-6 py-3 items-baseline ${
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
              {tab.footer}
            </div>
          </>
        )}
      </div>

      <p className="italic-serif text-[13px] text-ink-3">{tab.disclaimer}</p>
    </div>
  );
}

function MobileSwipeCards({ tabs }: Props) {
  const [index, setIndex] = useState(0);
  const goTo = (i: number) => setIndex(Math.max(0, Math.min(tabs.length - 1, i)));

  const handleDragEnd = (_e: unknown, info: PanInfo) => {
    const offset = 60;
    const velocity = 300;
    if (info.offset.x < -offset || info.velocity.x < -velocity) {
      goTo(index + 1);
    } else if (info.offset.x > offset || info.velocity.x > velocity) {
      goTo(index - 1);
    }
  };

  return (
    <div className="md:hidden">
      <div className="overflow-hidden">
        <motion.div
          className="flex touch-pan-y"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={handleDragEnd}
          animate={{ x: `${-index * 100}%` }}
          transition={{ type: 'spring', stiffness: 280, damping: 32 }}
        >
          {tabs.map((t) => (
            <div key={t.id} className="shrink-0 w-full px-1">
              <article className="rounded-[16px] bg-base border border-black/[0.05] overflow-hidden shadow-[0_8px_28px_-18px_rgba(54,24,34,0.18)]">
                <div className="relative aspect-[16/11] bg-blush/30">
                  <img
                    src={t.image}
                    alt={t.imageAlt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute left-3 top-3 rounded-[6px] bg-deep/95 backdrop-blur px-2.5 py-[5px] font-mono text-[9.5px] font-semibold tracking-[0.16em] uppercase text-white">
                    {t.chip}
                  </div>
                </div>
                <div className="px-5 pt-5 pb-6">
                  <p className="text-[17px] font-medium leading-[1.45] tracking-[-0.005em] text-ink mb-2.5">
                    {t.pedagogy.lede}
                  </p>
                  <p className="text-[14.5px] leading-[1.6] text-ink-2">{t.pedagogy.body}</p>
                </div>
              </article>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-1.5 mt-6">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Voir ${t.label}`}
            className="py-2 px-1"
          >
            <motion.span
              animate={{ width: i === index ? 22 : 6 }}
              transition={{ duration: 0.3, ease: EASE }}
              className={`block h-[6px] rounded-full ${
                i === index ? 'bg-ink' : 'bg-ink/20'
              }`}
            />
          </button>
        ))}
      </div>

      <p className="italic-serif text-[12.5px] text-ink-3 text-center mt-4">
        {tabs[index]?.disclaimer}
      </p>
    </div>
  );
}

function DesktopTabs({ tabs }: Props) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="hidden md:block">
      <div className="flex gap-8 overflow-x-auto border-b border-black/[0.08] mb-12 text-[15px] font-medium">
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

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <DesktopPanel tab={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ConditionTabs({ tabs }: Props) {
  return (
    <div>
      <MobileSwipeCards tabs={tabs} />
      <DesktopTabs tabs={tabs} />
    </div>
  );
}
