import Reveal from '../components/Reveal';
import SimplePage from '../components/SimplePage';

const About = () => {
  return (
    <SimplePage
      title="À propos de notre collège"
      subtitle="Découvrez notre histoire, notre mission et nos valeurs"
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9e1?q=80&w=1920&auto=format&fit=crop"
    >
      <div className="space-y-12">
        <section>
          <Reveal variant="fadeDown">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre histoire</h2>
          </Reveal>
          <Reveal>
            <p className="text-gray-700">
              Fondé en 1970, le Collège Bilingue La Perle est un établissement d'enseignement secondaire reconnu pour son
              excellence académique et son engagement envers le développement personnel de chaque élève.
            </p>
            <p className="mt-4 text-gray-700">
              Depuis plus de 50 ans, nous avons formé des milliers d'élèves qui ont réussi dans leurs études supérieures et
              dans leur vie professionnelle.
            </p>
          </Reveal>
        </section>

        <section>
          <Reveal variant="fadeDown">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h2>
          </Reveal>
          <Reveal>
            <p className="text-gray-700">
              Former des citoyens responsables, créatifs et compétents, capables de s'adapter aux défis du monde moderne.
            </p>
          </Reveal>
        </section>

        <section>
          <Reveal variant="fadeDown">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos valeurs</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Excellence', desc: "Rechercher l'excellence dans tous nos domaines d'action." },
              { title: 'Bienveillance', desc: 'Accompagner chaque élève avec bienveillance et respect.' },
              { title: 'Solidarité', desc: "Favoriser l'entraide et la coopération entre tous les membres." },
              { title: 'Innovation', desc: "Encourager la créativité et l'innovation dans nos pratiques." },
            ].map((v, i) => (
              <Reveal key={v.title} delayMs={i * 120}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                  <p className="mt-2 text-gray-700">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </SimplePage>
  );
};

export default About; 