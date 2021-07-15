import React from 'react';
import Todo from '../models/todo';
import TodoItem from '../components/TodoItem';

import classes from './Todos.module.css';

// FC = Functional Component
// this type offers base setup for Functional component in typescript
const Todos: React.FC<{
  items: Todo[];
  onClickTodoItem: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          text={item.text}
          key={item.id}
          id={item.id}
          onClickTodoItem={props.onClickTodoItem}
        />
      ))}
    </ul>
  );
};

export default Todos;
