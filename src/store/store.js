import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import profileReducer from "../features/profile/profileSlice";
// import leaderboardReducer from "../features/leaderboard/leaderboard"; // you’ll create this later

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    // leaderboard: leaderboardReducer,
    // // add more as you grow
  },
});

export default store;
