import CartCountSlice from "./slices/CartCountSlice";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import SidebarDshSlice from "./slices/SidebarDshSlice";
export const Store = configureStore({
  reducer: {
    carts: CartCountSlice,
    cartitems: CartSlice,
    sidebarstate:SidebarDshSlice,
  },
});
