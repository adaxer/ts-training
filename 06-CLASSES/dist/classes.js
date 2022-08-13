"use strict";
class MyClass {
}
// Here's a Circle class with a read-only radius property and a gettable area property, which is implicitly read-only because there's no setter
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
}
let vadzim = { name: "Vadzim", age: 36 };
vadzim.name = "Max";
// 2 
// wie kann ich den Customer unveränderbar machen?
// vllt mit const?
const martin = { name: "Martin", age: 40 };
martin.name = "Max"; // trotz const ist es möglich
const paula = { name: "Paula", age: 30 };
// paula.name = "Maria"; //
// aber was mit dem Fall, wenn das Initialvalue evtl in mehreren Methoden eingefügt werden kann
let marta;
marta = { name: "Marta", age: 20 };
// marta.name = "Monika";
//# sourceMappingURL=classes.js.map