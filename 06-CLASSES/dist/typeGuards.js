"use strict";
// typeof type guards #
// Let’s go back and write the code for the version of padLeft that uses union types. We could write it with type predicates as follows:
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
// However, having to define a function to figure out if a type is a primitive is kind of a pain. Luckily, you don’t need to abstract typeof x === "number" into its own function because TypeScript will recognize it as a type guard on its own. That means we could just write these checks inline.
function padLeft1(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
// Type is 'SpaceRepeatingPadder | StringPadder'
let padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // type narrowed to 'StringPadder'
}
// The right side of the instanceof needs to be a constructor function, and TypeScript will narrow down to:
// the type of the function’s prototype property if its type is not any
// the union of types returned by that type’s construct signatures
// in that order
//# sourceMappingURL=typeGuards.js.map