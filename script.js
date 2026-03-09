function openTab(evt, tabName) {
    // 1. On cache tout le contenu
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // 2. On désactive tous les boutons (pour qu'ils ne soient plus roses)
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. On affiche le contenu cliqué et on allume le bouton
    document.getElementById(tabName).style.display = "flex"; // "flex" pour gérer l'image à côté du texte
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active"); // Pour l'animation
    }, 10);
    evt.currentTarget.className += " active";
}

// Ouvre le premier onglet par défaut au chargement
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});