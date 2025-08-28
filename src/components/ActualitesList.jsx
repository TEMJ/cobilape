import { useActualites, useActualitesPaginated } from '../hooks/useFirebase';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import Loader from './Loader';

const ActualitesList = ({ limit = 6, paginated = false, pageSize = 9 }) => {
  const { actualites, loading, error } = useActualites(limit);
  const pagination = useActualitesPaginated(pageSize);

  const isLoading = paginated ? pagination.loading : loading;
  if (isLoading) {
    return (
      <Loader />
    );
  }

  const errMsg = paginated ? pagination.error : error;
  if (errMsg) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Erreur lors du chargement des actualités</p>
      </div>
    );
  }

  const items = paginated ? pagination.items : actualites;
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Aucune actualité disponible pour le moment</p>
      </div>
    );
  }

  return (
    <>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((actualite, index) => (
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
              <Link to={`/news/${actualite.id}`} className="inline-flex items-center text-primary-600 font-medium text-sm group/link">
                <span className="underline-offset-2 group-hover/link:underline">Lire la suite</span>
                <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">→</span>
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
    {paginated && (
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          onClick={pagination.prevPage}
          disabled={!pagination.hasPrev || pagination.loading}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 transition hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Précédent
        </button>
        <span className="text-sm text-gray-500">Page {pagination.page}</span>
        <button
          onClick={pagination.nextPage}
          disabled={!pagination.hasNext || pagination.loading}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-600 transition hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Suivant
        </button>
      </div>
    )}
    </>
  );
};

export default ActualitesList;
