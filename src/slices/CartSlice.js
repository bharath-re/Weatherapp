// slices/CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart", // ✅ name must be a string
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    // Add more reducers as needed
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
