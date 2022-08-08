function zeigeNumber() {
    let dezimaleZahl: number = 1111;
    let str: string = String(dezimaleZahl);
    document.getElementById("output1").textContent =  str;
    // um diese Fehlermeldung zu beseitigen: Ausrufezeichen entfernt null-Wert und undefined von einem unions-Type
    // document.getElementById("output1")!.textContent =  str;
    let hexadezimaleZahl: number = 0x1111;
    let binäreZahl: number = 0b1111;
    let oktaleZahl: number = 0o111;
    let kommaZahl: number = 1.111;
    let bigNumber: Number; 
    // let myBigInt: bigint = 3333n; // only ES2020 or esnext
    // let myBigInt: bigint = BigInt(44); // Fehler
}

function zeigeString() {
    let myDoubleQuotesString: string = "bla";
    let mySingleQuotesString: string = 'blu';
    let myTemplateString: string = `bli 
    ${ myDoubleQuotesString }`;
    let myNumber: number = 3;
    let testCompatibility: string = `string ${myNumber}`;
    let bigString: String = "adf";
}

/* exponentiaton operator, #v1.7+  */

const cube = (x: number) => x**3;

let myNull: null;
// hat nur einen Wert: null
// myNull = undefined;

let myUndefined: undefined;
// hat nur einen Wert: undefined
// myUndefined = null;

let r: number = myUndefined || 4; // || heißen terser operators

let myObject: object;

let myObject2: Object;


// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
// diesen Satz prüfen!



