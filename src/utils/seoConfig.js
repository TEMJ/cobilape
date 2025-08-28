// Configuration SEO pour toutes les pages du site
export const seoConfig = {
  home: {
    title: 'Accueil',
    description: 'Collège Bilingue La Perle - Institution d\'excellence offrant une éducation bilingue de qualité. Découvrez nos programmes éducatifs innovants et notre approche pédagogique unique.',
    keywords: 'collège bilingue, éducation bilingue, école privée, excellence éducative, pédagogie innovante, formation académique',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Collège Bilingue La Perle",
      "description": "Institution d'excellence offrant une éducation bilingue de qualité",
      "url": "https://collegelaperle.com",
      "logo": "https://collegelaperle.com/src/assets/logo1.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service"
      }
    }
  },
  
  about: {
    title: 'À Propos',
    description: 'Découvrez l\'histoire et la mission du Collège Bilingue La Perle. Notre engagement pour l\'excellence éducative et l\'innovation pédagogique.',
    keywords: 'histoire collège, mission éducative, valeurs pédagogiques, équipe enseignante, projet éducatif',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "À Propos - Collège Bilingue La Perle",
      "description": "Découvrez l'histoire et la mission du Collège Bilingue La Perle"
    }
  },
  
  programs: {
    title: 'Nos Programmes',
    description: 'Explorez nos programmes éducatifs bilingues innovants. De la maternelle au lycée, une formation complète et d\'excellence.',
    keywords: 'programmes éducatifs, formation bilingue, maternelle, primaire, collège, lycée, cursus scolaire',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Programmes Éducatifs",
      "description": "Programmes éducatifs bilingues du Collège Bilingue La Perle",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Maternelle Bilingue"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Primaire Bilingue"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Collège Bilingue"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Lycée Bilingue"
        }
      ]
    }
  },
  
  admission: {
    title: 'Admission',
    description: 'Processus d\'admission au Collège Bilingue La Perle. Informations sur les inscriptions, les conditions d\'admission et les démarches.',
    keywords: 'admission collège, inscription école, conditions admission, démarches inscription, frais de scolarité',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Admission - Collège Bilingue La Perle",
      "description": "Processus d'admission et informations d'inscription"
    }
  },
  
  contact: {
    title: 'Contact',
    description: 'Contactez le Collège Bilingue La Perle. Adresse, téléphone, email et formulaire de contact pour toute question.',
    keywords: 'contact collège, adresse école, téléphone, email, formulaire contact, localisation',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact - Collège Bilingue La Perle",
      "description": "Informations de contact et formulaire de contact"
    }
  },
  
  news: {
    title: 'Actualités',
    description: 'Restez informé des dernières actualités du Collège Bilingue La Perle. Événements, projets pédagogiques et vie de l\'établissement.',
    keywords: 'actualités collège, événements école, projets pédagogiques, vie établissement, nouvelles',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "name": "Actualités - Collège Bilingue La Perle",
      "description": "Actualités et événements du collège"
    }
  }
};

// Fonction utilitaire pour obtenir la configuration SEO d'une page
export const getSeoConfig = (page) => {
  return seoConfig[page] || seoConfig.home;
};

// Données structurées pour l'organisation
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Collège Bilingue La Perle",
  "description": "Institution d'excellence offrant une éducation bilingue de qualité",
  "url": "https://collegelaperle.com",
  "logo": "https://collegelaperle.com/src/assets/logo1.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/cobilape",
    "https://www.linkedin.com/company/cobilape"
  ]
};
