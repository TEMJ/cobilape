import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';

const DecouvrirLieux = () => (
  <SimplePage title="Nos lieux de vie" subtitle="Des espaces pensés pour apprendre et s’épanouir">
    <div className="grid gap-6 sm:grid-cols-2">
      {[
        { title: 'Laboratoires', desc: 'Sciences, informatique: des espaces modernes équipés.' },
        { title: 'Bibliothèque', desc: 'Un fonds riche et des espaces de travail calmes.' },
        { title: 'Salles de classe', desc: 'Climat propice, effectifs maîtrisés, équipements numériques.' },
        { title: 'Installations sportives', desc: 'Terrains, gymnase, activités encadrées.' },
      ].map((b, i) => (
        <Reveal key={b.title} delayMs={i * 100}>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
            <p className="mt-2 text-gray-700">{b.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </SimplePage>
);

export default DecouvrirLieux;
