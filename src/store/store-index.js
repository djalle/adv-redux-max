import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slicer";

const theStore = configureStore({
    reducer: {
        shoppingCart: cartSlice.reducer,
        ui: uiSlice.reducer 
    }
});

export default theStore;

