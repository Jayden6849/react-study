import { useReducer } from "react";

// reducer = 변환기
// -> 살태를 실제로 변경시키는 변환기
function reducer(state, action) {
    switch(action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state
    }
}

const Exam = () => {
    // dispatch = 발송
    // -> 상태 변화가 있어야한다는 사실을 알리는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수: 상태가 어떻게 변화되길 원하는지 적어주면 됨
        // -> ACTION 객체
        dispatch({
            type: "INCREASE",
            data: 1,
        });     
    };

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;