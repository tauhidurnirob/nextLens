import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
    productById: [],
  },
  reducers: {
    addCart(state, action) {
      const { id, quantity } = action.payload;
      const inCart = state.cart.find((item) => item.id === id);
      if (inCart) {
        const quantityIndex = state.cart.findIndex((item) => item.id === id);
        state.cart[quantityIndex].quantity = quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
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
        state.cart[quantityIndex].quantity = quantity;
        state.cart[quantityIndex].totalPrice = totalPrice;
      }
    },
    findById(state, action) {
      state.productById = action.payload;
    },
  },
});

export const { addCart, removeCart, qty, findById } = productSlice.actions;

export default productSlice.reducer;

// Selector

export const cartList = (state) => state.entities.product;
