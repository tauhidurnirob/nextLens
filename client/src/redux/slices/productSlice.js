import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
    productById: {},
    topProduct: [],
    products: [],
    allProducts: [],
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
    fetchedProducts(state, { payload }) {
      state.products = payload;
    },
    allProductsAction(state, { payload }) {
      state.allProducts = payload;
    },
    setProducts(state, { payload }) {
      state.products.push(...payload);
    },
    topProducts(state, { payload }) {
      state.topProduct = payload;
    },
    resetCartAction(state) {
      state.cart = [];
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
  resetCartAction,
  setProducts,
  allProductsAction,
} = productSlice.actions;

export default productSlice.reducer;

// Selector

export const productSelector = (state) => state.entities.product;
