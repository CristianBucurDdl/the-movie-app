import { combineReducers } from "@reduxjs/toolkit";

import { userSlice, nowInCinemaSlice } from "./slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  nowInCinema: nowInCinemaSlice.reducer,

  // Add more slices here if needed
});

export default rootReducer;
