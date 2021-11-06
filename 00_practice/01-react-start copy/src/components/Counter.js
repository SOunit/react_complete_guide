import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const incrementHandler = () => {};
  const increaseHandler = () => {};
  const decrementHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
