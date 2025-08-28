import { Helmet } from 'react-helmet-async';

const ArticleSEO = ({ article }) => {
  if (!article) return null;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.titre || article.title,
    "description": article.description || article.contenu?.substring(0, 160) || "Article du Collège Bilingue La Perle",
    "image": article.imageUrl,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "Collège Bilingue La Perle"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Collège Bilingue La Perle",
      "logo": {
        "@type": "ImageObject",
                 "url": "https://collegelaperle.com/src/assets/logo1.png"
      }
    },
           "mainEntityOfPage": {
         "@type": "WebPage",
         "@id": `https://collegelaperle.com/news/${article.id}`
       }
  };

  return (
    <Helmet>
      <title>{`${article.titre || article.title} - Collège Bilingue La Perle`}</title>
      <meta name="description" content={article.description || article.contenu?.substring(0, 160) || "Article du Collège Bilingue La Perle"} />
      <meta name="keywords" content={`actualités, collège bilingue, ${article.categorie || ''}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={article.titre || article.title} />
      <meta property="og:description" content={article.description || article.contenu?.substring(0, 160)} />
      <meta property="og:type" content="article" />
             <meta property="og:url" content={`https://collegelaperle.com/news/${article.id}`} />
      <meta property="og:image" content={article.imageUrl} />
      <meta property="article:published_time" content={article.date} />
      <meta property="article:author" content="Collège Bilingue La Perle" />
      <meta property="article:section" content={article.categorie} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article.titre || article.title} />
      <meta name="twitter:description" content={article.description || article.contenu?.substring(0, 160)} />
      <meta name="twitter:image" content={article.imageUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
    </Helmet>
  );
};

export default ArticleSEO;
