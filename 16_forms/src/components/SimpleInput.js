import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const nameInputref = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    // state
    console.log(enteredName);

    // ref
    const enteredValue = nameInputref.current.value;
    console.log(enteredValue);

    // clear
    setEnteredName('');

    // this is possible, but NOT IDEAL, changin DOM directly
    // react should be the only one to manipulate DOM
    // nameInputref.current.value = '';
  };

  const nameInputClasses = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputref}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
