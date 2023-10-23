import { combineReducers } from "@reduxjs/toolkit";

import { userSlice, exampleSlice, nowInCinemaSlice } from "./slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  example: exampleSlice.reducer,
  nowInCinema: nowInCinemaSlice.reducer,

  // Add more slices here if needed
});

export default rootReducer;
