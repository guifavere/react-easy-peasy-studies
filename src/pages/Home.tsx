import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../store';

const Home: React.FC = () => {
  const todos = useStoreState(state => state.todos.items);
  const deleteTodo = useStoreActions(actions => actions.todos.delete);

  return (
    <>
      <h1>Home</h1>
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

export default Home;