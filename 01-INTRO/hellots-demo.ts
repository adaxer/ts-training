function giveAge(geburtsjahr: number): number {
    return (new Date().getFullYear()) - geburtsjahr;
}

let gebJahr: number = 1984;
/* Beachte: wie streng TS auf die Datentypen achtet */
document.getElementsByTagName("span")[0].textContent! += String(giveAge(gebJahr));

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Mensch {
    firstName: string;
    lastName: string;
}
function greeter(person: Mensch): string {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user)


// VORTEILE GEGENÜBER JAVASCRIPT
// http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// 1.
// +++folder ts5min
// npm i -g typescript
// // wenn Permission-Fehler, dann ohne -g oder PowerShell als Administrator ausführen

// 2.
// +++greeter.ts
// function greeter(person) {
//     return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.textContent = greeter(user);

// 3.
// ***terminal
// tsc greeter.ts

// 4.
// PROBLEMS:
// greeter.ts 1, 10
// Duplicate function implementation.ts(2393)
// greeter.ts 4, 5
// Cannot redeclare block-scoped variable 'user'.ts(2451)

// Das bedeutet, die JS-Datei wird zuerst ausgelesen. (Nur weil sie alphabetisch oben steht??)

// LOESUNG:
// tsc --init

// 5.
// adding type annotations & checking the advantage
// ***greeter.ts
// function greeter(person: string) {
//     return "Hello, " + person;
// }
// let user = [0, 1, 2];
// document.body.textContent = greeter(user); // error here: type mismatch 

// 6. 
// removing arguments to the greeter call
// ***greeter.ts
// ...
// document.body.textContent = greeter(); // error: Expected 1 arguments, but got 0

// 7. 
// interfaces
// In TypeScript, two types are compatible if their internal structure is compatible. 
// This allows us to implement an interface just by having the shape the interface 
// requires, without an explicit _implements_ clause.
// ***greeter.ts
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = { firstName: "Max", lastName: "Mustermann"};
// document.body.textContent = greeter(user);

// 8.
// classes
// funktion greeter ist für Typ Person geschrieben. 
// Trotzdem arbeitet sie auch mit der Klasse.
// ***greeter.ts
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = new Student("Max", "M.", "Mustermann");
// document.body.textContent = greeter(user);

// 10.
// running the greeter app
// +++greeter.html
// <!DOCTYPE html>
// <html>
//     <head><title>TypeScript Greeter</title></head>
//     <body>
//         <script src="greeter.js"></script>
//     </body>
// </html>
