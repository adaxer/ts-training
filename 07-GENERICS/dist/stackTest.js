"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("./stack");
let stack = new stack_1.Stack();
stack.push(1);
stack.push(2);
stack.push(3, 4);
stack.push(5);
console.log(stack.peek());
while (stack.length > 0) {
    console.log(stack.pop());
}
//# sourceMappingURL=stackTest.js.map