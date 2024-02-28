const francuski = {
    "nazivVile" : "Villa Kadulja / Villa Sage",
      "karuselNaslov1" : "VILLA DE VACANCES DE LUXE",
      "karuselNaslov2" : "VILLA DE VACANCES DE LUXE",
      "karuselNaslov3" : "VILLA DE VACANCES DE LUXE",
      "karuselP1" : "VILLA DESIGN AVEC PISCINE À ŠIBENIK, CROATIE",
      "karuselP2" : "VILLA DESIGN AVEC PISCINE À ŠIBENIK, CROATIE",
      "karuselP3" : "VILLA DESIGN AVEC PISCINE À ŠIBENIK, CROATIE",
      "h2prvi" : "ENVIRONNEMENT MÉDITERRANÉEN",
      "h2drugi" : "PISCINE PRIVÉE",
      "infoP1" : "La maison de vacances, Villa Kadulja (Sage), a été construite en 2023. Elle est située dans une zone paisible, dans un magnifique environnement méditerranéen, dans le petit village côtier de Brodarica près de Šibenik.",
      "infoP2" : "L'intérieur de la villa est décoré avec goût, où chaque détail a été pensé pour satisfaire les clients.",
      "infoP3" : "Entourée par la nature et les oliviers, vous passerez vos vacances loin du stress quotidien.",
      "infoP4" : "Profitez d'une vue unique sur la mer et les îles voisines, particulièrement belle et relaxante la nuit.",
      "infoP5" : "Jacuzzi privé avec nage à contre-courant, magnifique arrière-cour avec chaises longues et beaucoup d'espace pour prendre le soleil, barbecue au charbon de bois avec four à pain, terrasse avec pergola dalmate sous laquelle vous pouvez vous réunir, servir vos plats grillés et profiter ensemble",
      "infoP6" : "Les balcons spacieux offrent également des endroits confortables pour se détendre avec un verre en admirant la mer ou les collines voisines couvertes de pins et d'oliviers.",
      "kontaktOsoba" : "Personne de contact: Mara Marić",
  "kontaktNaslov" : "Contact",
  "labelIme" : "Prénom et nom de famille",
  "labelDrzava" : "Pays",
  "labelPhone" : "Numéro de téléphone",
  "labelPoruka" : "Votre message",
  "navPocetna" : "Accueil",
  "navSmjestaj" : "Hébergement",
  "navKontakt" : "Contact"
  };
  
  function promijeniFrancuski() {
  // Postavljanje elemenata na temelju objekta hrvatski
  document.getElementById ("naziv-vile").innerText = francuski.nazivVile;
  document.getElementById("karusel-naslov-prvi").innerText = francuski.karuselNaslov1;
  document.getElementById("karusel-naslov-drugi").innerText = francuski.karuselNaslov2;
  document.getElementById("karusel-naslov-treci").innerText = francuski.karuselNaslov3;
  document.getElementById("karusel-par1").innerText = francuski.karuselP1;
  document.getElementById("karusel-par2").innerText = francuski.karuselP2;
  document.getElementById("karusel-par3").innerText = francuski.karuselP3;
  document.getElementById("h2-prvi").innerText = francuski.h2prvi;
  document.getElementById("h2-drugi").innerText = francuski.h2drugi;
  document.getElementById("info-par1").innerText = francuski.infoP1;
  document.getElementById("info-par2").innerText = francuski.infoP2;
  document.getElementById("info-par3").innerText = francuski.infoP3;
  document.getElementById("info-par4").innerText = francuski.infoP4;
  document.getElementById("info-par5").innerText = francuski.infoP5;
  document.getElementById("info-par6").innerText = francuski.infoP6;
  
  document.getElementById("kontakt-osoba").innerText = francuski.kontaktOsoba;
  document.getElementById("kontakt-naslov").innerText = francuski.kontaktNaslov;
  document.getElementById("label-ime").innerText = francuski.labelIme;
  document.getElementById("label-drzava").innerText = francuski.labelDrzava;
  document.getElementById("label-telefon").innerText = francuski.labelPhone;
  document.getElementById("label-poruka").innerText = francuski.labelPoruka;
  
  document.getElementById("nav-pocetna").innerText = francuski.navPocetna;
  document.getElementById("nav-smjestaj").innerText = francuski.navSmjestaj;
  document.getElementById("nav-kontakt").innerText = francuski.navKontakt;
  document.getElementById("nav-pocetna2").innerText = francuski.navPocetna;
  document.getElementById("nav-smjestaj2").innerText = francuski.navSmjestaj;
  document.getElementById("nav-kontakt2").innerText = francuski.navKontakt;
  
  };
  