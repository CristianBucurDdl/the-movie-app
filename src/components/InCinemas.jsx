import { useEffect, useState } from "react";
import { MovieItem } from "./styleComponents/styledComponents";
import { getRequestedMovies } from "../services/now_playing";
import { useDispatch } from "react-redux";
import { setNowInCinema } from "../redux/slice";

export const InCinemas = () => {
  const dispatch = useDispatch();
  const [movieResponse, setMovieResponse] = useState([]);
  useEffect(() => {
    getRequestedMovies(setMovieResponse);
  }, []);
  dispatch(setNowInCinema([movieResponse]));

  return (
    <>
      {movieResponse.length > 0
        ? movieResponse.map((title) => (
            <MovieItem key={title.id}>{title.title}</MovieItem>
          ))
        : ""}
    </>
  );
};
