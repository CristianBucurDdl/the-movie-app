import axios from "axios";
export const setFav = (id, status, refresh) => {
  const apiUrl = "https://api.themoviedb.org/3/account/14739939/favorite";
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdmOWY1YjRiNDc1MzJhNWQ1NzNjZmJhYTNjNTU2YyIsInN1YiI6IjYzMWY0ZGM5ZjYyMWIyMDA3YzA3OGYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sAWGFzpnkcnw912_wJD-glAjUWOTqiMNvA4zT2fFmW4";

  const requestData = {
    media_type: "movie",
    media_id: id,
    favorite: status,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  axios
    .post(apiUrl, requestData, config)
    .then((response) => {
      console.log(response.data);
      // You can perform additional actions here after a successful request
      refresh();
    })
    .catch((error) => {
      console.error(error);
    });
};
