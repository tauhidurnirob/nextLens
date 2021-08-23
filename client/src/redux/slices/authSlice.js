import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginUser: {},
    registerUser: {},
  },
  reducers: {
    login(state, { payload }) {
      state.loginUser = payload;
    },
    register(state, { payload }) {
      state.registerUser = payload;
    },
  },
});

export const { login, register } = authSlice.actions;

export default authSlice.reducer;

// Selector

export const cartList = (state) => state.entities.product;
