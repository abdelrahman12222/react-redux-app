import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    Add_Item: (state, action) => {
      const findproduct = state.find(
        (product) => product.id == action.payload.id
      );
      if (findproduct) {
        findproduct.quantity += 1;
      } else {
        const nwproduct = {...action.payload, quantity: 1}
        state.push(nwproduct);
      }
    },
    Remove_Item: (state, action) => {
      return (state = state.filter(
        (product) => product.id != action.payload.id
      ));
    },
    Clear: (state) => {
      return (state = []);
    },
  },
});

export const { Add_Item, Remove_Item, Clear } = CartSlice.actions;
export default CartSlice.reducer;
