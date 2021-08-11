import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
    productById: [],
    number: 1,
  },
  reducers: {
    increment(state) {
      state.number += 1;
    },
    decrement(state) {
      state.number -= 1;
    },
    addCart(state, action) {
      const { id, price } = action.payload;
      const inCart = state.cart.find((item) => item.id === id);
      if (!inCart) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: price,
        });
      }
    },
    removeCart(state, action) {
      state.cart.splice(
        state.cart.findIndex((item) => item.id === action.payload),
        1
      );
    },
    qty(state, action) {
      const { id, quantity, totalPrice } = action.payload;
      const inCart = state.cart.find((item) => item.id === id);
      const quantityIndex = state.cart.findIndex((item) => item.id === id);
      if (inCart) {
        state.cart[quantityIndex].quantity = quantity * state.number;
        state.cart[quantityIndex].totalPrice = totalPrice * state.number;
      }
    },
    findById(state, action) {
      state.productById = action.payload;
    },
  },
});

export const { addCart, removeCart, qty, findById, increment, decrement } =
  productSlice.actions;

export default productSlice.reducer;

// Selector

export const cartList = (state) => state.entities.product;
