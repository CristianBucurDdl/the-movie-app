import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/account/14739939/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
  headers: {
    accept: "aplication/json",
    Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdmOWY1YjRiNDc1MzJhNWQ1NzNjZmJhYTNjNTU2YyIsInN1YiI6IjYzMWY0ZGM5ZjYyMWIyMDA3YzA3OGYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sAWGFzpnkcnw912_wJD-glAjUWOTqiMNvA4zT2fFmW4",
  },
};

export const getFavoriteMovies = async () => {
  const response = axios.request(options);

  return response;
};

export const getRequestedMovies = (stateSet) => {
  getFavoriteMovies()
    .then((response) => {
      stateSet(response.data.results);
    })
    .catch((err) => {
      console.error("Error fetching data:", err); // Handle any errors
    });
};
