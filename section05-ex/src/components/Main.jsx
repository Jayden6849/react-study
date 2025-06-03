import {useState} from "react";

import Banana from '../assets/images/banana.png';

const Main = () => {
    const [state, setState] = useState("HI");
    const [count, setCount] = useState(0);

    return (
    <>
    <main>
        <div>
            <h1>{state}</h1>
            <button
            onClick={() => {
                setState(state == "HI" ? "Hello" : "HI");
            }}>
            인사하기
            </button>
        </div>

        <div>
            <h1>{count}회 클릭</h1>
            <button
            onClick={() => {
                setCount(count+1);
            }}>
            <img
            src={Banana}
            style={{width:30, height:30}}
            />
            </button>
        </div>
    
    </main>
    </>
    )
    
};

export default Main;