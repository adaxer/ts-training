"use strict";
// Klassen Dekorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function setIdTo100(target) {
    target.prototype.id = 100;
}
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    TestClass = __decorate([
        setIdTo100
    ], TestClass);
    return TestClass;
}());
console.log(new TestClass().id);
function Component(options) {
    return function (target) {
        target.elementId = options.id;
    };
}
// Methoden Dekorator
function MethodTest(target, // Prototypkette vom TestObjekt
propertyKey, // Name der Funktion (warum nicht vom Typ PropertyKey - dieses ist in TS mit dabei)
propertyDescriptor // Beschreibung der Methode
) {
    console.log("Target: ", target);
    console.log("propertyKey: ", propertyKey);
    propertyDescriptor.value = // value - die eigentliche Funktion, diese wollen wir überschreiben
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // zum testen, dass es überhaupt funktioniert
            return "args vom Dekorator: ".concat(args); // args - Parameter beim Aufrufen vom Dekorator
        };
}
// Prop Dekorator
// hier werden getter und setter hinzugefügt
function Prop(target, propertyName) {
    var value;
    var getter = function () {
        console.log('Getting value ...');
        return value;
    };
    var setter = function (newVal) {
        console.log("Setting value to ".concat(newVal));
        value = newVal;
    };
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter
    });
}
// Param Dekor
// Index von Param wird ausgegeben
function Param(_target, propertyName, index) {
    console.log(propertyName, index);
}
var TestClass1 = /** @class */ (function () {
    function TestClass1() {
    }
    TestClass1.prototype.printId = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return prefix + this.id;
    };
    __decorate([
        Prop // wird aufgerufen, wenn diese Eigenschaft gesetzt wird
    ], TestClass1.prototype, "id", void 0);
    __decorate([
        MethodTest,
        __param(0, Param)
    ], TestClass1.prototype, "printId", null);
    TestClass1 = __decorate([
        Component({
            id: 'neu gesetzte id'
        })
    ], TestClass1);
    return TestClass1;
}());
console.log(new TestClass1().printId('WertFürArgs'));
console.log(TestClass1.elementId);
// CACHE-DECORATOR
// Hypothetischer cache-Decorator,
// der die Resultate eines Funktionsaufrufs speichert
// import { cache } from 'cache.js';
// @cache
// function getResults() {
//   return this.results;
// }
//# sourceMappingURL=decorators.js.map