# Procesverslag
**Auteur:** -Muhammet Komur-

**Het werk:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)


Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Nb. de standaardstructuur en de spartaanse opmaak zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.



## Bronnenlijst
1. https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp - CSS Keyframes
2. https://www.w3schools.com/css/css3_animations.asp - CSS Animaties
3. https://css-tricks.com/almanac/properties/a/animation/ - CSS Animaties
4. https://developer.mozilla.org/en-US/docs/Web/CSS/animation - CSS Animaties
5. https://fontmeme.com/oreo-font/ - Oreo font
6. https://applecolors.com/palette/10780-oreo-logo - Oreo kleur pallet
7. ttps://worldvectorlogo.com/nl/logo/ulker-1 - Ulker SVG logo
8. https://www.calligraphr.com/en/ - Eigen font maken



## 21 April - Voortgangsgesprek

Ik had al een klein begin gemaakt aan mijn logo's, ik had een oreo font gevonden en gedownload (https://fontmeme.com/oreo-font/). Deze had ik met @font-face rule aangeroepen, alleen werkte het nog niet. Omdat de bestandstype .ttf was had ik het online naar een .woff getransformeerd. Toen lukte het wel. Daarna heb ik de kleur codes van Oreo opgezocht (https://applecolors.com/palette/10780-oreo-logo) en heb ik de donker blauwe gebruikt bij een donkere weergave, en de lichtblauwe bij een lichte weergave. Ook dit had ik nieuw geleerd bij FvD. De Ulker logo moest ik nog gaan fixen, ik kon de font family van Ulker nergens vinden. Dus had ik een SVG logo van Ulker gedownload, (https://worldvectorlogo.com/nl/logo/ulker-1) en ik had ik dat omgezet in een eigen gemaakte font met behulp van Calligraphr. (https://www.calligraphr.com/en/)

<img width="412" alt="ulkerscreen" src="https://user-images.githubusercontent.com/34505894/118288971-295e1f00-b4d5-11eb-8c15-8f437d789b28.png">

## 28 April - Voortgangsgesprek

Deze voorgangsgesprek had ik gemist omdat ik een afspraak had bij de tandarts. Toen ik weer thuis kwam ging ik gelijk aan de slag. Ik begon met het animeren met mijn Oreo logo. Met JavaScript had ik een klein scriptje geschreven, als je met je mouse over de logo heen hovert, dat dan de functie beweegKoekje wordt aangeroepen. In die functie krijgt de class van de oreo logo een nieuwe class. En in die nieuwe class beivndt zich de animatie met de keyframes voor het koekje. En een andere class voor de letters die gaan omwisselen. <img width="453" alt="Schermafbeelding 2021-05-14 om 16 57 41" src="https://user-images.githubusercontent.com/34505894/118289323-86f26b80-b4d5-11eb-86bf-db842ef2dda5.png">

Toen de oreo logo de class kreeg kon ik beginnen met keyframes. De eerste 0 van oreo, krijgt een before en een after. De before en after zijn beide 2 zwarte rondjes. De O krijgt een cream witte achtige kleur waardoor het een oreo koekje wordt. Daarna gaat de koekje een beetje naar rechts en dan omlaag, daarna helemaal naar links dan omhoog en neemt de plaats in van de eerste O. De eerste O gaat dan omhoog, naar rechts en dan naar de plaats van de laatste O.

<img width="393" alt="Schermafbeelding 2021-05-14 om 17 00 39" src="https://user-images.githubusercontent.com/34505894/118289742-f0727a00-b4d5-11eb-8f19-03a9e9858304.png">

## 29 April

De volgende dag ging ik aan de slag met mijn Ulker logo. De font werkte en ik ging aan de slag met animeren. Als de pagina is geladen begint gelijk de animatie van de logo. De letters gaan 1 voor 1 naar rechts, en gaan buiten het beeld van de browser helemaal omhoog en naar links. Eenmaal op de zelfde Y-as vallen ze 1 voor 1 naar beneden. 

<img width="355" alt="Schermafbeelding 2021-05-14 om 17 05 46" src="https://user-images.githubusercontent.com/34505894/118290383-a9d14f80-b4d6-11eb-942a-6fc4f20cf1f9.png">

De letters krijgen allemaal een aparte keyframe, de eerste letter begint over 2 seconden, de andere begint dan over 2.5 seconde, de ander over 3 sec etc. Ze hebben allemaal een delay. Hierdoor gaan de letters 1 voor 1 bewegen. Eerst zat ik te puzzelen hoe ik dit moest doen, ik gaf eerst alle letters de zelfde keyframe maar dat werkte niet dus gingen ze allemaal tegelijk. Ook ging ik puzzelen met de margins om de letters niet door elkaar te halen of dat ze ween rare beweging krijgen.

Na dat mijn animaties klaar waren, heb ik de body een display flex gegeven en een justify-conent space-evenly, zodat de logos mooi responisve naast elkaar komen te staan. Op een mobiel apparaat op een formaat van zo'n 760px, heb ik de body een flex-direction column-reverse gegeven, omdat de logos onderelkaar moeten komen te staan. Reverse zorgt ervoor dat de volgorde veranderd, dus dat de Ulker logo boven aan staat. Dat heb ik bewust gedaan omdat als de Ulker logo onder de Oreo logo komt te staan dan zie je die letters nog op je scherm als ze naar boven gaan en dat is lelijk. Dus Ulker logo staat nu boven aan dus dan zie je die letters niet als ze naar boven gaan.

