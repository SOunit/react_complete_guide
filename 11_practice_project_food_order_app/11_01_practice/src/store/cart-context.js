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
  ]);

  const addItemHandler = (item, count) => {
    setCart((prevState) => {
      // check item in cart
      const newCart = [...prevState];

      const itemIndex = newCart.findIndex((i) => {
        return i.id === item.id;
      });

      if (itemIndex === -1) {
        // add new item
        newCart.push(item);
      } else {
        // update count
        newCart[itemIndex].count += count;
      }

      return newCart;
    });
  };

  const removeItemHandler = (itemId) => {
    setCart((prevState) => {
      // get cart
      const newCart = [...prevState];

      // get item index
      const cartIndex = newCart.findIndex((item) => {
        return item.id === itemId;
      });

      // set count
      newCart[cartIndex].count -= 1;

      // if no item, then remove
      if (newCart[cartIndex].count < 1) {
        newCart.splice(cartIndex, 1);
      }

      return newCart;
    });
  };

  const countHandler = () => {
    let count = 0;
    cart.map((item) => {
      return (count += item.count);
    });
    return count;
  };

  const totalAmountHandler = () => {
    let totalAmount = 0;
    cart.map((item) => {
      return (totalAmount += item.amount * item.count);
    });
    return Math.floor(totalAmount * 100) / 100;
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        onAddItem: addItemHandler,
        onCount: countHandler,
        onRemoveItem: removeItemHandler,
        onTotalAmount: totalAmountHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
