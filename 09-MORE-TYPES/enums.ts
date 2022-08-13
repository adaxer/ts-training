enum Pizzagröße {klein = "klein", mittel="mittel", groß="groß", family="family"};

// enum member names are string-constants

let g: Pizzagröße = Pizzagröße.mittel;

enum Besteck {Gabel=1, Messer=2, Teelöffel=4, Suppenlöffel=7, Brotmesser=10};
let besteck1: Besteck = 1 as Besteck;
let gabel = Besteck[besteck1];
let besteck2: string = Besteck[4];
let besteck4: Besteck = Besteck.Teelöffel;

console.log(besteck2);
console.log(besteck4);
// Welche 2 Besteckteile liegen auf dem Tisch bei einer 8?
let eight = Besteck[8];
console.log(eight);

let supl: Besteck=Besteck["Suppenlöffel"];
console.log(supl);

// Kommazahlen als Index auch möglich

