import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <Fragment>
      {isLogin && <Header />}
      {!isLogin && <Auth />}
      {isLogin && <UserProfile />}
      {isLogin && <Counter />}
    </Fragment>
  );
}

export default App;
