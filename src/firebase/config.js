import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuration Firebase (à remplacer par vos vraies clés)
const firebaseConfig = {
    apiKey: "AIzaSyDqtUMLEJylrWeDUkObn00wG2HGXlhYpb4",
    authDomain: "cobilape-4e3d5.firebaseapp.com",
    projectId: "cobilape-4e3d5",
    storageBucket: "cobilape-4e3d5.firebasestorage.app",
    messagingSenderId: "683273306510",
    appId: "1:683273306510:web:9047a7b9b1b6277a86e4df",
    measurementId: "G-5Q6KSTWSSD"
  };

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialiser les services
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
