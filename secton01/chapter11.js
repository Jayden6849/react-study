// 함수 (function)
// -> 함수 안에 또 함수를 만들 수도 있음 : 중첩 함수
// 호이스팅 : 유연성을 제공해주지만 이로 인해 발생하는 문제가 많음

// 함수의 선언
function greating() {
    console.log("안녕하세요!");
}

// 함수의 호출
console.log("호출 전");
greating();
console.log("호출 후");

// 직사각형의 넓이를 구하는 함수
function getArea(width, height) {   // 매개변수
    let area = width * height;

    console.log(area);
}

getArea(10, 20);    // 인수
getArea(30, 20);

function getLength(width, height) {
    let length = (width + height) * 2;

    return length;
}

console.log(getLength(10, 20));