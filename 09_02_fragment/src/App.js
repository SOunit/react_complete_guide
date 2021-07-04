import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const DUMMY_DATA = [
  { id: 1, name: 'test', age: 10 },
  { id: 2, name: 'test', age: 10 },
];

function App() {
  const [usersList, setUsersList] = useState(DUMMY_DATA);

  const addUserHandler = (name, age) => {
    setUsersList((prevState) => [
      ...prevState,
      { id: Math.random(), name, age },
    ]);
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
