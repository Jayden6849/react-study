// 1. 상수 객체
const animal = {
     type: "고양이",
     name: "나비",
     color: "black"
}

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// -> 객체 자체의 이름을 바꾼다거나 새로운 객체를 넣을 수는 없지만,
// -> 객체의 프로퍼티를 추가, 수정, 삭제 하는 것은 아무런 문제가 되지 않는다.

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함 = 객체 안에 있는 함수
// -> 객체의 동작을 정의함 : 이미 클래스(객체) 안에 있는 함수가 메서드라는 것을 알고 있음

const person = {
    name: "Jayden",
    sayHi() {
        console.log("안녕!");
    }
}

person.sayHi();
person["sayHi"]();

