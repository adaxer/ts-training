function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}

doSomething("hello");
doSomething(null);

let n: number | null = 1;
liveDangerously(n);
liveDangerously(null);