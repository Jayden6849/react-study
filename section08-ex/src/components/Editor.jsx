import { useState, useRef } from 'react';
import './Editor.css';

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if(content.trim() === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if(e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div className="editor">
            <input ref={contentRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 todo..." />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;