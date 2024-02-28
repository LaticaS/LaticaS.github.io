const njemacki = {
    "nazivVile" : "Vila Kadulja / Villa Salbei",
      "karuselNaslov1" : "LUXUS FERIENVILLA",
      "karuselNaslov2" : "LUXUS FERIENVILLA",
      "karuselNaslov3" : "LUXUS FERIENVILLA",
      "karuselP1" : "DESIGNERVILLA MIT POOL AUF DER ŠIBENIK, KROATIEN",
      "karuselP2" : "DESIGNERVILLA MIT POOL AUF DER ŠIBENIK, KROATIEN",
      "karuselP3" : "DESIGNERVILLA MIT POOL AUF DER ŠIBENIK, KROATIEN",
      "h2prvi" : "MEDITERRANE UMGEBUNG",
      "h2drugi" : "PRIVATER POOL",
      "infoP1" : "Ferienhaus Villa Kadulja wurde im Jahr 2023 erbaut und befindet sich in einer ruhigen Umgebung, in einer wunderschönen mediterranen Umgebung, im Ort Brodarica in der Nähe von Šibenik.",
      "infoP2" : "Das Innere der Villa ist geschmackvoll eingerichtet, wobei jedes Detail zur Zufriedenheit der Gäste gedacht wurde.",
      "infoP3" : "Umgeben von Natur und Olivenhainen werden Sie Ihren Urlaub weit weg vom alltäglichen Stress verbringen.",
      "infoP4" : "Genießen Sie den einzigartigen Blick auf das Meer und die Inseln, der über Nacht ein besonderes Erlebnis bietet.",
      "infoP5" : "Privater Whirlpool mit Gegenstromschwimmen, schöner Garten mit Liegestühlen und viel Platz zum Sonnen und Sonnenbaden, Holzkohlegrill mit Brotbackofen, Terrasse mit dalmatinischer Pergola, unter der Sie Ihre Grillgerichte zusammenstellen und servieren und gemeinsam genießen können.",
      "infoP6" : "Geräumige Balkone bieten auch gemütliche Plätze zum Verweilen bei einem Drink mit Blick auf das Meer oder die nahe gelegenen Hügel mit Pinien- und Olivenbäumen.",
      "kontaktOsoba" : "Kontaktperson: Mara Marić",
  "kontaktNaslov" : "Kontakt",
  "labelIme" : "Vor- und Nachname",
  "labelDrzava" : "Land",
  "labelPhone" : "Telefonnummer",
  "labelPoruka" : "Ihre Nachricht",
  "navPocetna" : "Startseite",
  "navSmjestaj" : "Unterkunft",
  "navKontakt" : "Kontakt"
  };
  
  function promijeniNjemacki() {
  // Postavljanje elemenata na temelju objekta hrvatski
  document.getElementById ("naziv-vile").innerText = njemacki.nazivVile;
  document.getElementById("karusel-naslov-prvi").innerText = njemacki.karuselNaslov1;
  document.getElementById("karusel-naslov-drugi").innerText = njemacki.karuselNaslov2;
  document.getElementById("karusel-naslov-treci").innerText = njemacki.karuselNaslov3;
  document.getElementById("karusel-par1").innerText = njemacki.karuselP1;
  document.getElementById("karusel-par2").innerText = njemacki.karuselP2;
  document.getElementById("karusel-par3").innerText = njemacki.karuselP3;
  document.getElementById("h2-prvi").innerText = njemacki.h2prvi;
  document.getElementById("h2-drugi").innerText = njemacki.h2drugi;
  document.getElementById("info-par1").innerText = njemacki.infoP1;
  document.getElementById("info-par2").innerText = njemacki.infoP2;
  document.getElementById("info-par3").innerText = njemacki.infoP3;
  document.getElementById("info-par4").innerText = njemacki.infoP4;
  document.getElementById("info-par5").innerText = njemacki.infoP5;
  document.getElementById("info-par6").innerText = njemacki.infoP6;
  
  document.getElementById("kontakt-osoba").innerText = njemacki.kontaktOsoba;
  document.getElementById("kontakt-naslov").innerText = njemacki.kontaktNaslov;
  document.getElementById("label-ime").innerText = njemacki.labelIme;
  document.getElementById("label-drzava").innerText = njemacki.labelDrzava;
  document.getElementById("label-telefon").innerText = njemacki.labelPhone;
  document.getElementById("label-poruka").innerText = njemacki.labelPoruka;
  
  document.getElementById("nav-pocetna").innerText = njemacki.navPocetna;
  document.getElementById("nav-smjestaj").innerText = njemacki.navSmjestaj;
  document.getElementById("nav-kontakt").innerText = njemacki.navKontakt;
  document.getElementById("nav-pocetna2").innerText = njemacki.navPocetna;
  document.getElementById("nav-smjestaj2").innerText = njemacki.navSmjestaj;
  document.getElementById("nav-kontakt2").innerText = njemacki.navKontakt;
  };
  