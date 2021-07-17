import { useState } from 'react';

import Modal from '../UI/Modal';

const Order = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const hasError = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const reset = () => {
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    reset();
  };

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  return (
    <Modal onClose={props.onClose}>
      <form className={null} onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        <button disabled={!formIsValid}>Order</button>
        <button type='button' onClick={props.onClose}>
          Close
        </button>
        {hasError && <p>Please enter a valid name.</p>}
      </form>
    </Modal>
  );
};

export default Order;
