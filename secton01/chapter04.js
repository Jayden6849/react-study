console.log("chapter 4");

// 1. 변수 선언 및 초기화
let age = 27;
console.log("나이: "+age+"세");
age += 1;
console.log("1년 후 나이: "+age+"세");

// 2. 상수 선언 및 초기화 :: 상수는 반드시 선언과 동시에 초기화해야함
const name = "Jayden";
console.log("이름: "+name);

// 3. 변수 및 상수 네이밍 규칙
/* 
    3-1. $, _ 제외한 기호를 사용할 수 없다.
    3-2. 숫자로 시작할 수 없다.
    3-3. 예약어를 사용할 수 없다. (예약어: let, const 처럼 이미 의미를 가진 단어)
*/

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;