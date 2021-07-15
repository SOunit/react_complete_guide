import { useRef } from 'react';

const NewTodo = () => {
  // this is useRef initial setup
  // 1. ref type is html-input-element in this case. other sample is HTMLButtonElement.
  // 2. initial value is null, connected with input element in return statement
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // typescript put ? mark here, because of possibility of nullish value
    // but developer can put ! mark, to tell typescript value is not null
    // this here, connection is done so never be null
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
