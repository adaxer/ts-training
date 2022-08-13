function listParams(...args: any): void {
    console.log(args.length);
    for (var element of args) {
        console.log("Arg ", element, " is ", typeof element);
    };
}

listParams(1, "zwei", listParams, true, new Object());

function printElement(element: any, printFunction: (p: any) => void, errorFunction: (p: Error) => void) {
    // Process element
    if (element) {
        printFunction(element);
    } else {
        errorFunction(new Error("element must not be empty"));
    }
}

function showError(error: Error) {
    console.log("Error!!: ", error);
}

printElement("Hello", s => console.log(s), showError)
printElement("", s => console.log(s), showError)
printElement(null, s => console.log(s), e => showError(e))


console.log();