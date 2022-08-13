// union type & assertion
interface Bird {
  fly(): void;
  layEggs(): void;
}  
interface Fish {
  swim(): void;
  layEggs(): void;
}  
function getSmallPet(): Fish | Bird {
  // ...
  let smallPet: Fish | Bird = {swim: () => {}, layEggs: () => {}}
  let otherPet: Bird = {fly: () => {}, layEggs: () => {}};
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

if ((newPet as Fish).swim) {
  (newPet as Fish).swim();
} else if ((newPet as Bird).fly) {
  (newPet as Bird).fly();
}


// wie man sieht, type assertion sollte mehrmals genutzt werden. 
// stattdessen kann man einen Type-Guard schreiben
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
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

function move(pet: Fish | Bird) {
  if ("swim" in pet) {
      return pet.swim();
  }
  return pet.fly();
}

move(newPet);




function isNumberArray(value: unknown): value is number[] {
    return (
      Array.isArray(value) &&
      value.every(element => typeof element === "number")
    );
  }

  const unknownValue: unknown = [15, 23, 8, 4, 42, 16];

if (isNumberArray(unknownValue)) {
  // Within this branch, `unknownValue` has type `number[]`,
  // so we can spread the numbers as arguments to `Math.max`
  const max = Math.max(...unknownValue);
  console.log(max);
}