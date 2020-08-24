
let intro = 0;

$("#button").click(function() {

    if (intro < 1) {
        $('.transform').toggleClass('transform-active');
        $('.appear').toggleClass('appear-active');
        intro = 1;
        console.log("BOUTON");
    } else {
        console.log("NON");
    }
    
});

$("#statut").click(function() {
        $('.statut-active').addClass('active');
        $('.skill-active').removeClass('active');
        $('.work-active').removeClass('active');
        $('.option-active').removeClass('active');
        console.log(statut);
});

$("#skill").click(function() {
        $('.skill-active').addClass('active');
        $('.statut-active').removeClass('active');
        $('.work-active').removeClass('active');
        $('.option-active').removeClass('active');
});

$("#work").click(function() {
        $('.work-active').addClass('active');
        $('.statut-active').removeClass('active');
        $('.skill-active').removeClass('active');
        $('.option-active').removeClass('active');
});

$("#option").click(function() {
        $('.option-active').addClass('active');
        $('.statut-active').removeClass('active');
        $('.skill-active').removeClass('active');
        $('.work-active').removeClass('active');
        console.log(option);
});