import { GeneralMovieBox } from "./GeneralMovieBox";
import { useSelector } from "react-redux";

export const InCinemas = () => {
  const nowPlayingList = useSelector((state) => state.nowInCinema.nowInCinema);

  return (
    <>
      {nowPlayingList.length > 0
        ? nowPlayingList.map((title) => (
            <>
              {" "}
              <GeneralMovieBox
                key={title.id + 1}
                title={title.title}
                id={title.id}
              />
            </>
          ))
        : ""}
    </>
  );
};
