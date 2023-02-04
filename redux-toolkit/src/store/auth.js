import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLoggedIn: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
const authReducer = authSlice.reducer
export const authActions = authSlice.actions;
export default authReducer;