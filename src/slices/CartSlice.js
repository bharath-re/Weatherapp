import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      // Protect against invalid quantity
      if (!newItem.quantity || newItem.quantity < 1) return;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push({ ...newItem });
      }

      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    addQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    subtractQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        // remove if quantity hits zero
        state.items = state.items.filter((i) => i.id !== action.payload);
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, subtractQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
