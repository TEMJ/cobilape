import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const images = [
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523240794102-9c5d8a4f08c7?q=80&w=800&auto=format&fit=crop',
];

const RessourcesGalerie = () => (
  <SimplePage title="Galerie photos" subtitle="Découvrez la vie du collège en images">
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((src, i) => (
        <Reveal key={src} delayMs={i*80}>
          <img src={src} alt="Galerie" className="h-48 w-full rounded-xl object-cover" />
        </Reveal>
      ))}
    </div>
  </SimplePage>
);

export default RessourcesGalerie;
