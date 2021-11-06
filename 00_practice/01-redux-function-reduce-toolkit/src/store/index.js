import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from './counter';

const authInitialState = { isLogin: false };
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;

const store = configureStore({
  reducer: { counter: counterReducer, auth: authSlice.reducer },
});

export default store;
