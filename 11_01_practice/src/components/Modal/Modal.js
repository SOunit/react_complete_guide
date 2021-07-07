import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Modal.module.css';

const Modal = (props) => {
  const ctx = useContext(CartContext);

  const itemRemoveHandler = (itemId) => {
    ctx.onRemoveItem(itemId);
  };

  const items = ctx.cart.map((item) => {
    return (
      <div className={classes.item} key={item.id}>
        <div>
          <h2>{item.title}</h2>
          <div className={classes.price}>{item.amount}</div>
          <input
            className={classes.countInput}
            type='number'
            value={item.count}
          />
        </div>
        <div className={classes.controls}>
          <button
            className={classes.button}
            onClick={() => itemRemoveHandler(item.id)}
          >
            -
          </button>
          <button className={classes.button}>+</button>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className={classes.bg} onClick={props.onCloseModal}></div>
      <div className={classes.modal}>
        {items}
        <h2>Total Amount</h2>
      </div>
    </React.Fragment>
  );
};

export default Modal;
