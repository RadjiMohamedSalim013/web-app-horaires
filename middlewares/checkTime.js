const checkTime = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // Récupère le jour de la semaine (0 = Dimanche, 1 = Lundi, ..., 6 = Samedi)
    const hour = now.getHours(); // Récupère l'heure actuelle

    // Vérification : heures de travail (du lundi au vendredi, de 9h00 à 17h00)
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        return next(); // Si l'heure est dans la plage autorisée, passe à la prochaine fonction
    } else {
        return res.render('closed'); // Affiche la page "closed" si en dehors des heures
    }
};

module.exports = checkTime;
