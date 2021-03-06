import React from 'react';
import Todo from '../models/todo';
import TodoItem from '../components/TodoItem';

// FC = Functional Component
// this type offers base setup for Functional component in typescript
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem item={item} />
      ))}
    </ul>
  );
};

export default Todos;
