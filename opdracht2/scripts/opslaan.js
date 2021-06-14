favorietenKnoppen.forEach(function (favorietKnop) {
  favorietKnop.addEventListener("click", favorietOpslaan);
});

function favorietOpslaan(event) {
  //variabelen aanmaken
  var favorietKnop = this;
  var foto = favorietKnop.closest("li");
  var image = foto.querySelector("img");
  var imgSrc = image.src;
  var fotoId = foto.dataset.id;

  console.log(favorietKnop);

  //als de knop een class klik bevat, wordt de if uitgevoerd
  if (favorietKnop.classList.contains("klik")) {
    //class klik wordt weggehaald en de kleur wordt veranderd
    favorietKnop.classList.remove("klik");
    favorietKnop.style.color = "#f7b704";

    //nieuwe html img wordt aangemaakt
    var fotoNieuw = document.createElement("img");

    //de src van de img is de src van de img waar de ster samen met de img in de zelfde li bevinden
    fotoNieuw.src = imgSrc;

    //de nieuwe afbeelding krijgt een data-id
    fotoNieuw.setAttribute("data-id", fotoId);

    //onderin in de child
    opgeslagenLijst.appendChild(fotoNieuw);

    //consone loggen voor de zekerheid
    console.log(fotoNieuw);

    //als er opnieuw geklikt wordt op de favoriet knop dan wordt de else statement uitgevoerd
  } else {
    //de favorietknop krijgt de class klik terug en de kleur wordt zwart
    favorietKnop.classList.add("klik");
    favorietKnop.style.color = "#3d3d3d";

    //in de data-id komt de fotoid te staan
    var favoFoto = document.querySelector("[data-id = '" + fotoId + "']");
    console.log(favoFoto);

    //favfoto wordt verwijderd
    favoFoto.remove();
  }
}
