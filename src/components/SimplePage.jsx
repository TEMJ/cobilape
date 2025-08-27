import Reveal from './Reveal';
import PageHero from './PageHero';

const SimplePage = ({
  title = '',
  subtitle = '',
  heroImage = '',
  primaryCta = { label: "Découvrir l'établissement", href: '#' },
  secondaryCta = { label: "Contacter l'administration", href: '#' },
  children,
}) => {
  return (
    <div className="min-h-screen ">
      <PageHero
        title={title}
        subtitle={subtitle}
        heroImage={heroImage}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        heightClass="h-[60vh] md:h-[60vh]"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                {children}
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Liens utiles</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-primary-600">Admissions</a></li>
                  <li><a href="#" className="hover:text-primary-600">Calendrier</a></li>
                  <li><a href="#" className="hover:text-primary-600">Publications</a></li>
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimplePage;
