import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const EtudierSecondResultats = () => (
  <SimplePage title="Second cycle - Résultats" subtitle="Des résultats constants et élevés">
    <Reveal>
      <div className="grid gap-4 sm:grid-cols-3">
        {['98% réussite', '88% mentions', '100% insertion post-bac'].map((k) => (
          <div key={k} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div className="text-xl font-bold text-gray-900">{k}</div>
          </div>
        ))}
      </div>
    </Reveal>
  </SimplePage>
);

export default EtudierSecondResultats;
