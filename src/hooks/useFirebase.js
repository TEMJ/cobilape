import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where, startAfter, limit as limitFn } from 'firebase/firestore';
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
          // orderBy('date', 'desc')
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

// Pagination des actualités
export const useActualitesPaginated = (pageSize = 9) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [cursors, setCursors] = useState([]); // stack of lastVisible per page

  useEffect(() => {
    const fetchFirstPage = async () => {
      try {
        setLoading(true);
        const baseQuery = query(
          collection(db, 'actualites'),
          where('publie', '==', true),
          orderBy('__name__'),
          limitFn(pageSize)
        );
        const snapshot = await getDocs(baseQuery);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(data);
        setPage(1);
        setHasPrev(false);
        setCursors(snapshot.docs.length ? [snapshot.docs[snapshot.docs.length - 1]] : []);

        // Peek for next page
        if (snapshot.docs.length === pageSize) {
          const nextQ = query(
            collection(db, 'actualites'),
            where('publie', '==', true),
            orderBy('__name__'),
            startAfter(snapshot.docs[snapshot.docs.length - 1]),
            limitFn(1)
          );
          const nextSnap = await getDocs(nextQ);
          setHasNext(!nextSnap.empty);
        } else {
          setHasNext(false);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFirstPage();
  }, [pageSize]);

  const nextPage = async () => {
    try {
      if (!cursors.length) return;
      setLoading(true);
      const lastCursor = cursors[cursors.length - 1];
      const q = query(
        collection(db, 'actualites'),
        where('publie', '==', true),
        orderBy('__name__'),
        startAfter(lastCursor),
        limitFn(pageSize)
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      setPage(p => p + 1);
      setHasPrev(true);
      if (snapshot.docs.length) {
        setCursors(prev => [...prev, snapshot.docs[snapshot.docs.length - 1]]);
      }
      if (snapshot.docs.length === pageSize) {
        const nextQ = query(
          collection(db, 'actualites'),
          where('publie', '==', true),
          orderBy('__name__'),
          startAfter(snapshot.docs[snapshot.docs.length - 1]),
          limitFn(1)
        );
        const nextSnap = await getDocs(nextQ);
        setHasNext(!nextSnap.empty);
      } else {
        setHasNext(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const prevPage = async () => {
    try {
      if (cursors.length < 2) return; // cannot go back from first page
      setLoading(true);
      // Remove last cursor and use the new last-1 as start point for previous window
      const newCursors = cursors.slice(0, -1);
      const prevCursor = newCursors.length >= 2 ? newCursors[newCursors.length - 2] : null;

      let q;
      if (prevCursor) {
        q = query(
          collection(db, 'actualites'),
          where('publie', '==', true),
          orderBy('__name__'),
          startAfter(prevCursor),
          limitFn(pageSize)
        );
      } else {
        q = query(
          collection(db, 'actualites'),
          where('publie', '==', true),
          orderBy('__name__'),
          limitFn(pageSize)
        );
      }

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      setPage(p => Math.max(1, p - 1));
      setHasPrev(newCursors.length > 1);
      setCursors(newCursors);

      // Recompute hasNext for this page
      if (snapshot.docs.length === pageSize) {
        const nextQ = query(
          collection(db, 'actualites'),
          where('publie', '==', true),
          orderBy('__name__'),
          startAfter(snapshot.docs[snapshot.docs.length - 1]),
          limitFn(1)
        );
        const nextSnap = await getDocs(nextQ);
        setHasNext(!nextSnap.empty);
      } else {
        setHasNext(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { items, loading, error, nextPage, prevPage, hasNext, hasPrev, page, pageSize };
};
