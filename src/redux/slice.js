import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "Magnoom",
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
  name: "Now In Cinema :",
  initialState: { nowInCinema: [] },
  reducers: {
    setNowInCinema: (state, action) => {
      state.nowInCinema = action.payload;
    },
  },
});

export const exampleSlice = createSlice({
  name: "test",
  initialState: { example: null },
  reducers: {
    setExample: (state, action) => {
      state.example = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const { setExample } = exampleSlice.actions;
export const { setNowInCinema } = nowInCinemaSlice.actions;
