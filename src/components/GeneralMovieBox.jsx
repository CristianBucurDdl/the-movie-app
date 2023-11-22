/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setFav } from "../services/set_favMovies";
import { MovieItem } from "./styleComponents/styledComponents";
import { InitializeFavorites } from "../redux/slice";

export const GeneralMovieBox = ({ obj }) => {
  const dispatch = useDispatch();
  const refresh = () => {
    dispatch(InitializeFavorites());
  };

  return (
    <MovieItem>
      <div className="posterContainer">
        <img
          src={"https://image.tmdb.org/t/p/w500" + "/" + obj.poster_path}
          alt="poster"
        />
      </div>
      <div className="movieData">
        <div className="title">
          <h3>{obj.title}</h3>
        </div>
        <div className="movieDescription">
          <span>
            <h1>{obj.overview}</h1>
          </span>
        </div>
        <div className="releaseDate">
          <span>
            <p>Release Date:{obj.release_date}</p>
          </span>
        </div>
      </div>
      {/* <button
        onClick={() => {
          console.log(obj.id);
          setFav(obj.id, true, refresh);
        }}
      >
        Add Fav
      </button>
      <button
        onClick={() => {
          setFav(obj.id, false, refresh);
        }}
      >
        Remove Fav
      </button> */}
    </MovieItem>
  );
};
