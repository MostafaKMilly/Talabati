import { createSlice } from "@reduxjs/toolkit";
import FOODS from "../../shared/foods";

const initialState = {
  items: [],
  isLoading: true,
  errMess: null,
};

export const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    getFoods: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.errMess = null;
    },
    loadingFoods: (state) => {
      state.isLoading = true;
    },
    getFoodsFailed: (state, action) => {
      state.items = [];
      state.isLoading = false;
      state.errMess = action.payload;
    },
    addFoods: (state, action) => {
      const id = state.items[state.items.length - 1].id + 1;
      state.items.push({ name: action.payload, id });
    },
  },
});

export const { getFoods, getFoodsFailed, addFoods, loadingFoods } =
  foodSlice.actions;
export default foodSlice.reducer;

export const selectFoodsByCategory = (state) => state.foods.items;

export const fetchFoods = (categoryId) => (dispatch) => {
  dispatch(loadingFoods());
  setTimeout(() => {
    const foods = FOODS.filter((food) => food.categoryId === categoryId);
    if (!foods.length) {
      dispatch(getFoodsFailed("There are no foods for this category"));
    } else {
      dispatch(getFoods(foods));
    }
  }, 1000);
};
