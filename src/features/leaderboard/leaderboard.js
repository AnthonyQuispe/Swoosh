// src/features/profile/profileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  avatar: "",
  rank: 0,
  city: "",
  bio: "",
  stats: {
    followers: 0,
    following: 0,
    matches: 0,
  },
};

const leaderboard = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateStat: (state, action) => {
      const { stat, value } = action.payload;
      state.stats[stat] = value;
    },
  },
});

export const { setProfileData, updateStat } = profileSlice.actions;
export default profileSlice.reducer;
