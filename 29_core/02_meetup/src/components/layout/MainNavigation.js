import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
import FavoriteContext from '../../store/favorite-context';

const MainNavigation = () => {
  const favoriteCtx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>All Meetups</NavLink>
          </li>
          <li>
            <NavLink to='/new-meetup'>Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to='/favorites'>
              My Favorites{' '}
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
