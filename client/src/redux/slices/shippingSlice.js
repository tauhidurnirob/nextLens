import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "auth",
  initialState: {
    shippingInfo: {},
  },
  reducers: {
    shippingAction(state, { payload }) {
      state.shippingInfo = payload;
    },
  },
});

export const { shippingAction } = shippingSlice.actions;

export default shippingSlice.reducer;

// Selector

export const shippingSelector = (state) => state.entities.shipping;
