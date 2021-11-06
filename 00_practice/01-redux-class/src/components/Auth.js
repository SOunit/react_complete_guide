import { Component } from 'react';
import { connect } from 'react-redux';
import { LOGIN } from '../store';
import classes from './Auth.module.css';

class Auth extends Component {
  submitHandler(event) {
    event.preventDefault();
    console.log('submit');
    this.props.login();
  }
  render() {
    return (
      <main className={classes.auth}>
        <section>
          <form onSubmit={(event) => this.submitHandler(event)}>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button>Login</button>
          </form>
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({ type: LOGIN }),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
