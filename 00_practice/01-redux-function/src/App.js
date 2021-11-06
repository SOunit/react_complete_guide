import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import Counter from './components/Counter';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <Fragment>
      {isLogin && <Header />}
      {isLogin && <UserProfile />}
      <Auth />
      {isLogin && <Counter />}
    </Fragment>
  );
}

export default App;
