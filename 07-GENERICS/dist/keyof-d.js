"use strict";
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// KEYOF ###
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProperty = void 0;
// index type query operator
// für jeden Typ T, `keyof T` ist Union von bekannten, öffentlichen Eigenschaftsnamen von T
function getProperty(obj, key) {
    return obj[key];
}
exports.getProperty = getProperty;
let carPropsUnion; // the union of ('manufacturer' | 'model' | 'year')
let bmw = { manufacturer: "Bay Motorenwerke", model: "320i", year: 1985 };
let year = getProperty(bmw, "year");
year = bmw.year;
// todo #31 -->
//# sourceMappingURL=keyof-d.js.map