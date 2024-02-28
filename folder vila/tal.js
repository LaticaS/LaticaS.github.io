const talijanski = {
    "nazivVile" : "Villa Kadulja / Villa Salvia",
      "karuselNaslov1" : "VILLA PER VACANZE DI LUSSO",
      "karuselNaslov2" : "VILLA PER VACANZE DI LUSSO",
      "karuselNaslov3" : "VILLA PER VACANZE DI LUSSO",
      "karuselP1" : "VILLA DI DESIGN CON PISCINA A ŠIBENIK, CROAZIA",
      "karuselP2" : "VILLA DI DESIGN CON PISCINA A ŠIBENIK, CROAZIA",
      "karuselP3" : "VILLA DI DESIGN CON PISCINA A ŠIBENIK, CROAZIA",
      "h2prvi" : "AMBIENTE MEDITERRANEO",
      "h2drugi" : "PISCINA PRIVATA",
      "infoP1" : "La casa per le vacanze, Villa Kadulja (Salvia), è stata costruita nell'anno 2023. Situata in una zona tranquilla, in un bellissimo ambiente mediterraneo, nel piccolo posto costiero di Brodarica vicino a Šibenik.",
      "infoP2" : "L'interno della villa è arredato con gusto, dove ogni dettaglio è stato pensato per la soddisfazione degli ospiti.",
      "infoP3" : "Circondati dalla natura e dagli ulivi, trascorrerete le vostre vacanze lontano dallo stress quotidiano.",
      "infoP4" : "Godetevi una vista unica sul mare e sulle isole vicine, particolarmente bella e rilassante di notte.",
      "infoP5" : "Idromassaggio privato con nuoto controcorrente, bellissimo cortile con sdraio e ampio spazio per prendere il sole, griglia a carbone con forno per il pane, terrazza con pergola dalmata sotto la quale potrete riunirvi e servire i vostri piatti alla griglia e gustare insieme.",
      "infoP6" : "Ampie balconate offrono anche luoghi accoglienti per rilassarsi con un drink ammirando il mare o le colline vicine coperte da pini e ulivi.",
      "kontaktOsoba" : "Persona di contatto: Mara Marić",
  "kontaktNaslov" : "Contatto",
  "labelIme" : "Nome e cognome",
  "labelDrzava" : "Paese",
  "labelPhone" : "Numero di telefono",
  "labelPoruka" : "Il tuo messaggio",
  "navPocetna" : "Home",
  "navSmjestaj" : "Alloggio",
  "navKontakt" : "Contatto"
  };
  
  function promijeniTalijanski() {
  // Postavljanje elemenata na temelju objekta hrvatski
  document.getElementById ("naziv-vile").innerText = talijanski.nazivVile;
  document.getElementById("karusel-naslov-prvi").innerText = talijanski.karuselNaslov1;
  document.getElementById("karusel-naslov-drugi").innerText = talijanski.karuselNaslov2;
  document.getElementById("karusel-naslov-treci").innerText = talijanski.karuselNaslov3;
  document.getElementById("karusel-par1").innerText = talijanski.karuselP1;
  document.getElementById("karusel-par2").innerText = talijanski.karuselP2;
  document.getElementById("karusel-par3").innerText = talijanski.karuselP3;
  document.getElementById("h2-prvi").innerText = talijanski.h2prvi;
  document.getElementById("h2-drugi").innerText = talijanski.h2drugi;
  document.getElementById("info-par1").innerText = talijanski.infoP1;
  document.getElementById("info-par2").innerText = talijanski.infoP2;
  document.getElementById("info-par3").innerText = talijanski.infoP3;
  document.getElementById("info-par4").innerText = talijanski.infoP4;
  document.getElementById("info-par5").innerText = talijanski.infoP5;
  document.getElementById("info-par6").innerText = talijanski.infoP6;
  
  document.getElementById("kontakt-osoba").innerText = talijanski.kontaktOsoba;
  document.getElementById("kontakt-naslov").innerText = talijanski.kontaktNaslov;
  document.getElementById("label-ime").innerText = talijanski.labelIme;
  document.getElementById("label-drzava").innerText = talijanski.labelDrzava;
  document.getElementById("label-telefon").innerText = talijanski.labelPhone;
  document.getElementById("label-poruka").innerText = talijanski.labelPoruka;
  
  document.getElementById("nav-pocetna").innerText = talijanski.navPocetna;
  document.getElementById("nav-smjestaj").innerText = talijanski.navSmjestaj;
  document.getElementById("nav-kontakt").innerText = talijanski.navKontakt;
  document.getElementById("nav-pocetna2").innerText = talijanski.navPocetna;
  document.getElementById("nav-smjestaj2").innerText = talijanski.navSmjestaj;
  document.getElementById("nav-kontakt2").innerText = talijanski.navKontakt;
  
  };
  