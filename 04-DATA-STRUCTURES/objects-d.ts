// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
// ### OBJECT ###

// Beispiele:
function getPerson(): {name: string, age: number} {
    // create person
    let person = {name: 'Max', age: 35}
    return person
}

let person: {name: string, age: number} = getPerson();
console.log(p.age);