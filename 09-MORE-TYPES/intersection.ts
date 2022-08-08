// Example 1

interface Destroyable {
    destroy(): void;
}

interface Lengthable {
    readonly length: number;
}

function destroyIfTooLong(obj: Destroyable & Lengthable): void { // INTERSECTION
    if (obj.length > 1000) {
        obj.destroy();
    }
}



// An intersection type combines multiple types into one. 
// This allows you to add together existing types to get a single type that has all the features you need. 
// For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. 
// That means an object of this type will have all members of all three types.
// You will mostly see intersection types used for mixins and other concepts that don’t fit in the classic object-oriented mold. 
// (There are a lot of these in JavaScript!) 
// Here’s a simple example that shows how to create a mixin:

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
// Das Beispiel ist zu kompliziert

type IntersectionType1 = unknown & null;       // null
type IntersectionType2 = unknown & undefined;  // undefined
type IntersectionType3 = unknown & string;     // string
type IntersectionType4 = unknown & number[];   // number[]
type IntersectionType5 = unknown & any;        // any

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type

// types with &

type T00 = unknown & null; // null