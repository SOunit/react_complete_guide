import { Component } from 'react';
import { LOGOUT } from '../store';
import { connect } from 'react-redux';
import classes from './Header.module.css';

class Header extends Component {
  logoutHandler() {
    this.props.logout();
  }

  render() {
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
              <button onClick={this.logoutHandler.bind(this)}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: LOGOUT }),
  };
};

export default connect(null, mapDispatchToProps)(Header);
