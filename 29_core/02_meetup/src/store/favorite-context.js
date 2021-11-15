import { createContext, useState } from 'react';

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevState) => prevState.concat(favoriteMeetup));
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevState) =>
      prevState.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((item) => item.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
