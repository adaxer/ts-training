let person1: {name: string, age: number} = getPerson();
console.log(person1.age);
// oder
interface Person {
  name: string,
  age: number
}
let p: Person = getPerson();


/* https://mariusschulz.com/blog/read-only-properties-in-typescript */
interface Todo {
  readonly text: string;
  readonly done: boolean;
}

/* Schau jetzt in die js-Datei rein. Du findest jetzt dort noch nichts.
Klassen werden zu Funktionen überführt.
Interfaces aber nicht. Sie werden als Datentypen in TS genutzt. */