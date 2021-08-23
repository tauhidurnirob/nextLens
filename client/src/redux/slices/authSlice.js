import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginUser: {},
  },
  reducers: {
    login(state, { payload }) {
      state.loginUser = payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;

// Selector

export const cartList = (state) => state.entities.product;
