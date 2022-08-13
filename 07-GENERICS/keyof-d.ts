// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// KEYOF ###

// index type query operator
// für jeden Typ T, `keyof T` ist Union von bekannten, öffentlichen Eigenschaftsnamen von T

export function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }


interface Car {
manufacturer: string;
model: string;
year: number;
}
let carPropsUnion: keyof Car; // the union of ('manufacturer' | 'model' | 'year')

let bmw: Car = {manufacturer: "Bay Motorenwerke", model: "320i", year: 1985}
let year = getProperty(bmw, "year");
year = bmw.year;

// todo #31 -->