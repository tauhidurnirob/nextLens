import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    addedProduct: [],
  },
  reducers: {
    addProducts(state, action) {
      state.addedProduct.push(action.payload);
    },
  },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;

// Selector

export const productList = (state) => state.entities.products;
