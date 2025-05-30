// 배열 변형 메서드 : 5가지
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    {name: "Jayden", hobby:"테니스"},
    {name: "Scarlett", hobby:"제빵"},
    {name: "Tom", hobby:"테니스"}
]

const tennisPeople = arr1.filter((item)=>
    item.hobby === "테니스"
);

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백 함수를 실행하고 그 결과값을 모아 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mappedItem = arr2.map((item, idx, arr)=>{
    return item * 2;
});

console.log(mappedItem);

let names = arr1.map((item) => {
    return item.name;
});

console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);

let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
    if(a > b) {
        return 1; // b a 순으로 둬라
    } else if(a < b) {
        return -1; // a b 순으로 둬라
    } else {
        return 0 // 가만히 둬라
    }
});

console.log(arr4);

// 4. toSorted
// 원본은 가만히 두고 정렬된 샤로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
// <-> split
let arr6 = ["hi", "im", "Jayden"];
const joined = arr6.join("-");

console.log(joined);