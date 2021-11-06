import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from './counter';

const store = configureStore({ reducer: counterReducer });

export default store;
