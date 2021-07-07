import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Modal.module.css';

const Modal = (props) => {
  const ctx = useContext(CartContext);

  const items = ctx.cart.map((item) => {
    return (
      <div className={classes.item}>
        <h2>{item.title}</h2>
        <div className={classes.price}>{item.amount}</div>
        <input
          className={classes.countInput}
          type='number'
          value={item.count}
        />
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className={classes.bg} onClick={props.onCloseModal}></div>
      <div className={classes.modal}>{items}</div>
    </React.Fragment>
  );
};

export default Modal;
