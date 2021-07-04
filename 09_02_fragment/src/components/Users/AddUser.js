import { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  // ref gives access to dom element
  const userName = useRef();
  const userAge = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    // ref always offer current.value property to access value of dom
    const enteredUserName = userName.current.value;
    const enteredAge = userAge.current.value;

    // validation
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);

    // clear input
    // manipulating dom directly is rare, not recommended
    // input form clear is one of exception
    userName.current.value = '';
    userAge.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={userName} />
          <label htmlFor='age'>Ages (Years)</label>
          <input id='age' type='number' ref={userAge} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
