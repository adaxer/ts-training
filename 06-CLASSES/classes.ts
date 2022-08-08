class MyClass {
    // let variable: number; // Fehler: Unexpected token. A constructor, method, accessor, or property was expected.ts(1068)
    // const konstante: number = 1; // Fehler: A class member cannot have the 'const' keyword.ts(1248)
    // var variable2: number; // Fehler: Unexpected token. A constructor, method, accessor, or property was expected.ts(1068)
}

// Here's a Circle class with a read-only radius property and a gettable area property, which is implicitly read-only because there's no setter
class Circle {
    readonly radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    get area() {
      return Math.PI * this.radius ** 2;
    }
  }



// 1
interface Customer {
    name: string;
    age: number;
}
let vadzim: Customer = {name: "Vadzim", age: 36};
vadzim.name = "Max";

// 2 
// wie kann ich den Customer unveränderbar machen?
// vllt mit const?

const martin: Customer = {name: "Martin", age: 40};
martin.name = "Max"; // trotz const ist es möglich

// 3
// vllt mit Readonly?
interface ReadonlyCustomer {
    readonly name: string;
    readonly age: number;    
}
const paula: ReadonlyCustomer = {name: "Paula", age: 30};
// paula.name = "Maria"; //
// aber was mit dem Fall, wenn das Initialvalue evtl in mehreren Methoden eingefügt werden kann

let marta: ReadonlyCustomer;
marta = {name: "Marta", age: 20};
// marta.name = "Monika";