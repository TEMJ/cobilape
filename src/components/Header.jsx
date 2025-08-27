import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import logo from '../assets/logo 1.png';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.querySelector('header');
      if (mobileMenuOpen && header && !header.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const openMenu = (key) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(key);
  };

  const scheduleCloseMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Fermer tous les sous-menus quand on ferme le menu mobile
    if (mobileMenuOpen) {
      setActiveMenu(null);
    }
  };

  const toggleMobileSubmenu = (key) => {
    // Fermer le sous-menu précédent si on en ouvre un autre
    if (activeMenu !== key) {
      setActiveMenu(key);
    } else {
      setActiveMenu(null);
    }
  };

  const navItems = [
    { type: 'link', to: '/', label: 'Accueil' },
    { type: 'mega', key: 'decouvrir', label: 'Découvrir' },
    { type: 'mega', key: 'etudier', label: 'Étudier' },
    { type: 'mega', key: 'vie', label: 'Vie scolaire' },
    { type: 'link', to: '/news', label: 'Actualités' },
    { type: 'link', to: '/contact', label: 'Contact' },
  ];

  const megaContent = {
    decouvrir: {
      columns: [
        {
          title: "L'établissement",
          links: [
            { label: "Mot d'accueil", to: '/decouvrir/mot-accueil' },
            { label: 'Notre histoire', to: '/decouvrir/histoire' },
            { label: 'Nos lieux de vie', to: '/decouvrir/lieux-de-vie' },
          ],
        },
        {
          title: 'Pédagogie',
          links: [
            { label: 'Notre pédagogie', to: '/pedagogie/notre-pedagogie' },
            { label: 'Esprit de la Perle', to: '/pedagogie/esprit-perle' },
            { label: 'Vie spirituelle', to: '/pedagogie/vie-spirituelle' },
          ],
        },
        {
          title: 'Ressources',
          links: [
            { label: 'Collège en chiffres', to: '/ressources/chiffres' },
            { label: 'Galerie photos', to: '/ressources/galerie' },
            { label: 'Salle des fêtes', to: '/ressources/salle-fetes' },
          ],
        },
      ],
    },
    etudier: {
      columns: [
        {
          title: "Cycle d'observation",
          links: [
            { label: 'Présentation', to: '/etudier/observation/presentation' },
            { label: "Modalités d’inscription", to: '/etudier/observation/modalites' },
          ],
        },
        {
          title: "Cycle d’orientation",
          links: [
            { label: 'Présentation', to: '/etudier/orientation/presentation' },
            { label: 'Nos résultats', to: '/etudier/orientation/resultats' },
            { label: "Modalités d’inscription", to: '/etudier/orientation/modalites' },
          ],
        },
        {
          title: 'Second cycle',
          links: [
            { label: 'Présentation', to: '/etudier/second-cycle/presentation' },
            { label: 'Nos résultats', to: '/etudier/second-cycle/resultats' },
            { label: "Modalités d’inscription", to: '/etudier/second-cycle/modalites' },
          ],
        },
      ],
    },
    vie: {
      columns: [
        {
          title: 'Vie scolaire',
          links: [
            { label: "L’aumônerie", to: '/vie-scolaire/aumonerie' },
            { label: 'Bibliothèque & multimédia', to: '/vie-scolaire/bibliotheque' },
            { label: 'Orientation', to: '/vie-scolaire/orientation' },
          ],
        },
        {
          title: 'Clubs & activités',
          links: [
            { label: 'Clubs (23)', to: '/vie-scolaire/clubs' },
            { label: 'Sports', to: '/vie-scolaire/sports' },
            { label: 'Événements', to: '/vie-scolaire/evenements' },
          ],
        },
        {
          title: 'Internat',
          links: [
            { label: 'Infos pratiques', to: '/vie-scolaire/internat/infos' },
            { label: 'Règlement', to: '/vie-scolaire/internat/reglement' },
          ],
        },
      ],
    },
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? 'bg-black/60 backdrop-blur' : 'bg-transparent'}`}>
      {/* Top info bar */}
      <div className="hidden md:block border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 text-xs text-white/80 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 bg-white rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
              <a href="https://wa.link/zgq7x2">+237 6 74 67 32 92</a>
            </span>
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
              contact@cblaperle.org
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white">FB</a>
            <a href="#" className="hover:text-white">IG</a>
            <a href="#" className="hover:text-white">YT</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 text-white drop-shadow">
              <img src={logo} alt="Logo" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-2xl font-bold">Collège Bilingue La Perle</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="relative hidden md:block" onMouseLeave={scheduleCloseMenu}>
            <div className="ml-10 flex items-center gap-1">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group relative px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white`}
                  >
                    <span className="relative z-[1] rounded-md px-1">
                      {item.label}
                    </span>
                    <span className="pointer-events-none absolute inset-0 -z-10 rounded-md bg-white/10 opacity-0 backdrop-blur-sm ring-1 ring-inset ring-white/15 transition-opacity group-hover:opacity-100" />
                    <span className={`pointer-events-none absolute -bottom-0.5 left-2 right-2 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-white/0 via-white to-white/0 transition-transform duration-300 group-hover:scale-x-100 ${isActive(item.to) ? 'scale-x-100' : ''}`} />
                  </Link>
                ) : (
                  <div
                    key={item.key}
                    className="group relative"
                    onMouseEnter={() => openMenu(item.key)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white">
                      <span className="relative z-[1] rounded-md px-1">{item.label}</span>
                      <svg className={`h-4 w-4 transition-transform ${activeMenu === item.key ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5H7z"/></svg>
                    </button>

                    {/* Mega panel */}
                    {activeMenu === item.key && (
                      <div className="absolute left-1/2 top-full z-40 w-[72rem] -translate-x-1/2 pt-4">
                        <div className="rounded-2xl border border-white/10 bg-black/70 p-6 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur">
                          <div className="grid grid-cols-3 gap-8">
                            {megaContent[item.key].columns.map((col, i) => (
                              <div key={i}>
                                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">{col.title}</div>
                                <ul className="mt-3 space-y-2 text-sm">
                                  {col.links.map((l, idx) => (
                                    <li key={idx}>
                                      <Link to={l.to} className="flex items-center justify-between rounded-md px-2 py-1 text-white/90 transition hover:bg-white/10 hover:text-white">
                                        <span>{l.label}</span>
                                        <svg className="h-4 w-4 opacity-0 transition group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="ml-4 hidden md:flex items-center gap-3">
            <Link
              to="/admissions"
              className="rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:brightness-110"
            >
              Admissions
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white/80 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
            >
              <svg className="h-6 w-6 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'animate-slideDown' : 'animate-slideUp'}`}>
        <div className="border-t border-white/10 bg-black/95 backdrop-blur">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile nav items */}
            {navItems.map((item) => (
              <div key={item.to || item.key}>
                {item.type === 'link' ? (
                  <Link
                    to={item.to}
                    className={`block px-3 py-2 text-base font-medium text-white/85 transition-colors hover:text-white ${isActive(item.to) ? 'text-white' : ''}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu(item.key)}
                      className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-white/85 transition-colors hover:text-white"
                    >
                      <span>{item.label}</span>
                      <svg 
                        className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item.key ? 'rotate-180' : ''}`} 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M7 10l5 5 5-5H7z"/>
                      </svg>
                    </button>
                    
                    {/* Mobile mega menu content */}
                    <div className={`${activeMenu === item.key ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
                      <div className="mt-2 ml-4 space-y-4 border-l border-white/10 pl-4">
                        {megaContent[item.key].columns.map((col, i) => (
                          <div key={i}>
                            <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                              {col.title}
                            </div>
                            <ul className="space-y-1">
                              {col.links.map((l, idx) => (
                                <li key={idx}>
                                  <Link
                                    to={l.to}
                                    className="block px-2 py-1 text-sm text-white/70 transition-colors hover:text-white"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/admissions"
                className="block w-full rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:brightness-110"
              >
                Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 