import { getProperty } from './keyof-d';

let props = { a: 1, b: 2, c: 3, d: 4 };

let prop = getProperty(props, "a");
getProperty(props, "b");

console.log(prop);
