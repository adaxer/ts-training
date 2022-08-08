// typeof type guards #
// Let’s go back and write the code for the version of padLeft that uses union types. We could write it with type predicates as follows:

function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
// However, having to define a function to figure out if a type is a primitive is kind of a pain. Luckily, you don’t need to abstract typeof x === "number" into its own function because TypeScript will recognize it as a type guard on its own. That means we could just write these checks inline.

function padLeft1(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
// These typeof type guards are recognized in two different forms: typeof v === "typename" and typeof v !== "typename", where "typename" must be "number", "string", "boolean", or "symbol". While TypeScript won’t stop you from comparing to other strings, the language won’t recognize those expressions as type guards.

// instanceof type guards #
// If you’ve read about typeof type guards and are familiar with the instanceof operator in JavaScript, you probably have some idea of what this section is about.

// instanceof type guards are a way of narrowing types using their constructor function. For instance, let’s borrow our industrial string-padder example from earlier:

interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
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
let padder: Padder = getRandomPadder();

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