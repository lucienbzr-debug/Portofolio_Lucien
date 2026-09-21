# Portfolio — Lucien Buzera

Site portfolio one-page orienté conversion (Suivi-Évaluation & Data), construit avec React + Vite,
Tailwind CSS v4 et Framer Motion.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:5173.

## Build de production

```bash
npm run build
npm run preview   # pour tester le build localement
```

Le résultat est généré dans `dist/`.

## Déploiement

Le projet est un site statique Vite standard : il se déploie directement sur **Vercel** ou
**Netlify** sans configuration particulière.

- **Vercel** : "Import Project" → framework détecté automatiquement (Vite) → build command
  `npm run build`, output directory `dist`.
- **Netlify** : build command `npm run build`, publish directory `dist`.

## Structure du projet

```
src/
  data/content.ts       ← TOUT le contenu texte du site (contact, stats, compétences,
                           projets, parcours). Modifie ce fichier pour mettre à jour le
                           site sans toucher aux composants.
  components/
    Nav.tsx              Barre de navigation sticky + menu mobile
    Hero.tsx             Accroche, CTA principaux, mini-stats, portrait
    TrustBar.tsx         Bandeau bailleurs / partenaires
    About.tsx            Section "À propos"
    Stats.tsx            Bandeau de statistiques (fond sombre)
    Skills.tsx           4 blocs de compétences
    Projects.tsx         6 études de cas projets (cartes)
    Timeline.tsx         Parcours professionnel + formation
    Contact.tsx          Section de conversion finale (tel:/mailto:)
    Footer.tsx           Pied de page
    MobileCTA.tsx         Barre flottante Appeler/Email (mobile uniquement)
    Reveal.tsx            Wrapper d'animation au scroll (Framer Motion)
    icons.tsx             Icônes GitHub/LinkedIn (absentes de lucide-react)
  assets/
    lucien-buzera.jpg     Portrait (optimisé, ~1100px de large)
public/
  cv-lucien-buzera.pdf    CV téléchargeable (généré à partir des données du profil)
  og-cover.jpg            Image de partage réseaux sociaux (1200×630)
  favicon.svg             Favicon (monogramme LB)
```

## Mettre à jour le contenu

Toutes les informations (téléphone, email, stats, compétences, projets, parcours) sont
centralisées dans [`src/data/content.ts`](src/data/content.ts). Il suffit de modifier ce
fichier — aucun composant n'a besoin d'être touché pour un changement de texte, de lien ou
de chiffre.

## À personnaliser avant mise en ligne

1. **Nom de domaine** : remplace `https://lucienbuzera.com` par le domaine réel dans
   [`index.html`](index.html) (balises `canonical`, `og:url`, `og:image`, `twitter:image`).
2. **CV** : [`public/cv-lucien-buzera.pdf`](public/cv-lucien-buzera.pdf) a été généré
   automatiquement à partir du profil (script Python + reportlab, non inclus dans le
   dépôt). Remplace ce fichier par ta version définitive du CV dès qu'elle est prête — le
   nom de fichier doit rester identique pour que les liens de téléchargement continuent de
   fonctionner.
3. **Image de partage** : [`public/og-cover.jpg`](public/og-cover.jpg) peut être
   remplacée par un visuel dédié si tu préfères une image différente pour les aperçus
   LinkedIn/Facebook/Twitter.

## Design

- **Typographies** : Fraunces (titres, serif éditoriale) + IBM Plex Sans (texte courant) +
  IBM Plex Mono (chiffres et labels techniques).
- **Palette** : ivoire chaud (`#F7F4EE`) en fond principal, terre/ocre (`#A85526`) comme
  accent signature, vert mousse (`#3D5940`) pour les éléments "données/impact", charbon
  profond (`#171310`) pour les sections de conversion (statistiques, contact, footer).
- Tous les tokens de couleur et de police sont définis dans
  [`src/index.css`](src/index.css) via `@theme` (Tailwind CSS v4).
