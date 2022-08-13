"use strict";
// Tuple types now permit a ? postfix on element types to indicate that the element is optional:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#optional-elements-in-tuple-types
// Example
let t;
t = [42, "hello", true];
t = [42, "hello"];
t = [42];
let x;
let customerId = 3;
let customerAddress = "Hauptstraße 1";
x = [customerId, customerAddress];
console.log('x[0] :>> ', x[0]);
console.log('x[1] :>> ', x[1]);
let p;
p = [5, 'fünf', false];
console.log("t is ", typeof t);
//# sourceMappingURL=tupel.js.map