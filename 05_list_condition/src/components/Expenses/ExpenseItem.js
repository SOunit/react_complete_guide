import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// if state change, react re-execute this function in which useState exists
const ExpanseItem = (props) => {
  // ask react to control value
  // this initialization do NOT run twice becuase react remember first time execution.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // set value, call this function, re-render
    setTitle('Updated!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
};

export default ExpanseItem;
