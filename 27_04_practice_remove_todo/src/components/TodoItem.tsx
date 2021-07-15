import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  id: string;
  onClickTodoItem: (id: string) => void;
}> = (props) => {
  return (
    <li
      className={classes.item}
      onClick={props.onClickTodoItem.bind(null, props.id)}
    >
      {props.text}
    </li>
  );
};

export default TodoItem;
