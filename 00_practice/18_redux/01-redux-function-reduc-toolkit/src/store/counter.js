import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    increase: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
