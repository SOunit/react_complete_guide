import { useContext } from 'react';
import FavoriteContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoriteContext);

  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoriteCtx.favorites} />
    </section>
  );
};

export default FavoritesPage;
