import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const nameInputref = useRef();
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

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

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputref}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
