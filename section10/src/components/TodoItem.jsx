import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="todo-item">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
};

export default memo(TodoItem);

// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
//     // T -> Props 바뀌지 않음 === 리렌더링 x
//     // F -> Props 바뀜 === 리렌더링 o

//     if(prevProps.id !== nextProps.id) {
//         return false;
//     }
//     if(prevProps.isDone !== nextProps.isDone) {
//         return false;
//     }
//     if(prevProps.content !== nextProps.content) {
//         return false;
//     }
//     if(prevProps.date !== nextProps.date) {
//         return false;
//     }

//     return true;
// });