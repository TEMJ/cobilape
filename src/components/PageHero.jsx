const PageHero = ({
  title = '',
  subtitle = '',
  heroImage = '',
  // primaryCta = { label: "Découvrir l'établissement", href: '/' },
  // secondaryCta = { label: "Contacter l'administration", href: '#' },
  heightClass = 'h-[60vh] md:h-[60vh]'
}) => {
  return (
    <section className={`relative ${heightClass} w-full overflow-hidden text-white`}>
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: heroImage
            ? `url(${heroImage})`
            : "url('https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />
      <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {title && (
            <h1 className="text-4xl font-extrabold tracking-tight md:text-3xl">{title}</h1>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-white/90 md:text-m">{subtitle}</p>
          )}
          {/* {(primaryCta?.label || secondaryCta?.label) && (
            <div className="mt-8 flex items-center gap-4">
              {primaryCta?.label && (
                <a href={primaryCta.href} className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white">
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta?.label && (
                <a href={secondaryCta.href} className="rounded-full bg-primary-600/90 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-primary-600">
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
