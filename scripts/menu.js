// Menu nav complet

document.getElementsByClassName('tmp-menu')[0].innerHTML = `
<a href="index.html" class="home-link">Titouan Sans - Développeur Front-End</a>
<div class="site-links">
    <div class="burger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <a href="index.html" class="active">Accueil</a>
    <!-- <a href="profil.html">Présentation</a> -->
    <!-- <a href="competences.html">Compétences</a> -->
    <a href="images/competences/CV_TitouanSans_2021.pdf" target="_blank">Compétences</a>
    <a href="portfolio.html">Projets</a>
    <a href="images/competences/CV_TitouanSans_2021.pdf" target="_blank">CV</a>
    <!-- <a href="contact.html">Contact</a> -->
</div>
`;

// Menu.js : bascule de l'attribut data-state du bouton burger du menu au clic (opened/closed)

// var menu = document.querySelector('.tmp-menu');
// var burger = document.querySelector('.tmp-menu .burger');

// burger.addEventListener('click', function(event){

//     if (menu.getAttribute('data-state') === 'closed') {

//         menu.setAttribute('data-state', 'opened');

//     } else {

//         menu.setAttribute('data-state', 'closed');

//     }

// });