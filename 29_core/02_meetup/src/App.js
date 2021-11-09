import { Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';

import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup' exact>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites' exact>
        <FavoritesPage />
      </Route>
    </div>
  );
}

export default App;
