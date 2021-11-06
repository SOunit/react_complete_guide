import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { LOGIN, LOGOUT } from '../store';

const Auth = () => {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: LOGIN });
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={(event) => submitHandler(event)}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
