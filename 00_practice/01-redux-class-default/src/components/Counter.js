import { Component } from 'react';
import classes from './Counter.module.css';

class Counter extends Component {
  incrementHandler() {}
  decrementHandler() {}
  increaseHandler() {}
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {<div className={classes.value}>{'counter'}</div>}
        <div>
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
          <button onClick={this.increaseHandler}>Increase</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
// const Counter = () => {
//   const toggleCounterHandler = () => {};
//   const incrementHandler = () => {};
//   const increaseHandler = () => {};
//   const decrementHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {<div className={classes.value}>{'counter'}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//         <button onClick={increaseHandler}>Increase</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

export default Counter;
