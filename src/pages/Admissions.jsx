import Reveal from '../components/Reveal';
import SimplePage from '../components/SimplePage';

const Admissions = () => {
  return (
    <SimplePage
      title="Admissions"
      subtitle="Tout savoir sur le concours d’entrée et l’inscription au Collège Bilingue La Perle"
      heroImage="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&auto=format&fit=crop"
    >
      <div className="space-y-10">
        <section>
          <Reveal variant="fadeDown">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Modalités d’inscription</h2>
          </Reveal>
          <Reveal>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Dossier: formulaire rempli, 2 photos, copie acte de naissance, bulletins récents</li>
              <li>Frais de dossier: à régler au secrétariat (non remboursables)</li>
              <li>Épreuves: Français/Anglais, Mathématiques, Culture générale</li>
              <li>Entretien: évaluation de la motivation et du projet scolaire</li>
            </ul>
          </Reveal>
        </section>

        <section>
          <Reveal variant="fadeDown">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Calendrier</h2>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm text-gray-500">Inscriptions</div>
                <div className="font-semibold text-gray-900">Janvier → Avril</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm text-gray-500">Concours</div>
                <div className="font-semibold text-gray-900">Mai</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm text-gray-500">Résultats</div>
                <div className="font-semibold text-gray-900">Juin</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm text-gray-500">Inscription définitive</div>
                <div className="font-semibold text-gray-900">Juillet</div>
              </div>
            </div>
          </Reveal>
        </section>

        <section>
          <Reveal variant="fadeDown">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contacts admissions</h2>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-gray-700">
              <p>Email: admissions@laperlecollege.com</p>
              <p>Téléphone: (+237) 6 74 67 32 92</p>
            </div>
          </Reveal>
        </section>
      </div>
    </SimplePage>
  );
};

export default Admissions;
