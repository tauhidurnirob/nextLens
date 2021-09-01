import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
    productById: {},
    productByCategory: [],
    topProduct: [],
    products: [],
  },
  reducers: {
    addCart(state, { payload }) {
      const { _id } = payload;
      const inCart = state.cart.find((item) => item._id === _id);
      if (!inCart) {
        state.cart.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    removeCart(state, { payload }) {
      state.cart.splice(
        state.cart.findIndex((item) => item._id === payload),
        1
      );
    },
    qty(state, { payload }) {
      const { _id, quantity, totalPrice } = payload;
      const inCart = state.cart.find((item) => item._id === _id);
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
    findByCategory(state, { payload }) {
      state.productById = {
        ...payload,
        quantity: 1,
        totalPrice: payload.price,
      };
    },
    fetchedProducts(state, { payload }) {
      state.products = payload;
    },
    topProducts(state, { payload }) {
      state.topProduct = payload;
    },
  },
});

export const {
  addCart,
  removeCart,
  qty,
  findById,
  topProducts,
  fetchedProducts,
  findByCategory,
} = productSlice.actions;

export default productSlice.reducer;

// Selector

export const cartList = (state) => state.entities.product;
