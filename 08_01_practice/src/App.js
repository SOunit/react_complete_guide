import React, { useState } from 'react';
import UserInput from './components/UserInput';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);

    const newUsers = [...users, user];
    setUsers(newUsers);
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
