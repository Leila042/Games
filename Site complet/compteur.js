// variable qui servira à incrémenter
var compteur = document.querySelector("div#compteur");

// variable qui servira à effacer le tout
var effacer = document.querySelector("div#effacer");

// varibles désignat les div avec les chiffres
var chiffre1 = document.querySelector("div#chiffre1");
var chiffre2 = document.querySelector("div#chiffre2");
var chiffre3 = document.querySelector("div#chiffre3");
var chiffre4 = document.querySelector("div#chiffre4");


// Je met les compteur à 0
var numb1 = 0 ;
var numb2 = 0 ;
var numb3 = 0 ;
var numb4 = 0 ;

chiffre1.innerHTML = numb1;
chiffre2.innerHTML = numb2;
chiffre3.innerHTML = numb3;
chiffre4.innerHTML = numb4;


compteur.addEventListener("click", () => {

    numb4 += 1
    setTimeout("chiffre4.innerHTML = numb4",200)

    if (numb4 > 9) {
    numb4 = 0
    setTimeout("chiffre4.innerHTML = numb4",200)
    numb3 +=1
    setTimeout("chiffre3.innerHTML = numb3",200)
    }

    if( numb3 > 9 ) {
        numb3 = 0
        setTimeout("chiffre3.innerHTML = numb3",200)
        numb2 +=1
        setTimeout("chiffre2.innerHTML = numb2",200)
    }

    if( numb2 > 9) {

        numb2 = 0
        setTimeout("chiffre2.innerHTML = numb2",200)
        numb1 +=1
        setTimeout("chiffre1.innerHTML = numb1",200)
    }
})


effacer.addEventListener("click", () => {
numb1 -= numb1 ;
numb2 -= numb2 ;
numb3 -= numb3 ;
numb4 -= numb4 ;


 
    chiffre1.innerHTML = numb1;
    chiffre2.innerHTML = numb2;
    chiffre3.innerHTML = numb3;
    chiffre4.innerHTML = numb4;

})
