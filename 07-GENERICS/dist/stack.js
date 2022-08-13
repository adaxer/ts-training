"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor(iterable = []) {
        this.pop = () => this.items.pop();
        this.push = (...items) => this.items.push(...items);
        this.peek = () => this.length == 0
            ? undefined
            : this.items[this.length - 1];
        this.items = [...iterable];
    }
    get length() {
        return this.items.length;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map