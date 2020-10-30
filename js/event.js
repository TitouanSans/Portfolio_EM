
let intro = 0;

$("#home").click(function() {

    if (intro < 1) {
        $('.homepage').toggleClass('homepage-disappear');
        $('.site').toggleClass('site-appear');
        intro = 1;
        console.log("ACCUEIL");
    } else {
        console.log("NON");
    }
    
});

$("#statut").click(function() {
        $('.statut-active').addClass('active');
        $('.skill-active').removeClass('active');
        $('.work-active').removeClass('active');
        $('.option-active').removeClass('active');
        console.log("statut actif");
});

$("#skill").click(function() {
        $('.skill-active').addClass('active');
        $('.statut-active').removeClass('active');
        $('.work-active').removeClass('active');
        $('.option-active').removeClass('active');
        console.log("compétence actif");
});

$("#work").click(function() {
        $('.work-active').addClass('active');
        $('.statut-active').removeClass('active');
        $('.skill-active').removeClass('active');
        $('.option-active').removeClass('active');
        console.log("travaux actif");
});

$("#option").click(function() {
        $('.option-active').addClass('active');
        $('.statut-active').removeClass('active');
        $('.skill-active').removeClass('active');
        $('.work-active').removeClass('active');
        console.log("contact actif");
});
