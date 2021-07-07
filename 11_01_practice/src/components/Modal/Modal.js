import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../../store/cart-context';
import classes from './Modal.module.css';
import ModalItem from './ModalItem';

const Backdrop = (props) => {
  return <div className={classes.bg} onClick={props.onCloseModal}></div>;
};

const ModalPanel = (props) => {
  return (
    <div className={classes.modal}>
      {props.items}
      <div>
        <h2>Total Amount</h2>
        <div>${props.totalAmount}</div>
      </div>
      <div className={classes.actions}>
        <button
          className={`${classes.button} ${classes.cancelButton}`}
          onClick={props.onCloseModal}
        >
          Close
        </button>
        <button className={`${classes.button} ${classes.orderButton}`}>
          Order
        </button>
      </div>
    </div>
  );
};

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
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('bg-root')
      )}
      {ReactDOM.createPortal(
        <ModalPanel
          items={items}
          totalAmount={ctx.onTotalAmount()}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
