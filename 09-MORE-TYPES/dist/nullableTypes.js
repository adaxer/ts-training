"use strict";
function doSomething(x) {
    if (x === null) {
        // do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
}
doSomething("hello");
doSomething(null);
let n = 1;
liveDangerously(n);
liveDangerously(null);
//# sourceMappingURL=nullableTypes.js.map