# 📘 Guide Complet : Créer un Projet React de Zéro

## 🎯 Introduction à React

React est une bibliothèque JavaScript créée par Facebook pour construire des interfaces utilisateur interactives. Avec React, vous construisez votre application avec des **composants** réutilisables.

---

## 📋 Prérequis

Avant de commencer, vous devez installer :

### 1. Node.js et npm

**Qu'est-ce que c'est ?**
- **Node.js** : Permet d'exécuter du JavaScript en dehors du navigateur
- **npm** : Gestionnaire de paquets (comme un App Store pour le code)

**Installation :**

1. Allez sur https://nodejs.org/
2. Téléchargez la version LTS (Long Term Support)
3. Installez-le (suivez les instructions à l'écran)
4. Vérifiez l'installation :

```bash
node --version
# Devrait afficher : v18.x.x ou plus

npm --version
# Devrait afficher : 9.x.x ou plus
```

### 2. Un éditeur de code

Je recommande **Visual Studio Code** (gratuit) :
- Téléchargez sur https://code.visualstudio.com/
- Installez-le
- C'est prêt !

---

## 🚀 Méthode 1 : Créer un Projet React avec Vite (Recommandé)

**Vite** est un outil moderne, ultra-rapide pour créer des projets React.

### Étape 1 : Ouvrir le terminal

**Sur Windows :**
- Appuyez sur `Windows + R`
- Tapez `cmd` et appuyez sur Entrée

**Sur Mac :**
- Appuyez sur `Cmd + Espace`
- Tapez `terminal` et appuyez sur Entrée

**Sur Linux :**
- Appuyez sur `Ctrl + Alt + T`

### Étape 2 : Naviguer vers le dossier où vous voulez créer le projet

```bash
# Exemple : aller sur le Bureau
cd Desktop

# Ou créer un dossier "Projets"
mkdir Projets
cd Projets
```

### Étape 3 : Créer le projet avec Vite

```bash
npm create vite@latest mon-app-react -- --template react
```

**Explication :**
- `npm create vite@latest` : Utilise Vite pour créer un projet
- `mon-app-react` : Le nom de votre projet (changez-le si vous voulez)
- `--template react` : Utilise le template React

### Étape 4 : Entrer dans le dossier du projet

```bash
cd mon-app-react
```

### Étape 5 : Installer les dépendances

```bash
npm install
```

Cela télécharge tous les packages nécessaires (React, etc.). Ça peut prendre 1-2 minutes.

### Étape 6 : Lancer le projet

```bash
npm run dev
```

Vous verrez quelque chose comme :
```
  VITE v5.0.8  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

### Étape 7 : Ouvrir dans le navigateur

Ouvrez votre navigateur et allez sur : **http://localhost:5173/**

🎉 **Félicitations !** Votre première application React fonctionne !

---

## 🗂️ Structure d'un Projet React

Quand vous ouvrez votre projet dans VS Code, vous verrez :

```
mon-app-react/
│
├── node_modules/        # 📦 Tous les packages installés (ne touchez pas)
├── public/              # 📁 Fichiers publics (images, etc.)
├── src/                 # 💻 VOTRE CODE ICI
│   ├── App.jsx          # 🎯 Composant principal
│   ├── App.css          # 🎨 Styles du composant App
│   ├── main.jsx         # 🚀 Point d'entrée de l'application
│   └── index.css        # 🎨 Styles globaux
│
├── index.html           # 📄 Page HTML principale
├── package.json         # 📋 Configuration du projet
└── vite.config.js       # ⚙️ Configuration Vite
```

### Fichiers Importants

**src/main.jsx** - Point d'entrée
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Monte l'application React sur l'élément avec id="root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

**src/App.jsx** - Votre composant principal
```javascript
function App() {
  return (
    <div>
      <h1>Bonjour React !</h1>
      <p>Ma première application</p>
    </div>
  )
}

export default App
```

---

## 🧩 Comprendre les Composants React

### Qu'est-ce qu'un composant ?

Un composant est une fonction qui retourne du JSX (du HTML dans JavaScript).

### Créer votre premier composant

**Créez un fichier : `src/Bonjour.jsx`**

```javascript
function Bonjour() {
  return (
    <div>
      <h2>Bonjour depuis mon composant !</h2>
      <p>Je suis un composant React</p>
    </div>
  )
}

export default Bonjour
```

**Utilisez-le dans App.jsx :**

```javascript
import Bonjour from './Bonjour'

function App() {
  return (
    <div>
      <h1>Mon Application</h1>
      <Bonjour />
      <Bonjour />
      <Bonjour />
    </div>
  )
}

export default App
```

Vous verrez "Bonjour depuis mon composant !" trois fois ! C'est la puissance de la réutilisation.

---

## 🎁 Les Props (Propriétés)

Les props permettent de passer des données aux composants.

**Bonjour.jsx avec props :**

```javascript
function Bonjour({ nom, age }) {
  return (
    <div>
      <h2>Bonjour {nom} !</h2>
      <p>Tu as {age} ans</p>
    </div>
  )
}

export default Bonjour
```

**Utilisation :**

```javascript
function App() {
  return (
    <div>
      <Bonjour nom="Alice" age={25} />
      <Bonjour nom="Bob" age={30} />
      <Bonjour nom="Charlie" age={35} />
    </div>
  )
}
```

Chaque composant affichera des infos différentes !

---

## 🔄 Le State (État)

Le state est une variable qui peut changer et qui redessine automatiquement le composant.

```javascript
import { useState } from 'react'

function Compteur() {
  // Créer un state "count" initialisé à 0
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez-moi
      </button>
    </div>
  )
}

export default Compteur
```

Chaque clic augmente le compteur et l'affichage se met à jour automatiquement !

---

## 🎨 Ajouter du CSS

### Méthode 1 : CSS dans un fichier séparé

**Créez `Compteur.css` :**

```css
.compteur {
  background: lightblue;
  padding: 20px;
  border-radius: 10px;
}

.bouton {
  background: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

**Importez-le dans `Compteur.jsx` :**

```javascript
import './Compteur.css'

function Compteur() {
  const [count, setCount] = useState(0)

  return (
    <div className="compteur">
      <p>Compteur : {count}</p>
      <button className="bouton" onClick={() => setCount(count + 1)}>
        Cliquez-moi
      </button>
    </div>
  )
}
```

### Méthode 2 : CSS inline

```javascript
function Compteur() {
  const style = {
    background: 'lightblue',
    padding: '20px',
    borderRadius: '10px'
  }

  return (
    <div style={style}>
      <p>Compteur</p>
    </div>
  )
}
```

---

## 📦 Installer des Packages

Pour ajouter des fonctionnalités, installez des packages :

```bash
# Exemple : ajouter React Router (pour la navigation)
npm install react-router-dom

# Exemple : ajouter Axios (pour les requêtes HTTP)
npm install axios
```

Puis importez-les :

```javascript
import axios from 'axios'
```

---

## 🛠️ Commandes Essentielles

```bash
# Lancer le serveur de développement
npm run dev

# Créer la version de production (optimisée)
npm run build

# Prévisualiser la version de production
npm run preview

# Installer un nouveau package
npm install nom-du-package
```

---

## 📚 Ressources pour Apprendre

1. **Documentation officielle React** (en anglais, mais excellente)
   - https://react.dev/

2. **Tutoriel interactif officiel**
   - https://react.dev/learn/tutorial-tic-tac-toe

3. **OpenClassrooms** (en français)
   - Cours React gratuits

4. **YouTube** (en français)
   - Grafikart
   - From Scratch

---

## 🎯 Exercices Pratiques

### Exercice 1 : Liste de Tâches

Créez une application de to-do list :
- Ajouter des tâches
- Cocher les tâches terminées
- Supprimer des tâches

### Exercice 2 : Calculatrice

Créez une calculatrice simple :
- Affichage des nombres
- Opérations de base (+, -, ×, ÷)
- Bouton clear

### Exercice 3 : Galerie d'Images

Créez une galerie d'images :
- Affichage en grille
- Click pour agrandir
- Navigation suivant/précédent

---

## 🐛 Déboguer les Erreurs Courantes

### "Cannot find module"
**Solution :** Faites `npm install`

### "Port 5173 is already in use"
**Solution :** Arrêtez l'autre application ou changez le port dans `vite.config.js`

### La page ne se met pas à jour
**Solution :** Rafraîchissez avec `Ctrl+F5` ou redémarrez le serveur

### Erreur de syntaxe
**Solution :** Vérifiez que vous avez bien fermé toutes les balises et accolades

---

## 🎓 Concepts Avancés (pour plus tard)

Une fois à l'aise avec les bases, explorez :

1. **React Hooks** (useState, useEffect, useContext, etc.)
2. **React Router** (navigation entre pages)
3. **API Calls** (fetch, axios)
4. **State Management** (Context API, Redux)
5. **TypeScript avec React**
6. **Tests** (Jest, React Testing Library)

---

## ✅ Checklist du Débutant

- [ ] Node.js et npm installés
- [ ] VS Code installé
- [ ] Projet créé avec Vite
- [ ] Premier composant créé
- [ ] Props comprises et utilisées
- [ ] State utilisé (useState)
- [ ] CSS ajouté
- [ ] Application fonctionnelle créée

---

## 🎉 Conclusion

Vous savez maintenant :
✅ Créer un projet React  
✅ Comprendre la structure  
✅ Créer des composants  
✅ Utiliser props et state  
✅ Ajouter du CSS  

**La meilleure façon d'apprendre ? PRATIQUER !**

Créez de petits projets, faites des erreurs, et amusez-vous ! 🚀

---

**Bon courage dans votre aventure React ! 💪**
