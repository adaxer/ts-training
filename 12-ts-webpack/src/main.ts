import add from './add';

const result = add(4, 50);
const output = document.querySelector('#output');
let otherOutput = document.getElementById("output") as HTMLSpanElement;
console.log(output, otherOutput.id);

if (output) {
    output.innerHTML = result.toString();
}