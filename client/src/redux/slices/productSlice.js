import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
  },
  reducers: {
    addProducts(state, action) {
      const { id } = action.payload;
      const inCart = state.cart.find((item) => item.id === id);
      if (!inCart) state.cart.push(action.payload);
    },
  },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;

// Selector

export const productList = (state) => state.entities.products;
