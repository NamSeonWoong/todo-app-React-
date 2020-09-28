import React,{useState, useRef, useCallback} from "react";
import Todotemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '최민화 바보',
      checked: true,
    },
    {
      id: 2,
      text: '남선웅 바보',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: false,
    },
  ]);
  const nextId =useRef(4);

  const onInsert = useCallback(
    text =>{
      const todo = {
        id: nextId.current,
        text,
        checked:false,
      };
      setTodos(todos.concat(todo));
      nextId.current+=1;
    },
    [todos],
  );
  
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo=> todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id=> {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          ),
      );
    },
    [todos],
  );

  return (
  <Todotemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </Todotemplate>
  );
};

export default App;