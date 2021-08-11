import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
    productById: [],
    totalQuantity: 1,
  },
  reducers: {
    increment(state, action) {
      const inCart = state.cart.find((item) => item.id === action.payload);
      if (inCart) {
        const quantityIndex = state.cart.findIndex(
          (item) => item.id === action.payload
        );
        state.cart[quantityIndex].quantity = state.totalQuantity += 1;
      }
    },
    decrement(state, action) {
      const inCart = state.cart.find((item) => item.id === action.payload);
      if (inCart) {
        const quantityIndex = state.cart.findIndex(
          (item) => item.id === action.payload
        );
        state.cart[quantityIndex].quantity = state.totalQuantity -= 1;
      }
    },
    addCart(state, action) {
      const { id, price } = action.payload;
      const inCart = state.cart.find((item) => item.id === id);
      if (!inCart) {
        state.cart.push({
          ...action.payload,
          quantity: state.totalQuantity,
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
      if (inCart) {
        const quantityIndex = state.cart.findIndex((item) => item.id === id);
        state.cart[quantityIndex].quantity = quantity;
        state.cart[quantityIndex].totalPrice = totalPrice * state.totalQuantity;
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
