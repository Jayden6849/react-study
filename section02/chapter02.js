// 단락 평가 (Short-circuit Evaluation)
// -> 논리 연산자에서 앞의 피연산자 결과에 따라 뒤의 피연산자를 평가하지 않는 것
// -> 논리 연산에 있어 첫번째 피연산자의 값으로만으로도 판단이 된다면, 두번째 피연산자에는 아예 접근 자체를 안 하는 특징
// -> 조건문을 일일히 사용하지 않더라도 특정 상황에서 함수를 호출하지 않도록 방지할 수 있음

function returnFalse() {
    console.log("false 함수");
    return false;
}

function returnTrue() {
    console.log("true 함수");
    return true;
}

// 이미 앞에서 False 이기 때문에 False 가 출력되고 returnTrue() 에는 애초에 도달하지 않음
console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());

// 단락평가를 활용하는 사례
let printName = (person) => {
    const name = person && person.name;
    console.log(name || "person 의 값이 존재하지 않습니다.");
 }

 printName({name: "Jayden"});
 printName();