// 1. 함수 표현식

function funcA() {
    console.log("funcA");
}

// 선언된 함수 자체를 호출하지 않고 변수로 담아둘 수도 있음
let varA = funcA;

console.log(varA);

// 같은 원리로 만들자마자 담는 것도 가능함 = 함수 표현식
// -> 값으로서 취급받기 때문에 호이스팅의 대상이 되지 않음
// -> 콜백 함수 등 유용하게 사용할 수 있음
let varB = function funcB() {
    console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = function() {
    return 1;
}

let varD = () => {
    return 2;
}

console.log(varC);
console.log(varC());
console.log(varD);
console.log(varD());

let varE = (value) => {
    console.log(value);
    return value + 1;
}

varE(50);
