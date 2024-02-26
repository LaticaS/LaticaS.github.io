const hrvatski = {
    "karuselNaslov1" : "LUKSUZNA VILA ZA ODMOR",
    "karuselNaslov2" : "LUKSUZNA VILA ZA ODMOR",
    "karuselNaslov3" : "LUKSUZNA VILA ZA ODMOR",
    "karuselP1" : "DIZAJNERSKA VILA SA BAZENOM U ŠIBENIKU",
    "karuselP2" : "DIZAJNERSKA VILA SA BAZENOM U ŠIBENIKU",
    "karuselP3" : "DIZAJNERSKA VILA SA BAZENOM U ŠIBENIKU",
    "h2prvi" : "MEDITERANSKO OKRUŽENJE",
    "h2drugi" : "PRIVATNI BAZEN",
    "infoP1" : "Kuća za odmor, Villa Kadulja građena je 2023. godine i nalazi se u mirnoj okolini, u prekrasnom mediteranskom okruženju, mjestu Brodarica kraj Šibenika.",
    "infoP2" : "Villa je uređena dizajnerski te se svakim detaljom mislilo na zadovoljstvo boravka gostiju u njoj.",
    "infoP3" : "Okruženi prirodom i maslinikom provest ćete godišnji odmor daleko od svakodnevnog stresa.",
    "infoP4" : "Uživajte u jedinstvenom pogledu na more i otoke koji preko noći pružaju poseban doživljaj.",
    "infoP5" : "Privatni hidromasažni bazen s protustrujnim plivanjem, prekrasno dvorište s ležaljkama i puno prostora za odmor i sunčanje, roštilj na ugljen s krušnom peći, terasa s dalmatinskom pergolom ispod koje ćete se skupiti i poslužiti svoja jela s roštilja i uživati u zajedničkom druženju. ",
    "infoP6" : "Prostrani balkoni također nude ugodna mjesta za druženje uz piće s prekrasnim pogledom na more ili obližnja brda prekrivena borovom šumom i maslinama.",

};

function promijeniHrvatski() {
// Postavljanje elemenata na temelju objekta hrvatski
document.getElementById("karusel-naslov-prvi").innerText = hrvatski.karuselNaslov1;
document.getElementById("karusel-naslov-drugi").innerText = hrvatski.karuselNaslov2;
document.getElementById("karusel-naslov-treci").innerText = hrvatski.karuselNaslov3;
document.getElementById("karusel-par1").innerText = hrvatski.karuselP1;
document.getElementById("karusel-par2").innerText = hrvatski.karuselP2;
document.getElementById("karusel-par3").innerText = hrvatski.karuselP3;
document.getElementById("h2-prvi").innerText = hrvatski.h2prvi;
document.getElementById("h2-drugi").innerText = hrvatski.h2drugi;
document.getElementById("info-par1").innerText = hrvatski.infoP1;
document.getElementById("info-par2").innerText = hrvatski.infoP2;
document.getElementById("info-par3").innerText = hrvatski.infoP3;
document.getElementById("info-par4").innerText = hrvatski.infoP4;
document.getElementById("info-par5").innerText = hrvatski.infoP5;
document.getElementById("info-par6").innerText = hrvatski.infoP6;

};