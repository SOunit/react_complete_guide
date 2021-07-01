import { useState } from 'react';
import classes from './UserInput.module.css';

const UserInput = () => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.userInput}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor='userName'>User Name</label>
          <input
            type='text'
            name='userName'
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor='userAge'>User Age</label>
          <input
            type='number'
            name='userAge'
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
        </div>
        <div>
          <button type='submit'>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
