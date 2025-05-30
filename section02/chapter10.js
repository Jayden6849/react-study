// 1. Date 객체
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1997-01-07/10:15:30");
console.log(date2);

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초" 기준으로 몇 ms 가 지났는지 의미하는 숫자값
// 협정세계시 UTC
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 주의할 점 :: month 는 항상 0 부터 나오는 상황을 고려해야함.
// 확인해보고 0부터 시작한다면 getMonth 에는 +1 을 해주어야함

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2-1);
date1.setDate(30);

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 반대로 setMonth 에는 -1을 해주어야함

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString()); // 브라우저의 현지 정보를 가지고 출력