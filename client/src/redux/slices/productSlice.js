import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart(state, action) {
      const { id } = action.payload;
      const inCart = state.cart.find((item) => item.id === id);
      if (!inCart)
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
    },
    removeCart(state, action) {
      state.cart.splice(
        state.cart.findIndex((item) => item.id === action.payload),
        1
      );
    },
  },
});

export const { addCart, removeCart } = productSlice.actions;

export default productSlice.reducer;

// Selector

export const cartList = (state) => state.entities.product;
