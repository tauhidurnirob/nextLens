import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    orderAction(state, { payload }) {
      state.orders = payload;
    },
  },
});

export const { orderAction } = orderSlice.actions;

export default orderSlice.reducer;

// Selector

export const adminOrderSelector = (state) => state.entities.order;
