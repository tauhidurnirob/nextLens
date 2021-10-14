import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userInfoFromStorage = Cookies.get("userInfo")
  ? JSON.parse(Cookies.get("userInfo"))
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: userInfoFromStorage,
  },
  reducers: {
    loginAction(state, { payload }) {
      state.userInfo = payload;
      Cookies.set("userInfo", JSON.stringify(payload), { secure: true });
    },
    registerAction(state, { payload }) {
      state.userInfo = payload;
      Cookies.set("userInfo", JSON.stringify(payload), { secure: true });
    },
    logoutAction(state, { payload }) {
      state.userInfo = payload;
      Cookies.remove("userInfo", payload);
    },
  },
});

export const { loginAction, registerAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;

// Selector

export const authSelector = (state) => state.entities.auth;
