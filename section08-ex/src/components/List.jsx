import { useState} from 'react';
import './List.css';
import TodoItem from './TodoItem';

const List = ({todos, onUpdate}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if(search === "") {
            return todos;
        } else {
            return todos.filter((todo) => 
                todo.content.toLowerCase().includes(search.toLowerCase())
            );
        }
    };

    const filteredTodos = getFilteredData();

    return (
        <div className="list">
            <h4>To-do List 🌱</h4>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요."/>
            <div className="todos-wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />
                    );
                })}
            </div>
        </div>
    );
};

export default List;