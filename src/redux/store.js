import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import foodsReducer from "./slices/foodsSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    foods: foodsReducer,
  },
});
