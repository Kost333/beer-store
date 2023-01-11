import { configureStore } from "@reduxjs/toolkit";
import LayoutReducer from "./layout/layoutSlice";
import CartReducer from "./cart/cartSlice";

export const store = configureStore({
	reducer: {
		layout: LayoutReducer,
		cart: CartReducer,
	},
});
