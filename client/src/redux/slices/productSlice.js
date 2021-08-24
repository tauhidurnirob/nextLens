import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
    productById: [],
    topProduct: [],
  },
  reducers: {
    addCart(state, { payload }) {
      const { id } = payload;
      const inCart = state.cart.find((item) => item.id === id);
      if (!inCart) {
        state.cart.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    removeCart(state, { payload }) {
      state.cart.splice(
        state.cart.findIndex((item) => item.id === payload),
        1
      );
    },
    qty(state, { payload }) {
      const { id, quantity, totalPrice } = payload;
      const inCart = state.cart.find((item) => item.id === id);
      if (inCart) {
        inCart.quantity = quantity;
        inCart.totalPrice = totalPrice;
      }
    },
    findById(state, { payload }) {
      state.productById = {
        ...payload,
        quantity: 1,
        totalPrice: payload.price,
      };
    },
    topProducts(state, { payload }) {
      state.topProduct = payload;
    },
  },
});

export const { addCart, removeCart, qty, findById, topProducts } =
  productSlice.actions;

export default productSlice.reducer;

// Selector

export const cartList = (state) => state.entities.product;
