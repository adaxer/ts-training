// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
// ### ARRAYS ###
// Literale

let names: string[] = ['Anna', 'Bernhard', 'Caro'];
let amounts: number[] = [3, 10, 23];
let list: any[] = [1, true, "free"];
// alternative with generic array type
let names2: Array<string> = ['Anna', 'Bernhard', 'Caro'];

// Kopien erstellen in neueren ES-Versionen : mit spread
console.info('KOPIEN VOM ARRAY ERSTELLEN: SPREAD')
// spread ... 
let rw = [...list]
console.log('rw : ', rw);


// Kopien erstellen in älteren ES-Versionen: mit slice()


// Array-ähnliche Konstrukte in ein Array umwandeln (getestet nur in js)
        /* HTML COLLECTION TO ARRAY: */
        console.log('document.images :', document.images);  
        // const allImg = [...document.images];
        // console.log('allImg :', allImg); // jetzt ist es ein array
        // const lastFive = document.images.slice(4,9)
        // console.log('lastFive :', lastFive);

// js Variante
const myArray1 = [1, 2, 3];
// myArray1[1] = ['s']; // Arrays in TS können nur einen Datentyp beinhalten

// will man ein Array aus verschiedenen Types haben:
const myArr: any[] = [1, 'g', true];

// ts Variante 1
const myArray2: number[] = [4, 5, 6];

// ts Variante 2
const myArray3: Array<number> = [7, 8, 9];

let state: ReadonlyArray<string>;
// Das array ist readonly weil die Index-Eigenschaft readonly ist
// interface ReadonlyArray<T> {
//     readonly length: number;
//     // ...
//     readonly [n: number]: T;
//   }
// https://mariusschulz.com/blog/read-only-properties-in-typescript