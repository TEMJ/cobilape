import { useGalerie } from '../hooks/useFirebase';
import Reveal from './Reveal';

const GalerieGrid = ({ categorie = null, limit = 12 }) => {
  const { galerie, loading, error } = useGalerie(categorie);

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(limit)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Erreur lors du chargement de la galerie</p>
      </div>
    );
  }

  if (galerie.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Aucune image disponible pour le moment</p>
      </div>
    );
  }

  const displayedGalerie = limit ? galerie.slice(0, limit) : galerie;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayedGalerie.map((image, index) => (
        <Reveal key={image.id} delayMs={index * 50}>
          <div className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={image.imageUrl}
              alt={image.titre}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h3 className="font-semibold text-sm mb-1">{image.titre}</h3>
                  {image.date && (
                    <p className="text-xs text-white/80">
                      {new Date(image.date).toLocaleDateString('fr-FR')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default GalerieGrid;
