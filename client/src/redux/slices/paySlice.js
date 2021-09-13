import { createSlice } from "@reduxjs/toolkit";

const paySlice = createSlice({
  name: "auth",
  initialState: {
    payInfo: {},
  },
  reducers: {
    payOrderAction(state, { payload }) {
      state.payInfo = payload;
    },
  },
});

export const { payOrderAction } = paySlice.actions;

export default paySlice.reducer;

// Selector

export const paySelector = (state) => state.entities.payment;
