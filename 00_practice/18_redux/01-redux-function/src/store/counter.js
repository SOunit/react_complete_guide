const counterInitialState = { counter: 0, showCounter: true };

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREASE = 'INCREASE';
export const TOGGLE = 'TOGGLE';

const counterReducer = (state = counterInitialState, action) => {
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

export default counterReducer;
