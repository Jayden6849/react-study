// 요소 순회 및 탐색 메서드 : 5가지
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// 매 반복마다 콜백 함수를 호출 = 배열의 길이만큼 호출됨 (즉, 3회)
arr1.forEach(function(item, idx, arr) {
    console.log(idx, item * 2);
});

// 응용 : 콜백 함수와 요소 조작을 활용
let doubledArr = [];

arr1.forEach((item, idx, arr) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 중복될 경우 먼저 찾아지는 인덱스
// 없을 경우 -1

// 4. findIndex
// 모든 요소를 순회하면서, 콜백 함수를 만족하는 요소의 인덱스를 반환하는 메서드
// 배열에선 indexOf 가 있기 때문에 그다지 필요없지만, findIndex 는 객체에서도 동작함
// indexOf(얕은 비교) vs findIndex(깊은 비교) 왜? 콜백 함수를 사용하기 떄문
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
    if(item === 2) return true;
});

const findedIndex2 = arr4.findIndex((item) => item%2 === 0);

console.log(findedIndex);
console.log(findedIndex2);

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 반환함
// findIndex = 인덱스를 반환 vs find = 요소를 반환
let arr5 = [{name:"Jayden"}, {name:"scarlett"}];

const finded = arr5.find((item)=>item.name === "Jayden");

console.log(finded);