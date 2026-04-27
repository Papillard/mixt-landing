import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Step = {
  name: string;
  role: string;
  avatarSrc?: string;
  isLogo?: boolean;
  title: string;
  body: string;
};

type Props = {
  steps: Step[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PatientTimeline({ steps }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 40%'],
  });
  const progress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background line — hidden on small mobile, shown from 481px up */}
      <div
        className="hidden min-[481px]:block absolute top-0 bottom-0 w-px bg-white/10 left-[95px] md:left-[239px]"
        aria-hidden
      />
      {/* Animated ember fill */}
      <motion.div
        className="hidden min-[481px]:block absolute top-0 w-px bg-ember origin-top left-[95px] md:left-[239px]"
        style={{ scaleY: lineScale, height: '100%' }}
        aria-hidden
      />

      <ul className="flex flex-col">
        {steps.map((step, i) => (
          <TimelineRow key={i} step={step} isLast={i === steps.length - 1} />
        ))}
      </ul>
    </div>
  );
}

function TimelineRow({ step, isLast }: { step: Step; isLast: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0.35, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 16 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`grid grid-cols-1 gap-3 min-[481px]:grid-cols-[80px_32px_1fr] min-[481px]:gap-0 md:grid-cols-[220px_40px_1fr] items-center relative ${
        isLast ? 'pb-0' : 'pb-12 min-[481px]:pb-[72px] md:pb-[120px]'
      }`}
    >
      {/* Left — avatar + name */}
      <div className="flex items-center gap-2.5 text-left min-[481px]:flex-col min-[481px]:items-center min-[481px]:gap-0 min-[481px]:text-center">
        {step.isLogo ? (
          <div
            className="w-14 h-14 md:w-40 md:h-40 rounded-[10px] flex items-center justify-center bg-white/10 font-serif text-[14px] md:text-[26px] font-medium text-white flex-shrink-0 min-[481px]:mb-2.5"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            mixt
          </div>
        ) : (
          <div className="w-14 h-14 md:w-40 md:h-40 rounded-[10px] overflow-hidden flex-shrink-0 bg-gradient-to-br from-blush to-warm min-[481px]:mb-2.5">
            <img
              src={step.avatarSrc}
              alt={step.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col">
          <div className="text-[14px] md:text-[19px] font-semibold text-white">{step.name}</div>
          <div className="text-[12px] md:text-[15px] text-white/45">{step.role}</div>
        </div>
      </div>

      {/* Center — dot on the line (hidden on small mobile) */}
      <div className="hidden min-[481px]:flex items-center justify-center relative z-[3]">
        <motion.div
          className="w-2.5 h-2.5 rounded-full"
          animate={{ backgroundColor: inView ? '#E8664B' : 'rgba(255,255,255,0.2)' }}
          transition={{ duration: 0.4, ease: EASE }}
          aria-hidden
        />
      </div>

      {/* Right — content */}
      <div className="pl-4 border-l-2 border-ember min-[481px]:pl-3 min-[481px]:border-l-0 md:pl-6">
        <h3 className="text-[18px] md:text-[24px] font-semibold text-white mb-2.5">{step.title}</h3>
        <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/55">{step.body}</p>
      </div>
    </motion.li>
  );
}
