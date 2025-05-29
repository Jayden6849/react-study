// 스코프 (범위)
// -> 전역 스코프 = 전체 / 지역 스코프 = 특정 영역
// -> let, const, function 등을 사용하면 기본적으로 자바와 동일하지만, var 의 경우 호이스팅 때문에 undefined 를 자주 볼 수 있음 

let a = 1; // 전역 스코프

function funcA () {
    let b = 2;
    console.log(a);
}

funcA();
// console.log(b);