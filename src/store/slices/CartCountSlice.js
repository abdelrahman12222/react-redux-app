import { createSlice } from "@reduxjs/toolkit";



export const CartCountSlice = createSlice({
  initialState:0,
  name:"CartCountSlice",
  reducers: {
    Add_Cart: (state, action) => {
     return state = state + action.payload;
    },
    Remove_Cart: (state, action) => {
     return state = state - action.payload;
    },
    
  },
});

export const {Add_Cart,Remove_Cart} = CartCountSlice.actions;
export default CartCountSlice.reducer; 