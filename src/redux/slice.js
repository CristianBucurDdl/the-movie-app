import { createSlice } from "@reduxjs/toolkit";
import { getNowPlay } from "../services/now_playing";
import { getFavoriteMovies } from "../services/get_favMovies";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "Magnoom",
    id: 14739939,
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdmOWY1YjRiNDc1MzJhNWQ1NzNjZmJhYTNjNTU2YyIsInN1YiI6IjYzMWY0ZGM5ZjYyMWIyMDA3YzA3OGYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sAWGFzpnkcnw912_wJD-glAjUWOTqiMNvA4zT2fFmW4",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const nowInCinemaSlice = createSlice({
  name: "Now In Cinema",
  initialState: { nowInCinema: [], favoriteMovies: [] },
  reducers: {
    setNowInCinema: (state, action) => {
      state.nowInCinema = action.payload;
    },
    setFavoriteMovies: (state, action) => {
      state.favoriteMovies = action.payload;
    },
  },
});

export const InitializeData = () => {
  return async (dispatch) => {
    const favoriteMovies = await getFavoriteMovies();
    const notes = await getNowPlay();
    dispatch(setNowInCinema(notes.data.results));
    dispatch(setFavoriteMovies(favoriteMovies.data.results));
  };
};
export const InitializeFavorites = () => {
  return async (dispatch) => {
    const favoriteMovies = await getFavoriteMovies();
    console.log(favoriteMovies.data.results);

    dispatch(setFavoriteMovies(favoriteMovies.data.results));
  };
};

export const { setUser } = userSlice.actions;
export const { setNowInCinema } = nowInCinemaSlice.actions;
export const { setFavoriteMovies } = nowInCinemaSlice.actions;
