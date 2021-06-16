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
