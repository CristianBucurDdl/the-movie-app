import { useState } from "react";
import { getSearchResult } from "../services/search_movie";

import { GeneralMovieBox } from "../components/GeneralMovieBox";

export const SearchPage = () => {
  const [searchBy, setSearchBy] = useState("");
  const [returnedSearchMovies, setReturnedSearchMovies] = useState([
    "notModified",
  ]);
  const defineSearchCriteria = (e) => {
    setSearchBy(e.target.value);
  };

  const handSubbmit = (event) => {
    event.preventDefault();
    getSearchResult(setReturnedSearchMovies, searchBy);
  };
  return (
    <div>
      Search
      <form onSubmit={handSubbmit}>
        <input
          type="text"
          name="searchInput"
          onChange={defineSearchCriteria}
        ></input>
        <button>Search</button>
      </form>
      {returnedSearchMovies.length > 0
        ? returnedSearchMovies.map((obj) => (
            <>
              <GeneralMovieBox obj={obj} />
            </>
          ))
        : ""}
    </div>
  );
};
