"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keyof_d_1 = require("./keyof-d");
let props = { a: 1, b: 2, c: 3, d: 4 };
let prop = (0, keyof_d_1.getProperty)(props, "a");
(0, keyof_d_1.getProperty)(props, "b");
console.log(prop);
//# sourceMappingURL=keyof.js.map