import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdmOWY1YjRiNDc1MzJhNWQ1NzNjZmJhYTNjNTU2YyIsInN1YiI6IjYzMWY0ZGM5ZjYyMWIyMDA3YzA3OGYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sAWGFzpnkcnw912_wJD-glAjUWOTqiMNvA4zT2fFmW4",
  },
};

export const getSearchResult = (stateSet, itm) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${itm}&include_adult=true&language=en-US`,
      options
    )
    .then((response) => {
      stateSet(response.data.results);
    });
};
