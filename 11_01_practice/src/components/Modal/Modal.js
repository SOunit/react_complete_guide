import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Modal.module.css';
import ModalItem from './ModalItem';

const Modal = (props) => {
  const ctx = useContext(CartContext);

  const itemRemoveHandler = (itemId, count) => {
    ctx.onRemoveItem(itemId, count);
  };

  const items = ctx.cart.map((item) => {
    return <ModalItem item={item} onClick={itemRemoveHandler} key={item.id} />;
  });

  return (
    <React.Fragment>
      <div className={classes.bg} onClick={props.onCloseModal}></div>
      <div className={classes.modal}>
        {items}
        <div>
          <h2>Total Amount</h2>
          <div>${ctx.onTotalAmount()}</div>
        </div>
        <div className={classes.actions}>
          <button className={classes.cancelButton}>Cancel</button>
          <button className={classes.orderButton}>Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
