```markdown
# HorairesApp – Application Express avec vérification d'horaire

Cette application web a été développée avec **Node.js** et **Express**.  
Elle propose trois pages principales accessibles uniquement pendant les **heures de travail** (du lundi au vendredi, de 9h à 17h).

## Objectif du projet

Créer une application web simple avec Express qui :

- Affiche trois pages : Accueil, Services et Contact  
- Restreint l'accès en dehors des horaires de travail  
- Affiche un message si le site est fermé  
- Est stylisée avec une feuille CSS globale  
- Utilise EJS avec des partials pour la navigation  

## Technologies utilisées

- **Node.js & Express** : Serveur web
- **EJS** : Moteur de templates
- **CSS** : Stylisation des pages
- **Middleware personnalisé** : Gestion des horaires d'accès
- **Git** : Gestion de version

## Lien du site hébergé

[Accéder à l'application]()

> Si vous accédez au site en dehors des horaires autorisés, une page "Site fermé" s'affichera.

## Structure du projet

```
.
├── app.js
├── routes/
│   └── pageRoutes.js
├── middleware/
│   └── checkWorkingHours.js
├── public/
│   └── style.css
├── views/
│   ├── partials/
│   │   └── nav.ejs
│   ├── accueil.ejs
│   ├── services.ejs
│   ├── contact.ejs
│   ├── closed.ejs
│   └── 404.ejs
└── README.md
```

## Lancer le projet en local

1. **Cloner le repository** :
   ```bash
   git clone 
   cd web-app-horaires  # Dossier racine du projet
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur** :
   ```bash
   npm start
   ```

4. **Accéder à l'application** :
   Ouvrez votre navigateur sur `http://localhost:3000`

## Fonctionnalités clés

- Contrôle d'accès par plage horaire
- Architecture modulaire (routes, middleware, views)
- Gestion des erreurs 404
- Interface responsive

