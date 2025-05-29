// 배열 : 값을 순차적으로 담을 수 있는 자료형

// 1. 배열의 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 이런 방식을 활용하게 됨)

let arrC = [1,2,3,4, true];

// 2. 배열에 접근 (index 로 직접 접근 가능)
let item1 = arrC[0];
let item2 = arrC[4];

console.log(item1, item2);

arrC[0] = "hello";
console.log(arrC[0]);