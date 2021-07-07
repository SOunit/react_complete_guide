import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';

import classes from './CartButton.module.css';

const CartButton = () => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.cartButton}>
      <i className='fas fa-shopping-cart'></i> Your Cart{' '}
      <span className={classes.number}>{ctx.cart.length}</span>
    </div>
  );
};

export default CartButton;
