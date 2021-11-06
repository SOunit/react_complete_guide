import { createStore } from 'redux';

const initialState = { counter: 0, show: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'increase':
      return { ...state, counter: state.counter + action.amount };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'toggle':
      return { ...state, show: !state.show };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
