import './App.css';

import { useReducer, useRef, createContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Button from './components/Button';

import { getEmotionImage } from './utils/getEmotionImage';

const mock = [
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 4,
    content: "2번 일기 내용",
  },
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
];

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
  }
};

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, mock);
  const idRef = useRef(3);

  const nav = useNavigate();

  const onClickNewDiary = () => {
    console.log("새로운 일기를 씁니다.");
    nav("/new");
  };

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
    <Link to={"/"}>감정일기장</Link>
    <Button text="새일기+" type="POSITIVE" onClick={onClickNewDiary} />
    <Header />
    
    <img src={getEmotionImage(1)} alt="감정 이미지" />
    <Button text="일기 추가" onClick={() => { onCreate(new Date().getTime(), 1, "3번째 일기입니다.")}} />
    <Button text="일기 수정" onClick={() => { onUpdate(1, new Date().getTime(), 1, "1번째 수정 일기입니다.")}} />
    <Button text="일기 삭제" onClick={() => { onDelete(1) }} />
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
