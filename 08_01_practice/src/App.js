import React, { useState } from 'react';

import UserInput from './components/UserInput';
import UserDisplay from './components/UserDisplay';
import Modal from './components/Modal';

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
  const [modalMessage, setModalMessage] = useState('');

  const addUserHandler = (user) => {
    console.log(user);

    const newUsers = [...users, user];
    setUsers(newUsers);
  };

  const showModalHandler = (message) => {
    setHasModal(true);
    setModalMessage(message);
  };

  const hideModalHandler = () => {
    setHasModal(false);
    setModalMessage('');
  };

  let modal = null;
  if (hasModal) {
    modal = <Modal message={modalMessage} onHideModal={hideModalHandler} />;
  }

  return (
    <div>
      {modal}
      <UserInput onAddUser={addUserHandler} onShowModal={showModalHandler} />
      <UserDisplay users={users} />
    </div>
  );
}

export default App;
