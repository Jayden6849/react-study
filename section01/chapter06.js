// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = "20";
const result = num + str;

console.log(result);    // num 이 자동으로 String 으로 형변환 됨

// 2. 명시적 형변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형변환을 명시

// 문자 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2);

// 숫자 -> 문자
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");