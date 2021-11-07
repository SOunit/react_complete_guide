const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

const counterSubscriber = () => {
  const state = store.getState();
  console.log(state);
};

const store = redux.createStore(counterReducer);
store.subscribe(counterSubscriber);

store.dispatch({ type: 'a' });
store.dispatch({ type: 'b' });
store.dispatch({ type: 'c' });
store.dispatch({ type: 'd' });
store.dispatch({ type: 'increment' });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const redux = require('redux');

// const counterReducer = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { counter: state.counter + 1 };
//     case 'decrement':
//       return { counter: state.counter - 1 };
//     default:
//       return state;
//   }
// };

// const store = redux.createStore(counterReducer);

// const counterSubscriber = () => {
//   const state = store.getState();
//   console.log(state);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });
// store.dispatch({ type: 'decrement' });
// store.dispatch({ type: 'decrement' });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const redux = require('redux');

// const greetingReducer = (state = { greeting: 'hi' }, action) => {
//   switch (action.type) {
//     case 'morning':
//       return { greeting: 'hello, morning' };
//     case 'lunch':
//       return { greeting: 'hello, lunch' };
//     default:
//       return state;
//   }
// };

// const store = redux.createStore(greetingReducer);

// const greetingSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(greetingSubscriber);

// store.dispatch({ type: 'morning' });
// store.dispatch({ type: 'lunch' });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import redux from library
// const redux = require('redux');

// // reducer
// // 1. receive state, action
// // 2. update state
// const counterReducer = (state = { counter: 0 }, action) => {
//   return { counter: state.counter + 1 };
// };

// // store
// const store = redux.createStore(counterReducer);

// // subscriber
// // 1. can access to store data
// // 2. store let subscriber to know the change
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// // subscribe
// store.subscribe(counterSubscriber);

// // dispatch action
// store.dispatch({ type: 'increment' });

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // const redux = require('redux');

// // const counterReducer = (state = { counter: 0 }, action) => {
// //   return { counter: state.counter + 1 };
// // };

// // const store = redux.createStore(counterReducer);

// // const counterSubscriber = () => {
// //   const latestState = store.getState();
// //   console.log(latestState);
// // };

// // store.subscribe(counterSubscriber);

// // store.dispatch({ type: 'increment' });
