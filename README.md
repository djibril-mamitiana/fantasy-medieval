# Royaumes Oubliés - Site Heroic Fantasy

Un site vitrine épique inspiré des univers de The Witcher, Game of Thrones et autres sagas heroic fantasy. Plongez dans un monde médiéval où les légendes prennent vie à travers des animations modernes et un design immersif.

## 🏰 Caractéristiques

- **Design Heroic Fantasy & Medieval**: Thème complet inspiré des grands univers fantasy
- **Animations Modernes**: Effets visuels épiques sans compromettre les performances
- **Responsive Design**: Expérience parfaite sur tous les appareils
- **Navigation Immersive**: Menu fixe avec effets de scroll et sections interactives
- **Formulaire de Contact**: Intégration avec validation et feedback utilisateur
- **Optimisé SEO**: Méta-données complètes et structure sémantique

## 🛠️ Stack Technique

- **Astro**: Framework moderne pour sites rapides
- **Tailwind CSS**: Styling utilitaire avec thème personnalisé
- **Alpine.js**: Interactivité légère
- **JavaScript Vanilla**: Animations personnalisées et interactions

## 🎨 Thème Visuel

### Palette de Couleurs
- **Dragon Red**: `#8B0000` - Rouge sang de dragon
- **Obsidian**: `#1a1a1a` - Noir d'obsidienne
- **Gold**: `#FFD700` - Or royal
- **Parchment**: `#F4E8D0` - Parchemin ancien
- **Night**: `#0F172A` - Nuit médiévale

### Typographies
- **Cinzel**: Pour les titres heroïques
- **Crimson Text**: Pour les textes de contenu

### Animations
- Effet de flottement pour les éléments magiques
- Glow effects pour les éléments importants
- Transitions fluides au scroll
- Animations d'apparition progressives

## 📁 Structure du Projet

```
src/
├── components/          # Composants Astro réutilisables
├── layouts/
│   └── Layout.astro     # Layout principal avec navigation
├── pages/
│   └── index.astro      # Page d'accueil complète
├── scripts/
│   └── main.js          # Animations et interactions
└── styles/
    └── global.css       # Styles globaux et thème
```

## 🚀 Démarrage Rapide

1. **Installation des dépendances**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Démarrage du serveur de développement**
   ```bash
   npm run dev
   ```

3. **Build pour production**
   ```bash
   npm run build
   ```

4. **Preview du build**
   ```bash
   npm run preview
   ```

## 🎯 Sections du Site

### 1. Hero Section
- Titre principal avec effet de machine à écrire
- Animations de particules flottantes
- Call-to-action vers les autres sections

### 2. Les Royaumes Anciens
- Présentation des 3 royaumes principaux
- Cartes interactives avec effets de survol
- Icônes SVG personnalisées

### 3. Légendes et Histoires
- Récits épiques du monde
- Statistiques animées
- Mise en page immersive

### 4. Galerie Épique
- Vitrine visuelle des lieux légendaires
- Grille responsive avec effets de zoom
- Design cohérent avec le thème

### 5. Contact
- Formulaire stylisé avec validation
- Feedback utilisateur animé
- Intégration thématique complète

## 🎮 Interactions

- **Smooth Scroll**: Navigation fluide entre sections
- **Parallax Effect**: Effet de profondeur au scroll
- **Intersection Observer**: Animations déclenchées au scroll
- **Form Validation**: Validation côté client avec feedback
- **Mobile Menu**: Navigation responsive avec Alpine.js

## 🔧 Personnalisation

### Modification des Couleurs
Éditez `tailwind.config.js` pour ajuster la palette de couleurs:

```javascript
theme: {
  extend: {
    colors: {
      'dragon-red': '#8B0000',
      'obsidian': '#1a1a1a',
      // ... autres couleurs
    }
  }
}
```

### Ajout de Sections
Créez de nouvelles sections dans `src/pages/index.astro` en suivant la structure existante.

### Animations Personnalisées
Ajoutez de nouvelles animations dans `src/scripts/main.js` ou dans le CSS.

## 📱 Responsive

Le site est optimisé pour:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🚀 Performance

- Lazy loading des images
- Code splitting automatique avec Astro
- CSS optimisé avec PurgeCSS
- Scripts chargés de manière asynchrone

## 🌐 SEO

- Méta-données Open Graph
- Twitter Cards
- Structure sémantique HTML5
- Balises alt pour les images
- URLs propres et descriptives

## 📝 License

Ce projet est sous license MIT.

---

**Développé avec ❤️ pour les passionnés d'heroic fantasy**
