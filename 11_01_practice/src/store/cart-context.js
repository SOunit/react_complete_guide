import React, { useState } from 'react';

const CartContext = React.createContext({ cart: [] });

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: 'SuShi',
      description: 'some text',
      amount: 15.55,
      count: 1,
    },
    { id: 2, title: 'B', description: 'some text b', amount: 13.33, count: 2 },
    { id: 3, title: 'C', description: 'some text c', amount: 11.11, count: 3 },
    { id: 4, title: 'D', description: 'some text d', amount: 8.88, count: 4 },
  ]);

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
