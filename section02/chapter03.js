// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name : "Jayden",
    job : "dev",
    addr : "Korea"
};

let {name : myName, job, addr, extra = "hello"} = person;
console.log(myName, job, addr, extra);

// 3. 객체 구조 분해 할당을 활용해서 함수의 매개변수를 받는 방법
const func = ({name : myName, job, addr, extra = "hello"}) => {
    console.log(myName, job, addr, extra);
};

func(person);