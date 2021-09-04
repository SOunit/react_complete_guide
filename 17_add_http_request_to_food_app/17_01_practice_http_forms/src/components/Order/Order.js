import Modal from '../UI/Modal';

import UserInput from '../../hooks/user-input';

const Order = (props) => {
  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    hasError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = UserInput((value) => value.trim() !== '');

  const submitHandler = (event) => {
    event.preventDefault();

    nameInputReset();
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
