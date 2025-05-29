// 객체 : 원시 타입이 아닌 객체 형태의 자료형

// 1. 객체의 생성
let obj1 = new Object();    // 객체 생성자
let obj2 = {};  // 객체 리터럴 (대부분 이러한 방식을 사용)

// 2. 객체 프로퍼티 (객체의 속성) - Key:Value 형태의 집합 (JSON) = DTO 에 담아서 이동하기 딱 좋음
let person = {
    name: "Jayden",
    job: "Dev",
    location: "South Korea",
    extra: {}
}

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법
let name = person.name; // 점 표기법
console.log(name);

let job = person["job"]; // 괄호 표기법
console.log(job);

let property = "location";
let addr = person[property];
console.log(addr);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.favoriteFood = "떡볶이";
person["language"] = "Java";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "Developer";
person["favoriteFood"] = "초콜릿";

console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.favoriteFood;
delete person["language"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
let result = "name" in person;
console.log(result);
result = "favorateFood" in person;
console.log(result);