// 배열의 요소 조작 메서드 : 6가지 

// 1. push
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(newLength, arr1);

// 2. pop
// -> 배열의 맨 뒤에 있는 요소를 제거하고 반환하는 메서드
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem, arr2);

// 3. shift
// -> 배열의 맨 앞에 있는 요소를 제외하는 메서드
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

// 4. unshift
// -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4);

// 주의할 점 : 배열의 특성때문에 push, pop 보다 shift, unshift 의 속도가 느림

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환하는 메서드
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 3, 4, 5 를 잘라서 추출
let sliced2 = arr5.slice(3);
let sliced3 = arr5.slice(-3);
console.log(sliced);
console.log(arr5);
console.log(sliced2);
console.log(sliced3);

// 주의할 점 : 원본이 잘리는게 아니라 잘린 배열이 복사되는 형태임에 주의

// 6. concat
// 서로 다른 배열을 이어붙여서 새로운 배열을 반환하는 메서드
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);