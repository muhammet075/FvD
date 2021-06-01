// JavaScript Document
console.log("howdy");

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
var kleuren = document.querySelector(".kleuren");
var landen = document.querySelector(".landen");

kleuren.addEventListener("click", toonVolgende);

function toonVolgende(){
    volgendeKnop.style.display = "block";
}

volgendeKnop.addEventListener("click", volgendeStap)

function volgendeStap(){
    volgendeKnop.style.display = "none";
    kleuren.style.display = "none";
    landen.style.display = "block";
};






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

};

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

};

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

};

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

};

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

};

keuzeBruin.addEventListener("click", filterBruin);

function filterBruin() {

    bruin.forEach(function (element) {
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

    paars.forEach(function (element) {
        element.style.display = "none";
    });

    oranje.forEach(function (element) {
        element.style.display = "none";
    });

};

keuzeOranje.addEventListener("click", filterOranje);

function filterOranje() {

    oranje.forEach(function (element) {
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

    paars.forEach(function (element) {
        element.style.display = "none";
    });

    bruin.forEach(function (element) {
        element.style.display = "none";
    });

};



keuzeNederland.addEventListener("click", filterNederland);

function filterNederland(){

    nederland.forEach(function (element) {
        element.style.display = "block";
    });
    
    turkije.forEach(function (element) {
        element.parentElement.style.display = "none";
    });
    
    frankrijk.forEach(function (element) {
        element.parentElement.style.display = "none";
    });
    
    spanje.forEach(function (element) {
        element.parentElement.style.display = "none";
    });

    griekenland.forEach(function (element) {
        element.parentElement.style.display = "none";
    });
    


}



//LANDEN FILTERS



//BRON:
//https://forum.freecodecamp.org/t/queryselectorall-for-multiple-classes-not-working/254980
//https://www.w3schools.com/jsref/prop_node_parentelement.asp
