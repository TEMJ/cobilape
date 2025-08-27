import SimplePage from './SimplePage';
import Reveal from './Reveal';

const StubPage = ({ title, subtitle = 'Contenu à venir prochainement.', heroImage }) => {
  return (
    <SimplePage title={title} subtitle={subtitle} heroImage={heroImage}>
      <Reveal>
        <p className="text-gray-700">
          Cette page est en cours de construction. Revenez bientôt pour découvrir son contenu.
        </p>
      </Reveal>
    </SimplePage>
  );
};

export default StubPage;
