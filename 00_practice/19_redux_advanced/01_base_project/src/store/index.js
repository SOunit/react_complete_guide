import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cart: [{ title: 'test', quantity: 3, price: 6, total: 18 }],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem: () => {},
    removeItem: (state, action) => {
      state.cart.map((item, index) => {
        if (item.title === action.payload) {
          item.quantity--;
          if (item.quantity <= 0) {
            state.cart.splice(index, 1);
          }
        }
      });
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;

export default store;
