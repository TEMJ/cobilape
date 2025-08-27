import { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const Counter = ({
  from = 0,
  to = 100,
  durationMs = 1500,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  startWhenVisible = true,
}) => {
  const [displayValue, setDisplayValue] = useState(from);
  const [started, setStarted] = useState(!startWhenVisible);
  const ref = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!startWhenVisible) {
      setStarted(true);
      return undefined;
    }
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [startWhenVisible]);

  useEffect(() => {
    if (!started) return undefined;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      const value = from + (to - from) * eased;
      setDisplayValue(value);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, from, to, durationMs]);

  const formatted = `${prefix}${displayValue.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
};

export default Counter;
