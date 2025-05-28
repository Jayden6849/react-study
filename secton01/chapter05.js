// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 양의 무한대
let mInF = -Infinity; // 음의 무한대

let nan = NaN;  // not a number

console.log(inf);
console.log(mInF);
console.log(nan);

// 2. String Type
let myName = "Jayden"; // JS 에서는 쌍따옴표, 홑따옴표 모두 가능
let myLocation = "서울";

let introduce = myName + ": " + myLocation;
console.log(introduce);

let introduceText = `${myName}은/는 ${myLocation}에 거주합니다.`;
console.log(introduceText);
/* 
    Template Literal 문법
    백틱(`)을 사용할 수도 있는데, 특이한 점은 ${myName} 변수를 동적으로 넣을 수 있게 됨
*/

// 3. Boolean Type
let isWsitchOn = true;
let isEmpty = false;

// 4. Null Type = 아무 것도 없음
let empty = null;
console.log(empty);

// 5. Undefined Type = 변수에 아무것도 할당되지 않음
let none;
console.log(none);