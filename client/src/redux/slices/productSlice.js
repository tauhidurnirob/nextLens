import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
  },
  reducers: {
    products(state, action) {
      console.log(action.payload);
      state.allProducts = action.payload;
    },
  },
});

export const { products } = productSlice.actions;

export default productSlice.reducer;

// Selector

export const productList = (state) => state.entities.products;
