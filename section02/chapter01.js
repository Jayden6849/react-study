// 조건문을 간결하게 만들 수 있게 해주는 Truthy, Falsy

// 1. Falsy : 거짓으로 간주되는 값 = 7가지
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy : 참으로 간주되는 값
// -> Falsy 한 값들을 제외한 모든 값
let t1 = "Hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 유용하게 활용되는 사례
function printName(person) {
    if(!person) {   // Truthy, Falsy 가 없다면 if(person === undefined || person === null) {} 로 적어주어야 함
        console.log("person 의 값이 없음.");
        return;
    }

    console.log(person.name);
}

let person = {
    name: "Jayden"
}

printName(person);