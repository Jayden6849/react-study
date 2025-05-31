// 비동기 Promise 객체
// -> 자바스크립트의 내장 객체 : 비동기 작업을 효율적으로 처리하도록 도와줌
// -> setTimeout() 등의 비동기 함수를 감싸는 Wrapper 객체
// -> 3가지 상태를 가짐

// 대기 (Pending) -> resolve -> 성공 (Fulfilled)
// 대기 (Pending) -> reject -> 실패 (Rejected)

let promise = null;

function add10(num) {
    promise = new Promise((resolve, reject) => {
        // 실행할 비동기 작업을 작성
        // executor
    
        setTimeout(() => {
            if(typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });

    return promise;
}

// promise 객체를 그대로 반환하기 때문에 메서드 체이닝이 가능함

add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .catch((error) => {
        console.log(error);
    });