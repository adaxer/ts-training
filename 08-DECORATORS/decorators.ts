// Klassen Dekorator

function setIdTo100(target: Function) { // Klassen sind im kompiliertem Code Funktionen
    target.prototype.id = 100
  }
  
  @setIdTo100
  class TestClass {
    id!: number;
  }
  
  console.log(new TestClass().id)





function Component(options: { id: string }) {
  return function (target: Function & typeof TestClass1) { // so ein Datentyp, weil elementId statisch ist, hat der Autor gemeint
    target.elementId = options.id;
  };
}

// Methoden Dekorator
function MethodTest(
  target: Object, // Prototypkette vom TestObjekt
propertyKey: string, // Name der Funktion (warum nicht vom Typ PropertyKey - dieses ist in TS mit dabei)
propertyDescriptor: PropertyDescriptor // Beschreibung der Methode
) {
  console.log("Target: ", target);
  console.log("propertyKey: ", propertyKey);
  propertyDescriptor.value  = // value - die eigentliche Funktion, diese wollen wir überschreiben
  function (...args: any[]) {
    // zum testen, dass es überhaupt funktioniert
    return `args vom Dekorator: ${args}`; // args - Parameter beim Aufrufen vom Dekorator

  }
}


// Prop Dekorator
// hier werden getter und setter hinzugefügt
function Prop(target: Object, propertyName: string) {
  let value: number;
  const getter = () => {
    console.log('Getting value ...');
    return value;
  };
  const setter = (newVal: number) => {
    console.log(`Setting value to ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter
  });
}

// Param Dekor
// Index von Param wird ausgegeben
function Param(_target: Object, propertyName: string, index: number) {
  console.log(propertyName, index);
}


@Component({
  id: 'neu gesetzte id'
})
class TestClass1 {  
  static elementId: string;

  @Prop // wird aufgerufen, wenn diese Eigenschaft gesetzt wird
  id: string | undefined;

  @MethodTest
  printId(@Param prefix: string = ''): string {
    return prefix + this.id;
  }
}

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
