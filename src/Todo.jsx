import { useState } from 'react';
import './styles.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompletTodos] = useState(["TODO A", "TODO B"]);
  const [completeTodos, setCompletTodos] = useState(["TODO finish A", "TODO finish B"]);

  const onchangeTodoText = (event) => setTodoText(event.target.value);;
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompletTodos(newTodos);
    setTodoText("");
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompletTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompletTodos(newCompleteTodos);
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompletTodos(newTodos);
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onchangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className='list-row'>
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}> 削除</button>
              </div>
            </li>
          )
          )}
        </ul>
      </div>

      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
