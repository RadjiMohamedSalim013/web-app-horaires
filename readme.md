D'accord, voici le README avec le lien mis à jour :

---

# HorairesApp – Application Express avec vérification d'horaire

**HorairesApp** est une application web construite avec **Node.js** et **Express**. Elle permet de gérer l'accès à différentes pages en fonction des horaires de travail (du lundi au vendredi, de 9h à 17h).

## Objectif du projet

Créer une application web avec **Express** qui :

- Affiche trois pages principales : **Accueil**, **Services**, et **Contact**.
- Restreint l'accès en dehors des horaires de travail.
- Affiche un message de "Site fermé" si l'accès est tenté en dehors de ces horaires.
- Utilise un moteur de templates **EJS** avec des partials pour la navigation.
- Applique une stylisation simple et moderne avec **CSS**.

## Technologies utilisées

- **Node.js & Express** : Serveur web rapide et minimaliste.
- **EJS** : Moteur de templates pour l'intégration dynamique de données.
- **CSS** : Stylisation responsive des pages.
- **Middleware personnalisé** : Gestion des horaires d'accès et vérification dynamique.
- **Git** : Versionnement du code source.

## Lien du site hébergé

[Accéder à l'application en ligne](https://web-app-horaires.onrender.com/)

> **Note** : Si vous essayez d'accéder au site en dehors des horaires autorisés, une page "Site fermé" s'affichera.

---

## Lancer le projet en local

Suivez ces étapes pour exécuter l'application sur votre machine locale :

1. **Cloner le repository** :

   ```bash
   git clone https://github.com/RadjiMohamedSalim013/web-app-horaires
   cd web-app-horaires  # Accéder au dossier racine du projet
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

   Ouvrez votre navigateur et allez à l'adresse `http://localhost:3000`.

---

## Fonctionnalités principales

- **Contrôle d'accès par plage horaire** : Les pages ne sont accessibles que durant les horaires de travail (lundi-vendredi, 9h-17h).
- **Architecture modulaire** : Le projet est organisé en différentes parties (routes, middleware, views) pour une meilleure maintenabilité.
- **Gestion des erreurs 404** : Si une page n'existe pas, une erreur 404 est retournée avec un message clair.
- **Interface responsive** : Les pages sont adaptées aux écrans mobiles et de bureau pour offrir une expérience utilisateur optimale.

