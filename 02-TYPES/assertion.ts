function zeigeAssertion() {
    const value1: unknown = "Hello World";
const someString1: string = value1 as string;
console.log(someString1.toUpperCase());  // "HELLO WORLD", also ok

const value2: unknown = 42;
const someString2: string = value2 as string;
console.log(someString2.toUpperCase());  // Fehler, erst zur Laufzeit
}

zeigeAssertion();






// The two samples are equivalent. Using one over the other is mostly a choice of preference; 
// however, when using TypeScript with JSX, only as-style assertions are allowed.