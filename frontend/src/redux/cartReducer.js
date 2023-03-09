import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item.product_id === action.payload.product_id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.product_id !== action.payload.product_id
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
