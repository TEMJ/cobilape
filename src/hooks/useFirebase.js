import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';

// Hook pour charger les actualités
export const useActualites = (limit = 10) => {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActualites = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, 'actualites'),
          where('publie', '==', true),
          orderBy('date', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const actualitesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setActualites(actualitesData.slice(0, limit));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActualites();
  }, [limit]);

  return { actualites, loading, error };
};

// Hook pour charger les images de la galerie
export const useGalerie = (categorie = null) => {
  const [galerie, setGalerie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalerie = async () => {
      try {
        setLoading(true);
        let q = query(
          collection(db, 'galerie'),
          orderBy('date', 'desc')
        );
        
        if (categorie) {
          q = query(q, where('categorie', '==', categorie));
        }
        
        const querySnapshot = await getDocs(q);
        const galerieData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setGalerie(galerieData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalerie();
  }, [categorie]);

  return { galerie, loading, error };
};

// Fonction pour obtenir l'URL d'une image depuis Storage
export const getImageUrl = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.error('Erreur lors du chargement de l\'image:', error);
    return null;
  }
};
