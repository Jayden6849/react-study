import {useState, useEffect, useRef} from 'react';

import './App.css';

import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. 마운트 : deps 에 빈배열을 넣어주면 됨
  useEffect(() => {
    console.log("mount");
  }, []);
  // 2. 업데이트 : deps 를 생략하면 됨
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 3. 언마운트 : 각 컴포넌트의 useEffect 내부에서 콜백함수를 반환



  // 의존성 배열 [] (dependency array = deps)
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count%2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );

}

export default App;
