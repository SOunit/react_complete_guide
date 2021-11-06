import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store';

const Auth = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (isLogin) {
      dispatch(authActions.logout());
    } else {
      dispatch(authActions.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>

          {!isLogin && <button>Login</button>}
          {isLogin && <button>Logout</button>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
