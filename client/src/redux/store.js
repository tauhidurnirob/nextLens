import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const store = configureStore({
  reducer,
});

export default store;
