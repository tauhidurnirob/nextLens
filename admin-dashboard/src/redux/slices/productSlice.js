import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProduct: [],
  },
  reducers: {
    allProductAction(state, { payload }) {
      state.allProduct = payload;
    },
  },
});

export const { allProductAction } = productSlice.actions;

export default productSlice.reducer;

// Selector

export const adminProductSelector = (state) => state.entities.products;
