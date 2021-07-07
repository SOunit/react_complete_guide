import React, { useState } from 'react';

const CartContext = React.createContext({ cart: [] });

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItemHandler = (item) => {
    setCart((prevState) => {
      const newCart = [...prevState, item];
      return newCart;
    });
  };

  const countHandler = () => {
    let count = 0;
    cart.map((item) => {
      count += item.count;
    });
    return count;
  };

  return (
    <CartContext.Provider
      value={{ cart: cart, onAddItem: addItemHandler, onCount: countHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
