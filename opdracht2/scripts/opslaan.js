favorietenKnoppen.forEach(function (favorietKnop) {
  favorietKnop.addEventListener("click", favorietOpslaan);
});

function favorietOpslaan(event) {
  var favorietKnop = this;
  var foto = favorietKnop.closest("li");
  var image = foto.querySelector("img");
  var imgSrc = image.src;
  var fotoId = foto.dataset.id;

  console.log(favorietKnop);
  if (favorietKnop.classList.contains("klik")) {
    favorietKnop.classList.remove("klik");
    favorietKnop.style.color = "#f7b704";

    var fotoNieuw = document.createElement("img");

    fotoNieuw.src = imgSrc;

    fotoNieuw.setAttribute("data-id", fotoId);

    opgeslagenLijst.appendChild(fotoNieuw);

    //consone loggen voor de zekerheid
    console.log(fotoNieuw);

    //als er opnieuw geklikt wordt op de favoriet knop dan wordt de else statement uitgevoerd
  } else {
    //de favorietknop krijgt de class klik terug en de kleur wordt zwart
    favorietKnop.classList.add("klik");
    favorietKnop.style.color = "#3d3d3d";

    var favoFoto = document.querySelector("[data-id = '" + fotoId + "']");
    console.log(favoFoto);

    favoFoto.remove();
  }
}
