import { useEffect, useRef, useState } from 'react';

const variants = {
  fadeUp: 'translate-y-4 opacity-0',
  fadeDown: '-translate-y-4 opacity-0',
  fadeIn: 'opacity-0',
  fadeLeft: 'translate-x-4 opacity-0',
  fadeRight: '-translate-x-4 opacity-0',
};

const Reveal = ({
  as: Tag = 'div',
  children,
  className = '',
  variant = 'fadeUp',
  delayMs = 0,
  once = true,
  threshold = 0.2,
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (delayMs) {
            const id = setTimeout(() => setShow(true), delayMs);
            if (once) io.disconnect();
            return () => clearTimeout(id);
          }
          setShow(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delayMs, once, threshold]);

  const hidden = variants[variant] || variants.fadeUp;

  return (
    <Tag
      ref={ref}
      className={`${className} transform transition duration-700 ease-out will-change-[transform,opacity] ${
        show ? 'translate-y-0 translate-x-0 opacity-100' : hidden
      }`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
