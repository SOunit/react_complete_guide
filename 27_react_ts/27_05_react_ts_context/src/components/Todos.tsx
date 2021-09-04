import React, { useContext } from 'react';

import TodoItem from '../components/TodoItem';
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';

// FC = Functional Component
// this type offers base setup for Functional component in typescript
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          text={item.text}
          key={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
