/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setFav } from "../services/set_favMovies";
import { MovieItem } from "./styleComponents/styledComponents";
import { InitializeFavorites } from "../redux/slice";

export const GeneralMovieBox = ({ title, id }) => {
  const dispatch = useDispatch();
  const refresh = () => {
    dispatch(InitializeFavorites());
  };

  return (
    <MovieItem>
      {title}
      <button
        onClick={() => {
          console.log(id);
          setFav(id, true, refresh);
        }}
      >
        Add Fav
      </button>
      <button
        onClick={() => {
          setFav(id, false, refresh);
        }}
      >
        Remove Fav
      </button>
    </MovieItem>
  );
};
