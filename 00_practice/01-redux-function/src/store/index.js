import { combineReducers, createStore } from 'redux';
import counterReducer from './counter';

const authInitialState = { isLogin: false };

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({ counter: counterReducer, auth: authReducer });

const store = createStore(reducer);

export default store;
