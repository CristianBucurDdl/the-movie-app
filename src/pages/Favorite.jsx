import { GeneralMovieBox } from "../components/GeneralMovieBox";
import { useSelector } from "react-redux";

export const FavoritePage = () => {
  const favoriteList = useSelector((state) => state.nowInCinema.favoriteMovies);

  return (
    <div>
      Favorites
      {favoriteList
        ? favoriteList.map((title) => (
            <GeneralMovieBox
              key={title.id + 1}
              title={title.title}
              id={title.id}
            />
          ))
        : ""}
    </div>
  );
};
