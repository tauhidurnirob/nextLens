import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import shippingReducer from "./slices/shippingSlice";

export default combineReducers({
  product: productReducer,
  auth: authReducer,
  shipping: shippingReducer,
});
