import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cart";


export const store = configureStore({

    reducer: {
        cart: cartReducer

    }
})