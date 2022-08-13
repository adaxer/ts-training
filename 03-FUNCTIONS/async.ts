
async function wait(ms: number) {
    console.log("Warte ", ms, " ms");
    await new Promise(f => setTimeout(f, ms));
    // console.log("Zeit ist fast um");
    // await new Promise(f => setTimeout(f, 1000));
    console.log("Zeit ist ganz um");
}

async function timer() {
    let counter=0;
    while(true) {
        await wait(1000);
        document.getElementById("output")!.innerHTML = (++counter).toString();
    }
}

timer();

console.log("Rufe async Funktion");
wait(5000);
console.log("async Funktion wurde gerufen");


