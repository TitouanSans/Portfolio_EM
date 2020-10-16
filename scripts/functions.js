
document.getElementById("button-status").addEventListener("click", function(){
    document.getElementById("content-status").innerHTML = `
    Titouan Sans<br>
    Développeur Front-End Junior<br>
    J'ai fait mes études à l'École Multimédia, dans Paris 3, en 2018. J'ai développé des compétences pour l'intégration de site Web, la création de Jeu avec Javascript. En plus d'HTML5, CSS3 et JS, j'utilise aussi Bootstrap, WebGL, JQuery, et même des logiciels plus répendus comme Wordpress. 
    `;
    
    document.getElementById("content-skill").innerHTML = "";
    document.getElementById("content-work").innerHTML = "";
    document.getElementById("content-info").innerHTML = "";
    
});

document.getElementById("button-skill").addEventListener("click", function(){
    document.getElementById("content-skill").innerHTML = `
    Web :<br>
    Jeux :<br>
    Design :
    `;
    
    document.getElementById("content-status").innerHTML = "";
    document.getElementById("content-work").innerHTML = "";
    document.getElementById("content-info").innerHTML = "";
    
});

document.getElementById("button-work").addEventListener("click", function(){
    document.getElementById("content-work").innerHTML = `
    Projet 1<br>
    Projet 2<br>
    Projet 3<br>
    Projet 4
    `;
    document.getElementById("content-status").innerHTML = "";
    document.getElementById("content-skill").innerHTML = "";
    document.getElementById("content-info").innerHTML = "";
});

document.getElementById("button-info").addEventListener("click", function(){
    document.getElementById("content-info").innerHTML = `
    mail : Titouan.sanshochart@gmail.com <br>
    <a href="img/doc/titouan_sans_cv.pdf" target="_blank"> <button type="submit" class="btn btn-outline-light btn-xl">Mon cv</button></a>
    `;
    
    document.getElementById("content-status").innerHTML = "";
    document.getElementById("content-skill").innerHTML = "";
    document.getElementById("content-work").innerHTML = "";
});
