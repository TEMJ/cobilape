import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const PedagogieNotre = () => (
  <SimplePage title="Notre pédagogie" subtitle="Exigence, accompagnement et ouverture">
    <div className="space-y-6">
      <Reveal>
        <p className="text-gray-700">
          Notre pédagogie repose sur le travail régulier, l’évaluation formative et la différenciation.
          Les enseignants accompagnent chaque élève avec des objectifs clairs et un suivi individualisé.
        </p>
      </Reveal>
      <Reveal delayMs={120}>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Parcours personnalisés</li>
          <li>Projets interdisciplinaires</li>
          <li>Usage raisonné du numérique</li>
          <li>Ouverture culturelle et scientifique</li>
        </ul>
      </Reveal>
    </div>
  </SimplePage>
);

export default PedagogieNotre;
