import { useEffect, useState } from "react";
import { MovieItem } from "./styleComponents/styledComponents";
import { getRequestedMovies } from "../services/now_playing";
import { useSelector } from "react-redux";

export const InCinemas = () => {
  const nowPlayingList = useSelector((state) => state.nowInCinema.nowInCinema);
  return (
    <>
      {nowPlayingList.length > 0
        ? nowPlayingList.map((title) => (
            <MovieItem key={title.id}>{title.title}</MovieItem>
          ))
        : ""}
    </>
  );
};
