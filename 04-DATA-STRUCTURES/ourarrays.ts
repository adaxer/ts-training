interface IPerson {
    name: string;
    age: number;
}

let numbers: number[] = [1,2,3];

numbers.push(4,5,6);

numbers.forEach(n=>console.log(n));

let dynamic: any = { name:"Hans", age: 35};
dynamic.lastName = "Maier";

let myself: IPerson = dynamic;
let xx:any = dynamic.lastName;
console.log(myself);

let myName: string = "Andreas";

let myOtherName: String = "Alexander";

console.log(typeof myName, typeof myOtherName);