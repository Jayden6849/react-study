// 1. Spread 연산자
// -> Spread : 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

// 1, 4, 2, 5, 3, 6 을 만들고 싶은 것임
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2);

// 
let obj1 = {
    a: 1,
    b: 2,
    c: 3
};

let obj2 = {
    ... obj1,
    d: 4,
    e: 5,
    f: 6
};

console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수 = 나머지 매개변수 = 나머지이기 때문에 매개변수의 가장 마지막에 와야함
function funcB(...rest) {
    console.log(rest);
}

funcB(...arr1);