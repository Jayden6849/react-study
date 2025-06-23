import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';

const useDiary = (id) => {
     const data = useContext(DiaryStateContext);
     const [curDiaryItem, setCurDiaryItem] = useState();
     const nav = useNavigate();

     useEffect(() => {
          const currentDiaryItem = data.find((item) => String(item.id) === String(id));

          if(!currentDiaryItem) {
               alert("존재하지 않는 일기입니다.");
               nav(-1, { replace: true }); // navigator 는 Dom 에 바로 넣으면 실행이 안 됨 - useEffect 안에서 써주면 해결
          }

          setCurDiaryItem(currentDiaryItem);
     }, [id]);

     return curDiaryItem;
};

export default useDiary;