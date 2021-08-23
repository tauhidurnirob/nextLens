import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginUser: {},
    registerUser: {},
  },
  reducers: {
    loginAction(state, { payload }) {
      state.loginUser = payload;
    },
    registerAction(state, { payload }) {
      state.registerUser = payload;
    },
  },
});

export const { loginAction, registerAction } = authSlice.actions;

export default authSlice.reducer;

// Selector

export const cartList = (state) => state.entities.product;
