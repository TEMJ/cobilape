import { useActualites } from '../hooks/useFirebase';
import Reveal from './Reveal';

const ActualitesList = ({ limit = 6 }) => {
  const { actualites, loading, error } = useActualites(limit);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(limit)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Erreur lors du chargement des actualités</p>
      </div>
    );
  }

  if (actualites.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Aucune actualité disponible pour le moment</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {actualites.map((actualite, index) => (
        <Reveal key={actualite.id} delayMs={index * 100}>
          <article className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            {actualite.imageUrl && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={actualite.imageUrl}
                  alt={actualite.titre}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span>{new Date(actualite.date).toLocaleDateString('fr-FR')}</span>
                {actualite.categorie && (
                  <>
                    <span>•</span>
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs">
                      {actualite.categorie}
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {actualite.titre}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {actualite.contenu}
              </p>
              <button className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                Lire la suite →
              </button>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
};

export default ActualitesList;
