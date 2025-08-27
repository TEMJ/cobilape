import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const EtudierSecondModalites = () => (
  <SimplePage title="Second cycle - Modalités d’inscription" subtitle="Dossier et passerelles">
    <Reveal>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Dossier scolaire complet</li>
        <li>Rencontre avec le responsable de niveau</li>
        <li>Affectation en fonction du projet de l’élève</li>
      </ul>
    </Reveal>
  </SimplePage>
);

export default EtudierSecondModalites;
