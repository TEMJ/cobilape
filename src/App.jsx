import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import SimplePage from './components/SimplePage';
import Loader from './components/Loader';
import SEO from './components/SEO';
import { getSeoConfig } from './utils/seoConfig';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));
const Admissions = lazy(() => import('./pages/Admissions'));
const DecouvrirMotAccueil = lazy(() => import('./pages/DecouvrirMotAccueil'));
const DecouvrirHistoire = lazy(() => import('./pages/DecouvrirHistoire'));
const DecouvrirLieux = lazy(() => import('./pages/DecouvrirLieux'));
const PedagogieNotre = lazy(() => import('./pages/PedagogieNotre'));
const PedagogieEsprit = lazy(() => import('./pages/PedagogieEsprit'));
const PedagogieSpirituelle = lazy(() => import('./pages/PedagogieSpirituelle'));
const RessourcesChiffres = lazy(() => import('./pages/RessourcesChiffres'));
const RessourcesGalerie = lazy(() => import('./pages/RessourcesGalerie'));
const RessourcesSalleFetes = lazy(() => import('./pages/RessourcesSalleFetes'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const EtudierObservationPresentation = lazy(() => import('./pages/EtudierObservationPresentation'));
const EtudierObservationModalites = lazy(() => import('./pages/EtudierObservationModalites'));
const EtudierOrientationPresentation = lazy(() => import('./pages/EtudierOrientationPresentation'));
const EtudierOrientationResultats = lazy(() => import('./pages/EtudierOrientationResultats'));
const EtudierOrientationModalites = lazy(() => import('./pages/EtudierOrientationModalites'));
const EtudierSecondPresentation = lazy(() => import('./pages/EtudierSecondPresentation'));
const EtudierSecondResultats = lazy(() => import('./pages/EtudierSecondResultats'));
const EtudierSecondModalites = lazy(() => import('./pages/EtudierSecondModalites'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loader />}> 
            <Routes>
              <Route path="/" element={
                <>
                  <SEO {...getSeoConfig('home')} />
                  <Home />
                </>
              } />
              <Route path="/about" element={
                <>
                  <SEO {...getSeoConfig('about')} />
                  <About />
                </>
              } />
              <Route path="/news" element={
                <>
                  <SEO {...getSeoConfig('news')} />
                  <News />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <SEO {...getSeoConfig('contact')} />
                  <Contact />
                </>
              } />
              <Route path="/news/:id" element={<ArticleDetail />} />

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
          </Suspense>
        </main>
        <Footer />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
