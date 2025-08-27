import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import DecouvrirMotAccueil from './pages/DecouvrirMotAccueil';
import DecouvrirHistoire from './pages/DecouvrirHistoire';
import DecouvrirLieux from './pages/DecouvrirLieux';
import PedagogieNotre from './pages/PedagogieNotre';
import PedagogieEsprit from './pages/PedagogieEsprit';
import PedagogieSpirituelle from './pages/PedagogieSpirituelle';
import RessourcesChiffres from './pages/RessourcesChiffres';
import RessourcesGalerie from './pages/RessourcesGalerie';
import RessourcesSalleFetes from './pages/RessourcesSalleFetes';
import EtudierObservationPresentation from './pages/EtudierObservationPresentation';
import EtudierObservationModalites from './pages/EtudierObservationModalites';
import EtudierOrientationPresentation from './pages/EtudierOrientationPresentation';
import EtudierOrientationResultats from './pages/EtudierOrientationResultats';
import EtudierOrientationModalites from './pages/EtudierOrientationModalites';
import EtudierSecondPresentation from './pages/EtudierSecondPresentation';
import EtudierSecondResultats from './pages/EtudierSecondResultats';
import EtudierSecondModalites from './pages/EtudierSecondModalites';
import SimplePage from './components/SimplePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admissions */}
            <Route path="/admissions" element={<Admissions />} />

            {/* Découvrir */}
            <Route path="/decouvrir/mot-accueil" element={<DecouvrirMotAccueil />} />
            <Route path="/decouvrir/histoire" element={<DecouvrirHistoire />} />
            <Route path="/decouvrir/lieux-de-vie" element={<DecouvrirLieux />} />

            {/* Pédagogie */}
            <Route path="/pedagogie/notre-pedagogie" element={<PedagogieNotre />} />
            <Route path="/pedagogie/esprit-perle" element={<PedagogieEsprit />} />
            <Route path="/pedagogie/vie-spirituelle" element={<PedagogieSpirituelle />} />

            {/* Ressources */}
            <Route path="/ressources/chiffres" element={<RessourcesChiffres />} />
            <Route path="/ressources/galerie" element={<RessourcesGalerie />} />
            <Route path="/ressources/salle-fetes" element={<RessourcesSalleFetes />} />

            {/* Étudier */}
            <Route path="/etudier/observation/presentation" element={<EtudierObservationPresentation />} />
            <Route path="/etudier/observation/modalites" element={<EtudierObservationModalites />} />

            <Route path="/etudier/orientation/presentation" element={<EtudierOrientationPresentation />} />
            <Route path="/etudier/orientation/resultats" element={<EtudierOrientationResultats />} />
            <Route path="/etudier/orientation/modalites" element={<EtudierOrientationModalites />} />

            <Route path="/etudier/second-cycle/presentation" element={<EtudierSecondPresentation />} />
            <Route path="/etudier/second-cycle/resultats" element={<EtudierSecondResultats />} />
            <Route path="/etudier/second-cycle/modalites" element={<EtudierSecondModalites />} />

            {/* Vie scolaire */}
            <Route path="/vie-scolaire/aumonerie" element={<SimplePage title="L’aumônerie" subtitle="Accompagnement spirituel et humain" />} />
            <Route path="/vie-scolaire/bibliotheque" element={<SimplePage title="Bibliothèque & multimédia" subtitle="Ressources documentaires et numériques" />} />
            <Route path="/vie-scolaire/orientation" element={<SimplePage title="Orientation" subtitle="Conseils et suivi de projet scolaire" />} />

            <Route path="/vie-scolaire/clubs" element={<SimplePage title="Clubs (23)" subtitle="Des activités pour s’épanouir" />} />
            <Route path="/vie-scolaire/sports" element={<SimplePage title="Sports" subtitle="Esprit sain dans un corps sain" />} />
            <Route path="/vie-scolaire/evenements" element={<SimplePage title="Événements" subtitle="Temps forts de la communauté" />} />

            <Route path="/vie-scolaire/internat/infos" element={<SimplePage title="Internat - Infos pratiques" subtitle="Vivre au collège en toute sérénité" />} />
            <Route path="/vie-scolaire/internat/reglement" element={<SimplePage title="Internat - Règlement" subtitle="Un cadre de vie respectueux" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
