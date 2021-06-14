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

  //de sluit knop verdwijnt na 0.5 seconde
  setTimeout(function () {
    favorietLijst.style.display = "none";
  }, 500);
}

//de favoriet knoppen definieren
var favorietenKnoppen = document.querySelectorAll(
  ".fotolijst li .favorietknop"
);

volgendeKnop.addEventListener("click", volgendeStap);

function volgendeStap() {
  //classes toevoegen en verwijderen
  volgendeKnop.classList.add("hide");
  kleuren.classList.add("filteranimatie");
  landen.classList.remove("hide");
}

landen.addEventListener("click", landenOpzij);

function landenOpzij() {
  //classes toevoegen en verwijderen
  landen.classList.add("filteranimatie");
  opnieuwKnop.classList.remove("hide");
}

//kleuren filters
keuzeKleuren.forEach(function (filterKleur) {
  filterKleur.addEventListener("change", filterenOpKleur);
});

function filterenOpKleur(event) {
  volgendeKnop.classList.remove("hide");
  //bij alleFotos worden alle lis geselecteerd en bij displaynonefotos,
  //worden alle li's wat niet geslecteerd krijgen een hide class
  var alleFotos = document.querySelectorAll("li");
  var displayNoneFotos = document.querySelectorAll(
    "li:not(." + event.target.value + ")"
  );

  //alle li's worden geselcteerd en op de huisige wordt de hide class weggehaald
  alleFotos.forEach(function (eenFoto) {
    eenFoto.classList.remove("hide-kleur");
  });

  //de overige krijgen een hide class
  displayNoneFotos.forEach(function (displayNoneFoto) {
    displayNoneFoto.classList.add("hide-kleur");
  });
}

//zelfde proces als bij kleuren maar dan hier bij landen
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

//alles resetten
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
