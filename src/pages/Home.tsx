import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../store';

export default function Home() {
  const [asyncOp, setAsyncOp] = useState(false);

  const [todo, setTodo] = useState('');

  const todos = useStoreState(state => state.todos.items);

  const { asyncAddTodo, addTodo, deleteTodo } = useStoreActions(actions =>
    ({
      asyncAddTodo: actions.todos.asyncAdd,
      addTodo: actions.todos.add,
      deleteTodo: actions.todos.delete
    })
  );

  const handleChangeAsyncOp = useCallback(
    () => setAsyncOp(oldAsyncOp => !oldAsyncOp),
    []
  );

  const handleChangeTodo = useCallback((event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setTodo(value);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (asyncOp) {
      asyncAddTodo(todo);
    } else {
      addTodo(todo);
    }

    setTodo('');
  }

  return (
    <>
      <h1>Home</h1>

      <form onSubmit={handleSubmit}>
        <p>Create new todo item</p>

        <fieldset>
          <input onChange={handleChangeAsyncOp} type="checkbox" />
          <label> async?</label>
        </fieldset>

        <fieldset>
          <input onChange={handleChangeTodo} placeholder="name..." type="text" value={todo} />
          <button title="save" type="submit">save</button>
        </fieldset>
      </form>

      <ul>
      {todos.map(item => (
        <li key={item}>
          <Link to={`/items/${item}`}>{item}</Link>{" "}
          <button onClick={() => deleteTodo(item)} title="remove" type="button">
            remove
          </button>
        </li>
      ))}
      </ul>
    </>
  );
}
