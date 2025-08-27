import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const DecouvrirMotAccueil = () => (
  <SimplePage title="Mot d’accueil" subtitle="Bienvenue au Collège Bilingue La Perle">
    <Reveal>
      <p className="text-gray-700">
        Chers parents, chers élèves, chers partenaires, bienvenue dans notre communauté. Notre établissement
        place l’exigence, la bienveillance et l’ouverture au cœur de son projet. Nous accompagnons chaque
        élève vers la réussite, dans un cadre propice au travail et à l’épanouissement.
      </p>
      <p className="mt-4 text-gray-700">Bonne visite et excellente année scolaire.</p>
    </Reveal>
  </SimplePage>
);

export default DecouvrirMotAccueil;
