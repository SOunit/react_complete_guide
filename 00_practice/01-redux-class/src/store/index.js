import { combineReducers, createStore } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREASE = 'INCREASE';
export const TOGGLE = 'TOGGLE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isLogin: false };

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case INCREASE:
      return { ...state, counter: state.counter + action.payload };
    case TOGGLE:
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const authReducer = (state = initialAuthState, action) => {
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
