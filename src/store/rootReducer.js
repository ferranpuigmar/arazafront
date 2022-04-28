import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice/productsSlice";
import cartReducer from "./slices/cartSlice/cartSlice";

const rootreducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootreducer;
