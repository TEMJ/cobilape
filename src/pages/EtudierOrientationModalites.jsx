import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const EtudierOrientationModalites = () => (
  <SimplePage title="Cycle d’orientation - Modalités d’inscription" subtitle="Procédures et échéances">
    <Reveal>
      <ol className="list-decimal pl-6 text-gray-700 space-y-2">
        <li>Dossier à compléter en ligne</li>
        <li>Tests de positionnement</li>
        <li>Entretien avec la direction</li>
      </ol>
    </Reveal>
  </SimplePage>
);

export default EtudierOrientationModalites;
