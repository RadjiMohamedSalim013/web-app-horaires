const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.render('accueil');
});

router.get('/services', (req, res) => {
    res.render('services');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

// Page d'erreur pour les tentatives hors horaires
router.get('/closed', (req, res) => {
    res.render('closed');
});

module.exports = router;
