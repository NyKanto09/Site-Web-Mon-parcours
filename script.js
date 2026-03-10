/**
 * Fonction pour gérer le système d'onglets (Tabs)
 * LES PARAMETRES :
 * evenement : Le clic de l'utilisateur
 * nomOnglet : L'identifiant (ID) de la section à afficher
 */
function ouvrirOnglet(evenement, nomOnglet) {
    var i, contenus, boutons;

    // 1. Masquer tous les éléments de la classe "contenu-onglet"
    contenus = document.getElementsByClassName("contenu-onglet");
    for (i = 0; i < contenus.length; i++) {
        contenus[i].style.display = "none";
        contenus[i].classList.remove("actif");
    }

    // 2. Retirer l'état "actif" de tous les boutons
    boutons = document.getElementsByClassName("bouton-onglet");
    for (i = 0; i < boutons.length; i++) {
        boutons[i].className = boutons[i].className.replace(" actif", "");
    }

    // 3. Afficher le contenu ciblé par son ID 
    document.getElementById(nomOnglet).style.display = "flex";
    
    // 4. Léger délai de 10ms pour laisser le temps au navigateur de jouer l'animation d'apparition
    setTimeout(() => {
        document.getElementById(nomOnglet).classList.add("actif");
    }, 10);
    
    // 5. Ajouter la classe "actif" sur le bouton qui vient d'être cliqué (pour changer sa couleur)
    evenement.currentTarget.className += " actif";
}

// Initialisation : au chargement complet de la page, on simule un clic sur l'onglet par défaut
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ongletDefaut").click();
});