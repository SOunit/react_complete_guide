import { useState, useContext } from 'react';

import CartContext from '../../store/cart-context';

import classes from './AddFoodItem.module.css';

const AddFoodItem = (props) => {
  const [count, setCount] = useState(1);

  const ctx = useContext(CartContext);

  const countChangeHandler = (event) => {
    setCount(event.target.value);
  };

  const itemAddHandler = () => {
    const item = {
      id: props.id,
      title: props.title,
      description: props.description,
      amount: props.amount,
      count: +count,
    };
    ctx.onAddItem(item, +count);
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
        <button className={classes.foodAddButton} onClick={itemAddHandler}>
          + Add
        </button>
      </div>
    </li>
  );
};

export default AddFoodItem;
