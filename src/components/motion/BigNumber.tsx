import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  format?: 'plain' | 'comma';
};

export default function BigNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 1.4,
  decimals = 0,
  className = '',
  format = 'plain',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const n = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
    if (format === 'comma') {
      return `${prefix}${Number(n).toLocaleString('fr-FR')}${suffix}`;
    }
    return `${prefix}${n}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, value, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
