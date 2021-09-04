import React, { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('test'),
    new Todo('test2'),
  ]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      const todoIndex = prevTodos.findIndex((todo) => {
        return todo.id === id;
      });
      const newTodos = [...prevTodos];

      newTodos.splice(todoIndex, 1);

      return newTodos;
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onClickTodoItem={removeTodoHandler} />
    </div>
  );
}

export default App;
