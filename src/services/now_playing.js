import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  headers: {
    accept: "aplication/json",
    Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdmOWY1YjRiNDc1MzJhNWQ1NzNjZmJhYTNjNTU2YyIsInN1YiI6IjYzMWY0ZGM5ZjYyMWIyMDA3YzA3OGYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sAWGFzpnkcnw912_wJD-glAjUWOTqiMNvA4zT2fFmW4",
  },
};

export const getNowPlay = async () => {
  const response = axios.request(options);
  return response;
};

export const getRequestedMovies = (stateSet) => {
  getNowPlay()
    .then((response) => {
      stateSet(response.data.results);
    })
    .catch((err) => {
      console.error("Error fetching data:", err); // Handle any errors
    });
};
