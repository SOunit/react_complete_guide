import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const DUMMY_DATA = [
    { id: 1, name: 'test', age: 10 },
    { id: 2, name: 'test', age: 10 },
  ];

  return (
    <div>
      <AddUser />
      <UsersList users={DUMMY_DATA} />
    </div>
  );
}

export default App;
