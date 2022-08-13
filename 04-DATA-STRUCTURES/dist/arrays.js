"use strict";
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
// ### ARRAYS ###
// Literale
let names = ['Anna', 'Bernhard', 'Caro'];
let amounts = [3, 10, 23];
let list = [1, true, "free"];
// alternative with generic array type
let names2 = ['Anna', 'Bernhard', 'Caro'];
// Kopien erstellen in neueren ES-Versionen : mit spread
console.info('KOPIEN VOM ARRAY ERSTELLEN: SPREAD');
// spread ... 
let rw = [...list];
console.log('rw : ', rw);
// Kopien erstellen in älteren ES-Versionen: mit slice()
// Array-ähnliche Konstrukte in ein Array umwandeln (getestet nur in js)
/* HTML COLLECTION TO ARRAY: */
//console.log('document.images :', document.images);  
// const allImg = [...document.images];
// console.log('allImg :', allImg); // jetzt ist es ein array
// const lastFive = document.images.slice(4,9)
// console.log('lastFive :', lastFive);
// js Variante
const myArray1 = [1, 2, 3];
// myArray1[1] = ['s']; // Arrays in TS können nur einen Datentyp beinhalten
// will man ein Array aus verschiedenen Types haben:
const myArr = [1, 'g', true];
// ts Variante 1
const myArray2 = [4, 5, 6];
// ts Variante 2
const myArray3 = [7, 8, 9];
let state;
// Das array ist readonly weil die Index-Eigenschaft readonly ist
// interface ReadonlyArray<T> {
//     readonly length: number;
//     // ...
//     readonly [n: number]: T;
//   }
// https://mariusschulz.com/blog/read-only-properties-in-typescript
console.log(typeof amounts);
console.log(amounts instanceof Object);
//# sourceMappingURL=arrays.js.map