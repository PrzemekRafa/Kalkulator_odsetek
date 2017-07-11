'use strict';

function obliczZysk (wpl, iL, oK, opr, pod) {
    if (pod == true) {
        var oprocentowanieOpodatkowane = opr - (opr * 0.19);
    } else {
        var oprocentowanieOpodatkowane = opr;
    }
    
    var jedenPlusRprzezM = 1 + (oprocentowanieOpodatkowane / oK);
    var nRazyM = iL * oK;
    var potega = Math.pow(jedenPlusRprzezM, nRazyM);
    var kapital = wpl * potega;
    
    return kapital.toFixed(2);
}

function oblicz() {
    event.preventDefault();
    var wplata = parseInt(document.getElementById('wplata').value);
    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);
    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
    var oprocentowanie = document.getElementById('oprocentowanie').value/100;
    var podatek = document.getElementById('podatek').checked;
    var wynik = obliczZysk (wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    document.getElementById('wynik').innerHTML = wynik;
}