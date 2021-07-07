import { useState } from 'react';

import classes from './AddFoodItem.module.css';

const AddFoodItem = (props) => {
  const [count, setCount] = useState(1);

  const countChangeHandler = (event) => {
    console.log(event.target.value);
    setCount(event.target.value);
  };

  return (
    <li className={classes.addFoodItem}>
      <div>
        <h3>{props.title}</h3>
        <div>{props.description}</div>
        <div className={classes.amount}>${props.amount}</div>
      </div>
      <div>
        Amount
        <input
          value={count}
          onChange={countChangeHandler}
          type='number'
          className={classes.countInput}
          min='1'
        />
        <button className={classes.foodAddButton}>+ Add</button>
      </div>
    </li>
  );
};

export default AddFoodItem;
