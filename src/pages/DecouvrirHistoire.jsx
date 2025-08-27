import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const DecouvrirHistoire = () => (
  <SimplePage title="Notre histoire" subtitle="Un demi-siècle d’excellence et d’engagement">
    <div className="space-y-6">
      <Reveal>
        <p className="text-gray-700">
          Fondé dans les années 1970, le Collège Bilingue La Perle a grandi avec une ambition claire:
          offrir une éducation d’excellence, ouverte sur le monde et ancrée dans des valeurs humaines fortes.
        </p>
      </Reveal>
      <Reveal delayMs={120}>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>1970: ouverture du premier campus</li>
          <li>1995: passage au bilingue intégral</li>
          <li>2010: modernisation des laboratoires</li>
          <li>2020: transition numérique des apprentissages</li>
        </ul>
      </Reveal>
    </div>
  </SimplePage>
);

export default DecouvrirHistoire;
