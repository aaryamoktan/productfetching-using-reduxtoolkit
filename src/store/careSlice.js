import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addProduct(state,action){
            state.push(action.payload)

        },
        removeProduct(state,action)
        {
            state.pop(action.payload)
        }

    }
})
export const {addProduct,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;