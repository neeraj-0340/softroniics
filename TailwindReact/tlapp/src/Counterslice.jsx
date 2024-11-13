import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  data:[]
};

const counterslice = createSlice({
  name: "count",
  initialState:initialState,
  reducers: {
    increment: (state,action) => {
      const item=state.data.find((item)=>item.id===action.payload)
      if(item){
        item.quantity += 1;
      }
    },
    decrement: (state,action) => {
      const item=state.data.find((item)=>item.id===action.payload)
      if(item){
        if(item.quantity > 1){
        item.quantity -= 1;
        }
      }
    },
    add: (state, action) => {
      // Here you get the product ID
      const { id } = action.payload;
      const product = state.data.find((item) => item.id === id);
      
      if (product) {
        // If product exists, update the quantity
        product.quantity += 1;
      } else {
        // Otherwise, create a new product entry
        state.data.push({ ...action.payload,id, quantity: 1 });
      }
  },
  remove: (state,action)=>{
    const index=state.data.findIndex((item)=> item.id === action.payload)
    if(index!== -1){
      state.data.splice(index,1)
    }
  },
  },
});

export const { increment, decrement ,add, remove} = counterslice.actions;
export default counterslice.reducer;