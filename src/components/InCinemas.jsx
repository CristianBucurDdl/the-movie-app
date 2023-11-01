import { MovieItem } from "./styleComponents/styledComponents";

import { useSelector } from "react-redux";

export const InCinemas = () => {
  const nowPlayingList = useSelector((state) => state.nowInCinema.nowInCinema);
  const dataToJson = nowPlayingList[0];
  console.log(dataToJson);
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
