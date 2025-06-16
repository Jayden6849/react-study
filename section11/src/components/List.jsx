import "./List.css";
import {useState, useMemo, useContext} from 'react';
import TodoItem from "./TodoItem";
import {TodoStateContext} from '../App';

const List = () => {
    const todos = useContext(TodoStateContext);

    const[search, setSearch] = useState("");

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

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);
    // 의존성 배열 deps[], useEffect와 유사: deps 에 들어가는 값이 바뀌면 콜백함수를 실행

    return (
        <div className="list">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요."/>
            <div className="todos-wrapper">
                {filteredTodos.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;