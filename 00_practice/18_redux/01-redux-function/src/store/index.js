import { combineReducers, createStore } from 'redux';
import counterReducer from './counter';

const authInitialState = { isLogin: false };

export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true };
    case LOGOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

const reducer = combineReducers({ counter: counterReducer, auth: authReducer });

const store = createStore(reducer);

export default store;
