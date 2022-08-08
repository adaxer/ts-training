enum Pizzagröße {klein, mittel, groß, family};

// enum member names are string-constants

let g: Pizzagröße = Pizzagröße.mittel;

enum Besteck {Gabel=1, Messer=2, Teelöffel=4, Suppenlöffel=7, Brotmesser=10};
let besteck1: Besteck = 1 as Besteck;
let besteck2: string = Besteck[4];

console.log(besteck2);
// Welche 2 Besteckteile liegen auf dem Tisch bei einer 8?

// Kommazahlen als Index auch möglich

