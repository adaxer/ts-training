import { Stack } from "./stack";

let stack: Stack<number> = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3,4);
stack.push(5);

console.log(stack.peek());

while(stack.length > 0) {
    console.log(stack.pop())
}