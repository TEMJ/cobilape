import ArticleCard from '../components/ArticleCard';
import Reveal from '../components/Reveal';

const News = () => {
  const articles = [
    {
      id: 1,
      title: "Nouveau programme d'échange international",
      date: "15 août 2024",
      excerpt: "Notre collège lance un nouveau programme d'échange avec des établissements partenaires en Europe. Une opportunité unique pour nos élèves de découvrir de nouvelles cultures et d'améliorer leurs compétences linguistiques.",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Résultats exceptionnels au baccalauréat 2024",
      date: "10 juillet 2024",
      excerpt: "Félicitations à tous nos élèves ! Notre taux de réussite au baccalauréat atteint 98% cette année, avec 85% de mentions. Ces excellents résultats témoignent de la qualité de notre enseignement.",
      imageUrl: "https://images.unsplash.com/photo-1523240794102-9c5d8a4f08c7?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Inauguration du nouveau laboratoire de sciences",
      date: "5 juillet 2024",
      excerpt: "Un nouveau laboratoire de sciences modernes vient d'être inauguré. Équipé des dernières technologies, il permettra à nos élèves de mener des expériences innovantes et de développer leur esprit scientifique.",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Compétition de robotique : nos élèves brillent",
      date: "20 juin 2024",
      excerpt: "Nos élèves ont remporté le premier prix lors de la compétition régionale de robotique. Leur projet innovant a impressionné le jury par sa créativité et sa technicité.",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Voyage scolaire en Italie",
      date: "15 juin 2024",
      excerpt: "Les élèves de 4ème ont effectué un voyage culturel en Italie. Ils ont visité Rome, Florence et Venise, découvrant l'histoire et l'art de la Renaissance italienne.",
      imageUrl: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Nouveau club de théâtre",
      date: "1 juin 2024",
      excerpt: "Un nouveau club de théâtre a été créé pour permettre aux élèves de développer leur créativité et leur confiance en soi. Les premières représentations sont prévues pour la fin de l'année.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    }
  ];

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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, idx) => (
              <Reveal key={article.id} delayMs={idx * 80}>
                <ArticleCard
                  title={article.title}
                  date={article.date}
                  excerpt={article.excerpt}
                  imageUrl={article.imageUrl}
                />
              </Reveal>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 transition hover:bg-gray-50">Précédent</button>
              <button className="rounded-md border border-primary-600 bg-primary-600 px-3 py-2 text-white">1</button>
              <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 transition hover:bg-gray-50">2</button>
              <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 transition hover:bg-gray-50">3</button>
              <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 transition hover:bg-gray-50">Suivant</button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News; 