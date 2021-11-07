import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import Counter from './components/Counter';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Fragment>
        {this.props.isLogin && <Header />}
        {!this.props.isLogin && <Auth />}
        {this.props.isLogin && <UserProfile />}
        {this.props.isLogin && <Counter />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

export default connect(mapStateToProps)(App);
