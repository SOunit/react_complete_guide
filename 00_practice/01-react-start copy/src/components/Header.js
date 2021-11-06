import { useSelector } from 'react-redux';
import classes from './Header.module.css';

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {isLogin && <button>Logout</button>}
            {!isLogin && <button>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
