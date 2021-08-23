import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";

export default combineReducers({
  product: productReducer,
  auth: authReducer,
});
