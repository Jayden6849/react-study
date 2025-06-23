import './Editor.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from './../util/constants';
import { getStringedDate } from './../util/get-stringed-date';
import EmotionItem from './EmotionItem';
import Button from './Button';

const Editor = ({onSubmit, initData}) => {
    const [input, setInput] = useState(
        {
            createdDate: new Date(), 
            emotionId: 3, 
            content: "",
        });

    const nav = useNavigate();

    useEffect(() => {
        if(initData) {
            setInput(
                {
                    ...initData,
                    createdDate: new Date(Number(initData.createdDate)),
                }
            );
        }
    }, [initData]);

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
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="오늘은 어땟나요?" />
            </section>
            <section className="button-section">
                <Button text={"취소하기"} 
                    onClick={() => {nav(-1)}}/>
                <Button text={"작성완료"} 
                    type={"POSITIVE"} 
                    onClick={onClickSubmitButton} />
            </section>
        </div>
    );
};

export default Editor;