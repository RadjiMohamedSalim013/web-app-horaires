const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const checkTime = require('./middlewares/checkTime'); // Importation du middleware
const pagesRoutes = require('./routes/pagesRoutes'); // Importation des routes

// Définition du moteur de vue : EJS
app.set('view engine', 'ejs');

// Définition du dossier des vues
app.set('views', path.join(__dirname, 'views'));

// Définition du dossier des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Application du middleware de vérification de l'heure sur toutes les routes
app.use(checkTime);

// Utilisation des routes
app.use(pagesRoutes);

app.use((req, res) => {
    res.status(404).render('404'); 
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
