import { createSlice } from "@reduxjs/toolkit";
import products from "../../../fakeData/products";

const productSlice = createSlice({
  name: "product",
  initialState: {
    Product: products,
    productById: {},
  },
  reducers: {
    allProducts(state, action) {
      state.productById = action.payload;
    },
  },
});

export const { allProducts } = productSlice.actions;

export default productSlice.reducer;

// Selector

export const productList = (state) => state.entities.products;
