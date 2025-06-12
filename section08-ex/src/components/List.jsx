import './List.css';
import TodoItem from './TodoItem';

const List = ({todos}) => {
    return (
        <div className="list">
            <h4>To-do List 🌱</h4>
            <input placeholder="검색어를 입력하세요."/>
            <div>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
};

export default List;