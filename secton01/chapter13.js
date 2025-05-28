// 콜백 함수
// -> 자신이 아닌 다른 함수에, 인수로서 전달된 다른 함수
// -> 매개변수 안에 변수에 담긴 함수 자체가 들어가있는 상태
// -> 원하는 타이밍에 해당 함수를 실행시킬 수 있음

function main(value) {
    value();
}

function sub() {
    console.log("I'm sub");
}

main(sub);  // <- 이런 형태가 콜백 함수임 : 메인 함수가 실행될 때 속에 들어있는 함수가 실행

//////////////////////////////////////////////////

function funcA(element) {
    element();
}

funcA(() => {
    console.log("I am sub");
});

//////////////////////////////////////////////////

// 콜백 함수의 활용
function repeat(count, callback) {
    for(let i=1; i<=count; i++) {
        callback(i);
    }
}

repeat(5, (index) => {
    console.log(index);
});

repeat(5, (index) => {
    console.log(index * 2);
});