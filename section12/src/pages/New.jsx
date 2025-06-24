import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import { useNavigate } from 'react-router-dom';
import usePageTitle from './../hooks/usePageTitle';
import Header from './../components/Header';
import Editor from './../components/Editor';
import Button from './../components/Button';

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    usePageTitle("새 일기 쓰기");

    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        nav("/", {replace: true});
    };

    return (
        <div>
            <Header title={"새 일기 쓰기"} 
                leftChild={<Button text={"< 뒤로 가기"} onClick={() => {nav(-1)}}/>} />
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;