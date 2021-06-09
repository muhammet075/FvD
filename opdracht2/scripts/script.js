// JavaScript Document
console.log("howdy");

//variabelen maken
var favorietKnop = document.querySelectorAll(".favorietknop");

//keuze kleuren
var keuzeKleuren = document.querySelectorAll(".kleuren input");

//keuze landen
var keuzeLanden = document.querySelectorAll(".landen input");

//knoppen
var volgendeKnop = document.querySelector("#volgende");
var opnieuwKnop = document.querySelector("#opnieuw");
var kleuren = document.querySelector(".kleuren");
var landen = document.querySelector(".landen");

//lijsten en knoppen
var opgeslagenLijst = document.querySelector(".opgeslagenlijst");
var lijstKnop = document.querySelector(".lijstknop");
var lijstKnopSluit = document.querySelector(".lijstsluit");
var favorietLijst = document.querySelector(".opgeslagenitems");

var favorietTeller = document.querySelector(".aantalfavorieten");

document.addEventListener("keyup", logKey);

//als er op een knop geklikt wordt de fotolijst getoggled met de class een keyanimatie
function logKey(event) {
  console.log(event.key);

  if (event.key === "ArrowUp") {
    document.querySelector(".fotolijst").classList.add("keyAnimatie");
  } else if (event.key === "ArrowDown") {
    document.querySelector(".fotolijst").classList.remove("keyAnimatie");
  }
}

//als er ergens op het scherm geklikt wordt wordt de functie toonAantal uitgevoerd
document.addEventListener("click", toonAantal);

function toonAantal() {
  //aantal child elementen tellen in de opgeslagen afbeeldingen lijst
  var opgeslagenFotos = opgeslagenLijst.childElementCount;

  //als er 1 child element geteld is in de afbeelding lijst wordt er 0 getoond naast het knopje
  if (opgeslagenFotos === 1) {
    //0 wordt getoond omdat de p tag waar geen favorieten opgeslagen (zero state) staan ook als child gezien wordt
    favorietTeller.innerHTML = "0";

    // als het meer dan 1 is wordt er geteld en 1 eraf getrokken (min de zero state bericht)
  } else {
    favorietTeller.innerHTML = opgeslagenFotos - 1;
  }
}

//als er geklikt wordt op de lijst knop dan wordt de functie toonfavorietmenu uitgevoerd
lijstKnop.addEventListener("click", toonFavorietMenu);

function toonFavorietMenu() {
  //de favorietenlijst krijgt display block en de animaties worden getoggled
  favorietLijst.style.display = "block";
  favorietLijst.classList.remove("menuanimatie-sluit");
  favorietLijst.classList.add("menuanimatie");
}

lijstKnopSluit.addEventListener("click", sluitFavorietMenu);

function sluitFavorietMenu() {
  favorietLijst.classList.remove("menuanimatie");
  favorietLijst.classList.add("menuanimatie-sluit");

  //de sluit knop verdwijnt na 1 seconde
  setTimeout(function () {
    favorietLijst.style.display = "none";
  }, 1000);
}

var favorietenKnoppen = document.querySelectorAll(
  ".fotolijst li .favorietknop"
);

//favoriet knoppen defineren
var favorietKnop1 = document.querySelector(
  ".fotolijst li:nth-child(1) .favorietknop"
);
var favorietKnop2 = document.querySelector(
  ".fotolijst li:nth-child(2) .favorietknop"
);
var favorietKnop3 = document.querySelector(
  ".fotolijst li:nth-child(3) .favorietknop"
);
var favorietKnop4 = document.querySelector(
  ".fotolijst li:nth-child(4) .favorietknop"
);
var favorietKnop5 = document.querySelector(
  ".fotolijst li:nth-child(5) .favorietknop"
);
var favorietKnop6 = document.querySelector(
  ".fotolijst li:nth-child(6) .favorietknop"
);
var favorietKnop7 = document.querySelector(
  ".fotolijst li:nth-child(7) .favorietknop"
);
var favorietKnop8 = document.querySelector(
  ".fotolijst li:nth-child(8) .favorietknop"
);
var favorietKnop9 = document.querySelector(
  ".fotolijst li:nth-child(9) .favorietknop"
);
var favorietKnop10 = document.querySelector(
  ".fotolijst li:nth-child(10) .favorietknop"
);
var favorietKnop11 = document.querySelector(
  ".fotolijst li:nth-child(11) .favorietknop"
);
var favorietKnop12 = document.querySelector(
  ".fotolijst li:nth-child(12) .favorietknop"
);
var favorietKnop13 = document.querySelector(
  ".fotolijst li:nth-child(13) .favorietknop"
);
var favorietKnop14 = document.querySelector(
  ".fotolijst li:nth-child(14) .favorietknop"
);
var favorietKnop15 = document.querySelector(
  ".fotolijst li:nth-child(15) .favorietknop"
);
var favorietKnop16 = document.querySelector(
  ".fotolijst li:nth-child(16) .favorietknop"
);
var favorietKnop17 = document.querySelector(
  ".fotolijst li:nth-child(17) .favorietknop"
);
var favorietKnop18 = document.querySelector(
  ".fotolijst li:nth-child(18) .favorietknop"
);
var favorietKnop19 = document.querySelector(
  ".fotolijst li:nth-child(19) .favorietknop"
);
var favorietKnop20 = document.querySelector(
  ".fotolijst li:nth-child(20) .favorietknop"
);
var favorietKnop21 = document.querySelector(
  ".fotolijst li:nth-child(21) .favorietknop"
);
var favorietKnop22 = document.querySelector(
  ".fotolijst li:nth-child(22) .favorietknop"
);
var favorietKnop23 = document.querySelector(
  ".fotolijst li:nth-child(23) .favorietknop"
);
var favorietKnop24 = document.querySelector(
  ".fotolijst li:nth-child(24) .favorietknop"
);
var favorietKnop25 = document.querySelector(
  ".fotolijst li:nth-child(25) .favorietknop"
);
var favorietKnop26 = document.querySelector(
  ".fotolijst li:nth-child(26) .favorietknop"
);
var favorietKnop27 = document.querySelector(
  ".fotolijst li:nth-child(27) .favorietknop"
);
var favorietKnop28 = document.querySelector(
  ".fotolijst li:nth-child(28) .favorietknop"
);
var favorietKnop29 = document.querySelector(
  ".fotolijst li:nth-child(29) .favorietknop"
);
var favorietKnop30 = document.querySelector(
  ".fotolijst li:nth-child(30) .favorietknop"
);
var favorietKnop31 = document.querySelector(
  ".fotolijst li:nth-child(31) .favorietknop"
);
var favorietKnop32 = document.querySelector(
  ".fotolijst li:nth-child(32) .favorietknop"
);
var favorietKnop33 = document.querySelector(
  ".fotolijst li:nth-child(33) .favorietknop"
);
var favorietKnop34 = document.querySelector(
  ".fotolijst li:nth-child(34) .favorietknop"
);
var favorietKnop35 = document.querySelector(
  ".fotolijst li:nth-child(35) .favorietknop"
);
var favorietKnop36 = document.querySelector(
  ".fotolijst li:nth-child(36) .favorietknop"
);
var favorietKnop37 = document.querySelector(
  ".fotolijst li:nth-child(37) .favorietknop"
);
var favorietKnop38 = document.querySelector(
  ".fotolijst li:nth-child(38) .favorietknop"
);
var favorietKnop39 = document.querySelector(
  ".fotolijst li:nth-child(39) .favorietknop"
);
var favorietKnop40 = document.querySelector(
  ".fotolijst li:nth-child(40) .favorietknop"
);
var favorietKnop41 = document.querySelector(
  ".fotolijst li:nth-child(41) .favorietknop"
);
var favorietKnop42 = document.querySelector(
  ".fotolijst li:nth-child(42) .favorietknop"
);
var favorietKnop43 = document.querySelector(
  ".fotolijst li:nth-child(43) .favorietknop"
);
var favorietKnop44 = document.querySelector(
  ".fotolijst li:nth-child(44) .favorietknop"
);
var favorietKnop45 = document.querySelector(
  ".fotolijst li:nth-child(45) .favorietknop"
);
var favorietKnop46 = document.querySelector(
  ".fotolijst li:nth-child(46) .favorietknop"
);
var favorietKnop47 = document.querySelector(
  ".fotolijst li:nth-child(47) .favorietknop"
);
var favorietKnop48 = document.querySelector(
  ".fotolijst li:nth-child(48) .favorietknop"
);
var favorietKnop49 = document.querySelector(
  ".fotolijst li:nth-child(49) .favorietknop"
);
var favorietKnop50 = document.querySelector(
  ".fotolijst li:nth-child(50) .favorietknop"
);
var favorietKnop51 = document.querySelector(
  ".fotolijst li:nth-child(51) .favorietknop"
);
var favorietKnop52 = document.querySelector(
  ".fotolijst li:nth-child(52) .favorietknop"
);

volgendeKnop.addEventListener("click", volgendeStap);

function volgendeStap() {
  volgendeKnop.classList.add("hide");
  kleuren.classList.add("filteranimatie");
  landen.classList.remove("hide");
}

landen.addEventListener("click", landenOpzij);

function landenOpzij() {
  landen.classList.add("filteranimatie");
  opnieuwKnop.classList.remove("hide");
}

//KLEUREN FILTERS

keuzeKleuren.forEach(function (filterKleur) {
  filterKleur.addEventListener("change", filterenOpKleur);
});

function filterenOpKleur(event) {
  volgendeKnop.classList.remove("hide");
  var alleFotos = document.querySelectorAll("li");
  var displayNoneFotos = document.querySelectorAll(
    "li:not(." + event.target.value + ")"
  );

  alleFotos.forEach(function (eenFoto) {
    eenFoto.classList.remove("hide-kleur");
  });

  displayNoneFotos.forEach(function (displayNoneFoto) {
    displayNoneFoto.classList.add("hide-kleur");
  });
}

keuzeLanden.forEach(function (keuzeLand) {
  keuzeLand.addEventListener("change", filterenOpLand);
});

function filterenOpLand(event) {
  var alleFotos = document.querySelectorAll("li");
  var displayNoneFotos = document.querySelectorAll(
    "li:not(." + event.target.value + ")"
  );

  alleFotos.forEach(function (eenFoto) {
    eenFoto.classList.remove("hide-land");
  });

  displayNoneFotos.forEach(function (displayNoneFoto) {
    displayNoneFoto.classList.add("hide-land");
  });
}

//OPNIEUW FUNCTIE ALLES WORDT GERESET
opnieuwKnop.addEventListener("click", opnieuwFunctie);

function opnieuwFunctie() {
  var alleFotos = document.querySelectorAll("li");
  kleuren.classList.remove("filteranimatie");
  landen.classList.remove("filteranimatie");
  landen.classList.add("hide");
  opnieuwKnop.classList.add("hide");

  alleFotos.forEach(function (eenFoto) {
    eenFoto.classList.remove("hide-land", "hide-kleur");
  });
}

//BRON:
//https://forum.freecodecamp.org/t/queryselectorall-for-multiple-classes-not-working/254980
//https://www.w3schools.com/jsref/prop_node_parentelement.asp
