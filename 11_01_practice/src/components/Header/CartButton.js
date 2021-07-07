import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.cartButton} onClick={props.onClick}>
      <i className='fas fa-shopping-cart'></i> Your Cart{' '}
      <span className={classes.number}>{ctx.onCount()}</span>
    </div>
  );
};

export default CartButton;
