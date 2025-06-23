// css
import './App.css';

// hook
import { useState, useReducer, useRef, createContext, useEffect } from 'react';

// route
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/NotFound";

// components
import Button from './components/Button';
import Header from './components/Header';

// resources
import { getEmotionImage } from './util/get-emotion-image';

// 초기데이터.
// const mock = [
//   {
//     id: 3,
//     createdDate: new Date("2025-06-19").getTime(),
//     emotionId: 3,
//     content: "3번 일기 내용",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2025-06-18").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용",
//   },
//   {
//     id: 1,
//     createdDate: new Date("2025-05-09").getTime(),
//     emotionId: 1,
//     content: "1번 일기 내용",
//   }
// ];

function reducer(state, action) {
  let nextState;

  switch(action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      {
        nextState = [action.data, ...state];
        break;
      } 
    case "UPDATE": 
      {
        nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
        break;
      }
    case "DELETE":
      {
        nextState = state.filter((item) => String(item.id) !== String(action.id));
        break;
      }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(1);

  useEffect(()=>{
    const storedData = localStorage.getItem("diary");
    if(!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    
    setIsLoading(false);
  }, []);

  // localStorage.setItem("test", "test-value");
  // localStorage.setItem("person", JSON.stringify({ name: "Jayden" }));

  // console.log(localStorage.getItem("test"));
  // console.log(JSON.parse(localStorage.getItem("person")));

  // localStorage.removeItem("test");

  // setItem, getItem, removeItem
  // JSON.stringify vs JSON.parse :: parse의 경우 null, undefined 체크를 반드시 해줘야 안전함

  // 새로운 일기를 추가
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

  // 기존 일기를 수정
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

  // 기존 일기를 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if(isLoading) {
    return <div> 데이터 로딩 중입니다...</div>
  }

  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  );

}

export default App;
