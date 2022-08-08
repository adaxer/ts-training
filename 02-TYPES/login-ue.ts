function login(): void {
    let u: string = (<HTMLInputElement> document.getElementById('user')!).value;
    document.getElementById('hi')!.textContent = "Hello " + u;
}