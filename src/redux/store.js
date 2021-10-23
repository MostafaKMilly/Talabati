import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import foodsReducer from "./slices/foodsSlice";
import orderReducer from "./slices/orderSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    foods: foodsReducer,
    orders: orderReducer,
  },
});
