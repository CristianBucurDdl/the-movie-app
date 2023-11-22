import { GeneralMovieBox } from "./GeneralMovieBox";
import { useSelector } from "react-redux";
import { MovieContainer } from "./styleComponents/styledComponents";

export const InCinemas = () => {
  const nowPlayingList = useSelector((state) => state.nowInCinema.nowInCinema);

  return (
    <MovieContainer>
      {nowPlayingList.length > 0
        ? nowPlayingList.map((obj) => (
            <>
              {" "}
              <GeneralMovieBox key={obj.id + 1} obj={obj} />
            </>
          ))
        : ""}
    </MovieContainer>
  );
};
