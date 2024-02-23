import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    token: null,
    error: null,
    rememberMe: false,
    user: {},
  };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.error = null;
    },
    loginError(state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.error = action.payload.error;
    },
    rememberMe(state, action) {
      state.rememberMe = action.payload.rememberMe;
    },
  },
});

export const {loginSuccess, loginError, rememberMe} = authSlice.actions
export default authSlice.reducer

