const latinski = {
    "nazivVile" : "Vila Kadulja / Villa Rustica Salvia",
    "karuselNaslov1" : "VILLA LUXUOSA AD VACANDUM",
    "karuselNaslov2" : "VILLA LUXUOSA AD VACANDUM",
    "karuselNaslov3" : "VILLA LUXUOSA AD VACANDUM",
"karuselP1" : "VILLA DESIGNATA CUM PISCINA NATATORIO IN SIBENICO, DALMATIA",
"karuselP2" : "VILLA DESIGNATA CUM PISCINA NATATORIO IN SIBENICO, DALMATIA",
"karuselP3" : "VILLA DESIGNATA CUM PISCINA NATATORIO IN SIBENICO, DALMATIA",
"h2prvi" : "AMBIENS MEDITERRANEUM",
"h2drugi" : "PISCINA NATATORIUM PRIVATUM",
"infoP1" : "Domus vacans, Villa Allium, aedificata est anno MMXXIII et situata est in loco tranquillo, in amoenis circumiacentibus Mediterraneis, in Brodarica ad Sibenico.",
"infoP2" : "Villa designata est sollicito studio, et delectatio hospitum in ea pernoctandi in omni minutiis cogitata est.",
"infoP3" : "Amoenitate naturae et oliveti circumsepti, ferias vestras a quotidiani strepitu longe ducetis.",
"infoP4" : "Conspectu unico maris et insularum, quae per noctem experientiam singularem praebent.",
"infoP5" : "Natatorium hydromassagicum privatum cum natatu contrarium, horto pulchro cum lectulis solariis et multo spatio ad quietem et solariam, coquina ad carnes coctas cum furno, area sub dalmatico peristylo, sub quo congregabitis et cibos de fornace ad arculam vobis ipsis ministrabitis et communione fruetis.",
"infoP6" : "Balcones spatiosi loca amoenissima ad bibendum cum conspectu maris vel montium vicinorum, pinetis et olivetis opertorum, offerunt.",
"kontaktOsoba" : "Persona contactus: Mara Maricus",
"kontaktNaslov" : "Contactus",
"labelIme" : "Nomen et cognomen",
"labelDrzava" : "Civitas",
"labelPhone" : "Telephonum",
"labelPoruka" : "Vestra nuntiatio",
"navPocetna" : "Domus",
"navSmjestaj" : "Deversorium",
"navKontakt" : "Contactus",
    
};

function promijeniLatinski() {
// Postavljanje elemenata na temelju objekta latinski
document.getElementById ("naziv-vile").innerText = latinski.nazivVile;
document.getElementById("karusel-naslov-prvi").innerText = latinski.karuselNaslov1;

document.getElementById("karusel-naslov-drugi").innerText = latinski.karuselNaslov2;
  document.getElementById("karusel-naslov-treci").innerText = latinski.karuselNaslov3;
  document.getElementById("karusel-par1").innerText = latinski.karuselP1;
  document.getElementById("karusel-par2").innerText = latinski.karuselP2;
  document.getElementById("karusel-par3").innerText = latinski.karuselP3;
  document.getElementById("h2-prvi").innerText = latinski.h2prvi;
  document.getElementById("h2-drugi").innerText = latinski.h2drugi;
  document.getElementById("info-par1").innerText = latinski.infoP1;
  document.getElementById("info-par2").innerText = latinski.infoP2;
  document.getElementById("info-par3").innerText = latinski.infoP3;
  document.getElementById("info-par4").innerText = latinski.infoP4;
  document.getElementById("info-par5").innerText = latinski.infoP5;
  document.getElementById("info-par6").innerText = latinski.infoP6;
  
  document.getElementById("kontakt-osoba").innerText = latinski.kontaktOsoba;
  document.getElementById("kontakt-naslov").innerText = latinski.kontaktNaslov;
  document.getElementById("label-ime").innerText = latinski.labelIme;
  document.getElementById("label-drzava").innerText = latinski.labelDrzava;
  document.getElementById("label-telefon").innerText = latinski.labelPhone;
  document.getElementById("label-poruka").innerText = latinski.labelPoruka;
  
  document.getElementById("nav-pocetna").innerText = latinski.navPocetna;
  document.getElementById("nav-smjestaj").innerText = latinski.navSmjestaj;
  document.getElementById("nav-kontakt").innerText = latinski.navKontakt;
  document.getElementById("nav-pocetna2").innerText = latinski.navPocetna;
  document.getElementById("nav-smjestaj2").innerText = latinski.navSmjestaj;
  document.getElementById("nav-kontakt2").innerText = latinski.navKontakt;
  
}