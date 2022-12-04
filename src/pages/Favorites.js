import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import MeetupList from "../components/meetUps/MeetupList";

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoriteContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got now favorites yet. Start adding some ?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
