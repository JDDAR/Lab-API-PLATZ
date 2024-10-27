import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.status = "loading";
    },
    fetchProductsSuccess(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;
export default productSlice.reducer;
