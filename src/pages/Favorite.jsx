import { useEffect, useState } from "react";
import { MovieItem } from "../components/styleComponents/styledComponents";
import axios from "axios";
export const FavoritePage = () => {
  const [favMovies, setFavMovies] = useState([{ title: "test" }]);
  // useEffect(()=>{
  //   const nowPlayingList = useSelector((state) => state.nowInCinema.nowInCinema);
  // })

  return (
    <div>
      Favorites
      {favMovies
        ? favMovies.map((title) => (
            <MovieItem key={title.id}>{title.title}</MovieItem>
          ))
        : ""}
    </div>
  );
};
