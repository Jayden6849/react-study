// 반복문
let sum = 0;

for(let i=0; i<10; i++) {
    sum += i;
}

console.log(sum);

// break

sum = 0;

for(let j=0; j<10; j++) {
    if(j === 5 ) {
        break;
    }

    sum += j;
}

console.log(sum);

// continue

sum = 0;

for(let k=0; k<10; k++) {
    if(k%2 === 0) {
        continue;
    }

    sum += k;
}

console.log(sum);