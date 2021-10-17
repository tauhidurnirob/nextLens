import { combineReducers } from "redux";
import productsReducer from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";
import userReducer from "./slices/userSlice";

export default combineReducers({
  products: productsReducer,
  order: orderReducer,
  user: userReducer,
});
