import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cart: [{ title: 'test', quantity: 3, price: 6, total: 18 }],
};

const calcTotal = (item) => {
  const total = item.price * item.quantity;
  return total;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      let index = null;

      state.cart.forEach((item, i) => {
        if (item.title === action.payload.title) {
          index = i;
        }
      });

      if (index || index === 0) {
        state.cart[index].quantity++;
      } else {
        state.cart.push(action.payload);
      }

      state.cart[index].total = calcTotal(state.cart[index]);
    },
    removeItem: (state, action) => {
      state.cart.forEach((item, index) => {
        if (item.title === action.payload) {
          item.quantity--;
          item.total = calcTotal(item);

          if (item.quantity <= 0) {
            state.cart.splice(index, 1);
          }
        }
      });
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
