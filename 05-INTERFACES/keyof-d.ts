// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// KEYOF ###

// index type query operator
// für jeden Typ T, `keyof T` ist Union von bekannten, öffentlichen Eigenschaftsnamen von T

interface Car {
manufacturer: string;
model: string;
year: number;
}
let carPropsUnion: keyof Car; // the union of ('manufacturer' | 'model' | 'year')

// todo #31 -->