import './TodoItem.css';

const TodoItem = ({todo}) => {
    return (
        <div className='todoItem'>
            <input type="checkbox" />
            <div className="content">{todo.content}</div>
            <div className="date">{new Date().toLocaleDateString()}</div>
            <button>삭제</button>
        </div>
    );
};

export default TodoItem;