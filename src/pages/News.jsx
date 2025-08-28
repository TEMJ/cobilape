import Reveal from '../components/Reveal';
import ActualitesList from '../components/ActualitesList';

const News = () => {
  // Contenu dynamique: la liste provient de Firestore via ActualitesList

  return (
    <div className="min-h-screen">
      {/* Header image */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop')" }} />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Actualités</h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/85 text-lg">Restez informés des dernières nouvelles de notre établissement</p>
          </Reveal>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Reveal>
              <ActualitesList paginated pageSize={9} />
            </Reveal>
          </div>

        </div>
      </section>
    </div>
  );
};

export default News; 