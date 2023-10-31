import { useEffect, useState } from "react";
import { getRequestedMovies } from "../services/search_movie";
import axios from "axios";

export const SearchPage = () => {
  const [searchBy, setSearchBy] = useState("");
  const [returnedSearchMovies, setReturnedSearchMovies] = useState([
    "notModified",
  ]);
  const defineSearchCriteria = (e) => {
    setSearchBy(e.target.value);
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdmOWY1YjRiNDc1MzJhNWQ1NzNjZmJhYTNjNTU2YyIsInN1YiI6IjYzMWY0ZGM5ZjYyMWIyMDA3YzA3OGYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sAWGFzpnkcnw912_wJD-glAjUWOTqiMNvA4zT2fFmW4",
    },
  };
  const search = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchBy}&include_adult=true&language=en-US`,
        options
      )
      .then((response) => {
        setReturnedSearchMovies(response.data.results);
      });
  };
  console.log(returnedSearchMovies);
  return (
    <div>
      Search
      <form>
        <input type="text" onChange={defineSearchCriteria}></input>
      </form>
      <button onClick={() => search()}>Search</button>
    </div>
  );
};
