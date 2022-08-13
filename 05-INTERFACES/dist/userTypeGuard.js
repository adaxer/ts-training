"use strict";
function getSmallPet() {
    // ...
    let smallPet = { swim: () => { }, layEggs: () => { } };
    let otherPet = { fly: () => { }, layEggs: () => { } };
    return otherPet;
}
// you can only access members that are guaranteed to be in all the constituents of a union type.
// Beispiel überarbeiten
let newPet = getSmallPet();
// Each of these property accesses will cause an error
// if (newPet.swim) {
//   newPet.swim();
// }
// else if (newPet.fly) {
//   newPet.fly();
// }
// To get the same code working, we’ll need to use a type assertion:
if (newPet.swim) {
    newPet.swim();
}
else if (newPet.fly) {
    newPet.fly();
}
// wie man sieht, type assertion sollte mehrmals genutzt werden. 
// stattdessen kann man einen Type-Guard schreiben
function isFish(pet) {
    return pet.swim !== undefined;
}
// pet is Fish is our type predicate in this example. 
// A predicate takes the form parameterName is Type, 
// where parameterName must be the name of a parameter from the current function signature.
// Both calls to 'swim' and 'fly' are now okay.
if (isFish(newPet)) {
    newPet.swim();
}
else {
    newPet.fly();
}
// Using the in operator #
// The in operator now acts as a narrowing expression for types.
// For a n in x expression, where n is a string literal or string literal type and x is a union type, the “true” branch narrows to types which have an optional or required property n, and the “false” branch narrows to types which have an optional or missing property n.
function move(pet) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
move(newPet);
function isNumberArray(value) {
    return (Array.isArray(value) &&
        value.every(element => typeof element === "number"));
}
const unknownValue = [15, 23, 8, 4, 42, 16];
if (isNumberArray(unknownValue)) {
    // Within this branch, `unknownValue` has type `number[]`,
    // so we can spread the numbers as arguments to `Math.max`
    const max = Math.max(...unknownValue);
    console.log(max);
}
//# sourceMappingURL=userTypeGuard.js.map