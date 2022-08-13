"use strict";
// es geht um null-Option und undefined-Option
// Variablen / Ausdrücke oder Props mit dem `!` - definite assignment assertion of prop
// -//- mit dem `?` - undefined type of prop 
function getSmallPet() {
    // ...
}
let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim(); // errors
/* union types & control flow based type analysis */
function composeCommand(command) {
    if (typeof command === "string") {
        return command;
    }
    return command.join(" ");
}
/* String Literal Type & Union Type */
// https://mariusschulz.com/blog/string-literal-types-in-typescript
/* tagged union type */
// https://mariusschulz.com/blog/tagged-union-types-in-typescript
//# sourceMappingURL=unions-demo.js.map