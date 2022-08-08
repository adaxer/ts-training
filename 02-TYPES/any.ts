// =====================================================
// === ANY ===
console.log('\n=== ANY ===')

let myAny: any
myAny = 4
console.log('typeof myAny', typeof myAny) // number
// TYPECHECKING IST BEI ANY AUSGESCHALTET: ANY AKZEPTIERT ALLE WERTE
myAny = '4' 
console.log('typeof myAny', typeof myAny) // string, also any-Variable ist flexibel, Datentyp wird ermittelt bei jeder neuen Zuweisung

let myString1: string = 'wert2 von string'
// TYPECHECKING IST BEI ANY AUSGESCHALTET: ANDERE DATENTYPEN AKZEPTIEREN DIE WERTE VON EINER ANY-VARIABLE
// ABER DER WERT VON DER VARIABLE LINKS VOM ZUWEISUNGOPERATOR WIRD ANGEPASST!
myString1 = myAny

myAny = 5
myString1 = myAny
console.log('myString', myString1) //number
console.log('typeof myString', typeof myString1) //number
// MYSTRING FUNKTIONIERT JETZT AUCH WIE ANY UND NIMMT WERTE VON VERSCHIEDENEN DATENTYPEN AN
myString1 = ' text nach einer Number-Zuweisung' 


function zeigeAny() {
    let value: any;

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

value.foo.bar;  // OK
value.trim();   // OK
value();        // OK
new value();    // OK
value[0][1];    // OK

let str1: string = value; // OK

}