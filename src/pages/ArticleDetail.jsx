import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import Loader from '../components/Loader';
import ArticleSEO from '../components/ArticleSEO';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const ref = doc(db, 'actualites', id);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setArticle({ id: snap.id, ...snap.data() });
        } else {
          setError("Article introuvable");
        }
      } catch (e) {
        setError(e.message || 'Erreur de chargement');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <Loader />
    );
  }

  if (error || !article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-red-600 mb-6">{error || 'Article introuvable'}</p>
        <Link to="/news" className="text-primary-600 hover:text-primary-700">← Retour aux actualités</Link>
      </div>
    );
  }

  const displayDate = article.date ? new Date(article.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : '';

  return (
    <div className="min-h-screen">
      <ArticleSEO article={article} />
      {/* Hero */}
      <section className="relative">
        <div className="h-60 md:h-96 bg-gray-200 relative overflow-hidden">
          {article.imageUrl && (
            <img src={article.imageUrl} alt={article.titre} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-5xl mx-auto px-4 pb-6">
              {article.categorie && (
                <span className="inline-block mb-3 bg-primary-600/90 text-white px-3 py-1 rounded-full text-xs">{article.categorie}</span>
              )}
              <h1 className="text-white text-2xl md:text-4xl font-extrabold leading-tight">
                {article.titre || article.title}
              </h1>
              <div className="mt-2 text-white/80 text-sm">
                {displayDate}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-12 gap-8">
          <aside className="md:col-span-3 order-2 md:order-1">
            <div className="sticky top-20 space-y-4">
              <Link to="/news" className="mt-5 inline-flex items-center text-primary-700 hover:text-primary-800">
                <span className="mr-2">←</span> Toutes les actualités
              </Link>
              {article.categorie && (
                <div className="hidden md:block">
                  <div className="text-xs uppercase text-gray-500 mb-2">Catégorie</div>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs">{article.categorie}</div>
                </div>
              )}
              {displayDate && (
                <div className="hidden md:block">
                  <div className="text-xs uppercase text-gray-500 mb-2">Publié le</div>
                  <div className="text-gray-700 text-sm">{displayDate}</div>
                </div>
              )}
            </div>
          </aside>

          <div className="md:col-span-9 order-1 md:order-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <article className="prose prose-gray prose-lg max-w-none">
                <p className="whitespace-pre-line">{article.contenu || article.excerpt}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;


