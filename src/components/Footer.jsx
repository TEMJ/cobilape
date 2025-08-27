const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + About */}
          <div>
            <h3 className="text-xl font-bold">Collège Bilingue La Perle</h3>
            <p className="mt-4 text-sm text-white/70">
              Une communauté éducative d'excellence, engagée pour la réussite et l'épanouissement de chaque élève.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>BP : 760 Douala, Ari Ngodi Bakoko derrière Nepturne Oil</li>
              <li>(+237) 6 74 67 32 92</li>
              <li>contact@cblaperle.org</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90">Liens rapides</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white">Découvrir l'établissement</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Vie scolaire</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Actualités</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white/90">Newsletter</h4>
            <p className="mt-4 text-sm text-white/70">Recevez les actualités et publications du collège.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Votre email"
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button
                type="submit"
                className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-500"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-white/60 sm:px-6 lg:px-8">
          <p>© {currentYear} Collège Bilingue La Perle. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 