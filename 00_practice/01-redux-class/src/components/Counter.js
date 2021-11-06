import { Component } from 'react';
import { connect } from 'react-redux';
import { DECREMENT, INCREASE, INCREMENT, TOGGLE } from '../store/counter';
import classes from './Counter.module.css';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  increaseHandler() {
    this.props.increase();
  }
  toggleCounterHandler() {
    this.props.toggle();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.showCounter && (
          <div className={classes.value}>{this.props.counter}</div>
        )}
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
          <button onClick={this.increaseHandler.bind(this)}>Increase</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    increase: () => dispatch({ type: INCREASE, payload: 10 }),
    toggle: () => dispatch({ type: TOGGLE }),
  };
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    showCounter: state.counter.showCounter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
