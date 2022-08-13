"use strict";
function login(event) {
    let input = document.getElementById("input");
    console.log(input.value);
    console.log("Input ist ", typeof input.value);
    document.getElementById("output").innerHTML = `Hello ${input.value}!`;
    let output = document.getElementById("output");
}
//# sourceMappingURL=login.js.map