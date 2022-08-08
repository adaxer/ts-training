/* https://mariusschulz.com/blog/the-unknown-type-in-typescript */

function zeigeUnknown() {
    let value: unknown;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK
// value = Symbol("type");   // OK

let value1: unknown = value;   // OK
let value2: any = value;       // OK
// let value3: boolean = value;   // Error
// let value4: number = value;    // Error
// let value5: string = value;    // Error
// let value6: object = value;    // Error
// let value7: any[] = value;     // Error
// let value8: Function = value;  // Error

// value.foo.bar;  // Error
// value.trim();   // Error
// value();        // Error
// new value();    // Error
// value[0][1];    // Error

}

// possible operators with unknown variables:
// only (in)equality operators:
// ===
// ==
// !==
// !=

// =====================================================
// VOID

// -----------------------------------------------------
// void + andere Typen:

let myVoid: void
let myString: string = 'lorem'

console.log('typeof (myVoid + myString) :>> ', typeof (myVoid + myString)); // string
// Also: void + string => string

//
//
// =====================================================
// NEVER

// -----------------------------------------------------
// never + andere Typen:

let myNever: never
let myString2: string = 'ipsum'

// console.log('typeof (myNever + myString2) :>> ', typeof (myNever + myString2)); // Variable 'myNever' is used before being assigned.ts(2454)

let myVoid1: void;
// dieser Datentyp hat keinen eigenen Wert.
// aber er kann undefined akzeptieren
myVoid = undefined;
// kein praktischer Nutzen von void-Variablen. Nützlich ist dieser Datentyp bei Funktionen


let myNever1: never;
// never hat keinen eigenen Wert und kann auch keinen anderen bekommen
// myNever1 = undefined; // Fehler

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
