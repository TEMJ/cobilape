import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const PedagogieEsprit = () => (
  <SimplePage title="Esprit de la Perle" subtitle="Excellence, respect, solidarité">
    <div className="space-y-6">
      <Reveal>
        <p className="text-gray-700">
          L’esprit de la Perle conjugue exigence académique et valeurs humaines. Il encourage le dépassement de soi,
          le respect des autres et l’engagement dans la vie de l’établissement.
        </p>
      </Reveal>
      <Reveal delayMs={120}>
        <p className="text-gray-700">Nos cérémonies et traditions renforcent le sentiment d’appartenance.</p>
      </Reveal>
    </div>
  </SimplePage>
);

export default PedagogieEsprit;
