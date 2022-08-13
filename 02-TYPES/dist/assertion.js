"use strict";
function zeigeAssertion() {
    const value1 = "Hello World";
    const someString1 = value1;
    console.log(someString1.toUpperCase()); // "HELLO WORLD", also ok
    const value2 = 42;
    const someString2 = value2;
    console.log(someString2.toUpperCase()); // Fehler, erst zur Laufzeit
}
zeigeAssertion();
// The two samples are equivalent. Using one over the other is mostly a choice of preference; 
// however, when using TypeScript with JSX, only as-style assertions are allowed.
//# sourceMappingURL=assertion.js.map