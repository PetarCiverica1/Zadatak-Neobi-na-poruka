// Varijable različitih vrsta podataka
let pocetak = "ba";
let zavrsetak = "a";
let dodatak = "kad";

let broj = 0;
let djelitelj = 0;

let aktivno = true;


let rezultat = broj / djelitelj;


let banana = pocetak + rezultat + zavrsetak;
let nankad = rezultat + dodatak;


let poruka = banana + " ide na Mjesec " + nankad;


console.log(poruka);

let usporedba = poruka === (
    pocetak + String(rezultat) + zavrsetak +
    " ide na Mjesec " + String(rezultat) + dodatak
);


console.log(usporedba);


console.log("Vrijednosti varijabli:");
console.log(pocetak, zavrsetak, dodatak);
console.log(broj, djelitelj, aktivno);
console.log(rezultat, banana, nankad);
console.log(poruka, usporedba);


console.log("Tipovi podataka:");
console.log(typeof pocetak);
console.log(typeof zavrsetak);
console.log(typeof dodatak);
console.log(typeof broj);
console.log(typeof djelitelj);
console.log(typeof aktivno);
console.log(typeof rezultat);
console.log(typeof banana);
console.log(typeof nankad);
console.log(typeof poruka);
console.log(typeof usporedba);