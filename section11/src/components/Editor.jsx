import "./Editor.css";
import {useState, useRef, useContext} from 'react';
import {TodoDispatchContext} from '../App';

const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");
    const contentRef = useRef();
    
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeydown = (e) => {
        if(e.key === "Enter") {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if(content.trim() === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return (
        <div className="editor">
            <input ref={contentRef} value={content} onKeyDown={onKeydown} onChange={onChangeContent} placeholder="새로운 todo..." />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;