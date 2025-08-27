import SimplePage from '../components/SimplePage';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

const RessourcesChiffres = () => (
  <SimplePage title="Collège en chiffres" subtitle="Quelques indicateurs clés">
    <div className="grid gap-6 sm:grid-cols-3">
      {[{v:1200,s:'+'},{v:98,s:'%'},{v:23,s:''}].map((it,i)=> (
        <Reveal key={i} delayMs={i*100}>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="text-4xl font-extrabold text-gray-900">
              <Counter from={0} to={it.v} durationMs={1500} suffix={it.s} />
            </div>
            <div className="mt-2 text-sm text-gray-600">{i===0?'Élèves':i===1?'Réussite globale':'Clubs'}</div>
          </div>
        </Reveal>
      ))}
    </div>
  </SimplePage>
);

export default RessourcesChiffres;
