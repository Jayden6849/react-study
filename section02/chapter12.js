function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        console.log(sum);
    }, 3000);
}

add(1, 2, (value) => {
    console.log(value);
});

// 읍식을 주문하는 상황을 가정
function orderFood(callback) {
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function coolDownFood(food, callback) {
    setTimeout(() => {
        const coolDownFood = `식은 ${food}`;
        callback(coolDownFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500)
}

orderFood((food) => {
    console.log(food);

    coolDownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});

// 인덴트가 계속 깊어지게 되고, 콜백 지옥에 빠지게 됨