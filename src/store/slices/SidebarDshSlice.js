import { createSlice } from "@reduxjs/toolkit";



export const SidebarDshSlice = createSlice({
  initialState:false,
  name:"SidebarDshSlice",
  reducers: {
    sidebar_btn: (state) => {
     return state = !state ;
    },
   
    
  },
});

export const {sidebar_btn} = SidebarDshSlice.actions;
export default SidebarDshSlice.reducer; 