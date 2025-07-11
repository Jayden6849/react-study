import './Editor.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmotionItem from './EmotionItem';
import Button from './Button';

const getStringedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10) {
        month = `0${month}`;
    }
    if(date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
};

const emotionList = [
    {
        emotionId: 1,
        emotionName: "완전 좋음",
    },
    {
        emotionId: 2,
        emotionName: "좋음",
    },
    {
        emotionId: 3,
        emotionName: "그럭저럭",
    },
    {
        emotionId: 4,
        emotionName: "나쁨",
    },
    {
        emotionId: 5,
        emotionName: "끔찍함",
    },
];

const Editor = ({ onSubmit }) => {
    const [input, setInput] = useState(
        {
            createdDate: new Date(),
            emotionId: 3,
            content: "",
        }
    );

    const nav = useNavigate();

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === 'createdDate') {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name] : value,
        });    
    };

    const onClickSubmitButton = () => {
        onSubmit(input);
    };

    return (
        <div className="editor">
            <section className="date-section">
                <h4>오늘의 날짜</h4>
                <input type="date" value={getStringedDate(input.createdDate)} name="createdDate" onChange={onChangeInput}></input>
            </section>
            <section className="emotion-section">
                <h4>오늘의 감정</h4>
                <div className="emotion-list-wrapper">
                    {emotionList.map((item) => 
                        <EmotionItem key={item.emotionId} {...item} 
                            isSelected={item.emotionId === input.emotionId}
                            onClick={() => onChangeInput({
                                target : {
                                    name: "emotionId",
                                    value: item.emotionId,
                                }
                            })}/>)}
                </div>

            </section>
            <section className="content-section">
                <h4>오늘의 일기</h4>
                <textarea name="content"
                    onChange={onChangeInput}
                    placeholder="오늘은 어땠나요?" />
            </section>
            <section className="button-section">
                <Button text={"취소하기"} />
                <Button text={"작성완료"} 
                    type={"POSITIVE"} 
                    onClick={onClickSubmitButton} />
            </section>
        </div>
    );
};

export default Editor;