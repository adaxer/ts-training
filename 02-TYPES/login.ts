function login(event: any) {
    let input: HTMLInputElement = document.getElementById("input") as HTMLInputElement;
    console.log(input.value);
    console.log("Input ist ", typeof input.value)

    document.getElementById("output")!.innerHTML= `Hello ${input.value}!`
    let output: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("output")
}