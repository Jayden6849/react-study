import './App.css';

import Viewer from './components/Viewer';
import Controller from './components/Controller';

import {useState} from 'react';

function App() {

  // State Lifting (단방향 데이터 통신이기 때문에 prop를 부모에서 처리해서 내려줘야함)
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="app">
      <h1>Counting App</h1>
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} />
    </div>
  )
}

export default App;
