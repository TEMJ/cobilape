import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const EtudierObservationModalites = () => (
  <SimplePage title="Cycle d'observation - Modalités d’inscription" subtitle="Dossier, épreuves, calendrier">
    <Reveal>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Dossier d’inscription à retirer au secrétariat</li>
        <li>Épreuves écrites et orales</li>
        <li>Publication des résultats sur le site</li>
      </ul>
    </Reveal>
  </SimplePage>
);

export default EtudierObservationModalites;
