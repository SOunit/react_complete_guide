import { useState } from 'react';

import Card from './Card';

import classes from './UserInput.module.css';

const UserInput = (props) => {
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

    if (enteredUserName === '' || enteredUserAge === '') {
      props.onShowModal('input is empty');
    } else {
      // add user
      const id = Math.random();
      const user = { id, name: enteredUserName, age: enteredUserAge };
      props.onAddUser(user);

      // reset input
      setEnteredUserName('');
      setEnteredUserAge('');
    }
  };

  return (
    <Card className={classes.userInput}>
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
    </Card>
  );
};

export default UserInput;
