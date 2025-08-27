import ArticleCard from '../components/ArticleCard';
import HeroSlider from '../components/HeroSlider';
import Counter from '../components/Counter';
import Reveal from '../components/Reveal';
import ActualitesList from '../components/ActualitesList';

const Home = () => {
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1920&auto=format&fit=crop",
      title: "Bienvenue au Collège Bilingue La Perle",
      subtitle: "Excellence académique et formation humaine depuis 1995"
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1920&auto=format&fit=crop",
      title: "Une éducation bilingue d'exception",
      subtitle: "Français et anglais pour un avenir international"
    },
    {
      image: "https://images.unsplash.com/photo-1523240794102-9c2d2c0c0c0c?q=80&w=1920&auto=format&fit=crop",
      title: "Développement personnel et spirituel",
      subtitle: "Former des citoyens responsables et engagés"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Bannière */}
      <HeroSlider slides={heroSlides} autoPlayMs={6000} />

      {/* Section Présentation */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12" variant="fadeDown">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
              Bienvenue au Collège Bilingue La Perle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Depuis plus de 15 ans, notre établissement s'engage à offrir une éducation d'excellence 
              qui prépare nos élèves aux défis du monde moderne.
            </p>
          </Reveal>

          {/* Tuiles Thématiques */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Éducation',
                desc: "Un suivi rigoureux, un lien fort parents-élève-enseignant pour optimiser la réussite.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z"></path><path d="M21 14.25V9l-9 4.5v7.5l6-3v-4.5l3-1.5z"></path><path d="M3 9v5.25l6 3V13.5L3 9z"></path></svg>
                )
              },
              {
                title: 'Vie scolaire',
                desc: "Clubs, bibliothèque, orientation: favoriser l'épanouissement et l'ouverture d'esprit.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z"></path><path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"></path></svg>
                )
              },
              {
                title: 'Sports',
                desc: "Une tradition d'excellence sportive pour un équilibre corps-esprit.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2A5.5 5.5 0 0 1 22 7.5c0 1.61-.68 3.06-1.77 4.07l.02.02L12 20.5 3.75 11.6l.02-.02A5.48 5.48 0 0 1 2 7.5 5.5 5.5 0 0 1 7.5 2c1.71 0 3.24.77 4.25 1.98A5.49 5.49 0 0 1 16.5 2z"></path></svg>
                )
              },
            ].map((item, i) => (
              <Reveal key={i} delayMs={i * 120}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary-50 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary-600/10 p-3 text-primary-700">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                  <button className="mt-4 text-primary-600 hover:text-primary-700">Lire plus →</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques avec fond image */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center" variant="fadeDown">
            <h3 className="text-3xl font-extrabold tracking-tight text-white">La Perle en chiffres</h3>
            <p className="mt-2 text-white/80">Des résultats qui témoignent de notre exigence et de notre engagement</p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {[0,1,2].map((i) => (
              <Reveal key={i} delayMs={i * 120}>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center text-white shadow-xl ring-1 ring-white/10 backdrop-blur">
                  <div className="text-4xl font-extrabold">
                    {i === 0 && <Counter from={0} to={1200} durationMs={1500} suffix="+" />}
                    {i === 1 && <Counter from={0} to={98} durationMs={1600} suffix="%" />}
                    {i === 2 && <Counter from={0} to={23} durationMs={1400} />}
                  </div>
                  <div className="mt-2 text-sm text-white/80">
                    {i === 0 && 'Élèves inscrits'}
                    {i === 1 && 'Réussite globale'}
                    {i === 2 && 'Clubs & activités'}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Admissions */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-600 to-primary-500 opacity-90" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-white/5 p-10 text-center text-white ring-1 ring-white/10 backdrop-blur">
              <h3 className="text-2xl font-extrabold md:text-3xl">Concours d’entrée et Admissions</h3>
              <p className="mx-auto mt-3 max-w-2xl text-white/85">
                Rejoignez une communauté d’excellence. Consultez les modalités d’inscription et préparez votre dossier.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <a href="#" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-black/5 transition hover:bg-gray-100">Découvrir</a>
                <a href="#" className="rounded-full bg-black/30 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-black/40">S’inscrire</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Actualités & Publications</h2>
              <p className="mt-4 text-lg text-gray-600">Restez informés des dernières nouvelles de notre établissement</p>
            </div>
          </Reveal>
          
          <ActualitesList limit={6} />
          
          <Reveal delayMs={200}>
            <div className="text-center mt-12">
              <a href="/news" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors">
                Voir toutes les actualités
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Reveal>
          </div>
      </section>

      {/* Partenaires */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center" variant="fadeDown">
            <h3 className="text-base font-semibold tracking-wide text-gray-600">Nos partenaires</h3>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
            {['A', 'B', 'C', 'D'].map((p, i) => (
              <Reveal key={i} delayMs={i * 80}>
                <div className="flex h-16 items-center justify-center rounded-xl border border-gray-200 bg-white/70 text-gray-400 shadow-sm">
                  LOGO {p}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 