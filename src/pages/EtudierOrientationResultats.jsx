import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const EtudierOrientationResultats = () => (
  <SimplePage title="Cycle d’orientation - Résultats" subtitle="Des performances attestées et dignement admirables">
    <Reveal>
      <div className="grid gap-4 sm:grid-cols-3">
        {['92% mention', '98% réussite', '85% poursuite'].map((k, i) => (
          <div key={k} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div className="text-xl font-bold text-gray-900">{k}</div>
          </div>
        ))}
      </div>
    </Reveal>
  </SimplePage>
);

export default EtudierOrientationResultats;
