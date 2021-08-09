import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;

// Selector

export const productList = (state) => state.entities.products;
