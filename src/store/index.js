import CartCountSlice from "./slices/CartCountSlice";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
export const Store = configureStore({
  reducer: {
    carts: CartCountSlice,
    cartitems: CartSlice,
  },
});
