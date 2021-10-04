import { combineReducers } from "redux";
import productsReducer from "./slices/productSlice";

export default combineReducers({
  products: productsReducer,
});
