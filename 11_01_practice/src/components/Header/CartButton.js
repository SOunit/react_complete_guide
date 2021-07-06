import React from 'react';

import classes from './CartButton.module.css';

const CartButton = () => {
  return (
    <div className={classes.cartButton}>
      <i className='fas fa-shopping-cart'></i> Your Cart{' '}
      <span className={classes.number}>4</span>
    </div>
  );
};

export default CartButton;
