import './App.css';

import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

const mock = [
  {
    id: 3,
    createdDate: new Date("2025-06-19").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2025-06-18").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 1,
    createdDate: new Date("2025-05-09").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  }
];

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, mock);
  const idRef = useRef(4);

  // 새로운 일기를 작성하는 로직
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기를 수정하는 로직
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기를 삭제하는 로직
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App;
