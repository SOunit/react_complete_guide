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

  return (
    <CartContext.Provider value={{ cart: cart, onAddItem: addItemHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
