import { configureStore } from "@reduxjs/toolkit";
import careSlice from "./careSlice";
const store = configureStore({
    reducer:{
        cart:careSlice
    }
}
)
export default store;
