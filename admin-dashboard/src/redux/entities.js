import { combineReducers } from "redux";
import productsReducer from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";

export default combineReducers({
  products: productsReducer,
  order: orderReducer,
});
