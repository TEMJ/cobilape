# Configuration Firebase

## 1. Créer un projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Cliquez sur "Créer un projet"
3. Nommez votre projet : `college-bilingue-la-perle`
4. Suivez les étapes de configuration

## 2. Activer les services

### Firestore Database
1. Dans la console Firebase, allez dans "Firestore Database"
2. Cliquez sur "Créer une base de données"
3. Choisissez "Mode production" ou "Mode test" (vous pourrez changer plus tard)
4. Sélectionnez une région (Europe-west1 pour l'Europe)

### Storage
1. Dans la console Firebase, allez dans "Storage"
2. Cliquez sur "Commencer"
3. Choisissez les mêmes paramètres que Firestore

## 3. Obtenir les clés de configuration

1. Dans la console Firebase, cliquez sur l'icône ⚙️ (Paramètres)
2. Sélectionnez "Paramètres du projet"
3. Allez dans l'onglet "Général"
4. Faites défiler jusqu'à "Vos applications"
5. Cliquez sur l'icône Web (</>) pour ajouter une app web
6. Nommez-la "College Website"
7. Copiez la configuration

## 4. Mettre à jour la configuration

Remplacez le contenu de `src/firebase/config.js` par vos vraies clés :

```javascript
const firebaseConfig = {
  apiKey: "votre-vraie-api-key",
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet-id",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "123456789",
  appId: "votre-app-id"
};
```

## 5. Structure des données

### Collection "actualites"
```javascript
{
  titre: "Titre de l'actualité",
  contenu: "Contenu de l'article...",
  imageUrl: "https://firebasestorage.googleapis.com/...",
  date: "2024-01-15",
  auteur: "Admin",
  categorie: "Vie scolaire",
  publie: true
}
```

### Collection "galerie"
```javascript
{
  titre: "Titre de l'image",
  imageUrl: "https://firebasestorage.googleapis.com/...",
  date: "2024-01-10",
  categorie: "Événements"
}
```

## 6. Règles de sécurité Firestore

Dans la console Firebase > Firestore Database > Règles :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permettre la lecture publique des actualités publiées
    match /actualites/{document} {
      allow read: if resource.data.publie == true;
    }
    
    // Permettre la lecture publique de la galerie
    match /galerie/{document} {
      allow read: if true;
    }
  }
}
```

## 7. Règles de sécurité Storage

Dans la console Firebase > Storage > Règles :

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Permettre la lecture publique des images
    match /{allPaths=**} {
      allow read: if true;
    }
  }
}
```

## 8. Déploiement

Une fois configuré, vous pourrez déployer sur Firebase Hosting :

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

Votre site sera accessible sur : `https://votre-projet.web.app`
