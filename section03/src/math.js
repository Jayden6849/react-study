// math 모듈

function add(a, b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

// CJS 방식 : 밖에서 쓸 수 있도록 내보냄
// module.exports = {
//     add: add,
//     sub: sub,
// }

// ESM 방식
export {add, sub};

export function multiply(a,b) {
    return a*b;
}

export function divide(a,b) {
    return a/b;
}

export default function modular(a,b) {
    return a%b;
}