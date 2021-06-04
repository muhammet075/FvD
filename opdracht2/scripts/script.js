// JavaScript Document
console.log("howdy");

var favorietKnop = document.querySelectorAll(".favorietknop");

var rood = document.querySelectorAll(".rood");
var groen = document.querySelectorAll(".groen");
var geel = document.querySelectorAll(".geel");
var blauw = document.querySelectorAll(".blauw");
var paars = document.querySelectorAll(".paars");
var bruin = document.querySelectorAll(".bruin");
var oranje = document.querySelectorAll(".oranje");

var nederland = document.querySelectorAll(".nederland");
var turkije = document.querySelectorAll(".turkije");
var frankrijk = document.querySelectorAll(".frankrijk");
var spanje = document.querySelectorAll(".spanje");
var griekenland = document.querySelectorAll(".griekenland");

var keuzeRood = document.querySelector("#rood");
var keuzeGroen = document.querySelector("#groen");
var keuzeGeel = document.querySelector("#geel");
var keuzeBlauw = document.querySelector("#blauw");
var keuzePaars = document.querySelector("#paars");
var keuzeBruin = document.querySelector("#bruin");
var keuzeOranje = document.querySelector("#oranje");

var keuzeNederland = document.querySelector("#NL");
var keuzeTurkije = document.querySelector("#TR");
var keuzeFrankrijk = document.querySelector("#FR");
var keuzeSpanje = document.querySelector("#ES");
var keuzeGriekenland = document.querySelector("#GR");

var volgendeKnop = document.querySelector("#volgende");
var opnieuwKnop = document.querySelector("#opnieuw");
var kleuren = document.querySelector(".kleuren");
var landen = document.querySelector(".landen");


var opgeslagenLijst = document.querySelector(".opgeslagenlijst");
var lijstKnop = document.querySelector(".lijstknop");
var lijstKnopSluit = document.querySelector(".lijstsluit");
var favorietLijst = document.querySelector(".opgeslagenitems");



var favorietTeller = document.querySelector(".aantalfavorieten");

document.addEventListener("click", toonAantal)

function toonAantal() {

    //aantal child elementen tellen in de opgeslagen afbeeldingen lijst
    var opgeslagenFotos = opgeslagenLijst.childElementCount;

    //als er 1 child element geteld is in de afbeelding lijst wordt er 0 getoond naast het knopje
    if (opgeslagenFotos === 1) {

        console.log(opgeslagenFotos);

        //0 wordt getoond omdat de p tag waar geen favorieten opgeslagen (zero state) staan ook als child gezien wordt
        favorietTeller.innerHTML = "0";

        
        // als het meer dan 1 is wordt er geteld en 1 eraf getrokken (min de zero state bericht)
    } else {
        console.log(opgeslagenFotos);
        favorietTeller.innerHTML = opgeslagenFotos - 1;
    };
};











lijstKnop.addEventListener("click", toonFavorietMenu);

function toonFavorietMenu() {
    favorietLijst.style.display = "block";
    favorietLijst.classList.remove("menuanimatie-sluit");
    favorietLijst.classList.add("menuanimatie");
}


lijstKnopSluit.addEventListener("click", sluitFavorietMenu);


function sluitFavorietMenu() {
    favorietLijst.classList.remove("menuanimatie");
    favorietLijst.classList.add("menuanimatie-sluit");

    setTimeout(function () {
        favorietLijst.style.display = "none";
    }, 1000);

}

window.addEventListener("click", heLa)

function heLa() {
    if (opgeslagenLijst.childNodes.length > 0) {


    } else {
        console.log("test")
    }
}


var favorietKnop1 = document.querySelector(
    ".fotolijst section:nth-child(1) .favorietknop"
);
var favorietKnop2 = document.querySelector(
    ".fotolijst section:nth-child(2) .favorietknop"
);
var favorietKnop3 = document.querySelector(
    ".fotolijst section:nth-child(3) .favorietknop"
);
var favorietKnop4 = document.querySelector(
    ".fotolijst section:nth-child(4) .favorietknop"
);
var favorietKnop5 = document.querySelector(
    ".fotolijst section:nth-child(5) .favorietknop"
);
var favorietKnop6 = document.querySelector(
    ".fotolijst section:nth-child(6) .favorietknop"
);
var favorietKnop7 = document.querySelector(
    ".fotolijst section:nth-child(7) .favorietknop"
);
var favorietKnop8 = document.querySelector(
    ".fotolijst section:nth-child(8) .favorietknop"
);
var favorietKnop9 = document.querySelector(
    ".fotolijst section:nth-child(9) .favorietknop"
);
var favorietKnop10 = document.querySelector(
    ".fotolijst section:nth-child(10) .favorietknop"
);
var favorietKnop11 = document.querySelector(
    ".fotolijst section:nth-child(11) .favorietknop"
);
var favorietKnop12 = document.querySelector(
    ".fotolijst section:nth-child(12) .favorietknop"
);
var favorietKnop13 = document.querySelector(
    ".fotolijst section:nth-child(13) .favorietknop"
);
var favorietKnop14 = document.querySelector(
    ".fotolijst section:nth-child(14) .favorietknop"
);
var favorietKnop15 = document.querySelector(
    ".fotolijst section:nth-child(15) .favorietknop"
);
var favorietKnop16 = document.querySelector(
    ".fotolijst section:nth-child(16) .favorietknop"
);
var favorietKnop17 = document.querySelector(
    ".fotolijst section:nth-child(17) .favorietknop"
);
var favorietKnop18 = document.querySelector(
    ".fotolijst section:nth-child(18) .favorietknop"
);
var favorietKnop19 = document.querySelector(
    ".fotolijst section:nth-child(19) .favorietknop"
);
var favorietKnop20 = document.querySelector(
    ".fotolijst section:nth-child(20) .favorietknop"
);
var favorietKnop21 = document.querySelector(
    ".fotolijst section:nth-child(21) .favorietknop"
);
var favorietKnop22 = document.querySelector(
    ".fotolijst section:nth-child(22) .favorietknop"
);
var favorietKnop23 = document.querySelector(
    ".fotolijst section:nth-child(23) .favorietknop"
);
var favorietKnop24 = document.querySelector(
    ".fotolijst section:nth-child(24) .favorietknop"
);
var favorietKnop25 = document.querySelector(
    ".fotolijst section:nth-child(25) .favorietknop"
);
var favorietKnop26 = document.querySelector(
    ".fotolijst section:nth-child(26) .favorietknop"
);
var favorietKnop27 = document.querySelector(
    ".fotolijst section:nth-child(27) .favorietknop"
);
var favorietKnop28 = document.querySelector(
    ".fotolijst section:nth-child(28) .favorietknop"
);
var favorietKnop29 = document.querySelector(
    ".fotolijst section:nth-child(29) .favorietknop"
);
var favorietKnop30 = document.querySelector(
    ".fotolijst section:nth-child(30) .favorietknop"
);
var favorietKnop31 = document.querySelector(
    ".fotolijst section:nth-child(31) .favorietknop"
);
var favorietKnop32 = document.querySelector(
    ".fotolijst section:nth-child(32) .favorietknop"
);
var favorietKnop33 = document.querySelector(
    ".fotolijst section:nth-child(33) .favorietknop"
);
var favorietKnop34 = document.querySelector(
    ".fotolijst section:nth-child(34) .favorietknop"
);
var favorietKnop35 = document.querySelector(
    ".fotolijst section:nth-child(35) .favorietknop"
);
var favorietKnop36 = document.querySelector(
    ".fotolijst section:nth-child(36) .favorietknop"
);
var favorietKnop37 = document.querySelector(
    ".fotolijst section:nth-child(37) .favorietknop"
);
var favorietKnop38 = document.querySelector(
    ".fotolijst section:nth-child(38) .favorietknop"
);
var favorietKnop39 = document.querySelector(
    ".fotolijst section:nth-child(39) .favorietknop"
);
var favorietKnop40 = document.querySelector(
    ".fotolijst section:nth-child(40) .favorietknop"
);
var favorietKnop41 = document.querySelector(
    ".fotolijst section:nth-child(41) .favorietknop"
);
var favorietKnop42 = document.querySelector(
    ".fotolijst section:nth-child(42) .favorietknop"
);
var favorietKnop43 = document.querySelector(
    ".fotolijst section:nth-child(43) .favorietknop"
);
var favorietKnop44 = document.querySelector(
    ".fotolijst section:nth-child(44) .favorietknop"
);
var favorietKnop45 = document.querySelector(
    ".fotolijst section:nth-child(45) .favorietknop"
);
var favorietKnop46 = document.querySelector(
    ".fotolijst section:nth-child(46) .favorietknop"
);
var favorietKnop47 = document.querySelector(
    ".fotolijst section:nth-child(47) .favorietknop"
);
var favorietKnop48 = document.querySelector(
    ".fotolijst section:nth-child(48) .favorietknop"
);
var favorietKnop49 = document.querySelector(
    ".fotolijst section:nth-child(49) .favorietknop"
);
var favorietKnop50 = document.querySelector(
    ".fotolijst section:nth-child(50) .favorietknop"
);
var favorietKnop51 = document.querySelector(
    ".fotolijst section:nth-child(51) .favorietknop"
);
var favorietKnop52 = document.querySelector(
    ".fotolijst section:nth-child(52) .favorietknop"
);










kleuren.addEventListener("click", toonVolgende);

function toonVolgende() {
    volgendeKnop.style.display = "block";
}

volgendeKnop.addEventListener("click", volgendeStap);

function volgendeStap() {
    volgendeKnop.style.display = "none";
    kleuren.classList.add("filteranimatie");
    landen.style.display = "block";
}

landen.addEventListener("click", landenOpzij);

function landenOpzij() {
    landen.classList.add("filteranimatie");
    opnieuwKnop.style.display = "block";
}

//KLEUREN FILTERS
keuzeRood.addEventListener("click", filterRood);

function filterRood() {
    rood.forEach(function (element) {
        element.style.display = "block";
    });

    groen.forEach(function (element) {
        element.style.display = "none";
    });

    geel.forEach(function (element) {
        element.style.display = "none";
    });

    blauw.forEach(function (element) {
        element.style.display = "none";
    });

    paars.forEach(function (element) {
        element.style.display = "none";
    });

    bruin.forEach(function (element) {
        element.style.display = "none";
    });

    oranje.forEach(function (element) {
        element.style.display = "none";
    });
}

keuzeGroen.addEventListener("click", filterGroen);

function filterGroen() {
    groen.forEach(function (element) {
        element.style.display = "block";
    });

    rood.forEach(function (element) {
        element.style.display = "none";
    });

    geel.forEach(function (element) {
        element.style.display = "none";
    });

    blauw.forEach(function (element) {
        element.style.display = "none";
    });

    paars.forEach(function (element) {
        element.style.display = "none";
    });

    bruin.forEach(function (element) {
        element.style.display = "none";
    });

    oranje.forEach(function (element) {
        element.style.display = "none";
    });
}

keuzeGeel.addEventListener("click", filterGeel);

function filterGeel() {
    geel.forEach(function (element) {
        element.style.display = "block";
    });

    rood.forEach(function (element) {
        element.style.display = "none";
    });

    groen.forEach(function (element) {
        element.style.display = "none";
    });

    blauw.forEach(function (element) {
        element.style.display = "none";
    });

    paars.forEach(function (element) {
        element.style.display = "none";
    });

    bruin.forEach(function (element) {
        element.style.display = "none";
    });

    oranje.forEach(function (element) {
        element.style.display = "none";
    });
}

keuzeBlauw.addEventListener("click", filterBlauw);

function filterBlauw() {
    blauw.forEach(function (element) {
        element.style.display = "block";
    });

    rood.forEach(function (element) {
        element.style.display = "none";
    });

    groen.forEach(function (element) {
        element.style.display = "none";
    });

    geel.forEach(function (element) {
        element.style.display = "none";
    });

    paars.forEach(function (element) {
        element.style.display = "none";
    });

    bruin.forEach(function (element) {
        element.style.display = "none";
    });

    oranje.forEach(function (element) {
        element.style.display = "none";
    });
}

keuzePaars.addEventListener("click", filterPaars);

function filterPaars() {
    paars.forEach(function (element) {
        element.style.display = "block";
    });

    rood.forEach(function (element) {
        element.style.display = "none";
    });

    groen.forEach(function (element) {
        element.style.display = "none";
    });

    geel.forEach(function (element) {
        element.style.display = "none";
    });

    blauw.forEach(function (element) {
        element.style.display = "none";
    });

    bruin.forEach(function (element) {
        element.style.display = "none";
    });

    oranje.forEach(function (element) {
        element.style.display = "none";
    });
}

keuzeNederland.addEventListener("click", filterNederland);

function filterNederland() {
    nederland.forEach(function (element) {
        element.style.display = "block";
    });

    turkije.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    frankrijk.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    spanje.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    griekenland.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });
}

keuzeTurkije.addEventListener("click", filterTurkije);

function filterTurkije() {
    turkije.forEach(function (element) {
        element.style.display = "block";
    });

    nederland.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    frankrijk.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    spanje.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    griekenland.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });
}

keuzeFrankrijk.addEventListener("click", filterFrankrijk);

function filterFrankrijk() {
    frankrijk.forEach(function (element) {
        element.style.display = "block";
    });

    nederland.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    turkije.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    spanje.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    griekenland.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });
}

keuzeSpanje.addEventListener("click", filterSpanje);

function filterSpanje() {
    spanje.forEach(function (element) {
        element.style.display = "block";
    });

    nederland.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    turkije.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    frankrijk.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    griekenland.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });
}

keuzeGriekenland.addEventListener("click", filterGriekenland);

function filterGriekenland() {
    griekenland.forEach(function (element) {
        element.style.display = "block";
    });

    nederland.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    turkije.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    frankrijk.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });

    spanje.forEach(function (element) {
        element.style.display = "none";
        element.parentElement.style.display = "none";
    });
}

//OPNIEUW FUNCTIE ALLES WORDT GERESET
opnieuwKnop.addEventListener("click", opnieuwFunctie);

function opnieuwFunctie() {
    kleuren.classList.remove("filteranimatie");
    landen.classList.remove("filteranimatie");
    landen.style.display = "none";
    opnieuwKnop.style.display = "none";

    nederland.forEach(function (element) {
        element.style.display = "block";
        element.parentElement.style.display = "block";
    });

    turkije.forEach(function (element) {
        element.style.display = "block";
        element.parentElement.style.display = "block";
    });

    frankrijk.forEach(function (element) {
        element.style.display = "block";
        element.parentElement.style.display = "block";
    });

    spanje.forEach(function (element) {
        element.style.display = "block";
        element.parentElement.style.display = "block";
    });

    griekenland.forEach(function (element) {
        element.style.display = "block";
        element.parentElement.style.display = "block";
    });
}

//BRON:
//https://forum.freecodecamp.org/t/queryselectorall-for-multiple-classes-not-working/254980
//https://www.w3schools.com/jsref/prop_node_parentelement.asp
