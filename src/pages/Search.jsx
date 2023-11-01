import { useState } from "react";
import { getSearchResult } from "../services/search_movie";

import { MovieItem } from "../components/styleComponents/styledComponents";

export const SearchPage = () => {
  const [searchBy, setSearchBy] = useState("");
  const [returnedSearchMovies, setReturnedSearchMovies] = useState([
    "notModified",
  ]);
  const defineSearchCriteria = (e) => {
    setSearchBy(e.target.value);
  };

  const search = () => {
    getSearchResult(setReturnedSearchMovies, searchBy);
  };

  return (
    <div>
      Search
      <form>
        <input type="text" onChange={defineSearchCriteria}></input>
      </form>
      <button onClick={() => search()}>Search</button>
      {returnedSearchMovies.length > 0
        ? returnedSearchMovies.map((title) => (
            <MovieItem key={title.id}>{title.title}</MovieItem>
          ))
        : ""}
    </div>
  );
};
