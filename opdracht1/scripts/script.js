// JavaScript Document
console.log("howdy");

var oreologo = document.querySelector("h1");

oreologo.addEventListener("mouseover", beweegKoekje);


function beweegKoekje() {
    oreologo.classList.add("animatie");
    oreologo.classList.add("letteranimatie")
};

