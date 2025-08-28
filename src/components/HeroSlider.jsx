import { useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_INTERVAL_MS = 6000;

const useTyping = (text = '', speedMs = 30, deps = []) => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    setTyped('');
    if (!text) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return typed;
};

const HeroSlider = ({ slides = [], autoPlayMs = DEFAULT_INTERVAL_MS }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const safeSlides = useMemo(() => {
    if (!Array.isArray(slides) || slides.length === 0) {
      return [
        {
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop',
          title: "Collège Bilingue La Perle",
          subtitle: "Former les leaders de demain avec excellence et innovation",
        },
      ];
    }
    return slides;
  }, [slides]);

  useEffect(() => {
    if (autoPlayMs <= 0 || safeSlides.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeSlides.length);
    }, autoPlayMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlayMs, safeSlides.length]);

  const goTo = (index) => {
    setActiveIndex((index + safeSlides.length) % safeSlides.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  const activeSlide = safeSlides[activeIndex];
  const typedTitle = useTyping(activeSlide.title || '', 30, [activeIndex, activeSlide.title]);
  const typedSubtitle = useTyping(activeSlide.subtitle || '', 15, [activeIndex, activeSlide.subtitle]);

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {safeSlides.map((slide, idx) => (
          <div
            key={idx}
            className={
              'absolute inset-0 transition-opacity duration-700 ease-out will-change-[opacity] ' +
              (idx === activeIndex ? 'opacity-100' : 'opacity-0')
            }
            aria-hidden={idx !== activeIndex}
            style={{
              backgroundImage: `url(${slide.image || slide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Darker overlay */}
            <div className="absolute inset-0 bg-black/65" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl tracking-tight text-white drop-shadow-sm md:text-6xl">
              <span className="block font-extrabold">{typedTitle}</span>
              <span className="ml-1 inline-block h-10 w-[2px] animate-pulse bg-white align-middle md:h-12" />
            </h1>
            {activeSlide.subtitle && (
              <p className="mt-4 text-lg text-white/90 md:text-xl">
                {typedSubtitle}
                <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-white align-middle md:h-6" />
              </p>
            )}
            <div className="mt-8 flex items-center gap-4">
              <button className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white">
                Découvrir l'établissement
              </button>
              <button className="rounded-full bg-primary-600/90 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-primary-600">
                Contacter l'administration
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      {safeSlides.length > 1 && (
        <>
          <button
            onClick={goPrev}
            aria-label="Précédent"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white shadow ring-1 ring-white/20 backdrop-blur transition hover:bg-black/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M15.53 4.47a.75.75 0 010 1.06L9.06 12l6.47 6.47a.75.75 0 11-1.06 1.06l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Suivant"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white shadow ring-1 ring-white/20 backdrop-blur transition hover:bg-black/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M8.47 4.47a.75.75 0 000 1.06L14.94 12l-6.47 6.47a.75.75 0 101.06 1.06l7-7a.75.75 0 000-1.06l-7-7a.75.75 0 00-1.06 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center gap-2">
            {safeSlides.map((_, i) => (
              <div
                key={i}
                className={
                  'h-1 rounded-full transition-all duration-500 ease-out ' +
                  (i === activeIndex ? 'w-10 bg-white' : 'w-6 bg-white/50')
                }
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSlider;
