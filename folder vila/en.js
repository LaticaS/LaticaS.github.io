const engleski = { 
               
    "nazivVile" : "Villa Kadulja / Villa Sage",
    "karuselNaslov1" : "LUXURY VACATION VILLA",
    "karuselNaslov2" : "LUXURY VACATION VILLA",
    "karuselNaslov3" : "LUXURY VACATION VILLA",
    "karuselP1" : "DESIGNER VILLA WITH POOL IN ŠIBENIK, CROATIA",
    "karuselP2" : "DESIGNER VILLA WITH POOL IN ŠIBENIK, CROATIA",
    "karuselP3" : "DESIGNER VILLA WITH POOL IN ŠIBENIK, CROATIA",
    "h2prvi" : "MEDITERRANEAN ENVIRONMENT",
    "h2drugi" : "PRIVATE POOL",
    "infoP1" : "Vacation house, Villa Kadulja (Sage) was build in year 2023. set in peaceful area, in beautiful mediterranean environment, little coast place Brodarica near Šibenik.",
    "infoP2" : "The interior of the villa is tastefully decorated, where every detail was thought of as the satisfaction of the guests. ",
    "infoP3" : "Surrounded by nature and olive trees you will spend your holidays far away from daily stress.",
    "infoP4" : "Enjoy unique view at sea and near islands, especially beautiful and relaxing at night.",
    "infoP5" : "Private whirlpool with anti-current swimming, beautiful backyard with deck chairs and plenty of space for sunbathing and sunbathing, charcoal grill with bread oven, terrace with Dalmatian pergola under which you can gather and serve your grilled dishes and enjoy together. ",
    "infoP6" : "Spacious balconies also offer cozy places to hang out with a drink overlooking the sea or the nearby hills covered with pine trees and olive trees.",
            "kontaktOsoba" : "Contact person: Mara Marić",
            "kontaktNaslov" : "Contact",
            "labelIme" : "First and last name",
            "labelDrzava" : "Country",
            "labelPhone" : "Phone Number",
            "labelPoruka" : "Your Message",
            "navPocetna" : "Home",
            "navSmjestaj" : "Accommodation",
            "navKontakt" : "Contact",
    };
    
    function promijeniEngleski() {
    
    // Postavljanje elemenata na temelju objekta engleski
    document.getElementById ("naziv-vile").innerText = engleski.nazivVile;
    document.getElementById("karusel-naslov-prvi").innerText = engleski.karuselNaslov1;
    document.getElementById("karusel-naslov-drugi").innerText = engleski.karuselNaslov2;
    document.getElementById("karusel-naslov-treci").innerText = engleski.karuselNaslov3;
    document.getElementById("karusel-par1").innerText = engleski.karuselP1;
    document.getElementById("karusel-par2").innerText = engleski.karuselP2;
    document.getElementById("karusel-par3").innerText = engleski.karuselP3;
    document.getElementById("h2-prvi").innerText = engleski.h2prvi;
    document.getElementById("h2-drugi").innerText = engleski.h2drugi;
    document.getElementById("info-par1").innerText = engleski.infoP1;
    document.getElementById("info-par2").innerText = engleski.infoP2;
    document.getElementById("info-par3").innerText = engleski.infoP3;
    document.getElementById("info-par4").innerText = engleski.infoP4;
    document.getElementById("info-par5").innerText = engleski.infoP5;
    document.getElementById("info-par6").innerText = engleski.infoP6;
    
    document.getElementById("kontakt-osoba").innerText = engleski.kontaktOsoba;
    document.getElementById("kontakt-naslov").innerText = engleski.kontaktNaslov;
    document.getElementById("label-ime").innerText = engleski.labelIme;
    document.getElementById("label-drzava").innerText = engleski.labelDrzava;
    document.getElementById("label-telefon").innerText = engleski.labelPhone;
    document.getElementById("label-poruka").innerText = engleski.labelPoruka;
    
    document.getElementById("nav-pocetna").innerText = engleski.navPocetna;
    document.getElementById("nav-smjestaj").innerText = engleski.navSmjestaj;
    document.getElementById("nav-kontakt").innerText = engleski.navKontakt;
    document.getElementById("nav-pocetna2").innerText = engleski.navPocetna;
    document.getElementById("nav-smjestaj2").innerText = engleski.navSmjestaj;
    document.getElementById("nav-kontakt2").innerText = engleski.navKontakt;
    };