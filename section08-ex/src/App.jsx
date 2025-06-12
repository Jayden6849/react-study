import { useState, useRef } from 'react'
import './App.css'

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData = [
    {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <div className="app">
      <Header />
      <Editor />
      <List todos={todos} />
    </div>
  )
}

export default App;
