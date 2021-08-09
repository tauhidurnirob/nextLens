import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";

export default combineReducers({
  product: productReducer,
});
