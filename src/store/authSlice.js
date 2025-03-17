import { createSlice } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isUserLogin: false,
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.isUserLogin = !!action.payload;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isUserLogin = false;
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const listenForAuthChanges = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    dispatch(setUser(user ? { uid: user.uid, email: user.email } : null));
  });
};
