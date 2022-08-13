"use strict";
let athervar;
console.log();
function zeigeNumber() {
    let dezimaleZahl = 1111;
    let str = String(dezimaleZahl);
    // document.getElementById("output1").textContent =  str;
    // um diese Fehlermeldung zu beseitigen: Ausrufezeichen entfernt null-Wert und undefined von einem unions-Type
    // document.getElementById("output1")!.textContent =  str;
    let hexadezimaleZahl = 0x1111;
    let binäreZahl = 0b1111;
    let oktaleZahl = 0o111;
    let kommaZahl = 1.111;
    let bigNumber;
    // let myBigInt: bigint = 3333n; // only ES2020 or esnext
    // let myBigInt: bigint = BigInt(44); // Fehler
}
function zeigeString() {
    let myDoubleQuotesString = "bla";
    let mySingleQuotesString = 'blu';
    let myTemplateString = `bli 
    ${myDoubleQuotesString}`;
    let myNumber = 3;
    let testCompatibility = `string ${myNumber}`;
    let bigString = "adf";
}
/* exponentiaton operator, #v1.7+  */
const cube = (x) => x ** 3;
let myNull;
// hat nur einen Wert: null
// myNull = undefined;
let myUndefined;
// hat nur einen Wert: undefined
// myUndefined = null;
let r = myUndefined || 4; // || heißen terser operators
let myObject;
let myObject2;
// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
// diesen Satz prüfen!
//# sourceMappingURL=primitives-demo.js.map