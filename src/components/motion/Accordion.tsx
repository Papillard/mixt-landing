import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Item = {
  q: string;
  a: string;
};

type Props = {
  items: Item[];
  defaultOpen?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Accordion({ items, defaultOpen = 0 }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="border-b border-black/[0.12]">
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex justify-between items-center gap-6 py-6 text-left cursor-pointer"
              style={{ fontFamily: 'inherit' }}
            >
              <span className="text-[16.5px] md:text-[17px] font-medium text-ink leading-snug">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="shrink-0 text-[22px] font-light text-ink-2 leading-none"
                aria-hidden
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-10 text-[14.5px] text-ink-2 leading-relaxed max-w-[680px]">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
