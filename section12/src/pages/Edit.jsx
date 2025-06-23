import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext, DiaryDispatchContext } from './../App';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './../components/Header';
import Button from './../components/Button';
import Editor from './../components/Editor';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const data = useContext(DiaryStateContext);
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    const onClickDelete = () => {
        const valiChk = confirm("일기를 정말로 삭제할까요? 다시 복구되지 않아요.");
        if(valiChk) {
            // 일기를 삭제하는 로직
            onDelete(params.id);
            nav("/", {replace: true}); // 홈으로 이동시키면서 뒤로가기 방지
        } else {
            return;
        }
    };

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));
        
        if(!currentDiaryItem) {
            alert("존재하지 않는 일기입니다.");
            nav(-1, { replace: true }); // navigator 는 Dom 에 바로 넣으면 실행이 안 됨 - useEffect 안에서 써주면 해결
        }

        setCurDiaryItem(currentDiaryItem);
    }, [params.id]);

    const onSubmit = (input) => {
        if(confirm("일기를 수정할까요?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        }
        
        nav("/", { replace: true });
    };

    return (
        <div>
            <Header title={"일기 수정하기"} 
                leftChild={<Button text={"< 뒤로 가기"} onClick={()=>{nav(-1)}}/>} 
                rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={ onClickDelete } />} />
            <Editor initData={curDiaryItem} onSubmit={ onSubmit } />
        </div>
    );
};

export default Edit;