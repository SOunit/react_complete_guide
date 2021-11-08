import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteClickHandler = () => {
    console.log('Click');
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteClickHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onClick={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

export default Todo;
