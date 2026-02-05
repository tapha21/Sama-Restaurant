# 🍽️ Menu Restaurant - Application React

## 📋 Description

Application web de menu digital pour restaurant proposant :
- 🍕 Pizzas
- 🍔 Burgers  
- 🌮 Tacos
- 🍛 Plats Sénégalais traditionnels
- 🥤 Boissons

Le menu est accessible via QR code pour une consultation facile par les clients.

---

## 🚀 Installation et Démarrage

### Prérequis
- Node.js installé (version 16 ou supérieure)
- npm (installé avec Node.js)

### Étape 1 : Vérifier que Node.js est installé

Ouvrez un terminal et tapez :
```bash
node --version
npm --version
```

Si vous voyez les numéros de version, c'est bon ! Sinon, téléchargez Node.js depuis https://nodejs.org/

### Étape 2 : Naviguer dans le dossier du projet

```bash
cd restaurant-menu
```

### Étape 3 : Installer les dépendances

```bash
npm install
```

Cette commande va télécharger tous les packages nécessaires (React, Vite, etc.)

### Étape 4 : Lancer l'application en mode développement

```bash
npm run dev
```

Vous verrez un message comme :
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Ouvrez votre navigateur et allez sur http://localhost:5173/

🎉 Votre menu est maintenant accessible !

---

## 📁 Structure du Projet

```
restaurant-menu/
│
├── index.html              # Page HTML principale
├── package.json            # Configuration npm et dépendances
├── vite.config.js          # Configuration Vite
│
└── src/
    ├── main.jsx            # Point d'entrée React
    ├── App.jsx             # Composant principal de l'application
    ├── App.css             # Styles CSS
    ├── MenuItem.jsx        # Composant pour afficher un plat
    ├── CategorySection.jsx # Composant pour une catégorie de plats
    └── menuData.js         # Données du menu (JSON)
```

---

## 🛠️ Comment Modifier le Menu

### Ajouter un nouveau plat

Ouvrez le fichier `src/menuData.js` et ajoutez un objet dans la catégorie souhaitée :

```javascript
{
  id: 99,  // Numéro unique
  name: "Nouveau Plat",
  description: "Description du plat",
  price: "2000 FCFA",
  image: "🍽️"  // Emoji du plat
}
```

### Modifier un prix

Cherchez le plat dans `menuData.js` et changez la valeur de `price` :

```javascript
price: "3500 FCFA"  // Ancien prix
price: "4000 FCFA"  // Nouveau prix
```

### Ajouter une nouvelle catégorie

1. Dans `menuData.js`, ajoutez un nouveau tableau :

```javascript
export const menuData = {
  // ... catégories existantes
  desserts: [
    {
      id: 30,
      name: "Tiramisu",
      description: "Dessert italien",
      price: "2000 FCFA",
      image: "🍰"
    }
  ]
};
```

2. Ajoutez la catégorie dans le tableau `categories` :

```javascript
export const categories = [
  // ... catégories existantes
  { id: 'desserts', name: 'Desserts', icon: '🍰' }
];
```

---

## 🎨 Personnaliser le Design

### Changer les couleurs

Ouvrez `src/App.css` et modifiez les couleurs dans les sections suivantes :

**Gradient principal (arrière-plan) :**
```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Changez #667eea et #764ba2 par vos couleurs */
}
```

**Boutons actifs :**
```css
.category-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Vos couleurs ici */
}
```

**Prix des plats :**
```css
.item-price {
  color: #667eea;  /* Votre couleur */
}
```

### Changer le nom du restaurant

Ouvrez `src/App.jsx` et modifiez :

```javascript
<h1 className="restaurant-name">🍽️ Menu Restaurant</h1>
```

Remplacez "Menu Restaurant" par le nom de votre restaurant.

---

## 📱 Générer un QR Code

### Option 1 : Site en ligne (facile)

1. Déployez votre site (voir section Déploiement)
2. Copiez l'URL de votre site (ex: https://votre-restaurant.vercel.app)
3. Allez sur https://www.qr-code-generator.com/
4. Collez votre URL
5. Téléchargez le QR code
6. Imprimez-le et placez-le sur vos tables !

### Option 2 : Avec du code

Vous pouvez ajouter une page qui génère automatiquement le QR code. Installez :

```bash
npm install qrcode.react
```

---

## 🌐 Déployer le Site (Mettre en ligne)

### Méthode 1 : Vercel (Recommandé - Gratuit)

1. Créez un compte sur https://vercel.com/
2. Installez Vercel CLI :
   ```bash
   npm install -g vercel
   ```
3. Dans le dossier du projet :
   ```bash
   vercel
   ```
4. Suivez les instructions à l'écran
5. Votre site sera en ligne en 2 minutes ! 🎉

### Méthode 2 : Netlify (Gratuit)

1. Créez un compte sur https://www.netlify.com/
2. Glissez-déposez le dossier `dist` après avoir fait :
   ```bash
   npm run build
   ```
3. Votre site est en ligne !

### Méthode 3 : GitHub Pages

1. Créez un compte GitHub
2. Créez un nouveau repository
3. Poussez votre code
4. Activez GitHub Pages dans les settings
5. Votre URL sera : https://votre-nom.github.io/restaurant-menu/

---

## 🔧 Commandes Utiles

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Créer la version de production
npm run build

# Prévisualiser la version de production
npm preview
```

---

## 📖 Comprendre React (pour débutants)

### Qu'est-ce que React ?

React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Tout est basé sur des **composants**.

### Les Composants

Un composant est comme une brique LEGO réutilisable. Par exemple :

```javascript
function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
    </div>
  );
}
```

Ce composant affiche un plat du menu. Vous pouvez l'utiliser plusieurs fois avec différentes données.

### Les Props (Propriétés)

Les props permettent de passer des données à un composant :

```javascript
<MenuItem item={monPlat} />
```

Ici, `item` est une prop qui contient les infos du plat.

### Le State (État)

Le state est une variable qui peut changer et qui redessine l'interface quand elle change :

```javascript
const [selectedCategory, setSelectedCategory] = useState('all');
```

Quand vous cliquez sur un bouton de catégorie, `selectedCategory` change et le menu se met à jour automatiquement !

### JSX

C'est du HTML dans du JavaScript :

```javascript
return (
  <div>
    <h1>Bonjour</h1>
    <p>Ceci est du JSX</p>
  </div>
);
```

---

## 🎯 Fonctionnalités

✅ Menu responsive (s'adapte au mobile et tablette)  
✅ Filtrage par catégorie  
✅ Design moderne avec gradient  
✅ Animations au survol  
✅ Données facilement modifiables  
✅ Prêt pour le QR code  

---

## 🆘 Problèmes Courants

### Le site ne se lance pas

- Vérifiez que Node.js est installé : `node --version`
- Supprimez `node_modules` et refaites `npm install`
- Vérifiez qu'aucun autre programme n'utilise le port 5173

### Les modifications ne s'affichent pas

- Rafraîchissez la page avec Ctrl+F5 (ou Cmd+Shift+R sur Mac)
- Arrêtez le serveur (Ctrl+C) et relancez `npm run dev`

### Erreur "module not found"

- Faites `npm install` pour installer toutes les dépendances

---

## 📞 Support

Si vous avez des questions :
1. Vérifiez cette documentation
2. Cherchez l'erreur sur Google
3. Consultez la documentation React : https://react.dev/

---

## 📄 Licence

Ce projet est libre d'utilisation pour votre restaurant. Modifiez-le comme vous voulez ! 🎉

---

**Créé avec ❤️ pour votre restaurant**
