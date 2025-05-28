// 1. null 병합 연산자 (??)
// -> 존재하는 값을 추려내는 기능
// -> null, undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;    // 둘다 null, undefined 가 아니면 앞에껄 반환함
console.log(var4, var5, var6);

// 실제 사용 형태 :: 이름이 없으면 닉네임을 표기해주세요.
let userName = "Jayden";
let userNickName = "Jayden6849";

let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
let var7 = 1;
var7 = "Hello";

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 이용하는 연산자
let var8 = 10;

// 요구사항 : 변수 res에 변수 var8의 값이 짝수 -> "짝" // 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
