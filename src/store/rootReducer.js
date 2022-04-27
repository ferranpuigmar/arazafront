import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";

const rootreducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootreducer;
