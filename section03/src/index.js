// Common JS 활용하여 가져다 씀씀
// const moduleData = require("./math");

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

// ES
// default 선언된 대표값은 이름을 바꿔서 가져올 수 있음
import mod, {add, sub, multiply, divide} from "./math.js";

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(multiply(1,2));
// console.log(divide(1,2));
// console.log(mod(1,2));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
