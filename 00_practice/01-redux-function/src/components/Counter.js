import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT, INCREASE, TOGGLE } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };
  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };
  const increaseHandler = () => {
    dispatch({ type: INCREASE, payload: 10 });
  };
  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
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
