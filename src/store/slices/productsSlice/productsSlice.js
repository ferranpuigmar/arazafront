import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsCases } from "./thunks/fetchAllProducts";
import { fetchProductByIdCases } from "./thunks/fetchProductById";

const initialState = {
  productList: [],
  loading: false,
  error: undefined,
  queryExpiration: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.productList = state.productList;
      state.loading = false;
    },
    getProductById: (state, actions) => {
      state.productList = state.list.actions.payload;
      state.loading = false;
    },
  },
  extraReducers: {
    ...fetchAllProductsCases,
    ...fetchProductByIdCases,
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
