import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage =
  typeof window !== "undefined" && localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: userInfoFromStorage,
  },
  reducers: {
    loginAction(state, { payload }) {
      state.userInfo = payload;
      localStorage.setItem("userInfo", JSON.stringify(payload));
    },
    registerAction(state, { payload }) {
      state.userInfo = payload;
      localStorage.setItem("userInfo", JSON.stringify(payload));
    },
    logoutAction(state, { payload }) {
      state.userInfo = payload;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { loginAction, registerAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;

// Selector

export const authSelector = (state) => state.entities.auth;
