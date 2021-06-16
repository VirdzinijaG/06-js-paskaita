"use stirct"

let vaisius = "Oboulys";
let vaisius1 = "Kriause";
let vaisius2 = "Slyva";

// masyvas - kintamuju sarasas
// vietoj let vaisius, let vaisius1, let vaisius2 galima naudoti masyva (array)
// su masyvu paprasciau rasytis sarasus ar juos koreguoti
// masyvui galima naudoti const apibrezima taip pat ir let 
//masyvo vidu galima keisti
const masyvas = ["Oboulys", "Kriause", "Slyva", "Braske", "Vysnia"]; // masyvas gali buti su zodziu sarasu
let masyvas1 = [40, 15, 20, 30, 7]; // masyvas gali buti su skaiciu sarasu
let masyvas2 = [40, "Obuolys", 20, 30, "Slyva"]; // gali buti ir miksas tiek tekstas, tiek skaicius 

let mas = [vaisius, vaisius1, vaisius2, masyvas]; // masyve gali buti kintamieji. Galima masyve ideti masyva

masyvas2[0] = "Kazkas tai kitas" // taip galima pakeisti masyvo elemento reiksme, naudojant jo indeksa
masyvas[2] = "Pakeistas" // const masyve irgi galima pakeisti, keiciamas ne visas masyvas, o jame esancio elemto turini

console.log(masyvas);
console.log(masyvas1);
console.log(masyvas2);
console.log(mas);

console.log(masyvas2[3]); // nurodomas masyvo antras elementas, [] skliaustuose nurodomas elemento indeksas
// masyve elementai turi savo indeksus, jie skaiciuojasi nuo 0

console.log(mas[3]); // atvaizduojamas masyve esantis masyvas

// Pasirinkti bet kokio masyvo paskutini elementa
let info1 = [1,2,3,4,5,6,7,8,9]; // skaiciu masyvas
let info2 = ['1','2','3','4','5','6','7','8']; //tekstiniu elementu (string) masyvas

console.log(info1.length); // nurodo masyvo info1 ilgi // 9 elementai bet indeksaas paskutis 8, nes skaiciuojasi nuo 0
console.log(info2.length); // 8 elemetai, bet indeksas paskutinis 7

console.log(info1[info1.length - 1]); // is masyvo ilgio atemus viena, gaunamas paskutinis masyvo elementas
console.log(info2[info2.length - 1]); 



let info3 = ['1','2','3','4','5','6','7','8',1,2,3,4,5,6,7,8,9];
// Kiekviena masyvo elementa isvesti atkirai i cosole log


// for (let i = 0; i <= 16; i++)   // galimas rasymas ir toks 
// for(let i = 0; i <= info3.lenght - 1; i++)

for (let i = 0; i < info3.length; i++) {
    console.log(i); // siuo staveju atvaizduoja masyvo indeksus (nuo 0 iki 16)
}

for (let i = 0; i < info3.length; i++) {
    //console.log(i);
    console.log(info3[i]); // siuo atveju atvaizduojami masyvo elementai atskirai
}

let skMasyvas = []; // neapibreztas masyvas, jis atmintyje yra, bet savo viduje nieko neturi
skMasyvas[0] = "Reiksme"; // idedami elemenatai su indeksu i masyva
skMasyvas[1] = "Reiksme1";
skMasyvas[10] = "Reiksme2" // Reiksme2 bus su 10 indeksu, masyvas bus is 10 elemtu, kiti indeksai bus tusti

console.log(skMasyvas);



// Isvesti n-zenklio skaiciaus visus skaitmenis atksirai ir surasti ju suma. 
// Kiekviena skaitmeni surasome i masyva




