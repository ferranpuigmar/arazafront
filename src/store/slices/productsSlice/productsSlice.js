import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsCases } from "./thunks/fetchAllProducts";
import { fetchProductByIdCases } from "./thunks/fetchProductById";

const initialState = {
  productList: [],
  loading: false,
  error: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, actions) => {
      state.list = actions.payload;
      state.loading = false;
    },
  },
  extraReducers: {
    ...fetchAllProductsCases,
    ...fetchProductByIdCases,
  },
});

export default productsSlice.reducer;
