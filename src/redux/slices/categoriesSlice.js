import { createSlice } from "@reduxjs/toolkit";
import CATEGORIES from "../../shared/categories.js";

const initialState = {
  items: [],
  isLoading: true,
  errMess: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    getCategoriesFailed: (state, action) => {
      state.isLoading = false;
      state.errMess = action.payload;
    },
    addCategory: (state, action) => {
      const id = state.items[state.items.length - 1].id + 1;
      state.items.push({ name: action.payload.name, id });
    },
  },
});

export const { getCategories, getCategoriesFailed, addCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;

export const selectAllCategories = (state) => state.categories.items;

export const fetchCategories = () => (dispatch) => {
  setTimeout(() => {
    dispatch(getCategories(CATEGORIES));
  }, 1000);
};
