"use strict";
let numbers = [1, 2, 3];
numbers.push(4, 5, 6);
numbers.forEach(n => console.log(n));
let dynamic = { name: "Hans", age: 35 };
dynamic.lastName = "Maier";
let myself = dynamic;
let xx = dynamic.lastName;
console.log(myself);
let myName = "Andreas";
let myOtherName = "Alexander";
console.log(typeof myName, typeof myOtherName);
//# sourceMappingURL=ourarrays.js.map