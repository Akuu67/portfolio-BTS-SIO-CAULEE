// Exemple de script simple pour la gestion d'un formulaire de contact ou autres interactions à venir
document.addEventListener("DOMContentLoaded", function() {
    console.log("Le portfolio est prêt !");
});
// Initialise la carte
var map = L.map('map').setView([48.8566, 2.3522], 13);  // Coordonnées de Paris par exemple

// Ajoute la couche OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajoute un marqueur
L.marker([48.589920,7.687741]).addTo(map)
    .bindPopup('Emma Caulee - Localisation')
    .openPopup();
