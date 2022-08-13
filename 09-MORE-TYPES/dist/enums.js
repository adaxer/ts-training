"use strict";
var Pizzagröße;
(function (Pizzagröße) {
    Pizzagröße["klein"] = "klein";
    Pizzagröße["mittel"] = "mittel";
    Pizzagröße["gro\u00DF"] = "gro\u00DF";
    Pizzagröße["family"] = "family";
})(Pizzagröße || (Pizzagröße = {}));
;
// enum member names are string-constants
let g = Pizzagröße.mittel;
var Besteck;
(function (Besteck) {
    Besteck[Besteck["Gabel"] = 1] = "Gabel";
    Besteck[Besteck["Messer"] = 2] = "Messer";
    Besteck[Besteck["Teel\u00F6ffel"] = 4] = "Teel\u00F6ffel";
    Besteck[Besteck["Suppenl\u00F6ffel"] = 7] = "Suppenl\u00F6ffel";
    Besteck[Besteck["Brotmesser"] = 10] = "Brotmesser";
})(Besteck || (Besteck = {}));
;
let besteck1 = 1;
let gabel = Besteck[besteck1];
let besteck2 = Besteck[4];
let besteck4 = Besteck.Teelöffel;
console.log(besteck2);
console.log(besteck4);
// Welche 2 Besteckteile liegen auf dem Tisch bei einer 8?
let eight = Besteck[8];
console.log(eight);
let supl = Besteck["Suppenlöffel"];
console.log(supl);
// Kommazahlen als Index auch möglich
//# sourceMappingURL=enums.js.map