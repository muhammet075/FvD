# Procesverslag

**Auteur:** -Muhammet Komur-

**Het werk:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)

Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Nb. de standaardstructuur en de spartaanse opmaak zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

## Bronnenlijst

### Opdracht 1
1. https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp - CSS Keyframes
2. https://www.w3schools.com/css/css3_animations.asp - CSS Animaties
3. https://css-tricks.com/almanac/properties/a/animation/ - CSS Animaties
4. https://developer.mozilla.org/en-US/docs/Web/CSS/animation - CSS Animaties
5. https://fontmeme.com/oreo-font/ - Oreo font
6. https://applecolors.com/palette/10780-oreo-logo - Oreo kleur pallet
7. https://worldvectorlogo.com/nl/logo/ulker-1 - Ulker SVG logo
8. https://www.calligraphr.com/en/ - Eigen font maken

### Opdracht 2
1. https://forum.freecodecamp.org/t/queryselectorall-for-multiple-classes-not-working/254980 - QuerySelector alle classes
2. https://www.w3schools.com/jsref/prop_node_parentelement.asp - Parent element
3. https://stackoverflow.com/questions/6999257/vertical-scrollbar-position-absolute/34503125 - Verticaal scrollen
4. https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows - Verticaal grid
5. https://www.w3schools.com/js/js_htmldom_nodes.asp - JavaScript nieuwe HTML element toevoegen


## Opdracht 1 

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

<br/>

## Opdracht 2

## Voortgang

Ik heb de case fotogallerij gekozen, ik heb ervoor gekozen om fotos van landen te laten zien op de website en dat gebruikers de afbeeldingen kunnen opslaan als favoriet, filteren op kleur, sorteren op land. Als er op een toets op de toetsenbord geklikt wordt, wordt de grid veranderd in een horizontale grid.

Als animaties heb ik de filters geanimeerd dat het naar rechts gaat als de keuze gemaakt is, de opgeslagen menu komt met een effect naar links in scherm. De afbeeldingen die ik bij dit project gebruikt heb, heb ik op Google gevonden en de bronnen staan onderaan in dit readme file.

## Werkwijze

Ik begon eerst met de HTML en CSS. Ik heb de site vormgegeven en ik heb gebruik gemaakt dat als een gebruiker met een donkere scherm op de site komt dat het een donkere weergave krijgt, en met een lichte scherm meer wittere kleuren krijgt. Vervolgens heb ik met media queries de website repsonive gemaakt van mobiele schermen tot en met 4k schermen. Daarna ben ik met JavaScript begonnen.

## JavaScript

Met JavaScript heb ik ervoor gezorgd dat als er op kleur gesorteerdt wordt, dat alle andere kleuren waar de gebruiker niet op geklikt heeft een display none krijgen. Het wordt getoggled. Daarna komt de landen filter optie in beeld en dan krijgen de spans in de divs van de kleuren een display none of block, dus daar wordt het ook getoggled. Daarna komt er een reset knop in beeld en als daar op geklikt wordt dan krijgt alles een display block.

Als een gebruiker een foto als favoriet wilt maken, dan klikt de gebruiker op het sterretje. De sterretje maakt een nieuw html img element aan, en de src wordt de link van de afbeelding waar de gebruiker op geklikt heeft. De sterretje wordt dan geel van kleur en als de gebruikter weer op de sterretje klikt dan wordt de foto getoggled en verdwijnt uit de favorieten lijst. De favorieten lijst heeft ook een zero state dus als het leeg is.

### EXTRA BRONNEN AFBEELDINGEN OPDRACHT 2

NL {
Rood:

- https://www.zoomacademy.nl/blog/wp-content/uploads/2020/10/9f0fd3d0bb4b11eba6e6f9e932f388b9.jpg
- https://images.westend61.de/0001241448pw/red-tulips-and-clouds-in-the-sky-yersekendam-zeeland-province-netherlands-europe-RHPLF05212.jpg

Groen:

- https://www.reisroutes.nl/userfiles/fotos/zaanse-schans_957_xl.jpg
- https://aws-tiqets-cdn.imgix.net/images/content/b370b6078875408283f95a04d90778e2.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=25&s=89bcbc02b0a2d61ef49f1d5ee16f2475&w=375&h=250&dpr=2.625
- https://nederlandsglorie.nl/wp-content/uploads/2019/08/Zaanse-Schans-6-1200x800.jpg

Geel:

- https://cdn.odysseytraveller.com/app/uploads/2019/08/Dutch-girl-in-tulip-field-Netherlands.jpg
- https://blog.hotelspecials.nl/wp-content/uploads/sites/4/2017/04/Kaasmarktheader.png

Blauw:

- https://www.wereldvolmagie.nl/wp-content/uploads/2020/08/Zaanse-Schans.jpg
- https://blog.wallbox.com/wp-content/uploads/2020/07/netherlands-ev-incentives.jpeg

Paars:

- https://ramboll.com/-/media/images/environ/countries/netherlands.jpg?h=765&la=en&w=1360
- https://i.gocollette.com/img/destination-page/europe/netherlands/netherlands-ms2.jpg?h=720&w=1280&la=en
  }

TR {
Rood:

- https://www.istanbulsanatevi.com/wp-content/uploads/2018/04/CN15528c.jpg
- https://i.pinimg.com/originals/1c/61/79/1c6179881c66e8c06239be002f444416.jpg

Groen:

- https://i.sozcu.com.tr/wp-content/uploads/2018/11/iecrop/k1-7_16_9_1543489272.jpg
- https://blog.obilet.com/wp-content/uploads/2020/01/Uzun-G%C3%B6l-Trabzon.jpg

Geel:

- https://upload.wikimedia.org/wikipedia/commons/3/3f/Anit_Kabir_%286526103103%29.jpg
- https://1.bp.blogspot.com/-ktFL9XEq21M/XSCZMdnFcjI/AAAAAAAABM0/QFnbDlo_jrctERkOqvTppxRreJ8UXZ4bgCLcBGAs/s0/istanbul-manzarali-turk-bayragi-resimleri-8.jpg
- https://1.bp.blogspot.com/-J_xRa7VD5W4/XSCZJ6MlcrI/AAAAAAAABMQ/ap9Pcl45wDcgOW2S_4Tu5Na17KWZF07QQCLcBGAs/s0/istanbul-manzarali-turk-bayragi-resimleri-17.jpg

Blauw:

- https://bogazda.org/blog/wp-content/uploads/2020/12/istanbulbogazi.jpg
- https://i4.hurimg.com/i/hurriyet/75/750x0/5ae2efaf0f25431d88ad65ed

Paars:

- https://acino.swiss/wp-content/uploads/2019/12/Istanbul-pic-reworked-scaled-1.jpg
- https://www.backpackeninazie.nl/wp-content/uploads/2019/11/Ankara-3.jpg
  }

FR {
Rood:

- https://img5.goodfon.com/wallpaper/nbig/2/9e/pole-nebo-oblaka-peizazh-zakat-tsvety-priroda-perspektiva--2.jpg
- https://img1.goodfon.com/wallpaper/nbig/8/98/etretat-france-sea-franciya.jpg

Groen:

- https://lh3.googleusercontent.com/proxy/w1iJgDddZrXVZknvUi7cYCxBEAEfxGIfziCcjdB-C1wJJ1X2_dUafFD7_IwW4l3gkE8UA4tLSjMnSA9awaE50TqYGzol725OuDSooqb5Wg
- https://wallpaperaccess.com/full/871327.jpg

Geel:

- https://www.aroohatours.com/wp-content/uploads/2019/06/271052_Viator_Shutterstock_166828.jpg
- https://cdn.pixabay.com/photo/2013/02/01/19/24/landscape-77181_1280.jpg

Blauw:

- https://howmanyspeak.com/wp-content/uploads/2020/06/602x338_cmsv2_4829dac9-3f2c-5efa-9ce4-bf682fe9b4a5-4674670.jpg
- https://www.planetware.com/wpimages/2019/05/france-best-places-to-visit-joan-arc-monuments-chinon-rouen-orleans.jpg

Paars:

- https://www.telegraph.co.uk/content/dam/travel/2020/12/19/provence_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg?imwidth=1280
- https://www.la-vie-en-france.nl/userfiles/images/leonard-cotte-c1Jp-fo53U8-unsplash.jpg
  }

ES {
Rood:

- https://ak.picdn.net/shutterstock/videos/4298249/thumb/1.jpg
- https://farm4.staticflickr.com/3789/11866078024_7c7cd6f9fc_b.jpg

Groen:

- https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/17595_Fill_800_800.jpg
- https://www.theolivepress.es/wp-content/uploads/2019/02/High-frontier.jpg

Geel:

- https://cdn.pixabay.com/photo/2017/07/07/13/24/spain-2481437_1280.jpg
- https://cdn.pixabay.com/photo/2018/10/03/09/24/sunflower-3720813_960_720.jpg

Blauw:

- https://assets.traveltriangle.com/blog/wp-content/uploads/2019/07/Cover-for-Reasons-To-Visit-Spain.jpg
- https://webhelp.com/wp-content/uploads/2020/03/Country-page-Spain.jpg

Paars:

- https://cdn.kimkim.com/files/a/content_articles/featured_photos/9fc6e563b8ba3e78eae604da7e58d983a5294d27/big-c18195b2dfe79a520e4ec9c43832057a.jpg
- https://www.planetware.com/wpimages/2020/01/spain-in-pictures-beautiful-places-to-photograph-sagrada-familia-barcelona.jpg
  }

GR {
Rood:

- https://cdn.kimkim.com/files/a/content_articles/featured_photos/f2dad53ba54e099a73aaf75e5215ddf96b8369af/big-0d854d0fa1eecb2d00a360ff9abbe071.jpg
- https://www.greeka.com/photos/cyclades/santorini/hero/santorini-greece-1920.jpg

Groen:

- https://www.telegraph.co.uk/content/dam/Travel/2020/March/greece.jpg
- https://media.istockphoto.com/photos/saint-paul-cathedral-in-thessaloniki-greece-picture-id1140661083?k=6&m=1140661083&s=612x612&w=0&h=FXBOFCV_atcK8ihbHUMt952ZmfJZTmr9cPxXC0T01Tk=

Geel:

- https://www.feetdotravel.com/uploads/7/1/0/0/71000831/athesn_orig.jpg
- https://s3.amazonaws.com/iexplore_web/images/assets/000/006/401/original/greece.jpg?1443529980

Blauw:

- https://loyaltylobby.com/wp-content/uploads/2021/03/church-2020258_1280-GREECE.jpg
- https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/02e9e140-f418-a2f5-aff3-55c29941de3d/630x355.jpg

Paars:

- https://resources.travellocal.com/location/feae9f31-072a-4adc-a0eb-01d8cb2c395a-Greece-Santorini-Oia-sunset-over-domes-SS_large.jpg
- https://bucketlistlists.com/wp-content/uploads/2021/03/greece-bucket-list-4.jpg
  }
