import React, { useState } from 'react';
import UserInput from './components/UserInput';
import UserDisplay from './components/UserDisplay';

const DUMMY_DATA = [
  {
    id: 0,
    name: 'Jack',
    age: 38,
  },
  {
    id: 1,
    name: 'Rebecca',
    age: 38,
  },
  {
    id: 2,
    name: 'Kevin',
    age: 12,
  },
  {
    id: 3,
    name: 'Kate',
    age: 12,
  },
  {
    id: 4,
    name: 'Randal',
    age: 12,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);
  const [hasModal, setHasModal] = useState(false);

  const addUserHandler = (user) => {
    console.log(user);

    const newUsers = [...users, user];
    setUsers(newUsers);
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserDisplay users={users} />
    </div>
  );
}

export default App;
